var angle;

function setup() {
  createCanvas(800, 600);
  
  stroke(0);
  strokeWeight(2);
  angle = PI/2;
}

function draw() {
  background(255);
  angle = map(mouseX, 0, width, PI/2, 0);
  translate(width / 2, height);
  branch(200);
}


function branch(len) {
  var sw = map(len , 0, 200, 1, 30);
  strokeWeight(sw);
  
  line(0, 0, 0, -len);
  translate(0, -len);

  len = len * 2 / 3;

  if (len > 10) {
    push();
    rotate(angle);
    branch(len);
    pop();

    push();
    rotate(-angle);
    branch(len);
    pop();
  }
}