let img;

function preload() {
  img = loadImage("assets/leveret.png");
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");

  cam = createCapture(VIDEO);
  cam.size(640, 480);
  cam.hide();
}

function draw() {
  cam.loadPixels();
  image(cam, 0, 0);
  // filter(THRESHOLD, map(mouseX, 0, width, 0, 1));

  //
  // background(0);
  // img.resize(640, 480);
  // image(img, 0, 0);

  // for (let i = 0; i < 20; i++) {
  //   let x = floor(random(width));
  //   let y = floor(random(height));
  //   let dia = random(5, 10);
  //   let c = cam.get(x, y);

  //   noStroke();
  //   fill(c);
  //   // rectMode(CENTER);
  //   circle(x, y, dia);
  // }

  // noStroke();
  // fill(c);
  // circle(mouseX, mouseY, 50);
  // console.log(c);
  // imageMode(CENTER);
}