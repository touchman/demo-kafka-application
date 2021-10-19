FROM openjdk:11
COPY target/producer-*.jar /app.jar
CMD ["java", "-jar", "-Dspring.profiles.active=docker", "/app.jar"]