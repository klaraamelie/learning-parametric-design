function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  stroke("red");
  line(0, 200, 100, 400);
  line(0, 150, 150, 400);
  line(0, 100, 200, 400);
  line(0, 50, 250, 400);
  line(0, 250, 50, 400);
  line(0, 300, 25, 400);
  line(0, 25, 300, 400);
  line(0, 10, 350, 400);
  line(0, 0, 400, 400);
  line(0, 350, 400, 340);
  line(0, 370, 400, 360);

  fill("pink");

  rect(150, 50, 150, 60);

  circle(350, 80, 80);

  // beginShape();
  // vertex(50, 100);
  // vertex(200, 150);
  // vertex(40, 20);
  // vertex(0, 20);
  // endShape(CLOSE);
  // strokeWheight(1);
}
