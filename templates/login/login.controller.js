app.controller("loginController" , function($scope , $http, $state, mainService , AuthService, isAdminService) {
    $scope.loginData = {
      // Stores the Login Data  
    };
    $scope.getAdmin = true;
    $scope.loginPrimary = function() {
        mainService.loginService($scope.loginData).then(function(response) {
                    var loginState = response[0];
                    if(loginState.Logged_in && loginState.Is_admin == 1) {
                        AuthService.setAuthorization('user' , 'true');
                        isAdminService.setAdmin('isAdmin' , 'true');
                        $state.go("dashboard");
                    }else {
                        $state.go("home");
                        AuthService.setAuthorization('user' , 'true');
                        isAdminService.setAdmin('isAdmin' , 'false');
                    }
                })
    }
})