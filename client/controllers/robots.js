var reverieApp = angular.module('reverieApp');

reverieApp.controller('RobotsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('RobotsController loaded...');

    $scope.getHosts = function() {
        $http.get('/reverie/hosts').success(function(response) {
            $scope.hosts = response;
        });
    }

    $scope.getHost = function() {
        var id = $routeParams.id;
        $http.get('/reverie/hosts/' + id).success(function(response) {
            $scope.host = response;
        });
    }

    $scope.addHost = function() {
        console.log($scope.host);
        $http.post('/reverie/hosts/', $scope.host).success(function(response) {
            window.location.href = '#/hosts';
        });
    }

    $scope.updateHost = function() {
        var id = $routeParams.id;
        $http.put('/reverie/hosts/' + id, $scope.host).success(function(response) {
            window.location.href = '#/hosts';
        });
    }

    $scope.removeHost = function(id) {
        $http.delete('/reverie/hosts/' + id).success(function(response) {
            window.location.href = '#/hosts';
        });
    }
}]);