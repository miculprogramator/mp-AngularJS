(function() {

    'use strict';
    //main content
    function siteContent() {

        return {
            replace: true,
            restrict: 'E',  
            templateUrl: "public/views/main/page-content.html",
        };
    }
    
    mp
        .directive('siteContent', siteContent);

}());
