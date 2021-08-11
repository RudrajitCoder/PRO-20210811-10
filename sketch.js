var seaImage, sea;
var ship, ship_running, ship_running_light, edges;

function preload(){
  ship_running = loadAnimation("ship-2.png","ship-1.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(700,500);
  
  sea=createSprite(200,180,700,500);
  sea.addImage("SEA",seaImage);
  sea.velocityX=-10;

  // creating ship
  ship = createSprite(300,300,20,50);
  ship.addAnimation("running", ship_running);

  //adding scale and position to ship
  ship.scale = .3;
  ship.x = 100;
  
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the ship
  console.log(ship.y)
  
  
  if(sea.x<0){
  sea.x=sea.width/2
  }

  //stop ship from falling down
  drawSprites();
}