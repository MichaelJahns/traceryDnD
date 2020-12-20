const express = require("express");
const tracery = require('tracery-grammar');
const app = express();

let json = {
    "line":[
        "#descriptiveAdj# #establishedLoc#",
        "#descriptiveAdj# #possessiveAdj# #establishedLoc#",
        "#descriptiveAdj# #geographicalLoc#",
        "#descriptiveAdj# #possessiveAdj# #geographicalLoc#",
        "#descriptiveAdj# #establishedLoc# #postnominalModifers#",
        "#possessiveAdj# #geographicalLoc# #postnominalModifers#",
        "#descriptiveAdj# #geographicalLoc# #postnominalModifers#",
        "#possessiveAdj# #geographicalLoc# #postnominalModifers#",
        "#establishedLoc# #postnominalModifers#",
        "#geographicalLoc# #postnominalModifers#"
  
    ],
    "descriptiveAdj":["Blackend","Broken","Concealed","Dreaded","Fancy","Grand","Hidden","Mystic", "Plentiful", "Ravaged", "Royal", "Salted", "Scorched", "Secluded", "Secret", "Splendid", "Stolen", "Sunken", "Sweet", "Wrecked"],
    "possessiveAdj":["Barracuda's", "Captain's", "Dragon's", "Guild's", "Hunter's", "Kraken's", "Maiden's", "Mermaid's", "Order's", "Parrot's", "Raider's", "Sailor's", "Shark's", "Shipwreck's", "Siren's", "Storm's", "Thieves'", "Triton's", "Turtle's", "Wanderer's"],
    "establishedLoc":["Asyulum", "Bounty", "Den", "Fort", "Gem", "Harbor", "Haven", "Hideout", "Hold", "Jewel", "Keep", "Port", "Refuge", "Rest", "Retreat", "Sanctuary", "Shelter", "Stronghold", "Treasure", "Trove"],
    "geographicalLoc": ["Archipelago", "Atoll", "Bay", "Bluffs", "Cliffs", "Cove", "Crag", "Enclave", "Groves", "Hollow", "Island", "Isle", "Lagoon", "Peninsula", "Reef", "Ridge", "Rock", "Sands", "Shallows", "Shores"],
    "postnominalModifers": ["amidst the Maelstroms", "between the Waves", "in the Mists", "in the Shadows", "of a Thousand Coins", "of Plentiful Riches", "of Skulls", "of the Countless Wrecks", "of the Cursed", "of the Damned", "of the Depths", "of the Homesick", "of the Lawless", "of the Lost Souls", "of the Moon", "of the Raven", "of the Sunset", "of the Sweet Embrace", "of the Tides", "of Whispers"]
};

var grammar = tracery.createGrammar(json);
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
