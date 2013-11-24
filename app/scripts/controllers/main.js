'use strict';

angular.module('timeTrackerClientApp')
  .controller('MainCtrl', function ($scope) {

    $scope.reveal = false;
    $scope.navshow = false;

    $scope.showNav = function() {
      console.log("Here");
      $scope.reveal = true;
      setTimeout(function(){
        $scope.navshow = true;
      },500);
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
