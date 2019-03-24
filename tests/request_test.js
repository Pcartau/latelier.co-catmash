const request = require('request');

describe('Requete', function() {
  describe('http://latelier.co/data/cats.json', function() {
    it('Doit retourner 200', function(done) {
      request('http://latelier.co/data/cats.json', function (error, response) {
        if (response.statusCode == 200) {
          done();
        } else {
          done(response.statusCode);
        }
      });
    });
  });
});
