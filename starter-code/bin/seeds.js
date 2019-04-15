const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect("mongodb://localhost/mongoose-movies");

Celebrity.collection.drop();

const celebrities = [
  {
    name: "Robert De niro",
    occupation: "Actor",
    catchPhrase: "Are you talking to me?"
  },
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "I have the need for speed"
  },
  {
    name: "Brie Larson",
    occupation: "Actor",
    catchPhrase: "Higher Further Faster baby."
  }
];

Celebrity.create(celebrities)
  .then(() => {
    console.log("successfully seeded database");
  })
  .catch(err => {
    console.log(err);
  });
