
var myapp = angular.module('myApp', ['ui.router']);


myapp.config(function($stateProvider) {

    var playbookState = {
     name: 'playbook',
     url: '/playbook',
     templateUrl :'src/partials/playbook.html'
   }

   var coachState = {
     name: 'coach',
     url: '/coach',
     templateUrl: 'src/partials/coach.html'
   }

  var rosterState = {
    name: 'depthchart',
    url: '/depthchart',
    templateUrl: 'src/partials/depthchart.html'
  }

  var gamestatState = {
    name: 'gamestat',
    url: '/gamestat',
    templateUrl: 'src/partials/gamestats.html'
  }



 $stateProvider.state(playbookState);
 $stateProvider.state(coachState);
 $stateProvider.state(rosterState);
 $stateProvider.state(gamestatState);



//end brackets
});


myapp.factory('MyService', function () {
  return {
    sayHello: function () {
      console.log('hello');
    }
  }
});


myapp.controller('mainCtrl', ['$scope', function ($scope){


$scope.yardsToGo = yardsToGo;


}]);


myapp.controller('rosterCtrl', ['$scope', function ($scope){


  $scope.players = [
    {
      name : "F. Dixon",
      position : "QB1",
      stamina : "98%"
    },
    {
      name : "B. Morgan",
      position : "RB1",
      stamina : "74%"
    },
    {
      name : "C. Matthews",
      position : "WR1",
      stamina : "45%"
    },
    {
      name : "A. Dobson",
      position : "WR2",
      stamina : "74%"
    }

  ];

}]);



// var test = {
//   playCount: 0;
// }

myapp.controller('gamestatsCtrl', ['$scope',  function ($scope){

  $scope.wr1Yards = wr1Yards;
  $scope.wr2Yards = wr2Yards;
  $scope.wr3Yards = wr3Yards;


}]);


// end controller bracket
