(function(){
    angular.module('GeoTag')
        .controller('SignupController', ['$scope', '$state', '$http',function($scope, $state, $http){
            $scope.createUser = function(){
                console.log('NewUser object ',$scope.newUser)
                $http.post('api/user/signup', $scope.newUser).success(function(response){
                    
                }).error(function(error){
                    console.log('Error in User Signup ', error);
                })
            }
        }]);
}());