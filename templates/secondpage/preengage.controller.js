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
    
    $scope._init = function (method , data) {
        mainService.preengage(method, data).then(function(response) {
            console.log(response[0].Questionaires);
            $scope.response = response;
            $scope.Questionaires = response[0].Questionaires;
            $scope.Milestones = response[0].Milestones;
            if(data != null) {
                $state.go("home" , {reload : true});
            }        
        })
    }
    $scope._init('GET');
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