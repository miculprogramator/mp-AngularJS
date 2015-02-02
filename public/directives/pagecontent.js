'use strict'
//main content
mp.directive('siteContent', [function() {

    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "public/views/main/page-content.html",
    };
}]);
