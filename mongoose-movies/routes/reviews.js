const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews.js");

// POST /movies/:id/reviews
router.post("/movies/:id/reviews", reviewsCtrl.create);

module.exports = router;