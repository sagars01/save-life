app.factory('AuthService', function($q, $http){
    
    return {
        authorized : function(key) {
            return localStorage.getItem(key);
        },
        setAuthorization : function(key , value) {
            localStorage.setItem(key , value);
        } 
    }

    // function _adminBearer() {
    //     var deferred = $q.defer();
    //     $http.get("http://localhost:4000/")
    //         .then(function(response) {
    //             deferred.resolve(response.data)
    //         }).catch(function(reject){
    //             deferred.reject(reject)
    //         })
    //     return deferred.promise;
    // }
})