FROM node:8

WORKDIR /usr/app

COPY . /usr/app
RUN npm install --production --no-cache

CMD npm run start