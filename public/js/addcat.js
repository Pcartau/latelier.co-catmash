const image = document.createElement("img");
image.crossOrigin="anonymous";
image.src = "http://66.media.tumblr.com/tumblr_lzxok2e2kX1qgjltdo1_1280.jpg";

// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', function() {
  console.log('Model Loaded!');
});

// Make a prediction with the selected image
// This will return an array with a default of 10 options with their probabilities
classifier.predict(image, function(err, results) {
  for (let result of results) {
    console.log(result);
  }
});
