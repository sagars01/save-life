'use strict';
var app = angular.module("save-app" , ['ui.router']);

// Run FUnction
// angular.module("save-app").run(
//     function ($rootScope, $state, $transitions , $location , $timeout, mainService ) {
//         $transitions.onStart({to:'*'}, function ($state){
//             // do stuff on every transition such as change page title [global scope here]
//             // console.log("Hi");
//             var stateCounter = 0;
//             mainService.authService().then(function(response){
//                 if(response[0].Logged_in == true && response[0].Logged_in != null ) {
//                     // Do Nothing                    
//                 }else {
//                     $timeout(function(){
//                         $location.path("/login");
//                     })
//                 }
//             }).catch(function(err){
//                 $state.go("login");
//             })
//         }
//     )
// })


app.config(function($stateProvider, $urlRouterProvider , $locationProvider , $transitionsProvider , mainServiceProvider) {

    $transitionsProvider.onStart({ to: '**' }, function(transtion) {
        // transtion.injector().get('$rootScope').ngProgress.start();
    })

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
        .state('dashboard', {
            url: '/dashboard',
            templateUrl : './templates/admin-dashboard/dashboard.template.html',
            controller : 'dashboardController',
            resolve : function() {
                console.log("true");
            }
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
        })
        .state('registerProduct', {
            url : '/registerproduct',
            templateUrl : './templates/register-product/registerProduct.template.html',
            controller : 'regProdCtrl'
        })
        .state('modifyTemplate', {
            url : '/modifyTemplate',
            templateUrl : './templates/modify-template/modify.template.html',
            controller : 'modifyCtrl'
        })
        .state('poc', {
            url : '/poc',
            templateUrl : './templates/poc/poc.template.html',
            controller : 'pocCtrl'
        })
        
        

        $locationProvider.html5Mode(true);
});

