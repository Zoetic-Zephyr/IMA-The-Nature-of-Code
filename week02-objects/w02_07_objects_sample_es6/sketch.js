// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 16 2017

"use strict";


var circles = [];
var gravity;


function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++) {
    circles.push(new Circle(width / 2, height / 2));
  }
  gravity = 1.0;
}


function draw() {
  background(0);

  for (var i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].checkBoundaries();
    circles[i].applyFriction(0.97);
    circles[i].applyGravity(gravity);
    circles[i].display();
  }
}


function keyPressed() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].xspeed = random(-30, 30);
    circles[i].yspeed = random(-30, 30);
  }
}


// object: Circle
class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = random(10, 30);
    this.xspeed = random(-10, 10);
    this.yspeed = random(-10, 10);
  }
  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  checkBoundaries() {
    // check the boundaries
    if (this.x < 0) {
      this.x = 0
      this.xspeed *= -1;
      this.applyFriction(0.9);
    }
    if (this.x > width) {
      this.x = width;
      this.xspeed *= -1;
      this.applyFriction(0.9);
    }
    if (this.y < 0) {
      this.y = 0;
      this.yspeed *= -1;
      this.applyFriction(0.9);
    }
    if (this.y > height) {
      this.yspeed *= -1;
      this.y = height;
      this.applyFriction(0.9);
    }
  }
  applyFriction(amount) {
    this.xspeed *= amount;
    this.yspeed *= amount;
  }
  applyGravity(g) {
    this.yspeed += g;
  }
  display() {
    push();

    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.dia, this.dia);

    pop();
  }
}