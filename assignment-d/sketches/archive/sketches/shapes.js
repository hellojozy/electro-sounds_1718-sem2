var x = 100;
var y = 100;
var x1 = 10;
var y1 = 10;
let x2 = 20;

function setup() {
  createCanvas(410, 410);
  background(64, 64, 64);

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
  background(64, 64, 64);

  //redbox
  fill(229,204,255);
  noStroke();
  ellipse(x1, y1, 30, 30);
  grids();
}

function grids () {
  translate(10,10);
  for(var x = 0; x<5; x++) {
    for (var y = 0; y<40; y++){
    fill(random(255), random(255), random(255));
    noStroke();
    rect(x*80, y*10, x2, 2);

    }

}
move();
update();
}

function move() {
  x2 += 0.8;
}

function update() {
  if(x2 > 60) {
    x2 = 20;
  }
}
