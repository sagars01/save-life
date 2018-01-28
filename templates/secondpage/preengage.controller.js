app.controller("preengageController" , function($scope , $state, mainService) {
    $scope.changeRoutes = function() {
        $state.go("home");
    }
    
    $scope.showResponse = function( ) {
        console.log($scope.Questionaires);
    }

    $scope.submitPreEngagementForm = function() {
        //$scope._init('POST' , $scope.response)
        console.log($scope.response);
    }
    
    $scope._init = function (method , data) {
        mainService.preengage(method).then(function(response) {
            console.log(response[0].Questionaires);
            $scope.response = response;
            $scope.Questionaires = response[0].Questionaires;
            $scope.Milestones = response[0].Milestones;        
        })
    }
    $scope._init('GET');
})

    // $scope.milestoneData = {
    //     Milestone_response : null,
    //     Milestone_id : null
    // }
    // $scope.questionData = {
    //     Question_response : null,
    //     Question_id : null
    // }
    
    // $scope.postDataModel = [
    //     {
    //         Milestones : [ 
                
    //         ],
    //         Questionaires : [
                
    //         ],
    //         Mom : null,
    //         Details_phase : null
    //     }
    // ]
