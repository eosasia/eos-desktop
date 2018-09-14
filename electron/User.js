module.exports = class User {
  // set shortcuts from storage
  set shortcuts(value) {
    this._shortcuts = value;
  }

  // set favorites from storage
  set favorites(value) {
    this._favorites = value;
  }

  constructor() {}
};
