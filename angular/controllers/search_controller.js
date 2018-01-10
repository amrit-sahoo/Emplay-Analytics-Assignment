mainApp.controller('repoSearch' , ['$http','gitService' , function($http , gitService){

	var main = this;

	this.heading = "Enter The Repository Name For Search";
    // this.query = ;
	//console.log(this.query)
	this.getRepository = function(){
        var q = main.query;
        console.log(main.query);
        gitService.search(q)
        .then(function successCallBack(response){
        	main.array = response.data.items;
        	main.total = response.data.total_count;

        	
        	console.log(response)
        }, function errorCallBack(response){
        	alert('Error!! check console');
        	console.log(response)
        });
       
	}
	
}]);