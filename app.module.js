var app = angular.module("save-app" , ['ui.router']);

// Run FUnction

app.run(['mainService' , '$state' , function(mainService , $state){
    
    
    function authorizationRouter(){
        mainService.authService().then(function(response){
            var loginStatus = response[0].Logged_in;
            console.log(loginStatus);
            if(loginStatus == false) {
                $state.go("login", {reload : true});
            }
        })
    }
    authorizationRouter();
    }])//Run

app.config(function($stateProvider, $urlRouterProvider , $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('login', {
            url : '/login',
            templateUrl : './templates/login/login.html',
            controller : 'loginController'

        })
        .state('home', {
            url: '/home',
            templateUrl : './templates/firstpage/firstpage.html',
            controller : 'productController'
        })
        .state('preengage', {
            url : '/preengage',
            templateUrl : './templates/secondpage/secondpage.html',
            controller : 'preengageController'            
        })
        
        .state('psb', {
            url : '/psb',
            templateUrl : './templates/thirdpage/thirdpage.html'       
        })
        
        .state('psbform', {
            url : '/psbform',
            templateUrl : './templates/fourthpage/fourthpage.html',
            controller : 'psbFormController'
        })
        
        .state('submission', {
            url : '/thanks',
            templateUrl : './templates/fifthpage/fifthpage.html'
        });
        $locationProvider.html5Mode(true);
});


