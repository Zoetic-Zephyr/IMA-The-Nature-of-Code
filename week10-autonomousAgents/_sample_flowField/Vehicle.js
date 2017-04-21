"use strict";

class Vehicle {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
    this.angle = 0;
    this.maxDesiredVelocity = 5;
    this.maxSteerForce = 0.1;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle = this.vel.heading();
  }
  flow(angle) {
    // here!
  }
  applyForce(force) {
    this.acc.add(force);
  }
  checkEdges() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }
  display(){
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    noStroke();
    fill(0);
    triangle(0,0,-20,8,-20,-8);
    pop();
  }
}