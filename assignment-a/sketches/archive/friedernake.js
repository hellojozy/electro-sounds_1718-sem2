function setup() {
  createCanvas(windowWidth, windowHeight);
  background(224,220,217);

  }

function draw() {
  push();
  translate(400,60);

  for(var x = 0; x<17; x++) {
    for (var y = 0; y<17; y++){
    stroke(185,194,189);
    strokeWeight(2);
    noFill ();
    rect(x*30, y*30, 20, 20);
    }

}

pop();
stroke(175, 1, 22);
strokeWeight(2);
noFill ();
rect(638, 260, 20, 20);
}
