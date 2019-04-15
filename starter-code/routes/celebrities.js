const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

//list celebrities page
router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(data => {
      res.render("celebrities/index", { data });
    })
    .catch(err => {
      console.log(err);
    });
});

//Celebrities page
router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

//Add a new celebrity
router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
    });
});

//list celebrities details page
router.get("/celebrities/:id", (req, res, next) => {
  const _id = req.params.id;
  Celebrity.findOne({ _id })
    .then(data => {
      res.render("celebrities/show", { data });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
