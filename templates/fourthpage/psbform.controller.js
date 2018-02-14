app.controller("psbFormController" , function($scope , $state, mainService){
    $scope.tableDataIterator = [];
    $scope.statusOptions = ["Not_Answered" ,"PASS", "FAIL", "APPLICABLE" , "BACKLOG"];
    
    $scope.getPsbFormData = function() {
        mainService.psbFormService('GET').then(function(response) {
            $scope.tableDataIterator = response;
            // console.log(response);
        }).catch(function(error){
            // alert(error);
        })
    }
    $scope.getPsbFormData();

    $scope.submitPsbForm = function() {
        console.log($scope.tableDataIterator);
        mainService.psbFormService('POST' , $scope.tableDataIterator).then(function(response) {
            // alert("Thanks for your feedback!");
            $state.go("home" , {reload : true});
            // console.log(response);
        }).catch(function(error){
            console.error(error);
        })
    }
})