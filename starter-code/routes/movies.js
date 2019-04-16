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
      next();
    });
});

//delete a movie
router.all("/movies/:id/delete", (req, res, next) => {
  const _id = req.params.id;
  Movie.findOneAndRemove({ _id })
    .then(() => {
      console.log("deleted movie");
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

//edit a movie
router.all("/movies/:id/edit", (req, res, next) => {
  const _id = req.params.id;
  Movie.findOne({ _id })
    .then(data => {
      res.render("movies/edit", { data });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

//update the movie after editing
router.all("/movies/:id", (req, res, next) => {
  const _id = req.params.id;
  const { title, genre, plot } = req.body;
  Movie.findOneAndUpdate({ _id }, { title, genre, plot }, { new: true })
    .then(updatedData => {
      console.log(`updated ${updatedData.title}`);
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
