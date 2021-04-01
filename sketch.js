var bgimg1,bgimg2,bgimg3,bgimg4,bgimg5;
var player1,player1img,player1fire;
var player2,player2img,player2fire;

var rand;
var ground;
var bullet1,bullet2,score=0,score2=0;
var bullet1img,bullet2img;

function preload(){
	bgimg1=loadImage("BATTLEGROUND/bg1.jpg");
	bgimg2=loadImage("BATTLEGROUND/bg2.jpg");
	bgimg3=loadImage("BATTLEGROUND/bg3.jpg");
	bgimg4=loadImage("BATTLEGROUND/bg4.jpg");
	bgimg5=loadImage("BATTLEGROUND/bg5.jpg");

	bullet1img=loadImage("bullet1.png");
	bullet2img=loadImage("bullet2.png");

	player1fire=loadAnimation("PLAYER2/b7.png");
	player2fire=loadAnimation("PLAYER1/a5.png")

	player1img=loadAnimation("PLAYER2/b6.png");
	player2img=loadAnimation("PLAYER1/a7.png");
}

function setup(){
	createCanvas(1000,600);

	bullet1=createSprite(900,480);
	bullet1.addImage(bullet1img);
	bullet1.scale=0.1;

	player1=createSprite(900,450);
	player1.addAnimation("STANDINGp",player1img);
	player1.addAnimation("FIRING",player1fire);
	player1.scale=0.5;

	player2=createSprite(100,450);
	player2.addAnimation("STANDING",player2img);
	player2.scale=0.5;

	ground=createSprite(500,570,1000,10);
	ground.visible=false;
}

function draw(){
	background(bgimg3);
	//console.log(player1.y);

	/*rand=Math.round(random(1,5));
	console.log(rand);
	switch(rand){
		case 1:background(bgimg1);
		break;
		case 2:background(bgimg2);
		break;
		case 3:background(bgimg3);
		break;
		case 4:background(bgimg4);
		break;
		case 5:background(bgimg5);
		break;
		default:
	}*/

	if(keyDown(UP_ARROW) && player1.y>350){
		player1.y=player1.y-25;
	}
	player1.y=player1.y+1;
	player1.collide(ground);

	if(keyWentDown("f")){
		bullet1.velocityX=-5;
		player1.changeAnimation("FIRING",player1fire);
		player1.scale=1;
		player1.y=500;
	}

	if(keyWentUp("f")){
		//bullet1.velocityX=-5;
		player1.changeAnimation("STANDINGp",player1img);
		player1.scale=0.5;
	}
	
	
	if(keyDown(DOWN_ARROW) && player2.y>350){
		player2.y=player2.y-25;
	}
	player2.y=player2.y+1;
	player2.collide(ground);

	drawSprites();
}


