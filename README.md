# gRPC Circuit Breaker

Uses [Hystrixjs](https://www.npmjs.com/package/hystrixjs) to provide the [Circuit Breaker](http://microservices.io/patterns/reliability/circuit-breaker.html) functionalities to [gRPC](https://grpc.io/) requests.

## Usage

```
const messages = require('your-protobuf-messages');
const rpcClient = require('your-grpc-client');
const {
  createRpcCommand,
} = require('grpc-circuitbreaker');


// Let's say rpcClient.get(request, (err, res) ...) is your function
// You need really need .bind()!
const command = createRpcCommand(rpcClient.get.bind(rpcClient));
const request = new messages.YourMessage();


command.execute(request).then((response) => {
    // do something with response
  }).catch((error) => {
    // do something with error
  });
};
```

## Tests

No tests YET, was in a hurry when I put this here, sorry.