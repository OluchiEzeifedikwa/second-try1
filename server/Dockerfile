# Use Node 18 Debian-based image
FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy Prisma and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Copy all other files
COPY . .

EXPOSE 5000
CMD ["node", "app.js"]