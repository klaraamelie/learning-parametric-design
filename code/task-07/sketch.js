function preload() {
  // preload assets
}

//const sketchHeight = 400;
//const sketchWidth = 400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  nofill();
  stroke(0);
  skrokeWeight();

  let radius = 0;
  beginShape();
  for (let angle = 0; angle < 720; angle += 10) {
    radius += 1;
    const x = radius * cos((Math.PI / 180) * angle);
    const y = radius * sin((Math.PI / 180) * angle);
    vertex(x + 200, y + 200);
  }
  endShape();
  //frameRate(5);

  noLoop();
}
