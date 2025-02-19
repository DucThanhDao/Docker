### Build Stage: Build the React app with Vite
FROM node:18 AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

### Production Stage: Serve the app using Node.js
FROM node:18 AS production

WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist

# Install a lightweight HTTP server
RUN npm install -g serve

# Expose port
EXPOSE ${VITE_APP_PORT}

CMD ["sh", "-c", "serve -s dist -l ${VITE_APP_PORT:-3000}"]