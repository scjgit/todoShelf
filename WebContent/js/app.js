var app = angular.module('todo', []);


app.controller('shelfCntrl', function($scope) {

	  $scope.todoList = [
	                  {
	                	  category:"Office",
	                	  todos:[
	                	         {
	                	        	 name:"do",
	                	        	 description:" do coding",
	                	        	 priority:1,
	                	        	 done:true,
	                	        	 type:"text"
	                	         },
	                	         {
	                	        	 name:"mitime",
	                	        	 description:" submit mitime",
	                	        	 priority:2,
	                	        	 done:true,
	                	        	 type:"text"
	                	         },
	                	         {
	                	        	 name:"do",
	                	        	 description:" do coding",
	                	        	 priority:1,
	                	        	 done:false,
	                	        	 type:"text"
	                	         },
	                	         {
	                	        	 name:"mitime",
	                	        	 description:" submit mitime",
	                	        	 priority:2,
	                	        	 done:true,
	                	        	 type:"text"
	                	         }
	                	         ]
	                	  
	                  },
	                  {
	                	  category:"Personal",
	                	  todos:[
	                	         {
	                	        	 name:"do Home",
	                	        	 description:" do cleaning",
	                	        	 priority:1,
	                	        	 done:false,
	                	        	 type:"text"
	                	         },
	                	         {
	                	        	 name:"set alarm",
	                	        	 description:" set alarm",
	                	        	 priority:2,
	                	        	 done:false,
	                	        	 type:"text"
	                	         }
	                	         ]
	                	  
	                  },
	                  {
	                	  category:"Friends",
	                	  todos:[
	                	         {
	                	        	 name:"Todo 1",
	                	        	 description:"Todo 1",
	                	        	 priority:1,
	                	        	 done:true,
	                	        	 type:"text"
	                	         },
	                	         {
	                	        	 name:"Todo 2",
	                	        	 description:"Todo 2",
	                	        	 priority:2,
	                	        	 done:false,
	                	        	 type:"text"
	                	         }
	                	         ]
	                	  
	                  },
	                  {
	                	  category:"Relatives",
	                	  todos:[
	                	         {
	                	        	 name:"Todo 1",
	                	        	 description:"Todo 1",
	                	        	 priority:1,
	                	        	 done:true,
	                	        	 type:"text"
	                	         },
	                	         {
	                	        	 name:"Todo 2",
	                	        	 description:"Todo 2",
	                	        	 priority:2,
	                	        	 done:false,
	                	        	 type:"text"
	                	         }
	                	         ]
	                	  
	                  }

	                  
	                  
	                  
	                  ];

	  $scope.add = function() {};

	  $scope.remaining = function() {};

	  $scope.archive = function() {};
	});



app.filter('isDone', [function() {
	return function(itemList,flag) {
		var newList=[];
		for(var i=0;i<itemList.length;i++){
			
			if(flag==itemList[i].done)
			newList[newList.length]=itemList[i];
			
		}
		
		
		 return newList;
	    };
}]);
