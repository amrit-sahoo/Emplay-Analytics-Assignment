//service method

mainApp.service('gitService',function($http){

	// this method first 
	var main =this;
	var baseUrl = 'https://api.github.com/search/repositories';



	this.search = function(query){

		return $http({
          
		  method: 'GET',
		  url: baseUrl+'?q='+query 

		})	


	}// end search

	
	
	



});//end git service 
