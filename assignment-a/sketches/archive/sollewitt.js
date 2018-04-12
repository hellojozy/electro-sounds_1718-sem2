function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);

  }


function draw(){

  ret();
  smalltri();
  // push();
  // rectbox();

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


   // line (59,200,59,180);
   // line (79,200,79,160);
   // line (99,200,99,140);
   // line (119,200,119,120);
   // line (139,200,139,100);
   // line (159,200,159,80);
   // line (179,200,179,60);
   // line (199,200,199,55);


}

//function smalltri(){
  //strokeWeight (0);
  //triangle (50,200,100,500,350,200);





// function rectbox(){
//
//
//   // translate(width / 2, height / 2);
//   // rotate(PI / 4.0);
//   // strokeWeight (0);
//   // rect(-500, 125, 220, 220);
//   //
//   // strokeWeight (10);
//   // line(-505,326,-490,340);
//   // line(-505,296,-460,340);
//   // line(-505,266,-430,340);
//   // line(-505,236,-400,340);
//   // line(-505,206,-370,340);
//   // line(-505,176,-340,340);
//   // line(-505,146,-310,340);
//   // line(-505,116,-280,340);
//   // line(-475,116,-280,310);
//   // line(-445,116,-280,280);
//   // line(-415,116,-280,250);
//   // line(-385,116,-280,220);
//   // line(-355,116,-280,190);
//   // line(-325,116,-280,160);
//   // line(-295,116,-280,130);
// }
