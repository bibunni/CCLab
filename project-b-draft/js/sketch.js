let ava1, ava2, ava3;
let bgart1, obj1, obj11, obj2, obj22, obj3, obj33;

function preload() {
  bgart1 = loadImage("assets/bgart1.png");
  obj1 = loadImage("assets/obj1.png");
  obj11 = loadImage("assets/obj11.png")
  obj2 = loadImage("assets/obj2.png");
  obj22 = loadImage("assets/obj22.png");
  obj3 = loadImage("assets/obj3.png");
  obj33 = loadImage("assets/obj33.png");
  // obj4 = loadImage("assets/obj4.png");
}

function setup() {
  let canvas = createCanvas(840, 650);
  canvas.parent("p5-canvas-container");
  background(237, 244, 255);
  image(bgart1, 0, 0);
  ava1 = new Object1(90, 25);
  ava2 = new Object2(600, 60);
  ava3 = new Object3(483, 250);
  // rectMode(CENTER);
  // noStroke();
  // fill(0);
  // rect(width / 2, height / 2 - 50, 800, 500);
}

function draw() {
  // ava1.click();
  ava1.display();
  ava1.checkMouse();

  if (ava1.hover == true) {
    image(obj11, 90, 25);
  }

  ava2.display();

  ava3.display();
}

class Object1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.hover = false;
  }
  checkMouse() {
    if (mouseX > 110 && mouseX < 210 && mouseY > 35 && mouseY < 220) {
      this.hover = true;
    } else {
      this.hover = false;
    }
  }
  // click() {
  //   if (this.hover == true) {

  //   }
  // }
  display() {
    push();
    translate(this.x, this.y)
    image(obj1, 0, 0);
    pop();
  }
}

class Object2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.hover = false;
  }
  checkMouse() {
    if (mouseX > 110 && mouseX < 210 && mouseY > 35 && mouseY < 220) {
      this.hover = true;
    } else {
      this.hover = false;
    }
  }
  // click() {
  //   if (this.hover == true) {

  //   }
  // }
  display() {
    push();
    translate(this.x, this.y)
    image(obj2, 0, 0);
    pop();
  }

} class Object3 {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.hover = false;
  }
  checkMouse() {
    if (mouseX > 110 && mouseX < 210 && mouseY > 35 && mouseY < 220) {
      this.hover = true;
    } else {
      this.hover = false;
    }
  }
  // click() {
  //   if (this.hover == true) {

  //   }
  // }
  display() {
    push();
    translate(this.x, this.y)
    image(obj3, 0, 0);
    pop();
  }
}