function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawRect(width/2,height/2,random(-255,255));
  frameRate(20);

}

// Recursive function
function drawRect(x,y,r) {
  stroke(0,191,255);
  fill(random(255));
  rect(x, y, r, r);
  ellipse (x,y,r,r);

  if(r > 2) {

    drawRect(x - r*2, y, r/2);
    drawRect(x + r*2, y, r/2);
    drawRect(x + r*2, y, - r/2);
    drawRect(x - r*2, y, - r/2);
  }
}
