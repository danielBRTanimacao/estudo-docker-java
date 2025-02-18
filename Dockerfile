FROM maven:3.9.6-eclipse-temurin AS build

COPY src /app/src
COPY pom.xml /app

WORKDIR /app

RUN mvn clean package

FROM openjdk:21-jdk-slim

COPY --from=build /app/target/JavaProject-0.0.1-SNAPSHOT.jar /app/app.jar

WORKDIR /app

EXPOSE 8000

CMD ["java", "-jar", "app.jar"]
