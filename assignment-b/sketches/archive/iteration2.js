let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode (DEGREES);
  }

function draw() {

  translate(400,200);

  for(var x = 0; x<2; x++) {
    for (var y = 0; y<17; y++){
    rotate(angle);
    stroke(255);
    strokeWeight(1);
    noFill ();
    ellipse(x*20, y*20, 50, 50);
    angle = angle +1;
    }

}

}
