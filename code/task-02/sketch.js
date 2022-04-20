const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(5);
}

function draw() {
  background(0, 0, 51);
  fill("rgb(0,255,0)");
  noStroke();

  for (let y = 0; y < sketchHeight; y += random(2, 10)) {
    const circleDiameter = random(5, 30);
    circle(random(1, 400), random(1, 400), circleDiameter);
    y += circleDiameter;
  }
}
