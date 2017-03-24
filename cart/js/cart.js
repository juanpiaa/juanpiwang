app.controller('CartCtrl', ['$css', 'cartSer', 'cartFac','$scope', function ($css, cartSer, cartFac,$scope) {
		var arrs = new Array();
		var self = this;
		var second = document.querySelector("#second");
		var first = document.querySelector("#first");
		var footer = document.querySelector("#footer");
		 self.pageName = cartFac.pageName;
		 $css.add("./cart/css/cart.css");
		 $scope.data = cartSer.showAllgoods();
		
		 js();
          console.log($scope.data);
		 if($scope.data.length == 0){
		 	    first.style.display = "block";
		 	    second.style.display = "none";
		 	    footer.style.display = "none";
		 }else{
		 	    first.style.display = "none";
		 	    second.style.display = "block";

		 }
		 $scope.delect = function () {
		 	  
             ss(this.item);
		 }
         $scope.delectArr = function () {      	
         	arrs.splice(this.index,1);
         	if(arrs == 0){
         	    footer.style.display = "none";
         	}
         }
         $scope.add = function () {    
         	
         	this.item.count+=1;
         	js();
   	
         }
         $scope.jian = function () {   
     	    this.item.count-=1;
     	    if(this.item.count == 0){
     	    	ss(this.item);
     	    }
          
         }        
         $scope.aginAdd = function (){
         	 
         	 this.items.count = 1;   	 
         	 $scope.data.push(this.items);
         	 js();
         	 arrs.splice(this.index,1);
         	 first.style.display = "none";
		 	 second.style.display = "block";
		     footer.style.display = "block";
         	 if(arrs.length == 0){
         	 	footer.style.display = "none";
         	 }     	     	
         }  
         function ss(item){
         	$scope.data.forEach(function(e,index){
         		if(e.goods_id == item.goods_id){
         			$scope.data.splice(index,1);
         		}
         	})
		 	 arrs.push(item);
		 	 if($scope.data.length == 0){
		 	      first.style.display = "block";
		 	      second.style.display = "none";
		 	      footer.style.display = "block";
		 	      $scope.dataArr = arrs;
		 	 }	 
         }
         function js(){
         	
		         var zj = 0;
		         for(item of $scope.data){
		         	
		         	   zj += item.cprice*(item.count);
		         	   
		         	   $scope.zj = zj;
		         	   
		         }
         	
         }
         
		
	}])