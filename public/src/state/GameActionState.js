function yo(){

  console.log("hi from game action");
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
  create: function(wr1, football, ct, lineOfScrimmage, newBallSpot){

          game.physics.startSystem(Phaser.Physics.ARCADE);


          console.log(" GAS new spots = ", newBallSpotx, newballSpoty);


          var field = game.add.sprite(15, 50, 'field');
              field.scale.setTo(1.1);
              field.anchor.setTo(0);



    var homeScore= 0;
    var awayScore =0;


        scoreTextHome = this.add.text(0.1, 0, 'Home: '+ homeScore, {font: '20px Press Start 2P',fill: '#ffffff' });
        scoreTextAway = game.add.text(0.1, 21, 'Away: ' + awayScore, {font: '20px Press Start 2P', fill: '#ffffff' });

        Time = this.game.add.text(310, 0, 'Time: 00:00', {font: '20px Press Start 2P', fill: '#ffffff' });

        DownLog = game.add.text(650, 0, '1 & 10 ',{font: '20px Press Start 2p', fill: '#ffffff' });
                GameLog= game.add.text(0, 400, 'Game Log',{font: '20px Press Start 2P', fill: '#cccc00' });




    var passLeft = this.game.add.text(0, 450, 'Pass Left', {font:'15px Press Start 2p', fill: '#ffffff' });
                  passLeft.inputEnabled = true;
                  passLeft.events.onInputDown.add(passPlayLeft, this);

    function passPlayLeft(lineOfScrimmage) {


                      var ct = this.game.add.sprite(newBallSpotx, newballSpoty, 'ct');
                      ct.scale.setTo(0.03);
                      var QBx = ct.x - 20;
                      var QBy = ct.y;
                      var qb = this.game.add.sprite(QBx, QBy, 'qb');
                      qb.scale.setTo(0.02);

                      var RGx = ct.x;
                      var RGy = ct.y + 20;

                      var rg = this.game.add.sprite(RGx, RGy, 'rg');
                      rg.scale.setTo(0.03);
                      var spriteTextRG = game.add.text(RGx, RGy, 'RG', {
                          font: '9px Press Start 2P'
                      });


                      var RTx = ct.x;
                      var RTy = rg.y + 20;
                      var rt = this.game.add.sprite(RTx, RTy, 'rt');
                      rt.scale.setTo(0.03);
                      var spriteTextRT = game.add.text(RTx, RTy, 'RT', {
                          font: '9px Press Start 2P'
                      });

                      var LGx = ct.x;
                      var LGy = ct.y - 20;
                      var lg = this.game.add.sprite(LGx, LGy, 'lg');
                      lg.scale.setTo(0.03);
                      var spriteTextLG = game.add.text(LGx, LGy, 'LG', {
                          font: '9px Press Start 2P'
                      });


                      var LTx = ct.x;
                      var LTy = lg.y - 20;
                      var lt = this.game.add.sprite(LTx, LTy, 'lt');
                      lt.scale.setTo(0.03);
                      var spriteTextLT = game.add.text(LTx, LTy, 'LT', {
                          font: '9px Press Start 2P'
                      });


                      var WR1x = ct.x;
                      var WR1y = ct.y - 150;
                      var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
                      wr1.scale.setTo(0.02);
                      var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
                          font: '9px Press Start 2P'
                      });


                      var WR2x = ct.x - 20;
                      var WR2y = ct.y - 80;
                      var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
                      wr2.scale.setTo(0.02);
                      var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
                          font: '9px Press Start 2P'
                      });

                      var WR3x = ct.x - 20;
                      var WR3y = ct.y - 50;
                      var wr3 = this.game.add.sprite(WR3x, WR3y, 'wr3');
                      wr3.scale.setTo(0.02);
                      var spriteTextWR3 = game.add.text(WR3x, WR3y, 'WR3', {
                          font: '9px Press Start 2P'
                      });


                      var football = this.game.add.sprite(ct.x, ct.y, 'football');
                            football.scale.setTo(0.08);

                      var tweenA = game.add.tween(wr1).to({
                          x: '+200'
                      }, 1700);
                      var tweenB = game.add.tween(wr2).to({
                          x: '+200'
                      }, 1500);
                      var tweenC = game.add.tween(wr3).to({
                          x: '+200'
                      }, 3000);

                      var tweenD = game.add.tween(lt).to({
                          x: '-35'
                      }, 2000);
                      var tweenE = game.add.tween(rt).to({
                          x: '-35'
                      }, 2000)
                      var tweenF = game.add.tween(lg).to({
                          x: '-20'
                      }, 2000);
                      var tweenG = game.add.tween(rg).to({
                          x: '-20'
                      }, 200);


                      var tweenH = game.add.tween(qb).to({
                          x: '-50'
                      }, 1800);

                      tweenA.start();
                      tweenB.start();
                      tweenC.start();
                      tweenD.start();
                      tweenE.start();
                      tweenF.start();
                      tweenG.start();
                      tweenH.start();

                      Base43Defense(passPlayLeft, ct);
                      game.physics.arcade.enable([qb, wr1, wr2, wr3, ct, rg, rt, lg, lt]);
                      qbPass();
                      function qbPass(lineOfScrimmage) {


                          oldBallSpot = football.y
                          console.log("old spot ", oldBallSpot);
                          var x =  Math.floor((Math.random() * 3) + 1);
                          console.log(x);
                          switch (x) {

                              case 1:

                              var tweenFootballA = game.add.tween(football).to({
                                  x: '+100',
                                  y: '-150'
                              }, 3000);
                                  tweenFootballA.start();
                                  tweenFootballA.onComplete.add(function newlocation (newBallSpot){
                                      newBallSpot = football.y;
                                      console.log("new spot ", newBallSpot );
                                      return lineOfScrimmage;

                                  });

                                  console.log('1');

                                  break;

                              case 2:


                              var tweenFootballB = game.add.tween(football).to({
                                  x: '+100',
                                  y: '-50'
                              }, 3000);
                                  tweenFootballB.start();
                                  tweenFootballB.onComplete.add(function newlocation (lineOfScrimmage){
                                      newBallSpot = football.y;
                                      console.log("new spot ", newBallSpot );
                                      return lineOfScrimmage;

                                    });
                                  console.log('2');

                                  break;

                              case 3:

                              var tweenFootballC = game.add.tween(football).to({
                                  x: '+100',
                                  y: '-100'
                              }, 3000);
                                  tweenFootballC.start();
                                  tweenFootballC.onComplete.add(function newlocation (lineOfScrimmage){
                                      newBallSpot = football.y;
                                      console.log("new spot ", newBallSpot );
                                      return lineOfScrimmage;

                                    });
                                  console.log('3');

                                  break;

                          }
                      }


                  }

    console.log(lineOfScrimmage);

    var passRight = this.game.add.text(0, 550, 'Pass Right', {font:'15px Press Start 2p', fill: '#ffffff' });
            passRight.inputEnabled = true;
            passRight.events.onInputDown.add(passPlayRight, this);


    function passPlayRight(lineOfScrimmage) {

                newBallSpot =220;
                var ct = this.game.add.sprite(400, newBallSpot, 'ct');
                ct.scale.setTo(0.03);


                var QBx = ct.x - 20;
                var QBy = ct.y;
                var qb = this.game.add.sprite(QBx, QBy, 'qb');
                qb.scale.setTo(0.02);

                var RGx = ct.x;
                var RGy = ct.y + 20;
                var rg = this.game.add.sprite(RGx, RGy, 'rg');
                rg.scale.setTo(0.03);
                var spriteTextRG = game.add.text(RGx, RGy, 'RG', {
                    font: '9px Press Start 2P'
                });


                var RTx = ct.x;
                var RTy = ct.y + 20;
                var rt = this.game.add.sprite(RTx, RTy, 'rt');
                rt.scale.setTo(0.03);
                var spriteTextRT = game.add.text(RTx, RTy, 'RT', {
                    font: '9px Press Start 2P'
                });

                var LGx = ct.x;
                var LGy = ct.y - 20;
                var lg = this.game.add.sprite(LGx, LGy, 'lg');
                lg.scale.setTo(0.03);
                var spriteTextLG = game.add.text(LGx, LGy, 'LG', {
                    font: '9px Press Start 2P'
                });


                var LTx = ct.x;
                var LTy = ct.y - 20;
                var lt = this.game.add.sprite(LTx, LTy, 'lt');
                lt.scale.setTo(0.03);
                var spriteTextLT = game.add.text(LTx, LTy, 'LT', {
                    font: '9px Press Start 2P'
                });


                var WR1x = ct.x;
                var WR1y = ct.y + 100;
                var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
                wr1.scale.setTo(0.02);
                var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
                    font: '9px Press Start 2P'
                });


                var WR2x = ct.x - 20;
                var WR2y = ct.y + 50;
                var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
                wr2.scale.setTo(0.02);
                var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
                    font: '9px Press Start 2P'
                });

                var WR3x = ct.x - 20;
                var WR3y = ct.y + 50;
                var wr3 = this.game.add.sprite(WR3x, WR3y, 'wr3');
                wr3.scale.setTo(0.02);
                var spriteTextWR3 = game.add.text(WR3x, WR3y, 'WR3', {
                    font: '9px Press Start 2P'
                });


                var football = this.game.add.sprite(ct.x, ct.y, 'football');
                football.scale.setTo(0.08);

                game.physics.arcade.enable([qb, wr1, wr2, wr3, ct, rg, rt, lg, lt, football]);

                var tweenA = game.add.tween(wr1).to({
                    x: '+200'
                }, 3000);

              var tweenB = game.add.tween(wr2).to({
                    x: '+50',
                    y: '+50'
                }, 2000);
                var tweenB2 = game.add.tween(wr2).to({
                    y: '+50'
                }, 2000);
                tweenB.chain(tweenB2);

                var tweenC = game.add.tween(wr3).to({
                    x: '+100'
                }, 2000);
                var tweenC2 = game.add.tween(wr3).to({
                    y: '+50'
                }, 2000);
                tweenC.chain(tweenC2);
                var tweenD = game.add.tween(lt).to({
                    x: '-35'
                }, 2000);
                var tweenE = game.add.tween(rt).to({
                    x: '-35'
                }, 2000)
                var tweenF = game.add.tween(lg).to({
                    x: '-20'
                }, 2000);
                var tweenG = game.add.tween(rg).to({
                    x: '-20'
                }, 2000);
                var tweenH = game.add.tween(qb).to({
                    x: '-50'
                }, 1800);


                tweenA.start();
                tweenB.start();
                tweenC.start();
                tweenD.start();
                tweenE.start();
                tweenF.start();
                tweenG.start();
                tweenH.start();


                Base43Defense(passPlayLeft, ct);
                qbPass();

                function qbPass() {


                    oldBallSpot = football.y;
                    console.log("old spot ", oldBallSpot);
                    var x =1;

                    //  Math.floor((Math.random() * 3) + 1);
                    console.log(x);

                    switch (x) {

                        case 1:

                        var tweenFootballA = game.add.tween(football).to({
                            x: '+100',
                            y: '+150'
                        }, 3000);
                            tweenFootballA.start();
                            tweenFootballA.onComplete.add(function newlocation (lineOfScrimmage){

                                newBallSpot = football.y;
                                console.log("new spot ", newBallSpot );

                                var passingYards = (+oldBallSpot) - (+newBallSpot);
                                console.log("yards passing ", passingYards);
                                // return lineOfScrimmage, newBallSpot;
                                game.state.add('HuddleState', HuddleState);
                                game.state.start(HuddleState);

                              });
                            break;

                        case 2:


                        var tweenFootballB = game.add.tween(football).to({
                            x: '+100',
                            y: '+200'
                        }, 3000);
                            tweenFootballB.start();
                            tweenFootballB.onComplete.add(function newlocation (lineOfScrimmage){
                                newBallSpot = football.y;
                                console.log("new spot ", newBallSpot );
                                return lineOfScrimmage, newBallSpot;

                              });
                            console.log('2');
                            passYards();
                            function passYards(oldBallSpot, newBallSpot){
                                var passingYards = (+oldBallSpot) - (+newBallSpot);
                                console.log("yards passing ", passingYards);
                                  }
                            break;

                        case 3:

                        var tweenFootballC = game.add.tween(football).to({
                            x: '+100',
                            y: '+300'
                        }, 3000);
                            tweenFootballC.start();
                            tweenFootballC.onComplete.add(function newlocation (lineOfScrimmage){
                                newBallSpot = football.y;
                                console.log("new spot ", newBallSpot );
                                return lineOfScrimmage, newBallSpot;

                              });
                            console.log('3');
                            passYards();
                            function passYards(oldBallSpot, newBallSpot){
                                var passingYards = (+oldBallSpot) - (+newBallSpot);
                                console.log("yards passing ", passingYards);
                                }
                            break;

                    }
                }

            }




    var passMiddle = this.game.add.text(0, 500, 'Pass Middle', {font:'15px Press Start 2p', fill: '#ffffff' });
            passMiddle.inputEnabled = true;
            passMiddle.events.onInputDown.add(passPlayMiddle, this);

    function passPlayMiddle(){
                 var ct = this.game.add.sprite(400, 220, 'ct');
                 ct.scale.setTo(0.03);

                 var QBx = ct.x - 20;
                 var QBy = ct.y;
                 var qb = this.game.add.sprite(QBx, QBy, 'qb');
                 qb.scale.setTo(0.02);

                 var RGx = ct.x;
                 var RGy = ct.y + 20;
                 var rg = this.game.add.sprite(RGx, RGy, 'rg');
                 rg.scale.setTo(0.03);
                 var spriteTextRG = game.add.text(RGx, RGy, 'RG', {
                     font: '9px Press Start 2P'
                 });

                 var RTx = ct.x;
                 var RTy = rg.y + 20;
                 var rt = this.game.add.sprite(RTx, RTy, 'rt');
                 rt.scale.setTo(0.03);
                 var spriteTextRT = game.add.text(RTx, RTy, 'RT', {
                     font: '9px Press Start 2P'
                 });


                 var LGx = ct.x;
                 var LGy = ct.y - 20;
                 var lg = this.game.add.sprite(LGx, LGy, 'lg');
                 lg.scale.setTo(0.03);
                 var spriteTextLG = game.add.text(LGx, LGy, 'LG', {
                     font: '9px Press Start 2P'
                 });


                 var LTx = ct.x;
                 var LTy = lg.y - 20;
                 var lt = this.game.add.sprite(LTx, LTy, 'lt');
                 lt.scale.setTo(0.03);
                 var spriteTextLT = game.add.text(LTx, LTy, 'LT', {
                     font: '9px Press Start 2P'
                 });


                 var WR1x = ct.x;
                 var WR1y = rt.y + 100;
                 var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
                 wr1.scale.setTo(0.02);
                 var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
                     font: '9px Press Start 2P'
                 });

                 var WR2x = ct.x - 20;
                 var WR2y = ct.y + 50;
                 var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
                 wr2.scale.setTo(0.02);
                 var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
                     font: '9px Press Start 2P'
                 });

                 var WR3x = ct.x - 20;
                 var WR3y = rt.y + 50;
                 var wr3 = this.game.add.sprite(WR3x, WR3y, 'wr3');
                           wr3.scale.setTo(0.02);
                 var spriteTextWR3 = game.add.text(WR2x, WR2y, 'WR3', {
                           font: '9px Press Start 2P'
                          });

                 var football = this.game.add.sprite(ct.x, ct.y, 'football');
                          football.scale.setTo(0.08);

                       var tweenA = game.add.tween(wr1).to({
                           x: '+100'
                       }, 2000);
                       var tweenA2 = game.add.tween(wr1).to({
                           y: '-100'
                       }, 2000);
                       tweenA.chain(tweenA2);

                       var tweenB = game.add.tween(wr2).to({
                           x: '+300'
                       }, 3000);

                       var tweenC = game.add.tween(wr3).to({
                           x: '+200'
                       }, 2000);
                       var tweenC2 = game.add.tween(wr3).to({
                           y: '-200'
                       }, 2000);
                       tweenC.chain(tweenC2);

           tweenA.start();
           tweenB.start();
           tweenC.start();
           qbPass();
           function qbPass() {


               var x = Math.floor((Math.random() * 3) + 1);
               console.log(x);

               oldBallSpot = football.y;
               console.log("old spot = ", oldBallSpot)
               console.log('original line == ', lineOfScrimmage);
               switch (x) {

                   case 1:
                   var tweenFootballA = game.add.tween(football).to({
                       x: '+100',
                       y: '+150'
                   }, 3000);
                       tweenFootballA.start();
                       tweenFootballA.onComplete.add(function newlocation (lineOfScrimmage){
                           newBallSpot = football.y;
                           console.log("new spot ", newBallSpot );
                           return lineOfScrimmage;
                       });
                       console.log('1');;
                       break;

                   case 2:

                   var tweenFootballB = game.add.tween(football).to({
                       x: '+100',
                       y: '+250'
                   }, 3000);
                       tweenFootballB.start();
                       tweenFootballB.onComplete.add(function newlocation (lineOfScrimmage){
                           newBallSpot = football.y;
                           console.log("new spot ", newBallSpot );
                           return lineOfScrimmage;
                           });
                       console.log('2');

                   case 3:

                   var tweenFootballC = game.add.tween(football).to({
                       x: '+100',
                       y: '+350'
                   }, 3000);
                       tweenFootballC.start();
                       tweenFootballC.onComplete.add(function newlocation (lineOfScrimmage){
                           newBallSpot = football.y;
                           console.log("new spot ", newBallSpot );
                           return lineOfScrimmage;
                           });
                       console.log('3');
                       break;

               }
           }

           }







    var runLeft = this.game.add.text(200, 450, 'Run Left', {font:'15px Press Start 2p', fill: '#ffffff' });

    var runMiddle = this.game.add.text(200, 500, 'Run Middle', {font:'15px Press Start 2p', fill: '#ffffff' });

    var runRight = this.game.add.text(200, 550, 'Run Right', {font:'15px Press Start 2p', fill: '#ffffff' });



    var coach = this.add.text(770, 400, "Coach Screen", {font: '18px Press Start 2p', fill: '#ffffff'});
                coach.inputEnabled = true;
                coach.events.onInputDown.add(switchStateToCoachScreen, this);


    function switchStateToCoachScreen(){
      game.state.add('HuddleState', HuddleState);
      game.state.start('HuddleState');
    }









//end of create brackets -------------
},

//============================GameButtons===========================================================




    update: function(){



    },
  };
