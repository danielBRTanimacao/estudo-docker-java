package com.daniel.docker_manager.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.core.DefaultDockerClientConfig;
import com.github.dockerjava.core.DockerClientBuilder;
import com.github.dockerjava.httpclient5.ApacheDockerHttpClient;

@Configuration
public class DockerConfigClient {
    @Value("${docker.socket.path}")
    private String dockerSocketPath;

    @Bean
    public DockerClient buildDockerClient() {
        DefaultDockerClientConfig.Builder dockerClientConfigBuilder = DefaultDockerClientConfig.createDefaultConfigBuilder();
    
        if (this.dockerSocketPath != null && this.dockerSocketPath.startsWith("unix://")) {
            dockerClientConfigBuilder.withDockerHost(dockerSocketPath).withDockerTlsVerify(false);
        }
    
        DefaultDockerClientConfig dockerConfigClient = dockerClientConfigBuilder.build();
    
        ApacheDockerHttpClient dockerHttpClient = new ApacheDockerHttpClient.Builder().dockerHost(dockerConfigClient.getDockerHost())
                .build();
    
        return DockerClientBuilder.getInstance(dockerConfigClient).withDockerHttpClient(dockerHttpClient)
                .build();
    }
    
}
