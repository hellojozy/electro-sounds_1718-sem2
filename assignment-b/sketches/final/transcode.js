var video;
var x = 0;

function setup() {
  pixelDensity(1);

  createCanvas(800, 700);
  video = createCapture(VIDEO);
  video.size(700,640);

}

function draw() {
  // background(220);
  video.loadPixels();
  var w = video.width;
  var h = video.height;
  for(i=0; i<w; i=i+w/1){
    for(j=0; j<h; j+=h/1){
    copy(video, 0, 0, w, h, i, j, w/1, h/1);
    filter(POSTERIZE, 4);
    filter(INVERT, 4);
  // x = x+1;
    }
  }
}
