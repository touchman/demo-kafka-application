package com.application.producer.data;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Component
@Slf4j
public class ComplimentDataProvider {

    private static final String FILE_PATH = "data/compliments.txt";

    @Getter
    private final List<String> compliments = new ArrayList<>();

    @PostConstruct
    public void init() {
        try (Stream<String> stream = Files.lines(Paths.get(ClassLoader.getSystemResource(FILE_PATH).toURI()))) {
            stream.forEach(compliments::add);
        } catch (IOException | URISyntaxException e) {
            log.error("Can't load compliments file", e);
        }
    }

}
