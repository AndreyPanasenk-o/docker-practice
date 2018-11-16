FROM node:8.12-slim

EXPOSE 3000

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . ./

RUN npm config set proxy="http://proxy.corp.com:port"
RUN npm config set https-proxy="http://proxy.corp.com:port"
RUN npm install --production

CMD ["npm", "start"]