angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })

  .state('login', {
    url: '/allStaff',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('staff', {
    url: '/staffDetail',
    templateUrl: 'templates/staff.html',
    controller: 'staffCtrl'
  })

$urlRouterProvider.otherwise('/main')



});
