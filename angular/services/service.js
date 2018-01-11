// using service method

/*A custom service is defined for making a request to API. Generally we made custom service for making 
API request because in future when API changes it become easy to maintain.*/


mainApp.service('gitService',function($http){

	
	var main =this;
	var baseUrl = 'https://api.github.com/search/repositories';


    //The search function is used in the controller.
	this.search = function(query){

		return $http({
          
		  method: 'GET',
		  url: baseUrl+'?q='+query 

		})	


	}// end search function

	
	
	



});//end git service 