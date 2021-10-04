package com.application.consumer.kafka.service;

import com.application.common.kafka.config.KafkaConfiguration;
import com.application.common.kafka.model.JsonMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ConsumerService {

    @KafkaListener(id = "someId", topics = KafkaConfiguration.TESTING_TOPIC, autoStartup = "true")
    public void consume(JsonMessage in) {
        log.debug("================= consume message {}", in);
    }
}
