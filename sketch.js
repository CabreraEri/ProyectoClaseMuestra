
//declaracion de variables 
var trex ,trex_running;

//funcion para cargar imagenes 
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png"); 
  
}

function setup(){
  createCanvas(600,200);
  //crear sprite del t-rex.
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  //Crear borde
  edges = createEdgeSprites();
//Cambia tamañode t-rex
  trex.scale = 0.6;
  trex.x = 50; 
}

function draw(){
  background("black");
   //impimir en consolo posision de Y
  console.log(trex.y);
 
  //Salta al oprimir latecla spoace
  if(keyDown("space")){
    trex.velocityY = -6;
  }
  /Agregar gravedad al t-rex/
  trex.velocityY = trex.velocityY + 0.5;
  //Evita que el trex caiga
  trex.collide(edges[3]);

  drawSprites();
  

}
