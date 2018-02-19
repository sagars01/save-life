app.controller("pocCtrl" , function($scope , mainService){
    $scope.main = { 
        manager : [''] , 
        engineer : [''] , 
        sdl : ['']
    };
    $scope.temp = { 
        manager : null,
        product_engineer : null,
        sdl_engineer: null
    };

    $scope.addField = function(arrayParam) {
        $scope.main[arrayParam].push('');
    }
    $scope.removeField = function(arrayParam) {
        if($scope.main[arrayParam].length > 1) {
            $scope.main[arrayParam].pop();
        }
    }
    $scope.savePoc = function() {
        mainService.poc(angular.toJson($scope.temp)).then(function(response){
            console.log(response);
            alert("User Added");
        }).catch(function(err){
            console.log(err);
        })
    }

})