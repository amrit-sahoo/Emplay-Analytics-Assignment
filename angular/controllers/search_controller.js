mainApp.controller('repoSearch' , ['$http','gitService' , function($http , gitService){

	var main = this;

	this.heading = "Enter The Repository Name For Search";
    
    
    
this.typingTimer; //timer identifier
  
this.array=[]; 






    this.getRepository = function(){
         main.Name= document.forms["searchbox"]["key"].value;
         console.log(main.Name);
        
        gitService.search(main.Name)
        .then(function successCallBack(response){
        	main.array = response.data.items;
        	main.total = response.data.total_count;

        	
        	console.log(main.array);
        }, function errorCallBack(response){
        	alert('Error!! check console');
        	console.log(response)
        });
       
	}

    //on keyup, start the countdown
    $('#key').on('keyup', function () {
         clearTimeout(main.typingTimer);
         main.typingTimer = setTimeout(main.getRepository, 2000);
     });

    //on keydown, clear the countdown 
     $('#key').on('keydown', function () {
         clearTimeout(main.typingTimer);
     });
    



	
}]);