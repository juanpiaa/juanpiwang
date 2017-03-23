app.controller('CartCtrl', ['$css', 'cartSer', 'cartFac','$scope', function ($css, cartSer, cartFac,$scope) {
		var self = this;
		var second = document.querySelector("#second");
		var first = document.querySelector("#first");
		var footer = document.querySelector("#footer");
		var spanD = document.querySelector("#spanDelect");
		console.log(second);
		console.log(first);
		self.pageName = cartFac.pageName;
		 $css.add("./cart/css/cart.css");
		
		 $scope.data = cartSer.showAllgoods();
		 console.log($scope.data);
		 if($scope.data.length == 0){
		 	    first.style.display = "block"
		 	    second.style.display = "none";
		 	    footer.style.display = "none";
		 }else{
		 	    first.style.display = "none";
		 	    second.style.display = "block";
		 	     var arrDelet = new Array();
		 	    spanD.addEventListener("click",function () {
		 	    	
		 	    	arrDelet.push();
		 	    	
		 	    })
		 }
		
	}])