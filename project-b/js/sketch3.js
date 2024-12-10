
let obj1, obj2, bigobj2, obj3, page3, pg3words1, pg3words2;

function preload() {
  obj1 = loadImage("assets/obj1.png");
  obj2 = loadImage("assets/obj2.png");
  bigobj2 = loadImage("assets/bigobj2.png");
  obj3 = loadImage("assets/obj3.png");
  page3 = loadImage("assets/page3.png");
  pg3words1 = loadImage("assets/pg3words1.png");
  pg3words2 = loadImage("assets/pg3words2.png");
}

function setup() {
  let canvas = createCanvas(840, 650);
  canvas.parent("p5-canvas-container2");
  background(237, 244, 255);
  image(page3, 0, 0);
}

function mousePressed() {
  if (mouseX > 95 && mouseX < 285 && mouseY > 280 && mouseY < 440) {
    image(pg3words1, 0, 0);
  }

  if (mouseX > 570 && mouseX < 770 && mouseY > 70 && mouseY < 220) {
    image(pg3words2, 0, 0);
  }
}

function draw() {
  image(bigobj2, 0, 0);
}
