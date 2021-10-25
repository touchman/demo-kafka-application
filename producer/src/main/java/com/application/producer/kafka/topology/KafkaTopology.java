package com.application.producer.kafka.topology;

import com.application.common.kafka.config.KafkaConfiguration;
import com.application.common.kafka.model.JsonMessage;
import com.application.common.kafka.serde.JsonPOJODeserializer;
import com.application.common.kafka.serde.JsonPOJOSerializer;
import com.application.producer.kafka.config.ProducerCustomConfig;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.common.serialization.Deserializer;
import org.apache.kafka.common.serialization.Serde;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.common.serialization.Serializer;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.KeyValue;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.kstream.Consumed;
import org.apache.kafka.streams.kstream.Grouped;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Materialized;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import static org.apache.kafka.streams.StreamsConfig.APPLICATION_ID_CONFIG;
import static org.apache.kafka.streams.StreamsConfig.BOOTSTRAP_SERVERS_CONFIG;
import static org.apache.kafka.streams.StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG;
import static org.apache.kafka.streams.StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaTopology {

    public static final String COUNTS_KEY_VALUE_STORE = "CountsKeyValueStore";
    public static final String COUNTS_KEY = "count";
    private final ProducerCustomConfig producerCustomConfig;

    @Getter
    private KafkaStreams streams;

    @PostConstruct
    public void builder() {
        final StreamsBuilder builder = new StreamsBuilder();

        final KStream<String, JsonMessage> textLines = builder
            .stream(KafkaConfiguration.WORDS_COUNT_TOPIC, Consumed.with(Serdes.String(), serDes()));

        textLines
            .peek((key, value) -> log.debug("input key {} value {}", key, value))
            .map((key, value) -> new KeyValue<>("count", 1))
            .groupByKey(Grouped.with(Serdes.String(), Serdes.Integer()))
            .count(Materialized.as(COUNTS_KEY_VALUE_STORE));

        final Topology topology = builder.build();

        Properties props = getProperties();

        this.streams = new KafkaStreams(topology, props);

        Runtime.getRuntime().addShutdownHook(
            new Thread("streams-shutdown-hook") {
                @Override
                public void run() {
                    streams.close();
                }
            });
        streams.start();
    }

    private Properties getProperties() {
        Properties props = new Properties();
        props.put(APPLICATION_ID_CONFIG, "streams-word-count");
        props.put(BOOTSTRAP_SERVERS_CONFIG, producerCustomConfig.getKafkaServers());
        props.put(DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());
        props.put(DEFAULT_VALUE_SERDE_CLASS_CONFIG,  Serdes.String().getClass());
        return props;
    }

    private Serde<JsonMessage> serDes() {
        Map<String, Object> serdeProps = new HashMap<>();

        final Serializer<JsonMessage> pageViewSerializer = new JsonPOJOSerializer<>();
        serdeProps.put("JsonPOJOClass", JsonMessage.class);
        pageViewSerializer.configure(serdeProps, false);

        final Deserializer<JsonMessage> pageViewDeserializer = new JsonPOJODeserializer<>();
        serdeProps.put("JsonPOJOClass", JsonMessage.class);
        pageViewDeserializer.configure(serdeProps, false);

        return Serdes.serdeFrom(pageViewSerializer, pageViewDeserializer);
    }
}
