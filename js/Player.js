class Player {
  constructor(){
    this.index = null;
    this.name = null;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  //.update() only updates the values
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  ///.set() it overwrite or creates a completely new node
  //changes both key and the value
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance : this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",function(data){
      allPlayers = data.val();
    })
  }
}
