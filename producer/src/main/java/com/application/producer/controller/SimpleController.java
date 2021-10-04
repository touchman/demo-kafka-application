package com.application.producer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SimpleController {

    @GetMapping("/names")
    public List<String> get() {
        return List.of("Sergey", "Danila");
    }
}
