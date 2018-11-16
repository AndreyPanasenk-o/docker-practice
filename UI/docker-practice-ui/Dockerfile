FROM node:8.12

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . ./

RUN npm config set proxy="http://proxy.corp.com:port"
RUN npm config set https-proxy="http://proxy.corp.com:port"
RUN npm install
RUN npm install -g gulp
RUN gulp build --gulpfile /usr/src/app/semantic/gulpfile.js

CMD ["npm", "start"]