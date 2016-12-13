angular.module('app.controllers', [])

.controller('mainCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})

.controller('staffCtrl', function($scope, $http) {

  $http({
    method: 'GET',
    url: 'http://10.100.16.62:7000/allStaff'
  }).then(function successCallback(response) {
    console.log(response);
    $scope.data = response;
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    console.log("here");
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

})
