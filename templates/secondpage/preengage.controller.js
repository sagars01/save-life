app.controller("preengageController" , function($scope , $state, mainService) {
    $scope.changeRoutes = function() {
        $state.go("home");
    }
    
    $scope.showResponse = function( ) {
        console.log($scope.Questionaires);
    }

    $scope.submitPreEngagementForm = function() {
        $scope._init('POST' , angular.toJson($scope.response));
        console.log(angular.toJson($scope.response));
    }
    $scope.process = $state.params.process;
    $scope.trimResponse = function(arrayParam , type) {
        var tempArray = [];
        if(type == 'new') {
            angular.forEach(arrayParam , function(el) {
                el.Question_response = "Enter";
                
                tempArray.push(el);
            })
            return tempArray;
        }else {
            return arrayParam;
        }
            
    };

    $scope._init = function (method , data ) {
        mainService.preengage(method, data).then(function(response) {
            console.log(response[0].Questionaires);
            if(method != 'POST') {
                $scope.response = response;
                $scope.Questionaires = $scope.trimResponse(response[0].Questionaires , $scope.process);
                $scope.Milestones = response[0].Milestones;
            }
            if(data != null) {
                //$state.go("home" , {reload : true});
            }        
        })
    }
    
    $scope._init('GET' , $scope.process);
    

    // $scope.postProductData = function() {
        
    //     if($state.params.selectedProduct == null ||  $state.params.productVersion == null) {
    //         $state.go("dashboard");
    //     }else {
    //         var productData = {
    //             product_id : $state.params.selectedProduct,
    //             version : $state.params.productVersion
    //         }

    //         mainService.productList('POST' , )
    //     }
    // }
    //console.log($state.params);

    console.log($state.params);
})

app.directive('jqdatepicker', function ($filter) {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd/mm/yy',
                onSelect: function (date) {   
                    ngModelCtrl.$setViewValue(date);            
                    scope.$apply();
                }
            });
            ngModelCtrl.$formatters.unshift(function(v) {
            //return $filter('date')(v,'dd/MM/yyyy'); 
            return v; 
            });

        }
    };
});