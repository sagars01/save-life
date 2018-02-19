'use strict';
var app = angular.module("save-app" , ['ui.router']);

// Run Function
angular.module("save-app").run(function($transitions ,$location, AuthService , isAdminService , $state){
    $transitions.onStart({} , function(trans , toState , toParams, fromState, fromParam){
        var isAuth = AuthService.authorized('user');
        if(isAuth == 'false' || isAuth == null) {
            $location.url('/login');
            // event.stopPropagation();
        }
    })

    $transitions.onSuccess({to : 'login' , from : '**' } , function() {
        AuthService.setAuthorization('user' , 'false');
    })
});
app.config(function($stateProvider, $urlRouterProvider , $locationProvider , $transitionsProvider , mainServiceProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('login', {
            url : '/login',
            templateUrl : './templates/login/login.html',
            controller : 'loginController'
        })
        .state('404' , {
            url : '/login',
            templateUrl : './templates/login/login.html',
            controller : 'loginController'
        })
        .state('accessdenied' , {
            url : '/accessdenied',
            template : `<h4>You are not authorized!</h4>`
        })
        .state('home', {
            url: '/home',
            templateUrl : './templates/firstpage/firstpage.html',
            controller : 'productController',
            resolve : {
                isUserPermitted : function(isAdminService , $location , $q, $timeout, $state) {
                    var isAdmin = isAdminService.isAdmin('isAdmin');
                    if(isAdmin == "true") {
                        return false;
                    }else {
                        return true;
                    }
                }
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl : './templates/admin-dashboard/dashboard.template.html',
            controller : 'dashboardController',
            resolve : {
                isUserPermitted : function(isAdminService , $location , $q, $timeout, $state) {
                    var isAdmin = isAdminService.isAdmin('isAdmin');
                    if(isAdmin == "true") {
                        return true;
                    }else {
                        return false;
                    }
                }
            }
        })
        .state('preengage', {
            url : '/preengage/:process',
            templateUrl : './templates/secondpage/secondpage.html',
            controller : 'preengageController',
            params : {
                process : null
            }            
        })
        
        .state('psb', {
            url : '/psb',
            templateUrl : './templates/thirdpage/thirdpage.html',   
        })
        
        .state('psbform', {
            url : '/psbform',
            templateUrl : './templates/fourthpage/fourthpage.html',
            controller : 'psbFormController',
            resolve : {
                isAdminViewing : function(isAdminService) {
                    return isAdminService.isAdmin('isAdmin');
                }
            }  
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

