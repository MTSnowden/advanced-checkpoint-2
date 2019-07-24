const MoviesModel = require("../mongo/model");

module.exports.list = (req, res) => {
  MoviesModel.find({}).then(movies => { 
      return res.json(movies)
    });
};
module.exports.show = function show(req, res) {
  return MoviesModel.findById(req.params.id).then(movie => res.json(movie)); 
};
module.exports.create = function create(req, res) {
  const newMovie = new MoviesModel(req.body);
  console.log(req.body, 'body');
  newMovie.save().then(savedMovie => res.json(savedMovie));
};

module.exports.remove = function remove(req, res) {
  return MoviesModel.findByIdAndRemove(req.params.id).then(movie => res.json(movie)); 
}

module.exports.removeEmpty = function removeEmpty(req, res) {
  return MoviesModel.deleteMany({ "year": { $exists: false } })
    .then(results => res.json(results))
    .catch(err => res.send(err.message))
}