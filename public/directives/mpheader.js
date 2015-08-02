(function() {

    'use strict';
    
    function mpHeader() {

        return {
            replace: true,
            restrict: 'E',  
            templateUrl: "public/views/main/mp-header.html",
        };
    }
    //pagenavbar
    mp
        .directive('mpHeader', mpHeader);

}());
