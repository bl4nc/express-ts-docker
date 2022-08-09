FROM node:17-alpine3.14

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

COPY ./src ./src

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node","./build/server.js"]
