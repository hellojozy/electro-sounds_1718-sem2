let img;

function setup() {
createCanvas(400,400);
img = createImage(1000,10);

  }

function draw() {
img.loadPixels();

   for(let x=0; x<img.width; x++){
     for (let y=0; y<img.height;y++){

    let n = (x * img.width + y) * mouseX;
    let c1 = sin((frameCount + n)*0.02) *221;
    img.set(x,y,color(c1));
     }
   }

img.updatePixels();
image(img,0,0,width,height);


}
