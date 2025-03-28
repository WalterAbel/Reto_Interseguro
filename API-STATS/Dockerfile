# Usa una imagen base de Node.js
FROM node:18

# Crea y usa el directorio de la aplicación
WORKDIR /app

# Copia los archivos de configuración
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Expone el puerto 3001
EXPOSE 3001

# Comando para correr la API
CMD ["npm", "run", "start"]
