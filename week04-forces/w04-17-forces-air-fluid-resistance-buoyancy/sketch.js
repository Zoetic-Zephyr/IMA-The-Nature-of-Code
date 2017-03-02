var WATER_SURFACE = 400;
var GRAVITY_MAGNITUDE = 1;


var particles = [];


function setup() {
  createCanvas(500, 700);
  background(0);

  particles.push(new Particle(100, 0));
  particles.push(new Particle(250, 0));
  particles.push(new Particle(400, 0));
}


function draw() {
  background(0);

  // water
  fill(0, 0, 100);
  rect(0, WATER_SURFACE, width, height - WATER_SURFACE);


  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];

    p.checkBoundaries();

    var gravity = createVector(0, GRAVITY_MAGNITUDE * p.mass);
    p.applyForce(gravity);


    var friction = p5.Vector.mult(p.vel, -1);
    //friction.normalize();
    // resistance
    if (p.pos.y < WATER_SURFACE) {
      // air resistance
      friction.mult(0.1);
    } else {
      // liquid resistance
      friction.mult(0.95);
      // buoyancy
      var buoyancy = createVector(0, -15);
      p.applyForce(buoyancy);
    }
    p.applyForce(friction);

    // update
    p.update();

    // display
    p.display();
  }
}