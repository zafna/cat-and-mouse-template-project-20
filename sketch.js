var garden,gardenImage;
var cat,catSitting,catWalking,catStanding;
var mouse,mouseEating,mouseTeasing,mouseStanding;

function preload() {
    //load the images here
gardenImage=loadImage("images/garden.png");
catSitting=loadImage("images/cat1.png");
catWalking=loadAnimation("images/cat2.png","images/cat3.png");
catStanding=loadAnimation("images/cat4.png");
mouseEating=loadImage("images/mouse1.png");
mouseTeasing=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseStanding=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    garden= createSprite(500,400,500,400)
    garden.addImage(gardenImage)

    //create tom and jerry sprites here
    cat= createSprite(700,600);




    mouse= createSprite(200,600);




}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide





    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){






}

}
