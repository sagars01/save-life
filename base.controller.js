app.controller("baseCtrl" , function($rootScope , $http, $state, mainService) {
    $rootScope.$on("goLogin" , function(){
        $state.go("login")
    })
})