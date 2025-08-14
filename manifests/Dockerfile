FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
# install dependencies

RUN npm install
COPY . .
RUN npm build
# Stage 2: Serve with NGINX ----
FROM nginx:alpine AS build
# Remove default nginx default file
RUN rm -rf /usr/share/nginx/html/*
# copy form built frontend files to nginx folder

COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port = 80
EXPOSE 80

#start nginx

CMD ["nginx". "-g", "deamon off;"]
