var spikes = new Array(360);

function setup() {
   createCanvas(400,400);
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

  // var dist = abs(spikes[i]);
     line(40, 10, random(255), random(255));
   }
 }

 function small() {
 for (var i = 0; i < spikes.length; i++) {
    rotate(TWO_PI / spikes.length);
    line(20, 20, 20, 20);
  }
}
