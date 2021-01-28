var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,30,80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect = createSprite(150,100,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.shapeColor= "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }
  drawSprites();
}