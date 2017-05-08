angular.module('app')
	.controller('rSController', function($scope, $location, rService) {
		
		$scope.pageClass = 'search';

		$scope.submitSearch = function (b){
			if (b) {
				rService.setReddit($scope.reddit.search.replace(/ /g,"_"))
					.then(function(results){
						$location.path('/rResults');	
					}, function (error) {
						console.log(error);
					})
			};
			$scope.reddit.search = null;

		};
	});