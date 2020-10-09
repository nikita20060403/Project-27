
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(250,350,30,30);
	bobObject2 = new Bob(310,350,30,30);
	bobObject3 = new Bob(370,350,30,30);
	bobObject4 = new Bob(430,350,30,30);
	bobObject5 = new Bob(490,350,30,30);
	roof = new Roof(375,150,350,20);
	rope1 = new Rope(bobObject1.body,roof.body,bobObject1.x-50,50);
	rope2 = new Rope(bobObject2.body,roof.body,bobObject2.x-50,50);
	rope3 = new Rope(bobObject3.body,roof.body,bobObject3.x-50,50);
	rope4 = new Rope(bobObject4.body,roof.body,bobObject4.x-50,50);
	rope5 = new Rope(bobObject5.body,roof.body,bobObject5.x-50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:50})


	}

}






