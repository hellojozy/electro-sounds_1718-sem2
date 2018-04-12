var value = 0;
var angle = 0;
let tileCount = 10;
let size = 20;
let offsetX = 20;
let offsetY = 15;
var circleAlpha = 130;
let circleColor;
var maxDistance = 100;
let x1 = 5;
let y1 = 5;

function setup() {
  createCanvas(400, 400);
  // angleMode(DEGREES);

  circleColor = color(random(400), random(300), 190, circleAlpha);
}

function draw() {
  background(64, 64, 64, 10);
  for (var gridY = 0; gridY < width; gridY+=50) {
    for (var gridX = 0; gridX < height; gridX+=50) {

      var diameter = dist(x1, y1, gridX, gridY);
      diameter = diameter / maxDistance *10;
      push();
      translate(gridX, gridY, diameter * 10);
      ellipse(0, 0, diameter);    // also nice: ellipse(...)
      pop();
      //
      // var posX = (width / tileCount * gridX) + offsetX;
      // var posY = (height / tileCount * gridY) + offsetY;
      //
      // fill(circleColor);
      //
      // ellipse(posX , posY, size);
    }
    move();
    update();

  }


}

function move() {
  y1 += 0.5;
  x1 += 1;
}

function update() {
if (y1 > 100) {
  y1 = 5;
}

if (x1 > 100) {
  x1 = 5;
}
}
