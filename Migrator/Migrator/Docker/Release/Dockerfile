FROM microsoft/dotnet:2.0-sdk AS build-env
WORKDIR /Migrator

COPY . ./

ENV http_proxy 'http://proxy.corp.com:port'
ENV https_proxy 'http://proxy.corp.com:port' 

RUN dotnet restore

RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /Migrator/out
COPY --from=build-env /Migrator/out .

ENV http_proxy 'http://proxy.corp.com:port'
ENV https_proxy 'http://proxy.corp.com:port' 

RUN apt-get update && apt-get install -y --no-install-recommends netcat
