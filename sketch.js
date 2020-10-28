const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var helicopter,package;
helicopterIMG,packageIMG;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var helicopter_options ={
        isStatic: true
    }
    var package_options={
        restitution: 1.0
    }

    helicopter = Bodies.rectangle(200,390,200,20,helicopter_options);
    World.add(world,helicopter);
    helicopter.addImage(helicopterIMG);
    
    package=Bodies.circle(200,100,20,package_options);
    World.add(world,ball);
    package.addImage(packageIMG);

    console.log(helicopter);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
	ellipseMode(RADIUS);
	if(keyCode=='DOWN ARROW'){
		package_options;
	}
    ellipse(package.position.x,package.position.y,20,20);
	rect(helicopter.position.x,helicopter.position.y,400,20);
	drawSprites();
}
