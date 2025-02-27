# ---- Build Stage ----
FROM node:18 AS builder
WORKDIR /app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package.json package-lock.json ./

# Install all dependencies (both dev & prod)
RUN npm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# ---- Production Stage ----
FROM node:18 AS production
WORKDIR /app

# Copy only necessary files from the build stage
COPY package.json package-lock.json ./
COPY --from=builder /app/dist ./dist

# Install only production dependencies
RUN npm install --only=production

# Set production environment
ENV NODE_ENV=production

# Use a non-root user for security
USER node

# Expose the application port
EXPOSE ${APP_PORT}

# Start the server
CMD ["node", "dist/server.js"]
