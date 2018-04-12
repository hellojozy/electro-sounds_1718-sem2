var y = 120;
var value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);

  }


function draw(){
  // rect(0, 0, 400, 60);
  // rect(0, 120, 400, 60);
  // rect(0, 240, 400, 60);
  // rect(0, 360, 400, 60);
  // rect(0, 480, 400, 60);

  // rect(400, 60, 400, 60);
  // rect(400, 180, 400, 60);
  // rect(400, 300, 400, 60);
  // rect(400, 420, 400, 60);
  // rect(400, 540, 400, 60);

  fill(value);
   columnone();
   columntwo();
 }
 function mouseDragged() {
   value = value + 15;
   if (value > 255) {
     value = 0;
   }


}

function columnone() {
  for (var i=0; i<5; i++) {
    rect(0, i * y, 400, 60);
  }
}

function columntwo () {
  for (var i=0; i<5; i++) {
    rect(400, (i*y) +60, 400, 60);
  }
}
