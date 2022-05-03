FROM node:17-alpine3.14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN chown -R node:node /home/node/app/

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY ./build .

EXPOSE 3000

CMD ["node","server.js"]
