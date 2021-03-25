var canvas;
var music;
var block1,block2,block3,block4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,590,185,20);
    block1.shapeColor = "yellow"

    block2 = createSprite(290,590,185,20);
    block2.shapeColor = "pink"

    block3 = createSprite(480,590,185,20);
    block3.shapeColor = "orange"

    block4 = createSprite(670,590,185,20);
    block4.shapeColor = "red"


        //create box sprite and give velocity
    box = createSprite(random(20,750),200,20,20)
    box.shapeColor = "white"
    box.velocityY = 5;
    box.velocityX = 4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges = createEdgeSprites();
    box.bounceOff(edges);
    //add condition to check if box touching surface and make it box

    if(block1.isTouching (box) && box.bounceOff(block1)){
        box.shapeColor = "yellow"
        block1.shapeColor = "yellow"
        music.play();
    }
    if(block2.isTouching (box)){
        box.shapeColor = "pink";
        block2.shapeColor = "pink";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    if(block3.isTouching (box) && box.bounceOff(block3)){
        box.shapeColor = "orange"
        block3.shapeColor = "orange"
        music.play();
    }
    if(block4.isTouching (box) && box.bounceOff(block4)){
        box.shapeColor = "red"
        block4.shapeColor = "red"
        music.play();
    }
    drawSprites();
}