package com.application.producer.controller;

import com.application.common.kafka.model.JsonMessage;
import com.application.producer.kafka.service.ProducerService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequiredArgsConstructor
public class SimpleController {

    private final ProducerService producerService;

    private final AtomicInteger atomicInteger = new AtomicInteger(1);

    private final List<String> jobs = List.of("developer", "cashier", "accountant", "worker");

    @GetMapping("/names")
    public List<String> get() {
        return List.of("Sergey", "Danila");
    }

    @Scheduled(fixedDelay = 5000)
    public void emitEvents() {
        Random random = new Random();
        producerService.produce(Integer.toString(atomicInteger.getAndIncrement()),
                                new JsonMessage(UUID.randomUUID().toString(), jobs.get(random.nextInt(jobs.size()))));
    }
}
