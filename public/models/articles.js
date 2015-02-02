mp.factory('Articles',['$resource',function($resource){

	return $resource('../angular/content/articole.json',null,{
		'all': {
			method:'GET', 
			isArray:true
		}
	});

}]);