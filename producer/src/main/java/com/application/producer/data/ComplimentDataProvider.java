package com.application.producer.data;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
@Slf4j
public class ComplimentDataProvider {

    private static final String FILE_PATH = "/data/compliments.txt";

    @Getter
    private final List<String> compliments = new ArrayList<>();

    @PostConstruct
    public void init() {
        Stream<String> stream = null;
        FileSystem fs = null;
        try {
            final URI uri = getClass().getResource(FILE_PATH).toURI();
            if (uri.toString().contains("!")) {
                stream = getStreamForDockerRun(uri).stream();
            } else {
                stream = getStreamForLocalRun(uri);
            }
            stream.forEach(compliments::add);
        } catch (IOException | URISyntaxException e) {
            log.error("Can't load compliments file", e);
        } finally {
            if (stream != null) {
                stream.close();
            }
        }
    }

    private List<String> getStreamForDockerRun(final URI uri) throws IOException {
        final Map<String, String> env = new HashMap<>();
        final String[] array = uri.toString().split("!");

        try (FileSystem fs = FileSystems.newFileSystem(URI.create(array[0]), env)) {
            final Path path = fs.getPath(array[1] + array[2]);
            return Files.lines(path).collect(Collectors.toList());
        } catch (IOException e) {
            log.error("Filesystem is not closed", e);
            throw e;
        }
    }

    private Stream<String> getStreamForLocalRun(final URI uri) throws IOException {
        final Path path = Paths.get(uri);
        return Files.lines(path);
    }

}
