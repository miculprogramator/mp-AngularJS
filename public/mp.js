'use strict';
var mp = angular.module('mp',[
	'ngRoute',
	'ngResource',
]);
//definirea rutelor, injectem in config $routeProvider
mp.config(['$routeProvider', function($routeProvider) {
	console.log("test");
	$routeProvider
        .when('/', {
            templateUrl: 'public/views/index.html',
            controller: 'FirstPageCtrl'
        })
        .otherwise({ redirectTo: '/' });
}]);