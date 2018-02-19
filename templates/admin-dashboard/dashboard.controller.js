app.controller("dashboardController" , function($scope , $http, $state, mainService) {
    $scope.goToRegister = function() {
        $state.go("registerProduct" , {reload : true});
    }

    $scope.goToModify = function() {
        $state.go("modifyTemplate" , {reload : true});
    }

    $scope._init = function() {
        mainService.productList('GET').then(function(response){
            $scope.productList = response;       
        })
    }
    $scope._init();

    //Object to store posting Data.
    $scope.postData = {
        product_id : null,
        version : null
    }
    //Selected Product Change
    $scope.selectedProduct = "Select a product"
    $scope.selectedProductChange = function() {
        $scope.versions = $scope.selectedProduct.Versions;
        $scope.postData.product_id = $scope.selectedProduct.Product_id;
    }
    // Version Change
    $scope.selectedVersion = "Select a version";
    $scope.versions = [];
    $scope.versionChange = function() {
        $scope.postData.version = $scope.selectedVersion;
        console.log(angular.toJson($scope.postData));
        var tempJData = angular.toJson($scope.postData);
        $scope.setKeyid('POST' , tempJData );
    }

    $scope.setKeyid = function(method , data) {
        mainService.productList(method , data).then(function(response){
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        })
    };

    $scope.goToForms = function(stateName , process) {
        $state.go(stateName , { process : process });
    }

})