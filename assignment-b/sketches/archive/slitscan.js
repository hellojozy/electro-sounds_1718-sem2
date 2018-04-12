var video;
var x = 0;

function setup() {
  createCanvas (800,240);
  pixelDensity(1);
  video = createCapture (VIDEO);
  video.size(320,240);
  background(0);
}

function draw(){

  video.loadPixels();
  copy(video, video.width/2, 0, 1, video.height, x, 0, 1, video.height);

  x = x + 1;
 if (x > width){
   x = 0;
 }
}
