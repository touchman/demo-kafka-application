FROM openjdk:11
COPY target/consumer-*.jar /app.jar
CMD ["java", "-jar", "-Dspring.profiles.active=docker", "/app.jar"]