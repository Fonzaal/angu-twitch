'use strict';

/**
 * @ngdoc function
 * @name anguTwitchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anguTwitchApp
 */
angular.module('anguTwitchApp')
  .controller('MainCtrl', function ($scope, $http, $log, $q, twitchService) {
    $scope.sortBy = 'viewers';
    $scope.reverseIcon = false;
    $scope.language = 'es';
    $scope.limit = 50;
    $scope.streamsList = {};
    $scope.setOrder = function (){
      if($scope.reverseIcon === false){
        $scope.reverseIcon = true;
      }
      else {
        $scope.reverseIcon = false;
      }
      $log.log($scope.reverseIcon);
    };
    $scope.getData = function (){
      twitchService.getStreams($scope.language, $scope.limit).
        then(function(data){
          $scope.streamsList = data.streams;
          $log.log(data.streams);
      })
    }
  });
