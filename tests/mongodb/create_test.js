const Cat = require('../../src/Cat.js');

describe('Creating documents', () => {
    it('Create a Cat', (done) => {
        const cat = new Cat({
          cat_id: "sa3432",
          cat_url: "http://www.test.fr",
          cat_votes: 0
        });
        cat.save()
          .then(() => {
            assert(!cat.isNew);
            done();
          });
    });
});
