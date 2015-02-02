'use strict';

mp.controller('FirstPageCtrl',['$scope','Articles', function($scope,Articles) { 

	var self = this;
	self.art = [];

	Articles.all({}, function(data) {
		self.articles = data;
	}, function(data) {
		console.log("Error:", data);
	});

	return $scope.Intro = self;

}]);