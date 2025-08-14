# Build Stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install all dependencies (production + dev)
RUN npm ci

# Copy rest of the app code
COPY . .

# If build script exists (e.g. for React/TypeScript)
# RUN npm run build

# Production Stage
FROM node:20-alpine AS production
WORKDIR /app


# Copy only necessary artifacts and dependencies
COPY --from=build /app ./

# Run production install (excluding dev dependencies)
RUN npm ci --only=production

# Expose port (adjust as per your app, e.g. 3000)
EXPOSE 3000

# Set default process start command (adjust based on your package.json)
CMD ["npm", "start"]
