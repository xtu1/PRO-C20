var background_img, cat1_img, cat2_img, mouse1_img, mouse2_img;
var cat, mouse; 

function preload() {
    background_img = loadImage("images/garden.png");
    cat1_img = loadImage("images/cat1.png");
    cat2_img = loadAnimation("images/cat2.png", "images/cat3.png" ); 
    mouse1_img = loadImage("images/mouse1.png");
    mouse2_img = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    
    mouse = createSprite(100,700,20,20);
    cat = createSprite(850,700,20,20);
    mouse.addImage(mouse1_img);
    cat.addImage(cat1_img);
    cat.scale = 0.2;
    mouse.scale = 0.2;

}

function draw() {

    background(background_img);
    keyPressed();
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0;
        mouse.velocityX = 0;
        cat.addAnimation("CatHappy", cat1_img);
        cat.changeAnimation("CatHappy");
        mouse.addAnimation("MouseHappy", mouse1_img);
        mouse.changeAnimation("MouseHappy");
        console.log("it works");
    }

    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouse2_img);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      
  }
  
  if (keyCode === LEFT_ARROW) {
    cat.addAnimation("catrunning", cat2_img);
    cat.changeAnimation("catrunning");
    
    cat.x = cat.x - 5;
  }
}
