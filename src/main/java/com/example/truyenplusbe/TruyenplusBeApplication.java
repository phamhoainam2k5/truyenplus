package com.example.truyenplusbe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TruyenplusBeApplication {

    public static void main(String[] args) {
        SpringApplication.run(TruyenplusBeApplication.class, args);
        System.out.println("\"http://localhost:8080/api/stories");
    }

}
