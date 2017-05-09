
var home = 0;
var homeScore = 0;
var away = 0;
var awayScore = 0;
var td = 6;
var fg = 3;
var down = 1;
var yardsToGo = 10;
var currentDown = 1;
var remaining = 6;
var rushYardsGained = 0;
var rushingYards;



function homeTD (){
    homeScore = homeScore + td;
    home = homeScore;

    console.log('homescore ', home);
    document.getElementById("home").innerHTML = home;


}
function homeFG (){
    homeScore = homeScore + fg;
    home = homeScore;

    console.log('homescore ', home);
    document.getElementById("home").innerHTML = home;

}


function awayTD(){

    awayScore = awayScore + td;
    away= awayScore;

    document.getElementById("away").innerHTML = away;

    console.log('away score ', awayScore);

}

function awayFG(){
    awayScore = awayScore + fg;
    away = awayScore;

    document.getElementById("away").innerHTML = away;


}

function downChecker (){


  currentDown = currentDown + 1;
  console.log("current down is ", currentDown);

  rushingYards = Math.floor((Math.random() * 10) + 1);
  console.log("rushing yards ==== ", rushingYards);
  yardsToGo = yardsToGo - rushingYards;
  console.log('yardsToGo ===', yardsToGo);
  document.getElementById("currentDownDisplay").innerHTML = currentDown;
  document.getElementById("yardsRemaining").innerHTML = yardsToGo;

  rushingScripts(rushingYards);

  if (currentDown == 4){
    console.log("its 4th down!!!");
    down = 1

  } else if (yardsToGo < 0){

      currentDown = 1;
      yardsToGo = 10;
      console.log("move the chains");
      document.getElementById("yardsRemaining").innerHTML = yardsToGo;
      document.getElementById("currentDownDisplay").innerHTML = currentDown;


  }
}


function rushingScripts(rushingYards){
    var i = 2;

    // Math.floor((Math.random() * 3));
    var rushingScript = new Array();
          rushingScript[0] = "RB1 rushes to the left for 5 yards";
          rushingScript[1] = "RB1 rushes up the middle for " + rushingYards + " yards";
          rushingScript[2] = "RB1 rushes to the right for a slight gain";
          rushingScript[2] = "RB1 rushes up the middle for " + rushingYards + " yards";

          document.getElementById('gameLog').innerHTML += rushingScript[i];
          document.getElementById('gameLog').innerHTML += '<br/>';

    }
