const expect = require('chai').expect;
const sinon = require('sinon');
sinon.config = {
  useFakeTimers: false
};
const sinonTest = require('sinon-test');
const test = sinonTest(sinon);
const favoritesApi = require('../api/favoritesApi');
const Chance = require('chance');
const chance = new Chance();
const Datastore = require('nedb');
global.db = {};
global.db.favorites = new Datastore();

describe('Favorites Api Tests', function() {

  describe('createFavoriteIcon', function() {
    let result;
    let arg = {};
    let insertStub;

    beforeEach(function() {
      arg.data = {
        resourceFolder: chance.string({length: 5}),
        iconName: chance.string({length: 5}),
        title: chance.string({length: 5}),
        url: chance.url()
      };

      insertStub = sinon.stub(global.db.favorites, 'insert');
    });

    afterEach(function() {
      result = null;
      arg = {};
      insertStub.restore();
    });

    it('returns a successfully saved icon', async function() {
      // set
      const err = false;
      const document = arg.data;
      insertStub.yields(err, document);

      // run
      try {
        result = await favoritesApi.createFavoriteIcon(arg);
      } catch (err) {
        result = err;
      }

      // assert
      expect(insertStub.called).to.equal(true);

      // result.data
      expect(result.data.resourceFolder).to.equal(arg.data.resourceFolder);
      expect(result.data.iconName).to.equal(arg.data.iconName);
      expect(result.data.title).to.equal(arg.data.title);
      expect(result.data.url).to.equal(arg.data.url);

      // result.message
      expect(result.message).to.equal('Favorite icon successfully created.');

      // result.status
      expect(result.status).to.equal(200);

    });

    it('returns error for unsuccessful attempt to save Favorite icon', async function() {
      // set
      const err = true;
      const document = null;
      insertStub.yields(err, document);

      // run
      try {
        result = await favoritesApi.createFavoriteIcon(arg);
      } catch (err) {
        result = err;
      }

      // assert
      expect(insertStub.calledOnce).to.equal(true);

      expect(result.data).to.equal('');
      expect(result.message).to.equal('There was an error during the attempt to create your Favorite icon.');
      expect(result.status).to.equal(500);
    });
  });

  describe('readAllFavoriteIcons', function() {
    let result;
    let findStub;

    beforeEach(function() {
      findStub = sinon.stub(global.db.favorites, 'find');
    });

    afterEach(function() {
      result = null;
      findStub.restore();
    });

    it('returns all Favorite Icons', async function() {
      // set
      let err = false;
      let documents = [];
      findStub.yields(err, documents);

      // act
      try{
        result = await favoritesApi.readAllFavoriteIcons();
      } catch (e) {
        throw e;
      }



      // assert
      expect(findStub.calledOnce).to.equal(true);

      expect(result.data).to.be.an('array');
      expect(result.status).to.equal(200);
      expect(result.message).to.equal("Got all Favorite Icons.");
    });

    it('return error object for unsuccessful attempt to get Favorite Icons', async function() {
      // set
      const err = true;
      const document = null;
      findStub.yields(err, document);

      // act
      try {
        result = await favoritesApi.readAllFavoriteIcons();
      } catch (e) {
        result = e;
      }

      // assert
      expect(findStub.calledOnce).to.equal(true);

      expect(result.data).to.equal("");
      expect(result.message).to.equal("There was an error during the attempt get your Favorite Icons.");
      expect(result.status).to.equal(500);
    });

  });

  describe('updateFavoriteIcon', function() {
    let result = null;
    let updateStub = null;
    let arg = {};

    beforeEach(function() {
      updateStub = sinon.stub(global.db.favorites, 'update');
      arg.data = {};
    });

    afterEach(function () {
      result = null;
      updateStub.restore();
    });

    it('updates and returns Favorite Icon', async function () {
      // set
      const err = false;
      const numAffected = null;
      const affectedDocuments = [];
      const upsert = null;
      updateStub.yield(err, numAffected, affectedDocuments, upsert);

      // act
      try {
        result = await favoritesApi.updateFavoriteIcon(arg);
      } catch (e) {
        throw e;
      }
      // assert

      expect(result).to.equal("hello");
    });

  });

  // describe('deleteFavoriteIcon', function() {});

});

