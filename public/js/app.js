angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
    .when('/view1', {
      templateUrl: 'view1.html',
      controller: 'View1Ctrl'
    })
    .when('/view2', {
      templateUrl: 'view2.html',
      controller: 'View2Ctrl'
    })
    .otherwise({redirectTo: '/'});
});
