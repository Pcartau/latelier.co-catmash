/*---------------------------DOM-CREATION------------------------------------*/
var catsData = JSON.parse(catsData.replace(/&quot;/g,'"'));
var cat1 = document.getElementById("cat1");
var cat2 = document.getElementById("cat2");
var cat1_img = document.createElement("img");
var cat2_img = document.createElement("img");

catsMatchs = catsMatchs.split(',');
//Afin de lire les matchs

var randomMatch = Math.floor(Math.random() * catsMatchs.length);
//Choix d'un match au hasard

cat1_img.src = catsData[catsMatchs[randomMatch].split(':')[0]].cat_url;
cat1.appendChild(cat1_img);
cat2_img.src = catsData[catsMatchs[randomMatch].split(':')[1]].cat_url;
cat2.appendChild(cat2_img);


/*---------------------------REMATCH-FUNCTION---------------------------------*/
function rematch() {
  catsMatchs.splice(randomMatch, 1); //Retrait du match
  randomMatch = Math.floor(Math.random() * catsMatchs.length);
  cat1_img.src = catsData[catsMatchs[randomMatch].split(':')[0]].cat_url;
  cat1.appendChild(cat1_img);
  cat2_img.src = catsData[catsMatchs[randomMatch].split(':')[1]].cat_url;
  cat2.appendChild(cat2_img);
}


/*---------------------------EVENTS-ON-IMGS---------------------------------*/
cat1.addEventListener('click', function() {
  rematch();
});

cat2.addEventListener('click', function() {
  rematch();
});
