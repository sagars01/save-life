app.directive("headerNav", function() {
    return {
        restrict : 'E',
        templateUrl : './templates/navbar.html',
        controller : 'headerController'
    }
});


app.controller("headerController" , function($rootScope , $scope , mainService , $state , $location, $timeout){
    $scope.logout = function() {
        mainService.logoutService().then(function(res){
            $state.go("login" , {reload : true})
        }).catch(function(err){
            alert("There's some error in server!");
        })
    }

})