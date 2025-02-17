FROM maven:3.8.4-jdk-8 AS build

COPY src /app/src

COPY pom.xml /app

WORKDIR /app

RUN