app.controller("productController" , function($scope , $state, mainService , isUserPermitted, isAdminService) {
    $scope.productList = [];
    $scope.selectedProduct = "Select a product";
    $scope.selectedVersion1 = "Select a version";

    if(isUserPermitted == false) {
        $state.go('accessdenied');
    }
    
    $scope.redirectToQuestions = function(routePath) {
        switch (routePath) {
            case 'pre' :
                console.log($scope.selectedProductJSON);
                $scope.getPostOnProductList('POST' , $scope.selectedProductJSON);
                $state.go('preengage' , {reload : true});
            break;
            case 'psbform':
            $state.go('psbform' , {reload : true});
            break;
        }
    }

    $scope.sendProductId = function() {

    }

    $scope.getPostOnProductList = function(method , dataArgs) {
        mainService.productList(method, dataArgs).then(function(response){
            $scope.productList = response;
            return response;
        }).catch(function(error){
            console.error(error);
            return error;
        });
    }
    //Init Call
    $scope.getPostOnProductList('GET');
    $scope.selectedVersion1 = "Select a version";
    

    $scope.tempSelectedProductJSON = {
        // product_id : $scope.selectedProduct.Product_id,
        // version :   $scope.selectedVersion1
        product_id : null,
        version : null
    };
    
    $scope.selectedProductChange = function() {
        $scope.tempSelectedProductJSON.product_id = $scope.selectedProduct.Product_id;
        $scope.prodVersions = $scope.selectedProduct.Versions;
        // $scope.selectedProductJSON = angular.toJson($scope.tempSelectedProductJSON);
        var valueSelected = $scope.selectedProduct;
        // if(valueSelected != "Select a product") {
        //     $(".path-wrapper").css({"display" : "block"});
        //   }else {
        //     $(".path-wrapper").css({"display" : "none"});
        //   }
    }
    $scope.versionChange = function() {
        //console.log($scope.selectedVersion1);
        $scope.tempSelectedProductJSON.version = $scope.selectedVersion1;
        $scope.selectedProductJSON = angular.toJson($scope.tempSelectedProductJSON);
        $scope.setKeyid('POST' , $scope.selectedProductJSON);
    }

    $scope.setKeyid = function(method , data) {
        mainService.productList(method , data).then(function(response){
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        })
    }
})