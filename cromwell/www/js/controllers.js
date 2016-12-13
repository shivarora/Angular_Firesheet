angular.module('app.controllers', [])

.controller('cameraTabDefaultPageCtrl', function($scope) {

})

.controller('cartTabDefaultPageCtrl', function($scope) {

})

.controller('cloudTabDefaultPageCtrl', function($scope) {

})

.controller('pageCtrl', function($scope, $state) {
  $scope.signIn= function (path) {
    $state.go(path);
  }
})
.controller('signInCtrl', function($scope, $ionicModal, $timeout, $http, $location) {
  // Form data for the login modal
  $scope.signInData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signIn.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


  // Perform the login action when the user submits the login form
  $scope.doSignIn = function() {
    console.log('Doing SignIn', $scope.signInData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
     // $scope.closeLogin();
    }, 1000);
  };
})

.controller('page2Ctrl', function($scope) {

})


.controller("ExampleController", function($scope, $ionicSlideBoxDelegate) {
  $scope.navSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }
});
