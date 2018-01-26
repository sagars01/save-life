var app = angular.module("save-app" , ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider , $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: `<h1>Fuck You</h1>`
        })
        .state('secondpage', {
            url : '/psb',
            templateUrl : './templates/secondpage.template.html',
            controller : 'psbController'
            // we'll get to this in a bit       
        })
        
        .state('thirdpage', {
            // we'll get to this in a bit       
        })
        
        .state('fourthpage', {
            // we'll get to this in a bit       
        })
        
        .state('submission', {
            // we'll get to this in a bit       
        });
        $locationProvider.html5Mode(true);
});

app.directive("headerNav", function() {
    return {
        restrict : 'E',
        templateUrl : './templates/navbar.html'
    }
})


app.controller("psbController" , function($scope , $state) {
    $scope.changeRoutes = function() {
        $state.go("home");
    }
})