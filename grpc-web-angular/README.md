# GrpcWebAngular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Build js file from proto file using protoc

##### Make sure you read and installed the protoc and protoc-grpc-web plugin from [here](https://github.com/grpc/grpc-web)

`$ protoc -I=<proto file destination> <proto file name> \`
  `--js_out=import_style=commonjs:<pb file destination> \`
  `--grpc-web_out=import_style=commonjs,mode=grpcwebtext:<web_pb file destination>`
  
>> Note: For file destination, you can use . for current folder
  
##### By default of this demo, you can use:
`$ protoc -I=. primary.proto \`
`  --js_out=import_style=commonjs:src/proto \`
`  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/proto`

## Import generated js files into Angular js file

`import { PrimaryClient } from '../proto/primary_grpc_web_pb.js';`
`import { AddRequest, AddResponse } from '../proto/primary_pb.js';`