'use strict';

/**
 * @ngdoc function
 * @name anguTwitchApp.controller
 * @description
 * # MainCtrl
 * Controller of the anguTwitchApp
 */
angular.module('anguTwitchApp')
  .controller('DetailsCtrl', function ($scope, $http, $log, $q, twitchService, $routeParams) {
    $scope.user = $routeParams.user;
    $scope.streamerDetails = {};
    $scope.getData = function (){
      twitchService.getStreamerDetails($scope.user).
        then(function(data){
          $scope.streamerDetails = data.stream;
          $log.log(data.streams);
        })
    };
  });
