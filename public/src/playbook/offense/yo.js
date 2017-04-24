function hithere(){
  console.log("hello from offensive plays!");
}


function kickoff(){
  newBallSpotx=220;

  console.log("kickoff results in touchback");
  var ct = game.add.sprite(newBallSpotx, 220, 'ct');
  ct.scale.setTo(0.03);

  game.physics.arcade.enable([ct]);

}

function passPlayLeft() {
      kickoff();
      var ct = game.add.sprite(newBallSpotx, 220, 'ct');
      ct.scale.setTo(0.03);

      var QBx = ct.x - 20;
      var QBy = ct.y;
      var qb = this.game.add.sprite(QBx, QBy, 'qb');
      qb.scale.setTo(0.02);

      var RB1x = ct.x -70;
      var RB1y = ct.y;
      var rb1 = this.game.add.sprite(RB1x, RB1y, 'rb1');
      rb1.scale.setTo(0.02);
      var spriteTextRB1 = game.add.text(RB1x, RB1y, 'RB1', {
          font: '9px Press Start 2P'
      });


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
        //pass play left

          oldBallSpot = football.y;
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
                    newBallSpotx = football.x;
                    newBallSpoty = football.y;
                    console.log("new spot ", newBallSpotx, newBallSpoty);

                    return newBallSpotx, newBallSpoty;

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
                    newBallSpotx = football.x;
                    newBallSpoty = football.y;
                    console.log("new spot ", newBallSpotx, newBallSpoty );

                    return newBallSpotx, newBallSpoty;
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
                    newBallSpotx = football.x;
                    newBallSpoty = football.y;
                    console.log("new spot ", newBallSpotx, newBallSpoty);

                    return newBallSpotx, newBallSpoty;

                    });
                  console.log('3');

                  break;

          }
      }


  }

function passPlayRight() {
              kickoff();
              var ct = this.game.add.sprite(newBallSpotx, 220, 'ct');
              ct.scale.setTo(0.03);


              var QBx = ct.x - 20;
              var QBy = ct.y;
              var qb = this.game.add.sprite(QBx, QBy, 'qb');
              qb.scale.setTo(0.02);

              var RB1x = ct.x -70;
              var RB1y = ct.y;
              var rb1 = this.game.add.sprite(RB1x, RB1y, 'rb1');
              rb1.scale.setTo(0.02);
              var spriteTextRB1 = game.add.text(RB1x, RB1y, 'RB1', {
                  font: '9px Press Start 2P'
              });

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


                //pass play right

                  oldBallSpot = football.y;
                  console.log("old spot ", oldBallSpot);
                  var x =  Math.floor((Math.random() * 3) + 1);
                  console.log(x);

                  switch (x) {

                      case 1:

                      var tweenFootballA = game.add.tween(football).to({
                          x: '+100',
                          y: '+150'
                      }, 3000);
                          tweenFootballA.start();
                          tweenFootballA.onComplete.add(function newlocation (){

                            newBallSpotx = football.x;
                            newBallSpoty = football.y;
                            console.log("new spot ", newBallSpotx, newBallSpoty);

                            return newBallSpotx, newBallSpoty;
                            });
                          break;

                      case 2:


                      var tweenFootballB = game.add.tween(football).to({
                          x: '+100',
                          y: '+200'
                      }, 3000);
                          tweenFootballB.start();
                          tweenFootballB.onComplete.add(function newlocation (){
                                newBallSpotx = football.x;
                                newBallSpoty = football.y;
                                console.log("new spot ", newBallSpotx, newBallSpoty);

                                return newBallSpotx, newBallSpoty;
                            });
                          console.log('2');


                          break;

                      case 3:

                      var tweenFootballC = game.add.tween(football).to({
                          x: '+100',
                          y: '+100'
                      }, 3000);
                          tweenFootballC.start();
                          tweenFootballC.onComplete.add(function newlocation (){
                                newBallSpotx = football.x;
                                newBallSpoty = football.y;
                                console.log("new spot ", newBallSpotx, newBallSpoty);

                                return newBallSpotx, newBallSpoty;
                            });
                          console.log('3');

                          break;

                  }
              }

          }

function passPlayMiddle(){

  kickoff();
   var ct = this.game.add.sprite(newBallSpotx, 220, 'ct');
   ct.scale.setTo(0.03);

   var QBx = ct.x - 20;
   var QBy = ct.y;
   var qb = this.game.add.sprite(QBx, QBy, 'qb');
   qb.scale.setTo(0.02);

   var RB1x = ct.x -70;
   var RB1y = ct.y;
   var rb1 = this.game.add.sprite(RB1x, RB1y, 'rb1');
   rb1.scale.setTo(0.02);
   var spriteTextRB1 = game.add.text(RB1x, RB1y, 'RB1', {
       font: '9px Press Start 2P'
   });

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
         tweenFootballA.onComplete.add(function newlocation (){
           newBallSpotx = football.x;
           newBallSpoty = football.y;
           console.log("new spot ", newBallSpotx, newBallSpoty);
           return newBallSpotx, newBallSpoty;
         });
         console.log('1');
         break;

     case 2:

     var tweenFootballB = game.add.tween(football).to({
         x: '+100',
         y: '+250'
     }, 3000);
         tweenFootballB.start();
         tweenFootballB.onComplete.add(function newlocation (){
           newBallSpotx = football.x;
           newBallSpoty = football.y;
           console.log("new spot ", newBallSpotx, newBallSpoty);
           return newBallSpotx, newBallSpoty;
             });
         console.log('2');

     case 3:

     var tweenFootballC = game.add.tween(football).to({
         x: '+100',
         y: '+350'
     }, 3000);
         tweenFootballC.start();
         tweenFootballC.onComplete.add(function newlocation (){
           newBallSpotx = football.x;
           newBallSpoty = football.y;
           console.log("new spot ", newBallSpotx, newBallSpoty);
           return newBallSpotx, newBallSpoty;
             });
         console.log('3');
         break;

 }
}

}

function runPlayMiddle(){
        kickoff();
       var ct = this.game.add.sprite(200, 220, 'ct');
               ct.scale.setTo(0.03);

       var QBx = ct.x - 20;
       var QBy = ct.y;
       var qb = this.game.add.sprite(QBx, QBy, 'qb');
       qb.scale.setTo(0.02);

       var RB1x = ct.x -70;
       var RB1y = ct.y;
       var rb1 = this.game.add.sprite(RB1x, RB1y, 'rb1');
       rb1.scale.setTo(0.02);
       var spriteTextRB1 = game.add.text(RB1x, RB1y, 'RB1', {
           font: '9px Press Start 2P'
       });

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


       var WR1x = ct.x -10;
       var WR1y = ct.y - 150;
       var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
       wr1.scale.setTo(0.02);
       var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
           font: '9px Press Start 2P'
       });


       var WR2x = ct.x -10;
       var WR2y = ct.y +140;
       var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
       wr2.scale.setTo(0.02);
       var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
           font: '9px Press Start 2P'
       });

       var TE1x = ct.x;
       var TE1y = ct.y - 62;
       var te1 = this.game.add.sprite(TE1x, TE1y, 'te1');
       te1.scale.setTo(0.02);
       var spriteTextTE1 = game.add.text(TE1x, TE1y, 'TE1', {
           font: '9px Press Start 2P'
       });

       var TE2x = ct.x;
       var TE2y = ct.y + 62;
       var te2 = this.game.add.sprite(TE2x, TE2y, 'te2');
       te2.scale.setTo(0.02);
       var spriteTextTE2 = game.add.text(TE2x, TE2y, 'TE2', {
           font: '9px Press Start 2P'
       });

       var football = this.game.add.sprite(ct.x, ct.y, 'football');
             football.scale.setTo(0.08);

       Base43Defense(runPlayMiddle, ct);


             var tweenA = game.add.tween(qb).to({
                 x: '-80'
             }, 2000);

             var tweenB = game.add.tween(rb1).to({
                 x: '+80'
             }, 2000);

             var tweenC = game.add.tween(wr1).to({
                x: '+60'
             }, 2000);

             var tweenD = game.add.tween(wr2).to({
                x: '+60'
             }, 2000);

             var tweenE = game.add.tween(lt).to({
                x: '+`10'
             }, 2000);

             var tweenF = game.add.tween(lg).to({
                x: '+10'
             }, 2000);

             var tweenG = game.add.tween(rg).to({
               x: '+10'
             }, 2000);

             var tweenH = game.add.tween(lt).to({
               x: '+10'
             }, 2000);



             tweenA.start();
             tweenB.start();
             tweenB.onComplete.add(function newlocation (){

                       newBallSpotx = rb1.x;
                       newBallSpoty = rb1.y;

                 console.log ('rb1y ', rb1.y);
                 return newBallSpotx, newBallSpoty;
                 });

             tweenC.start();
             tweenD.start();
             tweenE.start();
             tweenF.start();
             tweenG.start();
             tweenH.start();


             game.physics.arcade.enable([qb, wr1, wr2, te1, te2, rb1, ct, rg, rt, lg, lt]);

}


function runPlayLeft (){
      kickoff();
      var ct = this.game.add.sprite(newBallSpotx, 220, 'ct');
              ct.scale.setTo(0.03);
      var QBx = ct.x - 20;
      var QBy = ct.y;
      var qb = this.game.add.sprite(QBx, QBy, 'qb');
      qb.scale.setTo(0.02);

      var RB1x = ct.x -70;
      var RB1y = ct.y;
      var rb1 = this.game.add.sprite(RB1x, RB1y, 'rb1');
      rb1.scale.setTo(0.02);
      var spriteTextRB1 = game.add.text(RB1x, RB1y, 'RB1', {
          font: '9px Press Start 2P'
      });

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


      var WR1x = ct.x - 20;
      var WR1y = ct.y - 150;
      var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
      wr1.scale.setTo(0.02);
      var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
          font: '9px Press Start 2P'
      });


      var WR2x = ct.x;
      var WR2y = ct.y +140;
      var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
      wr2.scale.setTo(0.02);
      var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
          font: '9px Press Start 2P'
      });

      var TE1x = ct.x;
      var TE1y = ct.y - 62;
      var te1 = this.game.add.sprite(TE1x, TE1y, 'te1');
      te1.scale.setTo(0.02);
      var spriteTextTE1 = game.add.text(TE1x, TE1y, 'TE1', {
          font: '9px Press Start 2P'
      });

      var TE2x = ct.x - 20;
      var TE2y = ct.y - 75;
      var te2 = this.game.add.sprite(TE2x, TE2y, 'te2');
      te2.scale.setTo(0.02);
      var spriteTextTE2 = game.add.text(TE2x, TE2y, 'TE2', {
          font: '9px Press Start 2P'
      });

  Base43Defense(runPlayLeft, ct);
   //Run left

   var tweenA = game.add.tween(qb).to({
       x: '-80'
   }, 2000);

   var tweenB = game.add.tween(rb1).to({
       x: '+80'
   }, 2000);

   var tweenC = game.add.tween(wr1).to({
      x: '+60'
   }, 2000);

   var tweenD = game.add.tween(wr2).to({
      x: '+60'
   }, 2000);

   var tweenE = game.add.tween(lt).to({
      x: '+`10'
   }, 2000);

   var tweenF = game.add.tween(lg).to({
      x: '+10'
   }, 2000);

   var tweenG = game.add.tween(rg).to({
     x: '+10'
   }, 2000);

   var tweenH = game.add.tween(lt).to({
     x: '+10'
   }, 2000);

   tweenA.start();
   tweenB.start();
   tweenB.onComplete.add(function newlocation (){

             newBallSpotx = rb1.x;
             newBallSpoty = rb1.y;

       console.log ('rb1y ', rb1.y);
       return newBallSpotx, newBallSpoty;
       });

   tweenC.start();
   tweenD.start();
   tweenE.start();
   tweenF.start();
   tweenG.start();
   tweenH.start();


   game.physics.arcade.enable([qb, wr1, wr2, te1, te2, rb1, ct, rg, rt, lg, lt]);



}


function runPlayRight(){
  kickoff();
  var ct = game.add.sprite(newBallSpotx, 220, 'ct');
          ct.scale.setTo(0.03);

  var QBx = ct.x - 20;
  var QBy = ct.y;
  var qb = this.game.add.sprite(QBx, QBy, 'qb');
  qb.scale.setTo(0.02);

  var RB1x = ct.x -70;
  var RB1y = ct.y;
  var rb1 = this.game.add.sprite(RB1x, RB1y, 'rb1');
  rb1.scale.setTo(0.02);
  var spriteTextRB1 = game.add.text(RB1x, RB1y, 'RB1', {
      font: '9px Press Start 2P'
  });

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

  var WR2x = ct.x - 15;
  var WR2y = ct.y +140;
  var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
  wr2.scale.setTo(0.02);
  var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
      font: '9px Press Start 2P'
  });

  var TE1x = ct.x;
  var TE1y = ct.y + 62;
  var te1 = this.game.add.sprite(TE1x, TE1y, 'te1');
  te1.scale.setTo(0.02);
  var spriteTextTE1 = game.add.text(TE1x, TE1y, 'TE1', {
      font: '9px Press Start 2P'
  });

  var TE2x = ct.x - 20;
  var TE2y = ct.y + 75;
  var te2 = this.game.add.sprite(TE2x, TE2y, 'te2');
  te2.scale.setTo(0.02);
  var spriteTextTE2 = game.add.text(TE2x, TE2y, 'TE2', {
      font: '9px Press Start 2P'
  });

  Base43Defense(runPlayRight,ct);

        var tweenA = game.add.tween(qb).to({
            x: '-80'
        }, 2000);

        var tweenB = game.add.tween(rb1).to({
            x: '+80'
        }, 2000);

        var tweenC = game.add.tween(wr1).to({
           x: '+60'
        }, 2000);

        var tweenD = game.add.tween(wr2).to({
           x: '+60'
        }, 2000);

        var tweenE = game.add.tween(lt).to({
           x: '+`10'
        }, 2000);

        var tweenF = game.add.tween(lg).to({
           x: '+10'
        }, 2000);

        var tweenG = game.add.tween(rg).to({
          x: '+10'
        }, 2000);

        var tweenH = game.add.tween(lt).to({
          x: '+10'
        }, 2000);

        var tweenI = game.add.tween(te1).to({
          x: '+10'
        }, 2000);

        var tweenJ = game.add.tween(te2).to({
          x: '+15'
        }, 2000);



        tweenA.start();
        tweenB.start();
        tweenC.start();
        tweenD.start();
        tweenE.start();
        tweenF.start();
        tweenG.start();
        tweenH.start();
        tweenI.start();
        tweenJ.start();


        game.physics.arcade.enable([qb, wr1, wr2, te1, te2, rb1, ct, rg, rt, lg, lt]);

        newBallSpotx = rb1.x;
        newBallSpoty = rb1.y;

        return newBallSpotx, newBallSpoty;


}
