var catsData = JSON.parse(catsData.replace(/&quot;/g,'"'));
var cat1 = document.getElementById("cat1");
var cat2 = document.getElementById("cat2");
var cat1_img = document.createElement("img");
var cat2_img = document.createElement("img");

catsMatchs = catsMatchs.split(',');
var rand = Math.floor(Math.random() * catsMatchs.length);

cat1_img.src = catsData[catsMatchs[rand].split(':')[0]].cat_url;
cat1.appendChild(cat1_img);
cat2_img.src = catsData[catsMatchs[rand].split(':')[1]].cat_url;
cat2.appendChild(cat2_img);
