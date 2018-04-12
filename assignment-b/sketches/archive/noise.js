var t;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  stroke(255,18);
  t = 0;
}

function draw() {
   var x1 = width * noise(t + 15);
   var x2 = width * noise(t + 25);
   var x3 = width * noise(t + 35);
   var x4 = width * noise(t + 45);
   var y1 = height * noise(t + 55);
   var y2 = height * noise(t + 65);
   var y3 = height * noise(t + 75);
   var y4 = height * noise(t + 85);
   var r = 255 * noise(t+10) + 100;
   var g = 255 * noise(t+15) + 100;
   var b = 255 * noise(t+20) + 100;
   fill (r,g,b,4);
   bezier(x1, y1, x2, y2, x3, y3, x4, y4);

   t += 0.005;

  // clear the background every 500 frames using mod (%) operator
   if (frameCount % 300 == 0) {
 	background(0);
   }
}



// //http://genekogan.com/code/p5js-perlin-noise/
