//Create variables here
var dog, happydog;
var dogImage, dogImage2;
var foodS,foodStock;
var database; 

function preload(){
  dogImage=loadImage("images/dogImg.png")
  dogImage2=loadImage("images/")
}

function setup(){
  createCanvas(500,500);
  database = firebase.database(); 
  foodStock=datebase.ref("Food"); 
  foodStock.on(value,readStock);
  dog=createSprite(250,250,20,20);
}


function draw() {  
  background(46,139,87); 
  drawSprites();

}



