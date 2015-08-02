(function() {

    'use strict';

    var mp = angular.module('mp',[
    	'ngRoute',
    	'ngResource',
    ]);

    function mpConfig ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'public/views/index.html',
                controller: 'FirstPageCtrl'
            })
            .otherwise({ redirectTo: '/' });
    }

    mpConfig
        .$inject = ['$routeProvider'];

    //definirea rutelor, injectem in config $routeProvider
    mp
        .config(mpConfig);

    window.mp = mp;

}());