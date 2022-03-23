FROM node:17-alpine3.14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN chown -R node:node /home/node/app/

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install nodemon -g

RUN npm install

COPY . .

COPY --chown=node:node . .

EXPOSE 3000

CMD ["nodemon","-L","./src/server.ts"]
