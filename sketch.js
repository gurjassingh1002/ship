var seaimage,sea,ship,shipimage;
function preload(){
seaimage=loadImage("sea.png");
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
sea=createSprite(200,200);
sea.addImage(seaimage);
sea.scale=0.25;
sea.velocityX=-3;
ship=createSprite(200,200);
ship.addAnimation(shipimage);
}

function draw() {
  background("blue");
  if(sea.x<0){
  sea.x=sea.width/8;
  }
 drawSprites()
}