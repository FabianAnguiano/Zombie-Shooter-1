function preload() {

  bgIMG = loadImage("assets/bg.jpeg");
  playerShooterIMG = loadImage("assets/shooter_2.png");
  playerShootingIMG = loadImage("assets/shooter_3.png")
  zombieIMG = loadImage("assets/zombie.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2,displayHeight/2)
  bg.addImage("graveyard",bgIMG);
  bg.scale = 1.2;
  
  player = createSprite(200,500);
  player.addImage(playerShooterIMG);
  player.scale = 0.5;

}

function draw() {
  background("black");

  if(keyDown("left")) {
    player.x -= 10;
  }

  if(keyDown("right")) {
    player.x += 10;
  }

 
//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  player.addImage(playerShooterIMG)

}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(playerShootingIMG)
}
  //calling function
  spawnZombies();
  
  drawSprites();
}

function spawnZombies() {

  if(frameCount % 50 == 0) {
  var zombie = createSprite(1500,500);
  zombie.y = Math.round(random(150,450));
  zombie.addImage("Zombie",zombieIMG,);
  zombie.scale = 0.2;
  zombie.velocityX = -5;
  }

}