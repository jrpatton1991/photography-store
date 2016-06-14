//angular configuration
var app=angular.module('PhotographyStore', ['ui.router']);

// Configure different application states
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: "/templates/_loginView.html"
      });
});
