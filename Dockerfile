FROM node:20-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password 

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app

RUN npm install 

CMD ["node", "server.js"]


