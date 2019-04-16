const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

mongoose.connect("mongodb://localhost/starter-code");

Celebrity.collection.drop();
Movie.collection.drop();

//Celebrity collection

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

//Movie collection

const movies = [
  {
    title: "My first movie",
    genre: "Horror",
    plot: "I know what you did last summer kind of movie"
  },
  {
    title: "Twins",
    genre: "Horror",
    plot: "Brothers from another mother"
  },
  {
    title: "Terminator",
    genre: "Action",
    plot: "Get down"
  }
];

Movie.create(movies)
  .then(() => {
    console.log("successfully seeded database");
  })
  .catch(err => {
    console.log(err);
  });
