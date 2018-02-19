app.controller("regProdCtrl" , function($scope , $http, $state, mainService) {
    
    $scope.product_name = "Text";
    $scope.version = 0;

    $scope.addProduct = function( ) { 
        $scope.data = {
            product_name : $scope.product_name,
            version : $scope.version
        };   
        $scope.jsonData = angular.toJson($scope.data);
        mainService.registerProduct($scope.jsonData).then(function(response){
            console.log(response);
            alert(response.Status);
        }).catch(function(error){
            console.log(error);
        });
            
    }


})