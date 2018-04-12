var spikes = new Array(360);

function setup() {
   createCanvas(windowWidth, windowHeight);
   for (var i = 0; i < spikes.length; i++) {
     spikes[i] = floor(randomGaussian(0, 15));
   }
 }
function draw() {

  background(0);
  translate(width / 2, height / 2);
  if(mouseIsPressed) {
    big();
    small();
  } else {
    small();
}
}

  function big() {
  for (var i = 0; i < spikes.length; i++) {
     rotate(TWO_PI / spikes.length);
     stroke(random(255), random(255), random(255));

  var dist = abs(spikes[i]);
     line(50, 10, random(255), random(255));
   }
 }

 function small() {
 for (var i = 0; i < spikes.length; i++) {
    rotate(TWO_PI / spikes.length);
    stroke(255);

 var dist = abs(spikes[i]);
    line(50, 50, 10, 10);
  }
}
