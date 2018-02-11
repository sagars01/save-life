app.controller("loginController" , function($scope , $http, $state, mainService) {
    $scope.loginData = {
      // Stores the Login Data  
    };
    $scope.getAdmin = true;
    $scope.loginPrimary = function() {
        $http({
            method : 'POST',
            url:  "http://localhost:4000/login",
            data : $scope.loginData
        }).then(function(response) {
            var loginState = response.data[0];
            if(loginState.Logged_in && loginState.Is_admin == 1) {
                $state.go("dashboard");
            }else {
                $state.go("home");
            }
        })
    }
})