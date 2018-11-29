# docker-practice
This repo contains app for Docker practice

This app consist of:
 - Cassandra database
 - Migrator, which populate the database with data
 - Server, which reads data from Cassandra database
 - Web site that reads data from Server and displays it as list

The site represents a simple list of products

## Preparation 
To prepare the app, update http://proxy.corp.com:port to your correct proxy server address in next files:

 - Migrator/Migrator/Docker/Release/Dockerfile
 - Server/docker-practice-server/Docker/Release/Dockerfile
 - UI/docker-practice-ui/Docker/Release/Dockerfile

## Build and running
To build and run the app go to  Docker\Release and run next command
```
docker-compose up --build
```