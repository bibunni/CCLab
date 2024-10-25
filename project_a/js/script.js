let x, y;
let xSpeed = 1.27;
let ySpeed = 1.27;
let neo = 127;
x = 0;
y = 0;
let elwidth, elheight;
let p1 = 17;
// let p2 = 100;
let p3 = 10;
// let p4 = 75;
let dia = 40;

function setup() {
    createCanvas(800, 500);
    wallpaper();
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");
    angleMode(DEGREES);
}

function draw() {
    wallpaper();

    rotatingshape(x, y);
    x = x + xSpeed;
    y = y + ySpeed;
    if (x >= width || x < 0) {
        xSpeed = -xSpeed;
    }
    if (y >= height || y < 0) {
        ySpeed = -ySpeed;
    }
}

function rotatingshape(x, y) {
    let d = dist(mouseX, mouseY, x, y);
    let f = map(d, 0, width, 0.017, 127);
    translate(x, y);

    for (let angle = 0; angle <= 360; angle += 45) {
        if (mouseIsPressed) {
            stroke(255, 0, 0);
            fill(200, 200, 0, 0.0127);
        } else {
            stroke(255, f);
            strokeWeight(3);
            fill(200, 200, 0, f);
        }
        let elwidth = random(17, 100);
        let elheight = random(10, 75);
        rotate(frameCount * 1.27);
        rect(0, 0, elwidth, elheight);
    }
}

function mousePressed() {
    if (mouseX < 425 && mouseX > 375) {
        if (mouseY > 225 && mouseY < 275) {
            // y = mouseY;
            ySpeed = 17;
            // x = mouseX;
            xSpeed = 17;
            noFill();
            strokeWeight(4);
            stroke(255);
            circle(width / 2, height / 2, dia);
            dia = dia + 4;
        }
    } else {
        xSpeed = 1.27;
        ySpeed = 1.27;
        let elwidth = random(17, 100);
        let elheight = random(10, 75);
    }
}

function wallpaper() {
    background(0);

    strokeWeight(3);
    stroke(21);

    push();
    fill(17);
    circle(width / 2, height / 2, 250);
    pop();

    push();
    noStroke();
    fill(21);
    circle(width / 2, height / 2, 190);
    pop();

    push();
    noFill();
    circle(width / 2, height / 2, 250);
    pop();

    push();
    fill(17);
    noStroke();
    circle(width / 2, height / 2, 40);
    pop();

    push();
    textAlign(CENTER);
    fill(127);
    text("20,000 Hz", width / 2, 200);
    pop();

    push();
    textAlign(CENTER);
    fill(127);
    text(
        "click anywhere after pressing the bell to release neutralizing sound waves.",
        width / 2,
        50
    );
}