const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/protos/primary.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const packageDescriptor = grpc.loadPackageDefinition(packageDefinition);
const primary = packageDescriptor.primary;

const stub = new primary.Primary(
  'localhost:10000',
  grpc.credentials.createInsecure()
);

const jsonRequest = {
  ReqName: "This is a request",
  ReqBytes: "this is the content of my buffer",
};

const exRequest = {
  ReqStr: "this is the ReqString",
};

stub.JsonRpc(jsonRequest, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(
      `JsonRpc-> Status=${response.ResStatus} : RetValue=${response.ResBytes}`
    );
  }
});


stub.ExampleRpc(exRequest, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(
      `ExampleRpc-> RetValue=${response.RespStr}`
    );
  }
});
