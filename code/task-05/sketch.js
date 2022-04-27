const sketchWidth = 400;
const sketchHeight = 400;

let angleOffset = 0;

function preload() {
  // preload assets
}

function setup() {
  createCanvas(400, 400);
  frameRate();
}

function draw() {
  background(200);

  //circle
  fill(255);
  strokeWeight(0);
  circle(200, 200, 30);

  //Rotorblatt 1
  stroke(255, 100);
  strokeWeight(2);

  for (let angle = 90; angle < 3060; angle += 10) {
    const radius = 15;
    const iradius = 150;

    const x = radius * cos((Math.PI / 180) * (angle + angleOffset));
    const y = radius * sin((Math.PI / 180) * (angle + angleOffset));

    const ix = iradius * cos((Math.PI / 180) * (angle + angleOffset));
    const iy = iradius * sin((Math.PI / 180) * (angle + angleOffset));

    line(x + 200, y + 200, ix + 200, iy + 200);
  }

  angleOffset += 1;
}
