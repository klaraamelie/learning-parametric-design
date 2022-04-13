function preload(){
  // preload assets
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,51);
  fill('rgba(0,0,0,0)');
  stroke(255);
  strokeWeight(1)
  circle(200, 200, 200 );
  circle(50,285,50);
  circle(100, 250, 90 );
  arc(
    200, 200, 
    280, 280, 
    Math.PI / 180 * -70,
    Math.PI / 180 * 100,
    OPEN);

    arc(
      199, 199, 
      220, 220, 
      Math.PI / 180 * -90,
      Math.PI / 180 * 60,
      OPEN);
    
      arc(
        200, 200, 
        240, 240, 
        Math.PI / 180 * -80,
        Math.PI / 180 * 85,
        OPEN);

  strokeWeight(2,5);
  point(20, 20);
  point(380, 380);



  function setup() {
    createCanvas(400,400);
  }
  
  function draw(){
    background('#CF5D42');
  
    noStroke();
  
    fill('#7CA2D7');
    arc(
      200, 200,
      300, 300,
      Math.PI / 180 * -90,
      Math.PI / 180 * 90,
      CHORD
    );
  
    fill('#E5C762');
    arc(
      200, 200,
      200, 200,
      Math.PI / 180 * -90,
      Math.PI / 180 * 90,
      CHORD
    );
  
    fill('#D8846A');
    arc(
      200, 200,
      100, 100,
      Math.PI / 180 * -90,
      Math.PI / 180 * 90,
      CHORD
    );
  
    fill('#D9D2C8');
    arc(
      200, 200,
      300, 300,
      Math.PI / 180 * 90,
      Math.PI / 180 * 270,
      CHORD
    );
  
    fill('#2D2D2D');
    arc(
      200, 200,
      200, 200,
      Math.PI / 180 * 90,
      Math.PI / 180 * 270,
      CHORD
    );
  
    noLoop();
  }
  
  
        
  
}