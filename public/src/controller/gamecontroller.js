
var myapp = angular.module('myApp', ['ui.router']);

myapp.config(function($stateProvider) {

    $stateProvider.state('test', {
      template: '<h1> Test </h1>'

    })
//end brackets
});

myapp.controller('myCtrl', function ($scope){


});


// end controller bracket
