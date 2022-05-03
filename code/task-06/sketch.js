function preload() {
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

const sketchWidth = 400;
const sketchHeight = 400;

let x = Math.random() * 400;
let y = Math.random() * 400;

let dx = 5;
let dy = 5;

let size = 20;

function draw() {
  background(0);
  fill(255);
  noStroke();
  //frameRate(24);

  for (let x = 0; x < 1; x += 0.01) {
    const y = Math.pow(Math.random(), 20);
    circle(random(0, sketchWidth), random(0, sketchHeight), y * 10);
  }

  circle(x, y, size);

  x += dx;
  y += dy;

  if (x > sketchWidth || x < 0) {
    dx *= -1;
  }
  if (y > sketchHeight || y < 0) {
    dy *= -1;
  }
}
