var reverieApp = angular.module('reverieApp', ['ngRoute']);

reverieApp.config(function($routeProvider) {
    $routeProvider.when('/', {
            controller: 'RobotsController',
            templateUrl: 'views/hosts.html'
        })
        .when('/books', {
            controller: 'RobotsController',
            templateUrl: 'views/hosts.html'
        })
        .when('/books/details/:id', {
            controller: 'RobotsController',
            templateUrl: 'views/host_details.html'
        })
        .when('/books/add', {
            controller: 'RobotsController',
            templateUrl: 'views/add_host.html'
        })
        .when('/books/edit/:id', {
            controller: 'RobotsController',
            templateUrl: 'views/edit_host.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});