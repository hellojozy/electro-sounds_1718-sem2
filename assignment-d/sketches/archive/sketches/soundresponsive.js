var value = 0;
var angle = 0;
var fft;
var song;
var button;

function toggleSong(){
  if (song.isPlaying()) {
    song.pause();
  }
    else {
      song.play();

  }
}
function preload(){
  song = loadSound('assets/ride.mp3');

}
function setup() {
  createCanvas(400, 400);
  // angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT();
}

function draw() {
  background(64, 64, 64, 10);
  var spectrum = fft.analyze();
  let high = fft.getEnergy(1500);
  if (high) {
    bigcircles();
  }
  else {
   smallcircles();
   }

}

function smallcircles(){
  angle = angle + 0.02;
  translate(width/2, height/2);
  rotate(angle);
  fill(229,204,255);
  noStroke();
  for(let i=0;i<6;i++) {
    push();
    rotate(map(i,0,6,-PI,PI));
    ellipse(100,0,40,40);
    pop();
  }

}

function bigcircles(){
	  noStroke();
    translate(200, 200);
    rotate(angle);
    fill(255,255,186);
    ellipse(0, -102, 60, 60);
    ellipse(85, -52, 60, 60);
    ellipse(85, 52, 60, 60);
    ellipse(0, 102, 60, 60);
    ellipse(-85, 52, 60, 60);
    ellipse(-85, -52, 60, 60);
    triangle(-35, 20, 0, -40, 35, 20);
    triangle(-35, -20, 0, 40, 35, -20);
}
