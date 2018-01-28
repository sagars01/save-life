app.controller("productController" , function($scope , $state, mainService) {
    $scope.productList = [];
    $scope.selectedProduct = "Select a product";
    
    
    $scope.redirectToQuestions = function(routePath) {
        switch (routePath) {
            case 'pre' :
                console.log($scope.selectedProductJSON);
                $scope.getPostOnProductList('POST' , $scope.selectedProductJSON);
                $state.go('preengage' , {reload : true});
            break;
            
            case 'psb':
                $state.go('psb' , {reload : true});
            break;
        }
    }

    $scope.sendProductId = function() {

    }
    $scope.getPostOnProductList = function(method , dataArgs) {
        mainService.productList(method, dataArgs).then(function(response){
            // console.log(response);
            $scope.productList = response;
            return response;
        }).catch(function(error){
            console.error(error);
            return error;
        });
    }
    //Init Call
    $scope.getPostOnProductList('GET');
    
    $scope.selectedProductChange = function() {
        $scope.tempSelectedProductJSON = {
        product_id : $scope.selectedProduct
    }
    $scope.selectedProductJSON = angular.toJson($scope.tempSelectedProductJSON);
        var valueSelected = $scope.selectedProduct;
        if(valueSelected != "Select a product") {
            $(".path-wrapper").css({"display" : "block"});
          }else {
            $(".path-wrapper").css({"display" : "none"});
          }
    }
})