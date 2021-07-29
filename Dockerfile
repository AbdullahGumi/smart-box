FROM node:14

WORKDIR /usr/src/app

COPY package.json ./

COPY package-lock.json ./

RUN node -v && npm -v

RUN npm install 

RUN npm install -g serve 

COPY . .

RUN npm run build 
