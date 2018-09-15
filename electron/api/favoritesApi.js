const Favorite = require('../types/Favorite');
const Promise = require('Bluebird');

module.exports.createFavoriteIcon = function(arg) {
  const result = {};
  const newFavoriteIcon =
    new Favorite(
      arg.data['resourceFolder'],
      arg.data['iconName'],
      arg.data['title'],
      arg.data['url']
      );

  return new Promise(function(resolve, reject) {
    db.favorites.insert(newFavoriteIcon, function (err, document) {
      if (err) {
        result.data = "";
        result.message = "There was an error during the attempt to create your Favorite icon.";
        result.status = 500;
        return reject(result);
      }

      result.data = document;
      result.status = 200;
      result.message = "Favorite icon successfully created.";
      return resolve(result);
    });
  });
};

module.exports.readAllFavoriteIcons = function(arg) {
  console.log('readAllFavoriteIcons');
};

module.exports.updateFavoriteIcon = function(arg) {
  console.log('updateFavoriteIcon');
};

module.exports.deleteFavoriteIcon = function(arg) {
  console.log('deleteFavoriteIcon');
};
