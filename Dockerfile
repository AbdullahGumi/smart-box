FROM node:14

EXPOSE 3000

WORKDIR /usr/src/app

COPY . .

RUN node -v && npm -v

RUN npm install 

CMD ["npm", "start"]
