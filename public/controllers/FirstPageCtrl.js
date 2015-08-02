(function() {

    'use strict';

    function FirstPageCtrl($scope, Articles) { 

        var self = this;
        self.art = [];

        Articles.all({}, function(data) {
            self.articles = data;
        }, function(data) {
            console.log("Error:", data);
        });

        return ($scope.Intro = self);

    }

    FirstPageCtrl
        .$inject = ['$scope','Articles'];

    mp
        .controller('FirstPageCtrl',FirstPageCtrl);
}());