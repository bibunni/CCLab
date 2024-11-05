/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  dancer = new BibiDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
class BibiDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.xSpeed = 1;
    this.ySpeed = 1;

  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.y += sin(frameCount * 0.1) * 0.8;
    if (this.y > height / 2 + 20 || this.y < height / 2 - 20) {
      this.ySpeed = -this.ySpeed;
    }
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    //legs
    arc(15, 90, 30, 65, 0, PI);
    arc(-15, 90, 30, 65, 0, PI);

    //arms
    push();
    rotate(cos(frameCount * 0.07) * 0.3);
    ellipse(-37, 33, 70, 25);
    //lightstick
    stroke(255);
    fill(180, 200, 234);
    circle(-60, 3, 30);
    fill(20);
    rect(-65, 13, 10, 40);
    rect(-70, 10, 20, 10);
    rect(-75, 3, 30, 10);
    pop();
    push();
    rotate(radians(45));
    ellipse(60, 5, 70, 25);
    pop();

    //shirt
    push();
    fill(180, 200, 234);
    quad(20, 0, 37, 90, -37, 90, -20, 0);
    pop();

    //make head move
    rotate(cos(frameCount * 0.07) * 0.1);
    //gem
    push();
    stroke(0);
    fill(180, 200, 234);
    beginShape();
    vertex(15, -40);
    vertex(13, -53);
    vertex(13, -53);
    vertex(23, -60);
    vertex(23, -60);
    vertex(35, -61);
    vertex(35, -61);
    vertex(44, -50);
    vertex(44, -50);
    vertex(45, -40);
    vertex(45, -40);
    vertex(28, -30);
    vertex(28, -30);
    vertex(15, -40);
    endShape();
    line(35, -61, 24, -52);
    line(35, -61, 35, -48);
    line(24, -52, 25, -39);
    line(35, -48, 25, -39);
    line(24, -52, 13, -53);
    line(24, -52, 35, -48);
    line(35, -48, 45, -40);
    line(23, -60, 24, -52);
    line(44, -50, 35, -48);
    pop();

    //head
    ellipse(0, -10, 90, 70);

    //facial details
    fill(0);
    ellipse(19, -7, 17, 20);
    ellipse(-19, -7, 17, 20);

    //blush lines
    stroke(227, 182, 181);
    line(19, 5, 18, 10);
    line(-22, 5, -23, 10);
    line(22, 5, 24, 5);
    line(24, 5, 23, 10);
    line(-19, 5, -17, 5);
    line(-17, 5, -18, 10);

    //mouth
    stroke(0);
    line(0, 13, 6, 9);
    line(0, 13, -6, 9);

    //eyes
    fill(255);
    noStroke();
    ellipse(-16, -9, 9, 12);
    ellipse(16, -9, 9, 12);
    ellipse(-23, -3, 3, 3);
    ellipse(23, -3, 3, 3);

    //pink head color
    beginClip();
    stroke(0);
    fill(255, 220, 219);
    ellipse(0, -45, 130, 70);
    endClip();

    ellipse(0, -10, 90, 70); //for some reason i need another white ellipse for the head


    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/