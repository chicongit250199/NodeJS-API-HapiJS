FROM node:8

WORKDIR /usr/app

COPY . /usr/app
RUN npm install --production --no-cache
RUN npm install pm2 -g

CMD ["pm2", "start", "--no-daemon", "processes.json"]