const express = require("express");
const tracery = require("tracery-grammar");
const maritimeLocationsJson = require("./maritimeLocations.json");
const app = express();

function getPirateLocations(number) {
  let locationsArray = [];
  const grammar = tracery.createGrammar(maritimeLocationsJson);
  for (let i = 0; i < number; i++) {
    let print = grammar.flatten("#line#");
    locationsArray.push(print);
  }
  console.log(locationsArray)
}
getPirateLocations(3);
// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// send the default array of dreams to the webpage
app.get("/", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(maritimeLocationsJson);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
