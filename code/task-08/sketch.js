let numBalls = 29;
let spring = 0.2;
let gravity = 0.0;
let friction = -1;
let balls = [];

let r;
let g;
let b;

let rslider = 0;
let gslider = 0;
let bslider = 0;

function setup() {
  createCanvas(400, 400);
  textSize(15);
  //fill(255, 204);

  // create sliders
  rslider = createSlider(0, 255, 100);
  rslider.position(5, 410);
  gslider = createSlider(0, 255, 0);
  gslider.position(5, 430);
  bslider = createSlider(0, 255, 255);
  bslider.position(5, 450);

  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(20, 60),
      i,
      balls
    );
  }
}

function draw() {
  const r = rslider.value();
  const g = gslider.value();
  const b = bslider.value();

  fill("wite");
  background(r, g, b);
  text("red", rslider.x * 2 + rslider.width, 355);
  text("green", gslider.x * 2 + gslider.width, 375);
  text("blue", bslider.x * 2 + bslider.width, 395);

  fill(240);
  noStroke();
  balls.forEach((ball) => {
    ball.collide();
    ball.move();
    ball.display();
    ball.fill();
  });
}

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  //Kollidieren der Bälle
  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  fill() {}
}

function mousePressed() {
  //r = random(100, 255);
  //console.log(r);
}
