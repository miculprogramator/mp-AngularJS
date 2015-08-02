(function() {
    'use strict';
    //main content

    function mpContent() {

        return {

            replace: true,
            restrict: 'E',  
            templateUrl: "public/views/main/mp-content.html",
        };
    }

    mp
        .directive('mpContent', mpContent);

}());

