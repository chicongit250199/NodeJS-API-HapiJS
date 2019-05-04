FROM node:8

WORKDIR /usr/app

COPY package.json .
RUN npm install --production --no-cache

COPY . .
EXPOSE 8080

CMD ["npm", "start"]