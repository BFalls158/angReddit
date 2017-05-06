angular.module('app')
  .factory('rService', function($http) {

  	var reddit = {};

    return {
      setReddit: function (subreddit) {
	      var promise = $http({
	      	method: 'GET',
	      	url: 'http://www.reddit.com/r/' + subreddit +'.json',
	      	params: {limit: '24'}
	  	  }).then(function(response) {
	  	  	reddit = response.data;
	      },function(error){
	  	  	console.log(error);
	      });
	    return promise;
	  },
      getReddit: function () {
	      	return reddit;
	    }
	 }

  });