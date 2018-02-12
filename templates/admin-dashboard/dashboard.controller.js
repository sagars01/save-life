app.controller("dashboardController" , function($scope , $http, $state, mainService) {
    $scope.goToRegister = function() {
        $state.go("registerProduct" , {reload : true});
    }

    $scope.goToModify = function() {
        $state.go("modifyTemplate" , {reload : true});
    }
})