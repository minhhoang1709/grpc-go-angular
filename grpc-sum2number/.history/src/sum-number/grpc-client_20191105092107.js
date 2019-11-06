const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/primary/primary.proto';

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

const addRequest = {
  number: process.argv[2] || 0,
  anotherNumber: process.argv[3] || 0
};

stub.SumNumber(addRequest, function(err, response) {
  console.log(addRequest)
  if (err) {
    console.error(err);
  } else {
    console.log(
      `The sum of ${addRequest.number} and ${addRequest.anotherNumber} is ${
        response.sum
      }`
    );
  }
});