function yo(){

  console.log("hi from game action state left to right");
}


var GameActionState  = {
   preload: function(){
      // game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
      // game.load.script('defensiveplays', '/playbook/defense/defensiveplays.js');
      game.load.image('field', 'footballfield.jpg');
      game.load.image('wr1', 'reddot.png');
      game.load.image('wr2', 'reddot.png');
      game.load.image('wr3', 'reddot.png');
      game.load.image('wr4', 'reddot.png');
      game.load.image('te1', 'reddot.png');
      game.load.image('te2', 'reddot.png');
      game.load.image('qb', 'reddot.png');
      game.load.image('rb1', 'reddot.png');
      game.load.image('lt', 'bluedot.png');
      game.load.image('lg', 'bluedot.png');
      game.load.image('ct', 'bluedot.png');
      game.load.image('rg', 'bluedot.png');
      game.load.image('rt', 'bluedot.png');
      game.load.image('de1', 'purpledot.png');
      game.load.image('de2', 'purpledot.png');
      game.load.image('dt1', 'purpledot.png');
      game.load.image('dt2', 'purpledot.png');
      game.load.image('cb1', 'greydot.png');
      game.load.image('cb2', 'greydot.png');
      game.load.image('fs', 'greydot.png');
      game.load.image('ss', 'greydot.png');
      game.load.image('mlb', 'orangedot.png');
      game.load.image('wlb', 'orangedot.png');
      game.load.image('slb', 'orangedot.png');
      game.load.image('football','football.png');


    },



//================================HUD Graphics ===============================================================
  create: function(qb, rb1, wr1, wr2, wr3, ct, rg, rt, lg, lt, football){

          game.world.setBounds();

          var field = game.add.sprite(15, 50, 'field');
              field.scale.setTo(1.1);
              field.anchor.setTo(0);

          function switchStateToCoachScreen(){
              game.state.add('HuddleState', HuddleState);
              game.state.start('HuddleState');
              }












//end of create brackets -------------
},

//============================GameButtons===========================================================


    update: function(wr3, wr1){




//end update brackt
},


};
