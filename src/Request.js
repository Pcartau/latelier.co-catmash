function fillDataBase() {
  for (let cat of cats_data.images) {
    var newCat = new Cat({
      cat_id: cat.id,
      cat_url: cat.url,
      cat_score: 0
    });
    newCat.save(function (err) {
      if (err) return console.error(err);
    });
  }
}

function createMatchs(cats_number) {
  for (let i = 0; i < cats_number; i++) {
    for (let j = i + 1; j < cats_number; j++) {
      array.push(i + ":" + j);
    }
  }
}
