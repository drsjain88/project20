var bg
var tom,tomimage,tomimage1, tomimage2
var jerry,jerryimage,jerryimage1
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    tomimage = loadAnimation("images/cat1.png")
    tomimage1 = loadAnimation("images/cat2.png","images/cat3.png")
    tomimage2 = loadAnimation("images/cat4.png")
    jerryimage = loadAnimation("images/mouse1.png")
    jerryimage1 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryimage2 = loadAnimation("images/mouse4.png")
    
}
function setup() {
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600)
tom.addAnimation("tomsleep",tomimage)
tom.scale = 0.2
jerry = createSprite(200,600)
jerry.addAnimation("jerrystanding",jerryimage)
jerry.scale = 0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX = 0
    tom.addAnimation("tomlastimage",tomimage2)
    tom.x = 300
    tom.scale = 0.2
    tom.changeAnimation("tomlastimage")
    jerry.addAnimation("jerrylastimage",jerryimage2)
    jerry.scale = 0.2
    jerry.changeAnimation("jerrylastimage")

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX = -5
    tom.addAnimation("tomrunning",tomimage1)
    tom.changeAnimation("tomrunning")
    jerry.addAnimation("jerryteasing",jerryimage1)
    jerry.changeAnimation("jerryteasing")
}

}
