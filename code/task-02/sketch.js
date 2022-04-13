const sketchHeight = 400;
const sketchWidth = 400;

let boxWidth = 200;
let boxHight = 200;

let stringVariable = "Hello world";
let intVariable = 1;
let floatVariable = 1.5;
let booleanValue = true; // false

function preload() {
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHight);
  console.log(sketchWidth);
}

function draw() {
  background(0);

  fill(255);

  rect(
    (sketchWidth - boxWidth) / 2,
    (sketchHight - boxHight) / 2,
    boxWidth,
    boxHeight
  );

  const smallWidth = boxWidth * 0.5;
  const smallHight = boxHight * 0.25;

  fill("red");

  rect(
    (sketchWidth - smallWidth) / 2,
    (sketchHight - smallight) / 2,
    smallWidth,
    smallHeight
  );
}
