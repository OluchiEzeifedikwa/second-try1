# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY prisma ./prisma
COPY *.js ./
RUN npx prisma generate
CMD ["node", "app.js"]