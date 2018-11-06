FROM microsoft/dotnet:2.0-sdk AS build-env
WORKDIR /Migrator

# Copy csproj and restore as distinct layers
COPY *.csproj ./
COPY . ./

ENV http_proxy 'http://proxy.corp.isddesign.com:8080'
ENV https_proxy 'http://proxy.corp.isddesign.com:8080' 

RUN dotnet restore

RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /Migrator/out
COPY --from=build-env /Migrator/out .
ENTRYPOINT ["dotnet", "Migrator.dll"]