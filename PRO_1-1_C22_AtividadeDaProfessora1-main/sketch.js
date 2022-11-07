const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fundo
var torre
var torre2 
var obj
var angle= 20
var maytrix=[]




function preload() {
 fundo= loadImage("./assets/background.gif")
 torre2= loadImage("./assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  obj=new caiao(125,130,130,100,angle)

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);
 
  torre = Bodies.rectangle(150,400, 160, 310, options);
  World.add(world,torre);
}

function draw() {
  image(fundo,0,0,1200,600)
  Engine.update(engine);
push();
imageMode(CENTER)
  image(torre2, torre.position.x , torre.position.y , 160,310 )
pop();
  rect(ground.position.x, ground.position.y, width *2, 1);
  obj.display()
  for(var I=0;I<maytrix.length;I++){
    exibition(maytrix[I]      )
  }
}
  
function keyPressed() {
  if (keyCode==87) {var obj2= new bola(obj.xix, obj.ipicilon)
  maytrix.push(obj2)
console.log("w")}

}
 function exibition(bolao) {
if(bolao){bolao.display()}} 

function keyReleased(){
  if(keyCode==87) {maytrix[maytrix.length-1].tiro()}

}
