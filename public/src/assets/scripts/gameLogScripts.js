
function rushingScripts(){

var i = Math.floor((Math.random() * 3));
var rushingScript = new Array();
      rushingScript[0] = "RB1 rushes to the left for 5 yards";
      rushingScript[1] = "RB1 rushes up the middle for no game";
      rushingScript[2] = "RB1 rushes to the right for a slight gain";
      rushingScript[2] = "RB1 is stuffed for a loss";



      document.getElementById('gameLog').innerHTML += rushingScript[i];
      document.getElementById('gameLog').innerHTML += '<br/>';
  //
}
