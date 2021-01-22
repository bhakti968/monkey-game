
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,200);
  monkey= createSprite(50,165,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  ground = createSprite(200,195,1000,5);
  ground.velocityX=-8;
  FoodGroup= createGroup();
  obstacleGroup= createGroup();
}


function draw() {
background("lightblue");
  text("survivaltime: "+survivaltime,100,50)
  survivaltime=Math.ceil(frameCount/frameRate());
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
 monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  spawnFood();
  spawnobstacle();
  drawSprites();
}

function spawnFood(){
  if (frameCount % 80 === 0) {
     banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(100,10));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    FoodGroup.add(banana);
}
}
function spawnobstacle(){
   if (frameCount % 300 === 0) {
    obstacle = createSprite(400,180,20,20);
    obstacle.addImage(obstacleImage);
     obstacle.scale=0.1;
    obstacle.velocityX = -4;
    banana.lifetime = 200;
    obstacleGroup.add(obstacle);
}
}



