FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["EMSMVC/EMSMVC.csproj", "EMSMVC/"]
RUN dotnet restore "EMSMVC/EMSMVC.csproj"

COPY . .
WORKDIR "/src/EMSMVC"
RUN dotnet publish "EMSMVC.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
EXPOSE 8080

ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Docker

COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "EMSMVC.dll"]
