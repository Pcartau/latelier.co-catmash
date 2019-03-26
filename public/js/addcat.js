/*---------------------------DOM-CREATION------------------------------------*/
const url = document.getElementById("img_url");
const image = document.createElement("img");
const result = document.getElementsByClassName("result")[0];
var submit_button = document.getElementById("submit");
image.crossOrigin="anonymous";
image.src = "http://66.media.tumblr.com/tumblr_lzxok2e2kX1qgjltdo1_1280.jpg";


/*---------------------------ML5-INIT-----------------------------------------*/
const classifier = ml5.imageClassifier('MobileNet', function() {
  console.log('Model Loaded!');
});


/*---------------------------IMG-PREDICTION-----------------------------------*/
// classifier.predict(image, function(err, results) {
//   for (let result of results) {
//     console.log(result);
//   }
// });

/*---------------------------CHECK-URL----------------------------------------*/
function testUrl(url, callback) {
  var img = new Image();
  img.onload = function() {
    callback(true);
  };
  img.onerror = function() {
    callback(false);
  };
  img.src = url;
}


/*---------------------------SEND-VOTE-TO-SERVER------------------------------*/
var xhttp = new XMLHttpRequest();
// function sendVote(cat) {
//   xhttp.open("POST", "/vote", true);
//   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhttp.send(cat);
// }


/*---------------------------EVENT_LISTENER-----------------------------------*/
submit_button.addEventListener('click', function(){
  testUrl(url.value, function(exists) {
    if (exists == true) {
      console.log("URL VALIDE");
      // predictImg();
    } else {
      result.style.color = "red";
      result.innerHTML = "Not a valid URL";
    }
  });
});
