// using factory method

// Factory method uses the returned value of the function,
// it returns the values
//of the function returned after the execution
// 

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