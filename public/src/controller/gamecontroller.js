
var myapp = angular.module('myApp', ['ui.router']);

myapp.config(function($stateProvider) {

  var helloState = {
   name: 'hello',
   url: '/hello',
   templateUrl :'src/partials/rosters.html'
 }


 var aboutState = {
   name: 'about',
   url: '/about',
   template: '<h1> about </h1>'
 }


  var yoState = {
    name: 'yo',
    url: '/yo',
    template: '<h1> YO! </h1>'
  }

 $stateProvider.state(helloState);
 $stateProvider.state(aboutState);
 $stateProvider.state(yoState);


//end brackets
});

myapp.controller('myCtrl', function ($scope){


});


// end controller bracket
