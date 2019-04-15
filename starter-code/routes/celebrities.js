const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(data => {
      res.render("celebrities/index", { data });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
