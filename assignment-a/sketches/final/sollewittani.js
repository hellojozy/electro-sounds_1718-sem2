function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);

  }


function draw(){

  if(mouseIsPressed) {
    ret();
    smalltri();
  } else {
    ret();
  }


}

function ret(){
  strokeWeight(10);
  translate(400,110);
  rect(0,0,400,400);

  for (var s = 20; s < 400; s = s + 20){
    line(0,s,400,s);
  }

}

function smalltri(){
  strokeWeight (0);
  triangle (50,200,200,50,350,200);
  triangle (50,200,200,350,350,200);

translate(40,200);
strokeWeight (10);
var n = 9;
var n1 = n-1;
var spacing = 20;
var lineLengthMult = 19;

for(var i=0; i<n; i++){
  var x = i * spacing;
  line (x, 0, x, -i * lineLengthMult);
  line (x, 0, x, i * lineLengthMult);

  var xOffset =n1 *spacing;
  var len = (n1 - i) * lineLengthMult;
  line (xOffset + x, 0, xOffset + x, -len);
  line (xOffset + x, 0, xOffset + x, len);
}

}
