// P_2_1_2_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing size and position of circles in a grid
 *
 * MOUSE
 * position x          : circle position
 * position y          : circle size
 * left click          : random position
 *
 * KEYS
 * s                   : save png
 */
// 'use strict';

var tileCount = 10;
var actRandomSeed = 0;

var circleAlpha = 130;
var circleColor;

let size = 1;

function setup() {
  createCanvas(400, 400);
  background(64, 64, 64);
}

function draw() {
  translate(width / tileCount / 2, height / tileCount / 2);
  stroke(random(400), random(300), 190);
  strokeWeight(mouseY / 60);
  fill (64,64,64);
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      var shiftX = random(-1,mouseX) / 300;
      var shiftY = random(-1,10) / 10;

      ellipse(posX + shiftX, posY + shiftY, size);
    }

  }
  move();
  update();
}

function move() {
  size += 0.5;
}

function update() {
  if (size > 45) {
    size = 1;
  }
}

// function keyReleased() {
//   if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
// }
