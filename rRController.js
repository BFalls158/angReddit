angular.module('app')
	.controller('rRController', function($scope, $location, rService) {

		$scope.pageClass = 'results';

		var reddit = rService.getReddit();
		$scope.posts = reddit.data.children;

		$scope.getImg = function(src) {
			if (src === "" || src === "self" || src === "default") {
				return 'img/default-thumbnail.jpg';
			} else {
				return src;
			}
		}
	});