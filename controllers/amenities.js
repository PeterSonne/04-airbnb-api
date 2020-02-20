const Amenities = require("../models/amenities");
const router = require("express").Router();

router.get("/", (req, res) => {
  // Respond with all amenities
  Amenities.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
