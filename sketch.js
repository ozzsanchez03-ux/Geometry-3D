function setup() {
    createCanvas(710, 400, WEBGL);
    angleMode(DEGREES);
    normalMaterial();
}

function draw() {
    background(250);
      
    // Plane
  push();
  translate(250, 100, 0);
  rotateWithFrameCount();
  plane(70);
  pop();
  
  // Box
  push();
  translate(-75, -100, 0);
  rotateWithFrameCount();
  box(70, 70, 70);
  pop();

  // Cylinder
  push();
  translate(-250, -100, 0);
  rotateWithFrameCount();
  cylinder(70, 70);
  pop();

  // Cone
  push();
  translate(275, -100, 0);
  rotateWithFrameCount();
  cone(30, 100);
  pop();

  // Torus
  push();
  translate(-75, 100, 0);
  rotateWithFrameCount();
  torus(50, 20);
  pop();

  // Sphere
  push();
  translate(-75, 100, 0);
  rotateWithFrameCount();

  // Show black stroke to help visualize movement
  stroke(0);
  sphere(50);
  pop();

  // Ellipsoid
  push();
  translate(100, 100, 0);
  rotateWithFrameCount();
  ellipsoid(20, 40, 40);
  pop();
}

function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}
