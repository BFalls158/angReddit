angular.module('app', ['ngRoute', 'ngAnimate'])
	.config(function ($routeProvider){
		$routeProvider.when('/rSearch', {
			templateUrl: 'views/rSearch.html',
			controller: 'rSController'
		})
		.when('/rResults', {
			templateUrl: 'views/rResults.html',
			controller: 'rRController'
		})
		.otherwise('/rSearch')
	})
	.directive('rPost', function(){
		return {
			restrict: 'C',
			templateUrl: 'views/rDiv.html',
			replace: false
		}
	});

