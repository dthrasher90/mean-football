function app(){
  console.log("game logic folder");

function checkCatch( newBallSpotx, newBallSpoty, oldBallSpotx){
  console.log(newBallSpotx, newBallSpoty);
  var d20 = 15;
//  Math.floor((Math.random() * 20) + 1);
  console.log(d20);
  console.log(oldBallSpotx)

      if (d20 > 10) {
       console.log("wr caught the ball");
       console.log("old/new  ", newBallSpotx, oldBallSpotx)
       var passing = (newBallSpotx - oldBallSpotx)/6;

       console.log("passing yard stats  = ", passing);

     } else {
       console.log("incompelte pass");

      //  console.log("yards = ",newXYards, oldXYards);

     }

}

function checkDown(){

  console.log("check down ", game.down);

}
