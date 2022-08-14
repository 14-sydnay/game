FROM node:16 as build

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:all:prod

EXPOSE 3000

WORKDIR /app/dist
#VOLUME [ "/app/dist" ]

CMD [ "node", "server.js" ]