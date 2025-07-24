# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.16.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src

FROM base AS deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM base AS build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

# Debug: Check if vite is available
RUN echo "=== Checking for Vite ==="
RUN which vite || echo "Vite not found in PATH"
RUN ls -la node_modules/.bin/ | grep vite || echo "Vite not in node_modules/.bin"
RUN cat package.json | grep -A5 -B5 vite || echo "Vite not found in package.json"

# Debug: Try to run build
RUN echo "=== Attempting build ==="
RUN npm run build

FROM base AS final
ENV NODE_ENV=production
USER node
COPY package.json .
COPY server.js .
COPY --from=deps /usr/src/node_modules ./node_modules
COPY --from=build /usr/src/ ./pages
EXPOSE 8080
CMD ["node", "server.js"]