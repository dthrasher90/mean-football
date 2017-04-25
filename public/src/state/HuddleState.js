
function nextDown(){

  game.down= game.down + 1;
  console.log("gameodwn  ", game.down);
  return game.down;
}





var HuddleState  = {
         preload: function(){
            game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

            game.load.image('field', 'footballfield.jpg');
            game.load.image('wr1', 'reddot.png');
            game.load.image('wr2', 'reddot.png');
            game.load.image('wr3', 'reddot.png');
            game.load.image('wr4', 'reddot.png');
            game.load.image('qb', 'reddot.png');
            game.load.image('lt', 'reddot.png');
            game.load.image('lg', 'reddot.png');
            game.load.image('ct', 'reddot.png');
            game.load.image('rg', 'reddot.png');
            game.load.image('rt', 'reddot.png');
            game.load.image('football','football.png');

          },

          create:  function(){

          console.log("in HuddleState");
          nextDown();

          var field = this.game.add.button(15, 50, 'field');
              field.scale.setTo(1.1);
              field.anchor.setTo(0);
// =========================SCOREBOARD CREATED====================================================================
          var scoreTextHome, scoreTextAway, Time, GameLog, DownLog, down;
          var homeScore= 0;
          var awayScore =0;

          console.log("down === ", game.down);

          // scoreTextHome = this.add.text(0.1, 0, 'Home: '+ homeScore, {font: '20px Press Start 2P',fill: '#ffffff' });
          // scoreTextAway = game.add.text(0.1, 21, 'Away: ' + awayScore, {font: '20px Press Start 2P', fill: '#ffffff' });
          // Time = this.game.add.text(310, 0, 'Time: 00:00', {font: '20px Press Start 2P', fill: '#ffffff' });
          // DownLog = game.add.text(650, 0,  game.down + ' & 10 ',{font: '20px Press Start 2p', fill: '#ffffff' });


          breakHuddle = game.add.text(430, 400, "BREAK!!", {font: '24px Press Start 2p', fill: '#ffffff'});
          breakHuddle.inputEnabled = true;
          breakHuddle.events.onInputDown.add(switchStateToGameAction, this);

          // checkdown(game);



function switchStateToGameAction(){
    game.state.add('GameActionState', GameActionState);
    game.state.start('GameActionState');
    }

function switchStateToHuddle(){
    game.state.add('HuddleState', HuddleState);
    game.state.start('HuddleState');
    }




//create function bracket --- do not erase
},


          update: function(){
;
          }

//-------------************ End Huddle State*********************-------------
};
