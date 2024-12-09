
let obj1, obj2, bigobj2, obj3, page3;

function preload() {
  obj1 = loadImage("assets/obj1.png");
  obj2 = loadImage("assets/obj2.png");
  bigobj2 = loadImage("assets/bigobj2.png");
  obj3 = loadImage("assets/obj3.png");
  page3 = loadImage("assets/page3.png");
}

function setup() {
  let canvas = createCanvas(840, 650);
  canvas.parent("p5-canvas-container2");
  background(237, 244, 255);
  image(page3, 0, 0);
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
  image(bigobj2, 0, 0);

  noStroke();
  fill(0);

  rect(95, 280, 190, 160);

  rect(570, 70, 200, 150);
  rect(700, 240, 90, 60);
}
