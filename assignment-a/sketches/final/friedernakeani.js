var x = 100;
var y = 100;
var x1 = 638;
var y1 = 260;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(224,220,217);

  }

function draw() {

  if (keyIsDown(LEFT_ARROW)) {
    x1 -=5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x1 +=5;
  }
  if (keyIsDown(UP_ARROW)) {
    y1 -=5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y1 +=5;
  }

  clear();
  background(224,220,217);

  //redbox
  stroke(175, 1, 22);
  strokeWeight(2);
  noFill ();
  rect(x1, y1, 20, 20);

  grids();
}

function grids () {
  translate(400,60);
  for(var x = 0; x<17; x++) {
    for (var y = 0; y<17; y++){
    stroke(185,194,189);
    strokeWeight(2);
    noFill ();
    rect(x*30, y*30, 20, 20);
    }
}

}
