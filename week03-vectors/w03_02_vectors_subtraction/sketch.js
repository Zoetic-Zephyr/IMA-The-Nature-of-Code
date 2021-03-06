// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 20 2017

/**
 * Please have a look at the book page 54.
 * Static vs. Non-Static Functions
 * */


function setup() {
  createCanvas(500, 500);

  var vector1 = createVector(3, 2);
  var vector2 = createVector(4, 1);

  var newVector = p5.Vector.sub(vector1, vector2); // static
  vector1.sub(vector2); // non-static. the values of vector1 will change.

  print(newVector.toString());
  print(vector1.toString());
}


function draw() {
  noLoop();
}