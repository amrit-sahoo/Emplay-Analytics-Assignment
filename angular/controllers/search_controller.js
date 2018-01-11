//Controller is defined and the custom service "gitService" is injected in the dependencies.
//the custom service is made separately to call the API. It can be done in the controller. But as per better industry practice genarally APIs are called in a custom service for better maintaince purpose in the future. 

mainApp.controller('repoSearch' , ['gitService' , function( gitService){
    
    //A varibele is declared to create a context
	var main = this;
    
    //I had used 'this' rather than '$scope' because I had used 'controller as' synatx for alias of the controller. 
	this.heading = "Enter The Repository Name For Search";

    //As I know I am going to store the response in an array so I defined a blank array intially.
    this.repositories=[]; 




    
    //function to get the response  from the API and is called when user stops writting.
    this.getRepository = function(){
         main.Name= document.forms["searchbox"]["key"].value;
         console.log(main.Name);
        
        //Calling the API using http request which is defined and returned by the service "gitService"
        gitService.search(main.Name)
        .then(function successCallBack(response){
        	 
             //Assigning the response to an array to use in html.
             main.repositories = response.data.items;
        	 
        	 
        	 console.log(main.repositories);
        }, function errorCallBack(response){
        	
        	console.log(response)
        });
       
	}

    
    



	
}]);