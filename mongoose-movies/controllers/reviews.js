const Movie = require("../models/movie");

const create = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    movie.reviews.push(req.body);
    await movie.save();
    res.redirect(`/movies/${movie._id}`);
  }catch(error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  create,
}