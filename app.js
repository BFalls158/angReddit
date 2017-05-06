angular.module('app', ['ngRoute', 'ngAnimate'])
	.config(function ($routeProvider){
		$routeProvider.when('/rSearch', {
			templateUrl: 'rSearch.html',
			controller: 'rSController'
		})
		.when('/rResults', {
			templateUrl: 'rResults.html',
			controller: 'rRController'
		})
		.otherwise('/rSearch')
	})
	.directive('rPost', function(){
		return {
			restrict: 'C',
			templateUrl: 'rDiv.html',
			replace: false
		}
	});

