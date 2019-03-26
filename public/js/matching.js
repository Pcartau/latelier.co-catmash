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
  cat1.style.opacity = 0;
  cat2.style.opacity = 0;
  catsMatchs.splice(randomMatch, 1); //Retrait du match
  if (catMatchs.length) {
    randomMatch = Math.floor(Math.random() * catsMatchs.length);

    setTimeout(() => {
      cat1_img.src = catsData[catsMatchs[randomMatch].split(':')[0]].cat_url;
      cat2_img.src = catsData[catsMatchs[randomMatch].split(':')[1]].cat_url;
      cat1.appendChild(cat1_img);
      cat2.appendChild(cat2_img);
    }, 300);

    setTimeout(() => {
      cat1.style.opacity = 1;
      cat2.style.opacity = 1;
    }, 450);
  } else {
    window.location.reload(false);
  }
}

/*---------------------------SEND-VOTE-TO-SERVER------------------------------*/
var xhttp = new XMLHttpRequest();
function sendVote(cat) {
  xhttp.open("POST", "/vote", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(cat);
}


/*---------------------------EVENTS-ON-IMGS---------------------------------*/
cat1.addEventListener('click', function() {
  sendVote(`id=${catsData[catsMatchs[randomMatch].split(':')[0]].cat_id}`);
  rematch();
});

cat2.addEventListener('click', function() {
  sendVote(`id=${catsData[catsMatchs[randomMatch].split(':')[1]].cat_id}`);
  rematch();
});
