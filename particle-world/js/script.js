// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 127; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(0);

  let x = mouseX;
  let y = mouseY;
  let dia = random(12.7, 50);
  let particle = new Particle(x, y, dia);
  particles.push(particle);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.burst();
    p.flicker();
    p.display();
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    if (p.isComp == true) {
      particles.splice(i, 1);
    }
  }

  //candle
  noStroke();
  fill(214, 207, 176);
  rect(width / 2, height / 2 + 30, 80, 300);
  fill(100);
  rect(width / 2 + 35, height / 2 - 15, 10, 45);
}

class Particle {
  // constructor function
  constructor(x, y, dia) {
    // properties (variables): particle's characteristics
    this.x = x;
    this.y = y;
    this.dia = dia;
    this.xSpeed = random(-4, 4);
    this.ySpeed = random(-1, 3);
    this.isDone = false;
    this.isComp = false;

    this.r = random(230, 255);
    this.g = random(100, 150);
    this.b = random(10, 70);

    this.burstTime = 1.0;
    this.burstTimer = random(0.08, 0.3);

    this.lifespan = 1.0;
    this.lifeReduce = random(0.01, 0.07);

  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.isDone == true) {
      this.ySpeed = random(-5, -3);
      this.xSpeed = random(cos(frameCount * 0.08), cos(frameCount * 2));
    }
  }
  burst() {
    if (this.burstTime > 0) {
      this.burstTime -= this.burstTimer;
    } else {
      this.burstTime = 0;
      this.isDone = true;
    }
  }
  flicker() {
    if (this.isDone == true) {
      if (this.lifespan > 0) {
        this.lifespan -= this.lifeReduce;
      } else {
        this.lifespan = 0;
        this.isComp = true;
      }
    }
  }
  display() {
    // particle's appearance
    push();
    noStroke();
    fill(255, 160, 10, 5);
    circle(mouseX, mouseY, random(60, 130));
    pop();

    push();
    translate(this.x, this.y);
    fill(this.r, this.g, this.b);
    noStroke();
    circle(0, 0, this.dia * this.lifespan);
    pop();
  }
}
