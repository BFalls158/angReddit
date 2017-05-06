angular.module('app')
	.controller('rSController', function($scope, $location, rService) {
		
		$scope.pageClass = 'search';

		$scope.submitSearch = function (b){
			if (b) {
				rService.setReddit($scope.reddit.search).then(function(){
					$location.path('/rResults')
				})
			
			};
		$scope.reddit.search = null;

		};

	});