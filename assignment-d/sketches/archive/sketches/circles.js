/*
* Name: Dominique Perez
* Course: VCDS225_01FA17
* Assignment: Visual Poetry
* Project (optional): http://alpha.editor.p5js.org/full/HkVjjPT3Z
* Blog Post: www.dominiquexi.com
* Description: The visual poetry exercise posed as a challenge as there were more functions and components being applied
to the entire code. The text was a mix between what had inspired the design aesthetic and a few mantras that I live by,in other
words simple and to the point. What was used to build the code was: arrays, object arrays, methods, assigned properties, for loops
and background manipulation to create an echoed trail of shapes. For the basic elements of my pattern I chose the orbs
continuously moving and the mouse function to create varying dimensions when pressed. The visual poetry piece was influenced from
neon street signs that flick late into the night. The words are flicked to immitate the visual effect that would come from an aged neon
light. While the orbs are in constant moving flow, they never will stay still thanks to the for loop which helps allow it to gracefully create noise.
The mouse function was inspired by Pablo Picasso's use of shapes to create facial and body features. Although the circles when dragging do not
form direct shapes like Picasso's, they are meant to feel like a virtual abstract take on his use of shapes.
*/

// Variables/Arrays for both the orb (ellipse) figures and words.
var orbs = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 100; i++) {
    orbs[i] = new DrawOrbs();
  }
}


function draw() {
  background(64, 64, 64, 10);
    //   Orb (ellipse) figures that trail, used a for loop to run the code frequently.
    for (var i = 0; i < orbs.length; i++) {
//     Incorporated methods such as move and display for the orbs to move at a constant while being displayed in various colors.
    orbs[i].move();
    orbs[i].display();
  }

}

//Mouse Dragged function if dragged circles are displayed with random sizes and colors.
function mouseDragged() {
  strokeWeight(4);
  stroke(random(255), random(20), 100);
  fill(0);
  ellipse(mouseX, mouseY, random(100), random(100));
}
// DrawOrbs function with assigned properties by using the word "this." and the variable following afterwards.
function DrawOrbs() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.display = function() {
//   Prefered to use a stroke instead of a fill here since there is enough noise with both the moving orbs and the mouse.
  fill(random(400), random(300), 190);
  // stroke;
  ellipse(this.x, this.y, 20,20);
}
//   Again incorporating the use of assigned properties to make the orbs move back and forth and cling to each other. This creates the appearance of them spinning out of control for its x and y axis.
this.move = function() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-5, 5);
}


function move() {
  size += 0.5;
}

function update() {
  if (size > 45) {
    size = 1;
  }
}

}
