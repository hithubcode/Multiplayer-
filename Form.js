class Form{
    constructor(){
        this.input = createInput("Name");
        this.button= createButton("play");
        this.greeting= createElement("h2");
        this.title=createElement("h1") ;
        this.reset = createButton("Reset");
         }

         hide(){
            this.input.hide();
            this.button.hide();
            this.greeting.hide();
            this.title.hide();
            }
    display(){
       
       this.title.html("Multiplayer car Racing Game");
       this.title.position(displayWidth/2+250,100);
      
       this.button.position(displayWidth/2+350,displayHeight/2+250);
       this.input.position(displayWidth/2+300,displayHeight/2);
       this.reset.position(50,50);

       

       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           player.name= this.input.value();
           playerCount=playerCount+1;
           player.index=playerCount;
           player.update();
           player.updateCount(playerCount);
           this.greeting.html("Hello! Wecome "+player.name+" !!");
           this.greeting.position(displayWidth/2+250,displayHeight/2);
       })

       
       this.reset.mousePressed(()=>{
        player.updateCount(0)
        game.update(0)
    }
    )
    }
}
