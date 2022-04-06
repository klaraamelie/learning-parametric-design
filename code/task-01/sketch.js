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
  line(200,250,280,20);  
  strokeWeight(2,5);
  point(20, 20);
  point(380, 380);

  
  
        
  
}