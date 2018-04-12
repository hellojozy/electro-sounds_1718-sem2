var x, y;

function setup() {
  createCanvas(windowWidth,windowHeight);
  x = width;
  y = height;
}

function draw() {
  background(0);

  // Draw a circle
  stroke(150);

  for (var i=0; i<5; i++){
  line(x, y, random(255), random(255));
  // Jiggling randomly on the horizontal axis
  x = x + random(1, -1);
  // Moving up at a constant speed
  y = y - 1;
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }



  }
}
