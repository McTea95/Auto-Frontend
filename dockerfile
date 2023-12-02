# Verwenden Sie ein offizielles Node.js-Image als Basis
FROM node:14

# Setzen Sie das Arbeitsverzeichnis innerhalb des Containers
WORKDIR /usr/src/app

# Kopieren Sie die package.json- und package-lock.json-Dateien, um die Abhängigkeiten zu installieren
COPY package*.json ./

# Installieren Sie die Abhängigkeiten
RUN npm install

# Kopieren Sie den restlichen Code ins Arbeitsverzeichnis
COPY . .

# Bauen Sie die Anwendung
RUN npm run build

# Port, auf dem die Anwendung lauschen soll
EXPOSE 80

# Starten Sie die Anwendung
CMD ["npm", "start"]
