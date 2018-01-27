var app = angular.module("save-app" , ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider , $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('login', {
            url : '/login',
            templateUrl : './templates/login/login.html'
        })
        .state('home', {
            url: '/home',
            //template: `<h1>Fuck You</h1>`
            templateUrl : './templates/firstpage/firstpage.html'
        })
        .state('secondpage', {
            url : '/psb',
            templateUrl : './templates/secondpage.template.html',
            controller : 'psbController'                
        })
        
        .state('thirdpage', {
            url : '/thirdpage',
            templateUrl : './templates/thirdpage/thirdpage.html'       
        })
        
        .state('fourthpage', {
            url : '/fourthpage',
            templateUrl : './templates/fourthpage/fourthpage.html'
        })
        
        .state('submission', {
            url : '/thanks',
            templateUrl : './templates/fifthpage/fifthpage.html'
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