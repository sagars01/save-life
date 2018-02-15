app.controller("pocCtrl" , function($scope){
    $scope.main = { 
        manager : [''] , 
        engineer : [''] , 
        sdl : ['']
    }

    $scope.addField = function(arrayParam) {
        $scope.main[arrayParam].push('');
    }
    $scope.removeField = function(arrayParam) {
        if($scope.main[arrayParam].length > 1) {
            $scope.main[arrayParam].pop();
        }
    }

})