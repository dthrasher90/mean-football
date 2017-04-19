function app(){
  console.log("game logic folder");
}

function checkCatch(oldBallSpot, newBallSpotx, newBallSpoty){

  var d20 = 15;
//  Math.floor((Math.random() * 20) + 1);
  console.log(d20);

      if (d20 > 10) {
       console.log("wr caught the ball");

       var newXYards = +newBallSpotx;
       var oldXYards = +oldBallSpotx;

       game.passingYards = ("pass  ", newXYards - oldXYards)/10;
       console.log("payssing yard stats  = ", game.passingYards);

     } else {
       console.log("incompelte pass");
       var newXYards = +newBallSpotx;
       var oldXYards = +oldBallSpotx;

      //  var yards  = newBallSpotx - oldBallSpotx;
       console.log("yards = ",newXYards, oldXYards);

     }

}

function checkDown(){

  console.log("check down ", game.down);

}
