var sport, videogame;




function setup() {

  createCanvas(800,400);
  sport=createSprite(400, 200, 150, 50);
  sport.shapeColor='green';
  videogame=createSprite(200,150,100,50);
  videogame.shapeColor='green';

}

function draw() {
  background(255,255,255);  

sport.x = mouseX;
sport.y = mouseY;

if(sport.x-videogame.x<sport.width/2+videogame.width/2 && 
  videogame.x-sport.x<sport.width/2+videogame.width/2 && 
  sport.y-videogame.y<sport.height/2+videogame.height/2 && 
  videogame.y-sport.y<sport.height/2+videogame.height/2){
    sport.shapeColor='red';
    videogame.shapeColor='red';
    
}
else{
  sport.shapeColor='green';
  videogame.shapeColor='green';
}

console.log(sport.y-videogame.y);

  drawSprites();
}