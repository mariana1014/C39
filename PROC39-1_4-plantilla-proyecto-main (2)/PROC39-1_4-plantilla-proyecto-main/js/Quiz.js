class Quiz {
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
    
    contestant = new Contestant();
    
      contestant.getCount();
    
    question = new Question()
    question.display();
  
}

  play(){
    
    question.hide(); 

    background("Yellow");
    fill(0);
    textSize(30);
    text("Resultados del quiz",340, 50);
    text("----------------------------",330, 50);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*NOTA: ¡Los participantes que respondieron correctamente están resaltados en color verde!",20,230);

      for(var plr in allContestants){
        debugger;
        var correctAns = "2";
// Marca la condición cuando la respuesta del jugador y la respuesta correcta son iguales
if(correctAns === allContestants[plr].answer){
// Si son iguales, rellena con verde
fill("Green");
// Si no son iguales, rellena con rojo
}
else{
fill("Red");
}
       

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }
  }
}
