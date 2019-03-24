const Cat = require('../../src/Cat.js');

describe('Creating documents', () => {
    it('Create a Cat', (done) => {
      mongoose.connect('mongodb://localhost:27017/latelier', {
        useNewUrlParser: true
      }).then(() => {
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
      })        
    });
});
