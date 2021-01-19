
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1, rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1 = new Bob(200, 350);
	bobObj2 = new Bob(140, 350);
	bobObj3 = new Bob(80, 350);
	bobObj4 = new Bob(260, 350);
	bobObj5 = new Bob(320, 350);

	roof = new Roof(200,100,300,20);
roof.debug = true;
	rope1= new Rope(bobObj1.body,roof.body, 0,0);
	rope2= new Rope(bobObj2.body,roof.body, -60*1,0);
	rope3= new Rope(bobObj3.body,roof.body, -60*2,0);
	rope4= new Rope(bobObj4.body,roof.body, 60*1,0);
	rope5= new Rope(bobObj5.body,roof.body, 60*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
 
  
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObj3.body,bobObj3.body.position,{x:-50,y:-45});

	}
}



