
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var ground;
var hammer;
var Stone1;

function setup() {

	var canvas = createCanvas(1200,1200);

	engine = Engine.create();
	world = engine.world;
	var x2 ={
		restitution:1.0
	}
	rubber=Bodies.circle(200,100,20,x2);
	World.add(world,rubber);

	ground = new Ground(600,height,1200,20);
	hammer=new Hammer(100,100) 
	Stone1=new Stone(700,320,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  fill("red");
  ellipseMode(RADIUS);
  ellipse(rubber.position.x,rubber.position.y,20,20);

  ground.display();
  hammer.display();
  Stone1.display();
  
  drawSprites();
 
}



