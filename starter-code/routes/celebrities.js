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

//list celebrities details page
router.get("/celebrities/:celeId", (req, res) => {
  const _id = req.params.celeId;
  Celebrity.findOne({ _id })
    .then(data => {
      res.render("celebrities/show", { data });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
