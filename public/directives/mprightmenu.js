'use strict'
//main content
mp.directive('mpRightMenu', [function() {

    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "public/views/main/mprightmenu.html",
    };
}]);
