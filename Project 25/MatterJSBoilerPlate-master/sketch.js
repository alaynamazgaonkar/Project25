
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1,line2,line3,ball,ball2,ground,dustbinimage;

function preload(){
  
}

function setup() {
createCanvas(1000,800);
  engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  line1  = new Dustbin2(800,760,180,20);
  line3  = new Dustbin(890,690,20,180);
  line2  = new Dustbin(710,690,20,180);
  //line4  = new Dustbin(400,380,800,50,180)
	 ground = new Ground(500,780)
   ball   = new Ball(400,100);
  // ball2  = new Ball(300,400)

	Engine.run(engine);
                                                
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  //Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:200})

//console.log(ball.body.position.y)

  drawSprites();
  line1.display();
  line2.display();
  line3.display();
  ball.display();
  //ball2.display();
  ground.display();

}

function keyPressed(){

  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:0})
  }
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:100} )
  }
}

