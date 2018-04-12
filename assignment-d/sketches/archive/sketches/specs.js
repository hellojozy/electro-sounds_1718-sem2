var xoff = 0;
var yoff = 0;


function setup() {
  createCanvas(400,400);
}

function draw() {
  background(64, 64, 64);
  // var x = map(noise(xoff), 0, 1, 0, width);
  // var y = map(noise(xoff), 0, 1, 0, height);
  //
  // xoff += 0.02;
  //
  // ellipse(x, y, 24, 24);

  for (var x =0; x< width; x++){
    stroke (random(255), random(255), random(255));
    ellipse (x, random(height),1,1);

  }
}

//class, perlin noise, vector trail
