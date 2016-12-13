angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // .state('tabsController', {
  //   url: '/page1',
  //   templateUrl: 'templates/tabsController.html',
  //   abstract:true
  // })

  .state('page', {
    url: '/main',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('signIn', {
    url: '/signIn',
    templateUrl: 'templates/signIn.html',
    controller: 'signInCtrl'
  })

  .state('page2', {
    url: '/terms',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  });

$urlRouterProvider.otherwise('/main')


});
