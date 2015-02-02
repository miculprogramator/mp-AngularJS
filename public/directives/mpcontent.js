'use strict'
//main content
mp.directive('mpContent', [function() {

    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "public/views/main/mp-content.html",
    };
}]);
