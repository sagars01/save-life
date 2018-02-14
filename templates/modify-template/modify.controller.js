app.controller("modifyCtrl" , function($scope , $rootScope, $state , mainService) {
    $scope.changeRoute = function(routeName) {
        $state.go(routeName);
        $rootScope.isAdminModify = true;
    }
});