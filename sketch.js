var car,carimg1,carimg2,carimg3,wall;
var speed,weight;
var deformation; 
function preload(){
  carimg1=loadImage("redcar.jpg");
  carimg2=loadImage("yelowcar.jpg");
  carimg3=loadImage("greencar.jpg");
}
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed;
}

function draw() {
  background("white");
  car.depth = wall.depth+1;
  console.log(deformation);
  if (car.collide(wall) )
     {
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500;
    if (deformation > 180) {
      car.addImage(carimg1);
    } 
       else 
            {
               if (deformation < 180 && deformation > 80) 
               {
                car.addImage(carimg2);
               }
                 else 
                      {
                        if (deformation < 80) 
                        {
                          car.addImage(carimg3);
                        }
                       }
            }
  }
  drawSprites();
}