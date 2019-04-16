const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

//show a list of movies
router.get("/movies", (req, res) => {
  Movie.find()
    .then(data => {
      res.render("movies/index", { data });
    })
    .catch(err => {
      console.log(err);
    });
});

//show the movie details page
router.get("/movies/:id", (req, res, next) => {
  const _id = req.params.id;
  Movie.findOne({ _id })
    .then(data => {
      res.render("movies/show", { data });
      console.log("yoyoyoy", data);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

//Add a movie
router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.all("/movies", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
    });
});

//delete a movie

module.exports = router;
