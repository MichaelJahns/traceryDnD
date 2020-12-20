const express = require("express");
const tracery = require('tracery-grammar');
const maritimeLocationsJson = require('./maritimeLocations.json');
const app = express();

var grammar = tracery.createGrammar(maritimeLocationsJson);
for (let i = 0; i < 3; i++) {
  var print = grammar.flatten("#line#");
  console.log(print);
}

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
