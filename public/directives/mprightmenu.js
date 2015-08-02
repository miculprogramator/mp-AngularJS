(function() {
    
    'use strict';
    //main content
    function mpRightMenu() {

        return {
            replace: true,
            restrict: 'E',  
            templateUrl: "public/views/main/mprightmenu.html",
        };
    }

    mp
        .directive('mpRightMenu', mpRightMenu);

}());
