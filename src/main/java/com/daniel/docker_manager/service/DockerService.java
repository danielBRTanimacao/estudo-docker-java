package com.daniel.docker_manager.service;

import java.util.List;

import org.jvnet.hk2.annotations.Service;

import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.api.model.Image;

@Service
public class DockerService {
    private final DockerClient dockerClient;

    public DockerService(DockerClient client) {
        this.dockerClient = client;
    }

    public List<com.github.dockerjava.api.model.Container> listContainers(boolean all) {
        return dockerClient.listContainersCmd().withShowAll(all).exec();
    }

    public List<Image> listImages() {
        return dockerClient.listImagesCmd().exec();
    }

    public void startContainer(String containerId) {
        dockerClient.startContainerCmd(containerId).exec();
    }
}
