(function() {

    'use strict';

    function Articles($resource) {
        return $resource('../angular/content/articole.json',null,{
            'all': {
                method:'GET', 
                isArray:true
            }
        });

    }


    Articles
        .$inject = ['$resource'];
    mp
        .factory('Articles', Articles);

}());

