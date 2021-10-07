package com.application.producer.service;

import com.application.producer.data.ComplimentDataProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ComplimentService {

    private final ComplimentDataProvider complimentDataProvider;

    public List<String> getComplimentsSet() {
        return complimentDataProvider.getCompliments();
    }
}
