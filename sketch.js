const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options ={
        isStatic: true
    }
    //box=Bodies.rectangle(200,100,50,50,options);
    //World.add(world,box);
    ground = Bodies.rectangle(200,390,200,20,options);
    World.add(world,ground); 

    var ball_opt ={
        restitution: 1.0
    }
    ball = Bodies.circle(200,100,20,ball_opt);
    World.add(world,ball);
    // console.log(ground);
}

function draw(){
    background(0);
    rectMode(CENTER);
    Engine.update(engine);
    //rect(box.position.x,box.position.y,50,50);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}