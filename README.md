# gRPC Circuit Breaker

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/94e6f91f01fe48429a2ba739a130376d)](https://www.codacy.com/app/lucavallin/grpc-circuitbreaker?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=lucavallin/grpc-circuitbreaker&amp;utm_campaign=Badge_Grade)

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
