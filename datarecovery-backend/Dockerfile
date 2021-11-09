FROM gradle:6.8.3-jdk15 AS build
WORKDIR /datarecovery-backend
COPY build.gradle.kts build.gradle.kts
COPY settings.gradle.kts settings.gradle.kts

RUN gradle clean build -x test --no-daemon > /dev/null 2>&1 || true
COPY src src
RUN gradle build --stacktrace -x test
RUN java -Djarmode=layertools -jar build/libs/datarecovery-*.jar extract

FROM adoptopenjdk/openjdk15:jre-15.0.2_7-alpine AS prod
EXPOSE 8088
WORKDIR /datarecovery-backend
COPY --from=build datarecovery-backend/dependencies/ ./
RUN true
COPY --from=build datarecovery-backend/snapshot-dependencies/ ./
RUN true
COPY --from=build datarecovery-backend/spring-boot-loader/ ./
RUN true
COPY --from=build datarecovery-backend/application/ ./
RUN true
ENTRYPOINT ["java","-Dspring.profiles.active=production", "org.springframework.boot.loader.JarLauncher"]
