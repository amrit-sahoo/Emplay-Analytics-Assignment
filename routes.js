

mainApp.config(['$routeProvider' , function($routeProvider){

	$routeProvider.when('/' , {
		templateUrl : 'views/main-view.html', 
		controller : 'repoSearch',
		controllerAs : 'searchController'
	})
	.otherwise({
		template : "<h2>Error!!</h2>"
	})

}]);