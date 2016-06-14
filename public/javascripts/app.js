//angular configuration
var app=angular.module('PhotographyStore', ['ui.router']);

// Configure different application states
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('signup', {
        url: '/signup',
        templateURL: "/templates/_signupView.html"
      });
});
