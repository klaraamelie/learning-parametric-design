const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(20);
  fill(55);

  for (let y = 0; y < sketchHeight; y += random(2, 10)) {
    const circleDiameter = random(5, 30);
    circle(random(1, 400), random(1, 400), circleDiameter);
    y += circleDiameter;
  }
}
