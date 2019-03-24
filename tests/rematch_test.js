describe('Test de random/splice sur array', function() {
  it('Test random sur array', function(done) {
    let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let randomMatch = Math.floor(Math.random() * array.length);
    if (randomMatch >= 0 && randomMatch <= 9) {
      done();
    } else {
      done("Erreur dans le random, chiffre hors tableau:" + randomMatch);
    }
  });
  it('Test de splice sur array', function(done) {
    let random = Math.floor(Math.random() * 10);
    let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    array.splice(random, 1);
    console.log(array);
    console.log(random);
    done();
  });
});
