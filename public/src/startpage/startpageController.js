
var app = angular.module('app', []);



app.controller('startCtrl', ['$scope', function ($scope){

$scope.players=[];
$scope.start = function(){
  alert("game started");

}



function characterGen(){
  for(i = 0; i < 75; i++){

  chance.mixin({
      'user': function() {
          return {
              first: chance.first({gender: "male"}),
              last: chance.last(),
              position:  chance.pickone(['QB', 'RB', 'WR', 'MLB', 'DE']),
              college: chance.pickone(['Alabama','Arkansas', 'Florida', 'Kentucky', 'LSU', 'Mississippi St', 'Ole Miss', 'Texas A&M', 'Mississippi', 'S. Carolina',
               'Tennessee', 'Georgia', 'Missouri', 'Vanderbilt', 'Boston College', 'Clemson', 'Florida St', 'Louisville', 'Notre Dame', 'Syracuse', 'Wake Forest',
               'Duke', 'Miami', 'Pittsburg', 'Virginia', 'Maryland',
               'Indiana', 'Michigan', 'Ohio St', 'Michigan St', 'Penn St', 'Rutgers', 'Illinois', 'Iowa', 'Minnesota', 'Nebraska', 'Northwestern', 'Purdue', 'Wisconsin',
               'Baylor', 'Iowa St', 'Kansas', 'Kansas St', 'Oklahoma', 'Oklahoma St', 'TCU', 'Texas Tech', 'W. Virginia',
               'Arizona', 'Arizona St', 'UCLA', 'Oregon', 'Oregon St', 'S. Cal', 'Stanford', 'Utah', 'Washington', 'Wyoming', 'BYU'
                ]),
              height:  chance.pickone(["5'11", "6'", "6'1", "6'2", "6'3", "6'4"]),
              weight: chance.natural({min: 195, max: 210}),
              Str: chance.rpg('4d6', {sum: true}),
              Con: chance.rpg('4d6', {sum: true}),
              Dex: chance.rpg('4d6', {sum: true}),
              Int: chance.rpg('4d6', {sum: true}),
              Wis: chance.rpg('4d6', {sum: true}),
              Cha: chance.rpg('4d6', {sum: true})
          };
      }
  });



    var player =  chance.user();
        console.log(player);

  $scope.players.push({

      first: player.first,
      last: player. last,
      height:player.height,
      weight: player.weight,
      position: player.position,
      college: player.college,
      Str : player.Str,
      Con: player.Con,
      Dex: player.Dex,
      Int: player.Int,
      Wis: player.Wis,
      Cha: player.Cha
  });

  }
  console.log($scope.players);
}
characterGen();


// Player add variables
$scope.QBCount=0;
$scope.RBCount=0;
$scope.WRCount=0;
$scope.MLBCount=0;
$scope.DECount=0;


$scope.button1 = function(){
    if(this.player.position == 'QB'){
        $scope.QBCount = $scope.QBCount +1;

          if ($scope.QBCount > 1){
            alert("drop a qn");
          }


    } else if(this.player.position == 'WR'){

       $scope.WRCount = $scope.WRCount + 1;

         if ($scope.WRCount > 2){
           alert("drop a WR");
         }

    } else if(this.player.position == 'RB'){

       $scope.RBCount = $scope.RBCount + 1;

         if ($scope.RBCount > 2){
           alert("drop a RB");
         }

    } else if(this.player.position == 'DE'){

       $scope.DECount =$scope.DECount + 1;

         if ($scope.DECount > 2){
           alert("drop a DE");
         }

    } else if(this.player.position == 'MLB'){

      $scope.MLBCount = $scope.MLBCount + 1;

        if ($scope.MLBCount > 2){
          alert("drop a MLB");
        }
    }



    console.log(this.player.name);
    console.log(this.player.college);
    $scope.newteam.push({
        first: this.player.first,
        last: this.player.last,
        height:this.player.height,
        weight: this.player.weight,
        position: this.player.position,
        college:  this.player.college,
        Str : this.player.Str,
        Con: this.player.Con,
        Dex: this.player.Dex,
        Int: this.player.Int,
        Wis: this.player.Wis,
        Cha: this.player.Cha
    });


    console.log($scope.newteam);
  };


  $scope.newteam = []


}]);
