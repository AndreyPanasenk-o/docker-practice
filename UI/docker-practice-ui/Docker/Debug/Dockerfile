FROM node:8.12-slim

WORKDIR /usr/src/app

ENV http_proxy 'http://proxy.corp.com:port'
ENV https_proxy 'http://proxy.corp.com:port' 

RUN apt-get update && apt-get install -y --no-install-recommends netcat