
let obj1, bigobj1, obj2, obj3, page2;

function preload() {
  obj1 = loadImage("assets/obj1.png");
  bigobj1 = loadImage("assets/bigobj1.png");
  obj2 = loadImage("assets/obj2.png");
  obj3 = loadImage("assets/obj3.png");
  page2 = loadImage("assets/page2.png");
}

function setup() {
  let canvas = createCanvas(840, 650);
  canvas.parent("p5-canvas-container1");
  background(237, 244, 255);
  image(page2, 0, 0);
}

function draw() {
  image(bigobj1, 0, 0);

  noStroke();
  fill(0);

  rect(60, 70, 210, 150);

  rect(545, 90, 150, 160);
  rect(670, 250, 127, 155);
}
