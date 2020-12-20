const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const tracery = require("tracery-grammar");

var PROTO_PATH = './helloworld.proto';

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function sayHello(call, callback) {
  callback(null, {message: 'Hello ' + call.request.name});
}
console.log("echo")
function sayHelloAgain(call, callback){
  callback(null, {message: 'Hello Once Again, ' + call.request.name})
}

const maritimeLocationsJson = require("./maritimeLocations.json");

function getPirateLocations(number) {
  let locationsArray = [];
  const grammar = tracery.createGrammar(maritimeLocationsJson);
  for (let i = 0; i < number; i++) {
    let print = grammar.flatten("#line#");
    locationsArray.push(print);
  }
  console.log(locationsArray)
}

function main() {
  var server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, 
    {
      sayHello: sayHello,
      sayHelloAgain: sayHelloAgain
    });
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();
