app.directive("headerNav", function() {
    return {
        restrict : 'E',
        templateUrl : './templates/navbar.html',
        controller : 'headerController'
    }
});


app.controller("headerController" , function($rootScope , $scope , mainService , AuthService, isAdminService, $state , $location, $timeout){
    $scope.baseSwitch = "/home";
    if(isAdminService.isAdmin('isAdmin')) {
        $scope.baseSwitch = "dashboard";
    }


    $scope.logout = function() {
        AuthService.setAuthorization('user' , 'false');
        isAdminService.setAdmin('isAdmin' , 'false');
        
        mainService.logoutService().then(function(res){
            $state.go("login" , {reload : true})
            AuthService.setAuthorization('user' , 'false');
            isAdminService.setAdmin('isAdmin' , 'false');
        }).catch(function(err){
            alert("There's some error in server!");
        })
    }

})