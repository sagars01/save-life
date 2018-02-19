app.factory("mainService" , mainService);

mainService.$inject = ['$http' , '$q' , 'AuthService'];

function mainService($http, $q , AuthService) { 
    return {
        loginService : _loginService,
        authService : _authService,
        logoutService : _logoutService,
        productList : _productList,
        preengage : _preengage,
        psbFormService : _psbFormService,
        registerProduct : _registerProduct,
        adminBearer : _adminBearer,
        poc : _poc
    }

    function _poc(data) {
        var deferred = $q.defer();
        $http({
            url:  "http://localhost:4000/poc",
            method: 'POST',
            data : data,
            cache : false
        })
            .then(function(response){
                deferred.resolve(response.data);
            })
            .catch(function(response){
                deferred.reject(response);
            });
            return deferred.promise;
    }

    function _registerProduct(data) {
        var deferred = $q.defer();
        $http({
            url:  "http://localhost:4000/registerproduct",
            method: 'POST',
            data : data,
            cache : false
        })
            .then(function(response){
                deferred.resolve(response.data);
            })
            .catch(function(response){
                deferred.reject(response);
            });
            return deferred.promise;
        }
    
    
    function _psbFormService(method , data) {
        var deferred = $q.defer();
        if(method == 'GET') {
            $http.get("http://localhost:4000/psb")
            .then(function(response) {
                deferred.resolve(response.data)
            }).catch(function(reject){
                deferred.reject(reject)
            })
        return deferred.promise
        }else if(method == 'POST') {
            $http({
                url:  "http://localhost:4000/psb",
                method: 'POST',
                data : data,
                cache : false
            })
                .then(function(response){
                    deferred.resolve(response.data);
                })
                .catch(function(response){
                    deferred.reject(response);
                });
                return deferred.promise;
        } 
        }

    function _logoutService() {
        var deferred = $q.defer();
        AuthService.setAuthorization('user' , 'false');
        $http.get("http://localhost:4000/logout")
            .then(function(response) {
                deferred.resolve(response.data)
            }).catch(function(reject){
                deferred.reject(reject)
            })
        return deferred.promise
    }
    
    function _preengage(method , data) {
        var deferred = $q.defer();
        if(method == 'GET'){
            $http({
                url:  "http://localhost:4000/preengage",
                method: 'GET',
                cache : false
            })
                .then(function(response){
                    deferred.resolve(response.data);
                })
                .catch(function(response){
                    deferred.reject(response);
                });
                return deferred.promise;
        }else if(method == 'POST') {
            $http({
                url:  "http://localhost:4000/preengage",
                method: 'POST',
                data : data,
                cache : false
            })
                .then(function(response){
                    deferred.resolve(response.data);
                })
                .catch(function(response){
                    deferred.reject(response);
                });
                return deferred.promise;
        }
    }

    function _productList(method , data) {
        var deferred = $q.defer();
        var dataObject = {};
        var url = "http://localhost:4000/welcome";
        if(method == 'POST') {
            $http({
                url : url,
                method : 'POST',
                data : data,
                cache : false  
               })
                   .then(function(response){
                       deferred.resolve(response.data);
                   })
                   .catch(function(response){
                       deferred.reject(response);
                   });
                   return deferred.promise;
        }else if(method == 'GET'){
        $http({
         url : url,
         method : 'GET',
         cache : false   
        })
            .then(function(response){
                deferred.resolve(response.data);
            })
            .catch(function(response){
                deferred.reject(response);
            });
            return deferred.promise;
        }
    }

    function _loginService(loginData) {
        var deferred = $q.defer();
        $http({
            url:  "http://localhost:4000/login",
            method: 'POST',
            data : loginData,
            cache : false
        })
            .then(function(response){
                deferred.resolve(response.data);
            })
            .catch(function(response){
                deferred.reject(response);
            });
            return deferred.promise;
    }

    function _authService() {
        var deferred = $q.defer();
        $http.get("http://localhost:4000/")
            .then(function(response) {
                deferred.resolve(response.data)
            }).catch(function(reject){
                deferred.reject(reject)
            })
        return deferred.promise
    }

    function _adminBearer() {
        var deferred = $q.defer();
        $http.get("http://localhost:4000/")
            .then(function(response) {
                deferred.resolve(response.data)
            }).catch(function(reject){
                deferred.reject(reject)
            })
        return deferred.promise;
    }
}