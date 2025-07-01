const Review = require('../models/reviews');

let reviewsCollection; 

const getReviews = async (req, res) => {
  const reviews = await Review.find();
  res.status(201).json(reviews);
}

module.exports = {
    getReviews
}