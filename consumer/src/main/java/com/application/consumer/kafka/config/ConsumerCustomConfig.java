package com.application.consumer.kafka.config;

import com.application.producer.kafka.model.JsonMessage;
import org.apache.kafka.clients.admin.NewTopic;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.config.KafkaListenerContainerFactory;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.ConcurrentMessageListenerContainer;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import java.util.HashMap;
import java.util.Map;

public class ConsumerCustomConfig {

    public static final String TESTING_TOPIC = "testing-topic";
    public static final String KAFKA = "localhost:29092";

    @Bean
    public NewTopic topic() {
        return TopicBuilder.name(TESTING_TOPIC)
            .partitions(10)
            .replicas(1)
            .build();
    }

    @Bean
    KafkaListenerContainerFactory<ConcurrentMessageListenerContainer<String, JsonMessage>>
    kafkaListenerContainerFactory(ConsumerFactory<String, JsonMessage> consumerFactor) {
        ConcurrentKafkaListenerContainerFactory<String, JsonMessage> factory =
            new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactor);
        factory.setConcurrency(3);
        factory.getContainerProperties().setPollTimeout(3000);
        return factory;
    }

    @Bean
    public ConsumerFactory<String, JsonMessage> consumerFactory(Map<String, Object> consumerConfigs) {
        return new DefaultKafkaConsumerFactory<>(consumerConfigs);
    }

    @Bean
    public Map<String, Object> consumerConfigs() {
        Map<String, Object> props = new HashMap<>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, KAFKA);
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        return props;
    }

}
