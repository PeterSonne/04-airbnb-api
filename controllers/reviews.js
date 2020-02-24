const Reviews = require("../models/reviews");
const router = require("express").Router();
require("../models/users.js");
require("../models/houses.js");

router.get("/", (req, res) => {
  // Respond with all reviews belonging to specific house and populate nested fields
  Reviews.find(req.query)
    .populate("author")
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

module.exports = router;
