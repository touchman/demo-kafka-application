package com.application.producer.kafka.service;

import com.application.common.kafka.config.KafkaConfiguration;
import com.application.common.kafka.model.JsonMessage;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.springframework.kafka.core.KafkaProducerException;
import org.springframework.kafka.core.KafkaSendCallback;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProducerService {

    private final KafkaTemplate<String, JsonMessage> template;

    public void produce(final String key, final JsonMessage message) {
        log.debug("================== produce an event");

        final ListenableFuture<SendResult<String, JsonMessage>> future =
            template.send(KafkaConfiguration.WORDS_COUNT_TOPIC, key, message);

        future.addCallback(new KafkaSendCallback<>() {

            @Override
            public void onSuccess(final SendResult<String, JsonMessage> result) {
                log.debug("================== event successfully produced {}", result);
            }

            @Override
            public void onFailure(@NonNull KafkaProducerException ex) {
                ProducerRecord<String, JsonMessage> failed = ex.getFailedProducerRecord();
                log.error("================== something bad happened {}", failed);
            }

        });
    }
}
