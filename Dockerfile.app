FROM node:latest

WORKDIR /app

COPY . .

RUN rm -rf tests

EXPOSE 8080 

RUN npm install

CMD ["npm", "run", "start"]

