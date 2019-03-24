const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/latelier', {
  useNewUrlParser: true
});

mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });

//Called hooks which runs before something.
beforeEach((done) => {
    mongoose.connection.collections.pokemons.drop(() => {
        done();
    });
});
