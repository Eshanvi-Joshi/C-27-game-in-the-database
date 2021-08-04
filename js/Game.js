class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100);

    Player.getPlayerInfo();

    //console.log(allPlayers)
    //allPlayers
    //player1:{name:"A",distance:0}
    //player2:{name:"B", distance:0}
    if(allPlayers !== undefined){
      var y = 130;
      for(var plr in allPlayers){ //plr = player1, player2

        //highlight the active window player in red
        if(plr === "player" + player.index){
          fill("red")
        }
        else{
          fill("black")
        }

        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, y);
        y = y + 20
      }
      }

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 50;
        player.update();
      }
  }
}
