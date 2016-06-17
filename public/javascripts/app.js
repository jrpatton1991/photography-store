//angular configuration
var app=angular.module('PhotographyStore', ['ui.router']);

// Configure different application states
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/photos');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: "/templates/_loginView.html"
      }).state('signup',{
        url: '/signup',
        templateUrl: "/templates/_signupView.html"
      }).state('photos',{
        url: '/photos',
        templateUrl: "/templates/_photosView.html"
      }).state('new-photo',{
        url: '/new-photo',
        templateUrl: "/templates/_newView.html"
      })
});
