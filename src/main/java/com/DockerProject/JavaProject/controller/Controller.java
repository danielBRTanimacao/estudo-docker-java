package com.DockerProject.JavaProject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping()
    public String index() {
        return "<h1 style='text-align: center; padding: 1em; font-size: 2.2em; font-family: sans-serif;'>Hello World!</h1>";
    }
    
}
