const CommandsFactory = require('hystrixjs').commandFactory;

const createCommand = (runFn, opts = {
  name: Symbol(runFn),
  errorThreshold: 1,
  timeout: 3000,
  concurrency: 0,
}) => CommandsFactory.getOrCreate(opts.name)
  .circuitBreakerErrorThresholdPercentage(opts.errorThreshold)
  .timeout(opts.timeout)
  .run(runFn)
  .circuitBreakerSleepWindowInMilliseconds(opts.timeout)
  .statisticalWindowLength(10000)
  .statisticalWindowNumberOfBuckets(10)
  .requestVolumeRejectionThreshold(opts.concurrency)
  .build();

const createRpcCommand = rpcFn => createCommand(request => new Promise((resolve, reject) => {
  rpcFn(request, (error, response) => {
    if (error) reject(error);
    resolve(response);
  });
}));

module.exports = {
  createRpcCommand,
};
