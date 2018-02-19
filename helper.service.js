app.factory('AuthService', function($q, $http){
    
    return {
        authorized : function(key) {
            return localStorage.getItem(key);
        },
        setAuthorization : function(key , value) {
            localStorage.setItem(key , value);
        } 
    }
})

app.factory("isAdminService" , function($q , $http) {
    return {
        isAdmin : function(key) {
            return localStorage.getItem(key);
        },
        setAdmin : function(key , value) {
            localStorage.setItem(key , value);
        }
    }
})