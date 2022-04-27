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

  //const canvas = document.getElementById("canvas");
  //const ctx = canvas.getContext("2d");

  //ctx.arc(0, 0, 5, 0, 2 * Math.PI);
  //ctx.fillStyle = "blue";
  //ctx.fill();
  //ctx.rotate((45 * Math.PI) / 180);
  //ctx.translate(canvas.width / 2, canvas.height / 2);
  //ctx.fillStyle = "red";
  fill("pink");

  rect(150, 50, 150, 60);

  circle(350, 80, 80);

  beginShape();
  vertex(50, 100);
  vertex(200, 150);
  vertex(40, 20);
  vertex(0, 20);
  endShape(CLOSE);
  strokeWheight(1);
}
