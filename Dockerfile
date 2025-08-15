# Build Stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy rest of the code
COPY . .

# Build Vite project
RUN npm run build

# Production Stage
FROM node:20-alpine AS production
WORKDIR /app

# Install a lightweight static file server
RUN npm install -g serve

# Copy only built files from build stage
COPY --from=build /app/dist ./dist

# Expose port 80 for production
EXPOSE 80

# Start server on port 80
CMD ["serve", "-s", "dist", "-l", "80"]
