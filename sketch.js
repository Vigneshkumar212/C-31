var score = 0 ;
var snake;
var siZE = 30;
var food;
var w;
var h;
  
function setup() {
  createCanvas(400, 400);
  w = floor(width / siZE);
  h = floor(height / siZE);
  frameRate(5);
  snake = new Snake();
  this.apple = loadImage("sprites/apple.png");  
  Food_x_y();
} 
  
function Food_x_y() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);
  
} 
  
function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    snake.Velocity(-1, 0);
  } else if (keyIsDown(RIGHT_ARROW)) {
    snake.Velocity(1, 0);
  } else if (keyIsDown(DOWN_ARROW)) {
    snake.Velocity(0, 1);
  } else if (keyIsDown(UP_ARROW)) {
    snake.Velocity(0, -1);
  } 

} 
  
function draw() {

  

  background(0);
  if (snake.eat(food)) {
    score = score +1;
    Food_x_y();
    
  }
  if (keyIsDown(32)) {
    text("Use Arrows To Move The Snake" ,20 , 50);
    text("You Die If You Go Out Of Screen " ,20 , 80);
    text("Or If You Hit Your Self",20,110)
    text("Eat The Apples To Grow Your Self " ,20 , 140);
    text("And Increase The Score",20,170)
  }

  textSize(20);
  fill("white")
  text("Your  Score:  "+score,250,20);
  
  text("Press SpaceBar For Rules",10,380);
  scale(siZE);
  
  
  
  snake.Adding_box();
  snake.Display();

  fill(255, 0, 0);

  if (snake.GameState()) {
    food.x = 500;
    food.y = 500; 
    fill(0,0,255);
    background(0, 0, 255);
    noLoop();
  }
  console.log(score);
  image(this.apple,food.x, food.y, 1, 1);
  
  
  
} 