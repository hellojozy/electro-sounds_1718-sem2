var phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  phase = 0;
  speed = 0.03;
  maxCircleSize = 10;
  numRows = 60;
  numCols = 16;
  numStrands = 5;

  colorA = color(135, 206, 250);
  colorB = color(30, 144, 255);
}

function draw() {
  background(0);
  phase = frameCount * speed;

  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var y = map(col, 0, numCols, 50, width - 50);

      for(var row = 0; row < numRows; row += 1) {
        var x = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.3;
        var circleSize = sizeOffset * maxCircleSize;

        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}
