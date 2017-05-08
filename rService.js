angular.module('app')
  .factory('rService', function($http, $q) {

  	var reddit = {};

    return {
      setReddit: function (subreddit) {
	      var promise = $http({
	      	method: 'GET',
	      	url: 'http://www.reddit.com/r/' + subreddit +'.json',
	      	params: {limit: '24'}
	  	  }).then(function(response) {
	  	  		if (response.status > 199 && response.status <300) {
	  	  			reddit = response.data;
	  	  		} else {
	  	  			return $q.reject(response);
	  	  		}
	      },function(error){
	  	  		return $q.reject(error);
	      });
	    return promise;
	  },
      getReddit: function () {
	     return reddit;
	    }
	 }

  });