let sound, amp;

function preload() {
    sound = loadSound("assets/beat.mp3");
}

function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent("p5-canvas-container");

    amp = new p5.Amplitude;
}

function draw() {
    background(0);
    // let vol = map(mouseY, 0, height, 0.0, 1.0, true);
    // sound.setVolume(vol);

    let panVal = map(mouseX, 0, width, -1.0, 1.0, true);
    sound.pan(panVal);

    let rateVal = map(mouseY, 0, height, 0.1, 1.5, true);
    sound.rate(rateVal);

    let volume = amp.getLevel();
    let dia = map(volume, 0.1, 1.0, 30, 500);
    let r = map(volume, 0.1, 1.0, 0, 255);

    fill(r, 0, 0);
    circle(width / 2, height / 2, dia);
}

function mouseClicked() {
    if (sound.isPlaying == false) {
        sound.play();
    } else {
        sound.stop();
    }

}