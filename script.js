//Logic
//Conditions
//Loops
//arrays
//constructors
//callbacks

//Constants
var startingHealth= 100;
var startingHits= 0;
var playerName= "PlayerName";

// Item Constructor HERE
var Obj = function(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){
        
    }
}



//global items placeholder HERE
var item = {
  forceField: new Obj("Force Field",5,"Shield UP"),
    rocketLancher: new Obj("Rocket Lancher",30,"Rocket"),
    flowerPower: new Obj("Flower Power",15,"Make Love Not War"),
};

var player = {
  name: "PlayerName",
  health: startingHealth,
  hits: startingHits,
  items:[item.forceField,item.rocketLancher,item.flowerPower],
  addMods: function(){
      var mod = 0;
    for(var i = 0; i < this.items.length; i++){
     mod+=this.items[i].modifier;
        
    }
    return mod;
  }
  slap: function() {
    this.hit(1);
  },
  punch: function() {
    this.hit(5);
  },
  kick: function() {
    this.hit(10);
  },
  hit: function(damage) {
    this.health -= damage;
    this.hits++;
    if (this.health <= 0) {
      this.health = 0;
     }
      this.health -= (damage - (damage * this.addMods()));   
    update();
  },
  reset: function() {
      this.health = startingHealth,
      this.hits = startingHits,
    update();
  },
}

function update() {
  document.getElementById("health").innerText = player.health;
  document.getElementById("name").innerText = player.name;
  document.getElementById("hits").innerText = player.hits;
   if(player.health <= 0){
         document.getElementById("player-panel").classList.add("panel-danger");
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger");
    }
  //IF HEALTH STATEMENT

  
}

update();