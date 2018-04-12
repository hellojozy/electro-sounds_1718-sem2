let x = 200;
let y1 = 100;
let y2 = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  background(64, 64, 64);

}

function draw() {

  var inside = color(125,249,255);
  var middle = color(64, 64, 64);
  var outside = color(255,0,0);

  //red outside background
  push();
    for (var i = 0; i < 2; i++) {
      fill(outside);
      rect(i * x, 0, 100, 400);
  }
  pop();

  push();
    for (var i = 0; i < 2; i++) {
      fill(inside);
      rect(i * x + 20, y1, 60, 300);
    }
  pop();

  push();
    for (var i = 0; i < 2; i++) {
      fill(middle);
      rect(i * x + 30, 150, 20, 200);
    }
  pop();

    //blue outside background
  translate(100, 0);
  push();
    for (var i = 0; i < 2; i++) {
      fill(inside);
      rect(i * x, y2, 100, 100);
    }
  pop();

  push();
    for (var i = 0; i < 2; i++) {
      fill(outside);
      rect(i * x + 20, y1, 60, 300);
    }
  pop();

  push();
    for (var i = 0; i < 2; i++) {
      fill(middle);
      rect(i * x + 50,150, 10, 200);
    }
  pop();

move();
update();

}

function move() {
  y1 += 10;
  y2 += 10;
}

function update() {
  if(y1 > height) {
    y1 = 100;
  }

  if(y2 > height) {
    y2 = 200;
  }
}
