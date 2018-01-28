app.controller("loginController" , function($scope , $http, $state, mainService) {
    $scope.loginData = {
        
    };
    $scope.loginPrimary = function() {
        $http({
            method : 'POST',
            url:  "http://localhost:4000/login",
            data : $scope.loginData
        }).then(function(response) {
            var loginState = response.data[0];
            if(loginState.Logged_in) {
                $state.go("home");
            }
        })
    }
})