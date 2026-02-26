# -----------------------
# Stage 1: Build
# -----------------------
    FROM node:18-alpine AS build
    WORKDIR /app
    
    # Copy package files and install all dependencies (including dev)
    COPY package*.json ./
    RUN npm ci
    
    # Copy the rest of the source code
    COPY . .
    
    # Generate Prisma client (requires dev dependencies)
    RUN npx prisma generate
    
    # -----------------------
    # Stage 2: Production
    # -----------------------
    FROM node:18-alpine
    WORKDIR /app
    
    # Copy package files and install only production dependencies
    COPY package*.json ./
    RUN npm ci --omit=dev
    
    # Copy everything from the build stage, including Prisma client
    COPY --from=build /app .
    
    # Expose the port your app runs on
    EXPOSE 5000
    
    # Start the app
    CMD ["node", "app.js"]