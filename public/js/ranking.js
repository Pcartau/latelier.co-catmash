const img_container = document.getElementsByClassName('img_container')[0];
var catsData = JSON.parse(catsData.replace(/&quot;/g,'"'));

var catsSorted = catsData.sort(function (cat_1, cat_2) {
    return cat_2.cat_votes - cat_1.cat_votes;
});
//Fonction de tri par votes

for (let cat of catsSorted) {
  var img = document.createElement('img');
  var p = document.createElement('p');
  img.src = cat.cat_url;
  img.classList.add("cat_img");
  p.innerHTML = cat.cat_votes;
  img_container.appendChild(img);
  img_container.appendChild(p);
}
//Remplissage dynamique de la div conteneuse des images
