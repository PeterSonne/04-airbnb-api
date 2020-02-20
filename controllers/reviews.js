const Reviews = require("../models/reviews");
const router = require("express").Router();

router.get("/", (req, res) => {
  // Respond with all reviews belonging to specific house and populate nested fields
  Reviews.find(req.query)
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

module.exports = router;
