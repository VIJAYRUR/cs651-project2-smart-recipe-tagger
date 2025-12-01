# Multi-stage build for Smart Recipe Tagger
# Stage 1: Build React frontend
FROM node:18-alpine AS client-build

WORKDIR /app/client

# Copy client package files
COPY client/package*.json ./

# Install client dependencies
RUN npm ci --only=production

# Copy client source
COPY client/ ./

# Build React app
RUN npm run build

# Stage 2: Setup Node.js server
FROM node:18-alpine AS server-build

WORKDIR /app/server

# Copy server package files
COPY server/package*.json ./

# Install server dependencies
RUN npm ci --only=production

# Stage 3: Production image
FROM node:18-alpine

WORKDIR /app

# Copy server code and dependencies
COPY --from=server-build /app/server/node_modules ./server/node_modules
COPY server/package*.json ./server/
COPY server/index.js ./server/

# Copy built React app from client-build stage
COPY --from=client-build /app/client/dist ./client/dist

# Set working directory to server
WORKDIR /app/server

# Expose port (Cloud Run will set PORT env var)
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production

# Start the server
CMD ["node", "index.js"]

