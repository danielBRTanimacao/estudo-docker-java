package com.daniel.docker_manager.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daniel.docker_manager.service.DockerService;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/containers")
public class DockerContainerController {
    private final DockerService dockerService;

    public DockerContainerController(DockerService dockerService) {
        this.dockerService = dockerService;
    }

    @GetMapping("")
    public List<com.github.dockerjava.api.model.Container> listContainers(@RequestParam(required = false) boolean all) {
        return dockerService.listContainers(all);
    }

    @PostMapping("/{id}/start")
    public void startContainer(@PathVariable String id) {
        dockerService.startContainer(id);
    }

    @PostMapping("/{id}/stop")
    public void stopContainer(@PathVariable String id) {
        dockerService.stopContainer(id);
    }
    @DeleteMapping("/{id}")
    public void delContainer(@PathVariable String id) {
        dockerService.deleteContainer(id);
    }
    
}
