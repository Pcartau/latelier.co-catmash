const img_container = document.getElementsByClassName('img_container')[0];
var catsData = JSON.parse(catsData.replace(/&quot;/g,'"'));
var catRank = 1;

var catsSorted = catsData.sort(function (cat_1, cat_2) {
    return cat_2.cat_votes - cat_1.cat_votes;
});
//Fonction de tri par votes

for (let cat of catsSorted) {
  var img = document.createElement('img');
  var pVotes = document.createElement('p');
  var pRank = document.createElement('p');

  pRank.classList.add("cat_rank");
  pVotes.classList.add("cat_votes");
  img.src = cat.cat_url;
  img.classList.add("cat_img");
  pRank.innerHTML = "#" + catRank;
  pVotes.innerHTML = cat.cat_votes + " vote(s)";
  img_container.appendChild(img);
  img_container.appendChild(pRank);
  img_container.appendChild(pVotes);
  catRank += 1;
}
//Remplissage dynamique de la div conteneuse des images
