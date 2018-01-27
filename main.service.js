app.factory("mainService" , mainService);

mainService.$inject = ['$http' , '$q'];

function mainService($http, $q) {
    return {
        loginService : _loginService
    }

    function _loginService(logData) {
        $http.post("" , logData);
    }
}