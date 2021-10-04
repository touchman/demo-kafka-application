package com.application.common.kafka.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class KafkaConfiguration {

    public static final String TESTING_TOPIC = "testing-topic";

    @Bean
    public NewTopic topic() {
        return TopicBuilder.name(TESTING_TOPIC)
            .partitions(10)
            .replicas(1)
            .build();
    }
}
