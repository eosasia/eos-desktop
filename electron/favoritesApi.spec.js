const expect = require('chai').expect;
const sinon = require('sinon');
const favoritesApi = require('./favoritesApi');
const Chance = require('chance');
const chance = new Chance();
const Datastore = require('nedb');
global.db = {};
global.db.favorites = new Datastore();

describe('Favorites Api Tests', function() {

  describe('createFavoriteIcon', function() {
    let result;
    let arg = {};

    beforeEach(function() {
      arg.data = {
        resourceFolder: chance.string({length: 5}),
        iconName: chance.string({length: 5}),
        title: chance.string({length: 5}),
        url: chance.url()
      };
    });

    afterEach(function() {
      result = null;
      arg = {};
    });

    it('returns a successfully saved icon', async function() {
      // set
      const err = false;
      const document = arg.data;
      const insertStub = sinon.stub(global.db.favorites, 'insert');
      insertStub.yields(err, document);

      // run
      try {
        result = await favoritesApi.createFavoriteIcon(arg);
      } catch (err) {
        result = err;
      }

      // assert
      expect(result.data.resourceFolder).to.equal(arg.data.resourceFolder);
      expect(result.data.iconName).to.equal(arg.data.iconName);
      expect(result.data.title).to.equal(arg.data.title);
      expect(result.data.url).to.equal(arg.data.url);

      expect(result.message).to.equal('Favorite icon successfully created.');
      expect(result.status).to.equal(200);

      // clean
      insertStub.restore();
    });

    it('returns error for unsuccessful attempt to save Favorite icon', async function() {
      // set
      const err = true;
      const document = false;
      const insertStub = sinon.stub(global.db.favorites, 'insert');
      insertStub.yields(err, document);

      // run
      try {
        result = await favoritesApi.createFavoriteIcon(arg);
      } catch (err) {
        result = err;
      }

      // assert
      expect(result.data).to.equal('');
      expect(result.message).to.equal('There was an error during the attempt to create your Favorite icon.');
      expect(result.status).to.equal(500);

      // clean
      insertStub.restore();
    });
  });

  // describe('readAllFavoriteIcons', function() {});

  // describe('updateFavoriteIcon', function() {});

  // describe('deleteFavoriteIcon', function() {});

});

