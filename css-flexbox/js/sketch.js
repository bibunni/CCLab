function setup() {
  let canvas = createCanvas(800, 200);
  canvas.parent("p5-canvas-container");
  background(0);
}

function draw() {
  background(0)
  noStroke();
  circle(mouseX, mouseY, 20);
  //
}