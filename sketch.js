
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	bin1=new Bin();
	
	paper=new Paper(50,370,20);
    var groundOpt={
		isStatic:true
	}
   	ground=Bodies.rectangle(800,670,1600,10,groundOpt);
    World.add(world,ground);
	Engine.run(engine);
}
function draw() {
 
  background("white");
  bin1.display();
  paper.display();
 
  rectMode(CENTER);
  fill ("yellow");
  rect(ground.position.x,ground.position.y,1600,10);
}
function keyPressed(){
   if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:220,y:-220});
   }
}