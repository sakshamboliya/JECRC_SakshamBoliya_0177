FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["EMSAPI/EMSAPI.csproj", "EMSAPI/"]
RUN dotnet restore "EMSAPI/EMSAPI.csproj"

COPY . .
WORKDIR "/src/EMSAPI"
RUN dotnet publish "EMSAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
EXPOSE 8080

ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Docker

COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "EMSAPI.dll"]
