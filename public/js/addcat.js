/*---------------------------DOM-CREATION------------------------------------*/
const url = document.getElementById("img_url");
const image = document.getElementById("img");
const result = document.getElementsByClassName("result")[0];
var submit_button = document.getElementById("submit");
var resultList = "";

/*---------------------------ML5-INIT-----------------------------------------*/
const classifier = ml5.imageClassifier('MobileNet', function() {
  console.log('Model Loaded!');
});


/*---------------------------IMG-PREDICTION-----------------------------------*/
function predictImg(image) {
  resultList = "";
  console.log(image);
  classifier.predict(image, function(err, results) {
    for (let result of results) {
      resultList = resultList + " " + result.className;
    }
    if (resultList.search("Cat") >= 0 || resultList.search("cat") >= 0) {
      result.innerHTML = "Thanks ! Your cat is being added !";
      sendCat(url.value);
    } else {
      result.innerHTML = "Sorry, we can't see the cat :/ We saw :" + resultList;
    }
  });
}


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
function sendCat(url) {
  xhttp.open("POST", "/newCat", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`cat_url=${url}`);
}


/*---------------------------EVENT_LISTENER-----------------------------------*/
submit_button.addEventListener('click', function(){
  result.innerHTML = "";
  testUrl(url.value, function(exists) {
    if (exists == true) {
      image.src = url.value;
      image.setAttribute("width", "250px");
      image.setAttribute("height", "250px");
      setTimeout(() => {
        predictImg(image);
      }, 1000);
    } else {
      result.innerHTML = "Not a valid URL";
    }
  });
});
