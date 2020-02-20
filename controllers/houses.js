const Houses = require("../models/houses");
const router = require("express").Router();
require("../models/users.js");
require("../models/amenities.js");

router.get("/", (req, res) => {
  Houses.find(req.query)
    .populate(["type", "host", "amenities"])
    .then(houses => {
      // Set first of images as 'image'
      res.send(houses);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  Houses.findById(req.params.id)
    .populate(["type", "host", "amenities"])
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

// Create route for single house

module.exports = router;
