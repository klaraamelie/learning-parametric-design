const sketchWidth = 400;
const sketchHeight = 400;

const numPoints = 30;

// const angleDistance = 3;
// const maxAngle = 180;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

//function draw() {
//   for (let layer = 0; layer < 20; layer += 1) {
//     for (let angle = 0; angle < maxAngle; angle += angleDistance) {
//       // each layer the angle is offset
//       const rad = (Math.PI / 180) * (angle + layer * 2);

//       // we use the angle also as a radius in the polar function
//       // so the bigger the angle, the bigger the radius
//       const x = angle * cos(rad);
//       const y = angle * sin(rad);

//       // we also use the angle for the circle size
//       // growing angle, radius and size
//       circle(x + sketchWidth / 2, y + sketchHeight / 2, angle / 100);
//     }
//   }
//   noLoop();
// }

// beginShape();
// vertex(200, 200); // we need to add a startpoint
// bezierVertex(150, 20, 30, 20, 40, 0);
// endShape();

/* We use velocity to modify how fast
   the points move in the random directions.
   Higher velocity faster moving.
*/
const velocity = 3;

const points = [];
for (let p = 0; p < numPoints; p += 1) {
  points.push({
    x: Math.random() * sketchWidth,
    y: Math.random() * sketchHeight,
    vx: Math.random() * velocity,
    vy: Math.random() * velocity,
  });
}
function draw() {
  background(255, 50);
  fill(0);
  for (let p = 0; p < points.length; p += 1) {
    circle(points[p].x, points[p].y, 5);
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
