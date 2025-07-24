# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.16.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src

FROM base AS deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

FROM deps AS build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .

FROM base AS final
ENV NODE_ENV=production
USER node
COPY package.json .
COPY server.js .
COPY --from=build /usr/src/node_modules ./node_modules
COPY --from=build /usr/src/ ./pages
COPY --from=build /usr/src/public ./public
COPY --from=build /usr/src/src ./src
COPY --from=build /usr/src/vite.config.ts ./vite.config.ts
COPY --from=build /usr/src/tsconfig.json ./tsconfig.json
COPY --from=build /usr/src/tsconfig.node.json ./tsconfig.node.json
COPY --from=build /usr/src/tsconfig.app.json ./tsconfig.app.json
EXPOSE 8080
CMD ["node", "server.js"]
