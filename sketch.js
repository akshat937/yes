
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   holdingObject= new Roof(400,250,200,20);
   bobObject1 = new Bob(400,450,30);
   bobObject2 = new Bob(410,450,30);
   bobObject3 = new Bob(420,450,30);
   bobObject4 = new Bob(390,450,30);
   bobObject5 = new Bob(380,450,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 holdingObject.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
}



