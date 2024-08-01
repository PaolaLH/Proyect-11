var sea, ship, ground, barco;
function preload()
{
  sea = loadImage("sea.png") ;
  ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png") ;
}

function setup(){
  createCanvas(400,400);
  ground = createSprite(300,200,400,100);
  ground.addImage("background", sea) ;
  ground.scale = 0.25 ;

  barco = createSprite(70,200,40,100) ;
  barco.addAnimation("ship", ship) ;
  barco. scale = 0.2 ;
}

function draw() {
  background("blue");

  ground.velocityX = -5 ;

  if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }

  drawSprites() ;
}