function preload() {
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

const sketchWidth = 400;
const sketchHeight = 400;

const numPoints = 2;

let x = Math.random() * 400;
let y = Math.random() * 400;

let x1 = Math.random() * 400;
let y1 = Math.random() * 400;

let dx = 20;
let dy = 13;

let size = 20;

function draw() {
  background("lightgrey");
  fill("darkblue");
  noStroke();
  frameRate(7);

  for (let x = 0; x < 1; x += 0.01) {
    const y = Math.pow(Math.random(), 5);
    circle(random(0, sketchWidth), random(0, sketchHeight), y * 40);
  }

  circle(x, y, size);
  circle(x1, y1, size);

  x += dx;
  y += dy;

  if (x > sketchWidth || x < 0) {
    dx *= -1;
  }
  if (y > sketchHeight || y < 0) {
    dy *= -1;
  }

  /* We use velocity to modify how fast
     the points move in the random directions.
     Higher velocity faster moving.
  */
  const velocity = 2;

  const points = [];
  for (let p = 0; p < numPoints; p += 1) {
    points.push({
      x: Math.random() * sketchWidth,
      y: Math.random() * sketchHeight,
      vx: Math.random() * velocity,
      vy: Math.random() * velocity,
    });
  }

  fill("darkorange");
  for (let p = 0; p < points.length; p += 25) {
    circle(points[p].x, points[p].y, 20);
    // move the point
    points[p].x += points[p].vx;
    points[p].y += points[p].vy;

    // reverse direction if point is outside the canvas area
    if (points[p].x > sketchWidth || points[p].x < 0) {
      points[p].vx *= -1;
    }
    if (points[p].y > sketchHeight || points[p].y < 0) {
      points[p].vy *= -1;
    }
  }
}
