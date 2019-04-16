const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

//list celebrities page
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(data => {
      res.render("celebrities/index", { data });
    })
    .catch(err => {
      console.log(err);
      next();
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

//Delete a celebrity
router.post("/celebrities/:id/delete", (req, res, next) => {
  const _id = req.params.id;
  Celebrity.findByIdAndRemove({ _id })
    .then(() => {
      console.log("deleted celebrity");
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

//edit a celebrity
router.all("/celebrities/:id/edit", (req, res, next) => {
  const _id = req.params.id;
  Celebrity.findOne({ _id })
    .then(data => {
      res.render("celebrities/edit", { data });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const _id = req.params.id;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findOneAndUpdate({ _id }, { name, occupation, catchPhrase }, { new: true })
    .then(updatedData => {
      console.log(`updated ${updatedData.name}`);
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

//Celebrities details page
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
