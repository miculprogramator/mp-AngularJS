'use strict'
//pagenavbar
mp.directive('mpHeader', [function() {

    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "public/views/main/mp-header.html",
    };
}]);
