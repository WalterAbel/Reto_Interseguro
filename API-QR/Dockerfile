# Dockerfile - API QR
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE 3000
CMD ["node", "dist/server.js"]
