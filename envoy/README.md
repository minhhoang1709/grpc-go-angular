# Envoy/proxyenvoy

![Envoy](https://d33wubrfki0l68.cloudfront.net/77bb2db951dc11d54851e79e0ca09e3a02b276fa/9c0b7/img/envoy-logo.svg)

This file shows how to build and run envoy proxy server by using docker

## Make sure you installed docker and docker/envoy from [here](https://hub.docker.com/r/envoyproxy/envoy)

## Build envoy image using Dockerfile and envoy.yaml files
#### Step 1: envoy.yaml file:
Open envoy.yaml file and configure you port of your envoy proxy server and you go server

##### envoy port:
`listeners:
    - name: listener_0
      address:
        socket_address: { address: 0.0.0.0, port_value: <port_number> }`
##### go server port: 
` hosts:
        [
          {
            socket_address:
              { address: host.docker.internal, port_value: <port_number> },
          },
        ]`
#### Step 2: Build:
Open BASH terminal and run this command to build:
`docker build -t envoy:v1 `

## Run envoy proxy server
Open BASH terminal and run this command to build:
`docker run  -p 8080:8080 -p 9901:9901  envoy:v1`

