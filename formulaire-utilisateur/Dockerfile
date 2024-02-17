FROM node:18.16 AS build-stage

RUN npm install -g @angular/cli@17.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Port par défaut du serveur de développement Angluar
EXPOSE 4200

CMD ["ng", "serve"]
