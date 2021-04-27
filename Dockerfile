FROM node:latest

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/

RUN npm install
RUN npm install -g nodemon

COPY . /app

EXPOSE 2525

CMD [ "npm", "run", "dev" ]