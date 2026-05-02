FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["LeaveAPI.csproj", "./"]
RUN dotnet restore "LeaveAPI.csproj"

COPY . .
RUN dotnet publish "LeaveAPI.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_ENVIRONMENT=Development
ENV ASPNETCORE_URLS=http://+:88

EXPOSE 88

ENTRYPOINT ["dotnet", "LeaveAPI.dll"]