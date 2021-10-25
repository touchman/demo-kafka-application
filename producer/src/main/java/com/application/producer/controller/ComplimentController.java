package com.application.producer.controller;

import com.application.common.kafka.model.JsonMessage;
import com.application.producer.kafka.service.ProducerService;
import com.application.producer.kafka.topology.KafkaTopology;
import com.application.producer.service.ComplimentService;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.streams.StoreQueryParameters;
import org.apache.kafka.streams.state.QueryableStoreTypes;
import org.apache.kafka.streams.state.ReadOnlyKeyValueStore;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;


@RestController()
@RequestMapping("compliments")
@RequiredArgsConstructor
public class ComplimentController {

    private final ProducerService producerService;
    private final ComplimentService complimentService;
    private final KafkaTopology topology;

    private final AtomicInteger atomicInteger = new AtomicInteger(1);

    private final List<String> jobs = List.of("developer", "cashier", "accountant", "worker");

    @GetMapping()
    public List<String> get() {
        return complimentService.getComplimentsSet();
    }

    @CrossOrigin
    @GetMapping("/random")
    public String getRandomCompliment() {
        Random random = new Random();
        final String compliment =
            complimentService.getComplimentsSet().get(random.nextInt(complimentService.getComplimentsSet().size()));

        producerService.produce(Integer.toString(atomicInteger.getAndIncrement()),
                                new JsonMessage(compliment));

        return compliment;
    }

    @CrossOrigin
    @GetMapping("/received")
    public Long getWordsCount() {
        ReadOnlyKeyValueStore<String, Long> keyValueStore =
            topology.getStreams().store(StoreQueryParameters.fromNameAndType(KafkaTopology.COUNTS_KEY_VALUE_STORE, QueryableStoreTypes.keyValueStore()));

        return keyValueStore.get(KafkaTopology.COUNTS_KEY);
    }

//    @Scheduled(fixedDelay = 5000)
    public void emitEvents() {
        Random random = new Random();
        producerService.produce(Integer.toString(atomicInteger.getAndIncrement()),
                                new JsonMessage(jobs.get(random.nextInt(jobs.size()))));
    }
}
