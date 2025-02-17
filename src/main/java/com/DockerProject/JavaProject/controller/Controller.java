package com.DockerProject.JavaProject.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class Controller {
    @GetMapping("")
    public String index() {
        return "Ok";
    }
    
}
