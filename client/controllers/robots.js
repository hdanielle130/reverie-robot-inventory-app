var reverieApp = angular.module('reverieApp');

reverieApp.controller('RobotsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('RobotsController loaded...');

    $scope.getHosts = function() {
        $http.get('/api/hosts').success(function(response) {
            $scope.hosts = response;
        });
    }

    $scope.getHost = function() {
        var id = $routeParams.id;
        $http.get('/api/hosts/' + id).success(function(response) {
            $scope.host = response;
        });
    }

    $scope.addHost = function() {
        console.log($scope.host);
        $http.post('/api/hosts/', $scope.host).success(function(response) {
            window.location.href = '#/hosts';
        });
    }

    $scope.updateHost = function() {
        var id = $routeParams.id;
        $http.put('/api/hosts/' + id, $scope.host).success(function(response) {
            window.location.href = '#/hosts';
        });
    }

    $scope.removeHost = function(id) {
        $http.delete('/api/hosts/' + id).success(function(response) {
            window.location.href = '#/hosts';
        });
    }
}]);