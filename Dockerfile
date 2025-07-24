# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.16.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src

# Production dependencies only
FROM base AS deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Build stage with ALL dependencies (including dev)
FROM base AS build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .
RUN npm run build

# Final production stage
FROM base AS final
ENV NODE_ENV=production
USER node

COPY package.json .
COPY server.js .

# Copy production dependencies only
COPY --from=deps /usr/src/node_modules ./node_modules

# Copy built frontend assets
COPY --from=build /usr/src/dist ./dist

# Remove unnecessary files for production
# COPY --from=build /usr/src/public ./public  # Only if needed
# COPY --from=build /usr/src/src ./src        # NOT needed in production
# COPY --from=build /usr/src/vite.config.ts ./vite.config.ts  # NOT needed
# COPY --from=build /usr/src/tsconfig.json ./tsconfig.json    # NOT needed
# COPY --from=build /usr/src/tsconfig.node.json ./tsconfig.node.json  # NOT needed
# COPY --from=build /usr/src/tsconfig.app.json ./tsconfig.app.json    # NOT needed

EXPOSE 8080
CMD ["node", "server.js"]