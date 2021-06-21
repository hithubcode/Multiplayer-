class Game{
    constructor(){
 }

getState(){
var gameStateRef= database.ref("gameState");
gameStateRef.on("value",function(data){
    gameState=data.val();
})

}

update(state){
database.ref("/").update({
gameState:state
})

}

async start(){
if(gameState===0){
    player=new Player();
    var playerCountRef = await database.ref('playerCount').once("value"); 
    if(playerCountRef.exists()){
         playerCount = playerCountRef.val();
         player.getCount();
    }
    form= new Form();
    form.display();
}
car1= createSprite(200,200,);
car1.addImage(car1img);
car2= createSprite(400,200);
car2.addImage(car2img);
car3= createSprite(600,200);
car3.addImage(car3img);
car4= createSprite(800,200);
car4.addImage(car4img);
cars=[car1,car2,car3,car4];
}

play(){
    form.hide();
    background(groundimg); 
    Player.getPlayerInfo();
    if(allPlayers!==undefined ){
    var index=0;
    var x = 175;
    var y ;
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
    for(var plr in allPlayers  ){
        index=index+1;
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        if (cars[index-1]=== undefined){
            cars[index-1]={}
        }
        cars[index-1].x= x;
        cars[index-1].y=y;
        if (index === player.index){
            cars[index-1].shapeColor="red";
            fill("green");
            stroke(10);
            ellipse(x,y,60,60);
            camera.position.x= displayWidth/2;
            camera.position.y= cars[index-1].y;
        }
    }
    }
    drawSprites();
    if(keyDown(UP_ARROW)&& player.index!==null){
        player.distance=player.distance+1;
        player.update();
    }
    if(player.distance > 4000){
        game.update(2);
    }
}

end(){
    console.log("game ended");
}
}
