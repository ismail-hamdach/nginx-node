FROM node:18

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./package.json ./

RUN npm install 

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start" ]