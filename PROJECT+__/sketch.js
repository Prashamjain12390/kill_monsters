const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var hero, slingshot;
var monster;
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;



function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
backgroundImg = loadImage("images/GamingBackground.png");    
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,windowWidth-50,20);
   monster=new Monster(1200,200,100,120);
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
    
    hero= new Hero(600,200,80,80);
    
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hero.body,{x:600, y:50});


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  hero.display();
  slingshot.display(); 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
monster.display();
}
function mouseDragged() {
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}