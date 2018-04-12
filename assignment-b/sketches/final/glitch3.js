function setup() {
   createCanvas(windowWidth, windowHeight);
   }

function draw() {
  for (var i = 0; i < 1500; i++) {
    var r = random(255);
    stroke(r);
    line(0, 0, i, 600);
  }
}
