var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageSprite1,packageSprite2;
var packageBody,ground
var side1,side2,side3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	packageSprite1=createSprite(width/2, 50, 10,10);
	packageSprite1.addImage(packageIMG)
	packageSprite1.scale=0.2

	packageSprite2=createSprite(width/2, 30, 10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2
	
	side1=createSprite(300,height-60,10,60)
	side2=createSprite(450,height-60,10,60)
	side3=createSprite(380,height-45,150,10)
     
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	packageBody1 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody1);
	
	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody2);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite1.x= packageBody1.position.x 
  packageSprite1.y= packageBody1.position.y 

  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 

  side1.shapeColor="red"
  side2.shapeColor="red"
  side3.shapeColor="red"
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody,false)
	Body.setStatic(packageBody1,false)
    Body.setStatic(packageBody2,false)
    
  }
}


   


