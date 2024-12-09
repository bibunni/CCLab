
let obj1, obj2, obj3, bigobj3, page4, pg4words1, pg4words2, pg4words3, pg4words4;

function preload() {
  obj1 = loadImage("assets/obj1.png");
  obj2 = loadImage("assets/obj2.png");
  obj3 = loadImage("assets/obj3.png");
  bigobj3 = loadImage("assets/bigobj3.png");
  page4 = loadImage("assets/page4.png");
  pg4words1 = loadImage("assets/pg4words1.png");
  pg4words2 = loadImage("assets/pg4words2.png");
  pg4words3 = loadImage("assets/pg4words3.png");
  pg4words4 = loadImage("assets/pg4words4.png");
}

function setup() {
  let canvas = createCanvas(840, 650);
  canvas.parent("p5-canvas-container3");
  background(237, 244, 255);
  image(page4, 0, 0);
}

function mousePressed() {
  if (mouseX > 610 && mouseX < 780 && mouseY > 65 && mouseY < 475) {
    image(pg4words1, 0, 0);
  }

  if (mouseX > 65 && mouseX < 230 && mouseY > 285 && mouseY < 370) {
    image(pg4words2, 0, 0);
  }

  if (mouseX > 55 && mouseX < 280 && mouseY > 400 && mouseY < 490) {
    image(pg4words4, 0, 0);
  }

  if (mouseX > 135 && mouseX < 265 && mouseY > 80 && mouseY < 220) {
    image(pg4words3, 0, 0);
  }
}

function draw() {
  image(bigobj3, 0, 0);
}