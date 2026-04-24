package com.example.square.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SquareController {

    @GetMapping("/square/{side}")
    public double getArea(@PathVariable double side) {
        return side * side;
    }
}