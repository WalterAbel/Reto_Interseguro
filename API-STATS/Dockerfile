# Dockerfile - API Stats
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE 3001
CMD ["node", "dist/server.js"]
