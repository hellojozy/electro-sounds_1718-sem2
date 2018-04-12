function setup() {
  createCanvas(200,200);
  // background(0);
  slider = createSlider(10,100, 50);

  }

function draw() {
  background(0);
   {
  textSize(slider.value());
  text('zZz', 10, 100);
  fill(0, 102, 153);

}




}
