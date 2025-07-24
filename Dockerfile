# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.16.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Clean up dev dependencies after build (optional - saves space)
RUN npm prune --production

# Set production environment
ENV NODE_ENV=production

EXPOSE 8080

# Use non-root user
USER node

CMD ["node", "server.js"]