FROM maven:3.8.4-jdk-8 AS build

COPY src /app/src

COPY pom.xml /app

WORKDIR /app

RUN mvn clean install

FROM openjdk:8-jre-alpine

COPY --from=build /app/target/JavaProject-0.0.1-SNAPSHOT.jar /app/app.jar

WORKDIR /app

EXPOSE 8000

CMD [ "java", "-jar", "app.jar" ]