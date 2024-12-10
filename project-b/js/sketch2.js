
let obj1, bigobj1, obj2, obj3, page2, pg2words1, pg2words2, pg2words3;

function preload() {
  obj1 = loadImage("assets/obj1.png");
  bigobj1 = loadImage("assets/bigobj1.png");
  obj2 = loadImage("assets/obj2.png");
  obj3 = loadImage("assets/obj3.png");
  page2 = loadImage("assets/page2.png");
  pg2words1 = loadImage("assets/pg2words1.png");
  pg2words2 = loadImage("assets/pg2words2.png");
  pg2words3 = loadImage("assets/pg2words3.png");
}

function setup() {
  let canvas = createCanvas(840, 650);
  canvas.parent("p5-canvas-container1");
  background(237, 244, 255);
  image(page2, 0, 0);
}

function mousePressed() {
  if (mouseX > 60 && mouseX < 270 && mouseY > 70 && mouseY < 220) {
    image(pg2words1, 0, 0);
  }

  if (mouseX > 545 && mouseX < 695 && mouseY > 90 && mouseY < 250) {
    image(pg2words2, 0, 0);
  }

  if (mouseX > 670 && mouseX < 797 && mouseY > 250 && mouseY < 405) {
    image(pg2words3, 0, 0);
  }
}

function draw() {
  image(bigobj1, 0, 0);
}
