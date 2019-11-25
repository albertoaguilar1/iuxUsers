FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm i -s nodemon
COPY . /usr/src/app
EXPOSE 8080
ENV PORT=8080
ENV MONGO_SERVICE_HOST=museum_db
ENV MONGO_SERVICE_PORT=27017
CMD [ "npm", "start" ]