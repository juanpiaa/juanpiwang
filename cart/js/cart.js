app.controller('CartCtrl', ['$css', 'cartSer', 'cartFac', '$scope', '$interval', function($css, cartSer, cartFac, $scope, $interval) {
		var arrs = new Array();
		var self = this;
		var second = document.querySelector("#second");
		var first = document.querySelector("#first");
		var footer = document.querySelector("#footer");
		var p2 = document.querySelector("#p2");
		self.pageName = cartFac.pageName;
		$css.add("./cart/css/cart.css");
		$scope.data = cartSer.showAllgoods();
		var time = 4000;
		var timer = $interval(function() {
			time--;

			if(time == 0) {
				$interval.cancel(timer);
				first.style.display = "block";
				second.style.display = "none";
				footer.style.display = "none";
			}

			var h, m, s;
			h = parseInt(time / 3600);
			m = parseInt((time - h * 3600) / 60);
			s = parseInt((time - h * 3600) % 60);

			$scope.h = h;
			$scope.m = m;
			$scope.s = s;

		}, 1000);

		js();

		if($scope.data.length == 0) {
			first.style.display = "block";
			second.style.display = "none";
			footer.style.display = "none";
		} else {
			first.style.display = "none";
			second.style.display = "block";

		}
		$scope.delect = function() {

			ss(this.item);
		}
		$scope.delectArr = function() {
			arrs.splice(this.index, 1);
			if(arrs == 0) {
				footer.style.display = "none";
			}
		}
		$scope.add = function() {

			this.item.count += 1;
			js();

		}
		$scope.jian = function() {
			this.item.count -= 1;
			js();
			if(this.item.count == 0) {
				ss(this.item);
			}

		}
		$scope.aginAdd = function() {

			this.items.count = 1;
			$scope.data.push(this.items);
			js();
			
             arrs.forEach(function(e, index) {
				if(e.goods_id == item.goods_id) {
					arrs.splice(index, 1);
				}
			})
			
			
			first.style.display = "none";
			second.style.display = "block";
			footer.style.display = "block";
			if(arrs.length == 0) {
				footer.style.display = "none";
			}
		}

		function ss(item) {
			$scope.data.forEach(function(e, index) {
				if(e.goods_id == item.goods_id) {
					$scope.data.splice(index, 1);
				}
			})
			arrs.push(item);
			if($scope.data.length == 0) {
				first.style.display = "block";
				second.style.display = "none";
				footer.style.display = "block";
				$scope.dataArr = arrs;
			}
		}

		function js() {

			var zj = 0;
			for(item of $scope.data) {

				zj += (item.cprice || item.h) * (item.count);

				$scope.zj = zj.toFixed(2);

			}

		}

	}])
	.controller('SearchCtrl', ['strSer', '$scope', '$location', 'cartSer', '$http', '$state', '$css','world2Fac', function(strSer, $scope, $location, cartSer, $http, $state, $css,world2Fac ) {
		var self = this;
		var arr = new Array();
		var arrs = new Array();
		var inputs = document.querySelector("#myinput");
		var main3 = document.querySelector("#main3");
		var main4 = document.querySelector("#main4");
		var select1 = document.querySelector("#select1");
		var select2 = document.querySelector("#select2");
		
		
	
		$css.add("./cart/css/search.css");
		
         $scope.addgoods = function(){
			$state.go('substr',{id:JSON.stringify(this.item)});
		}
         
		world2Fac.getsuju().then(function (res) {
			$scope.data = res.data.data.aaa[0].goodsList;
		});	
		
		var flags = true;
		
		$scope.click1 = function(){
			$scope.click();
		}
		
		$scope.click = function(){
			arr = [];
			 $scope.data.forEach(function(e, index) {
			 	    var inpuss = inputs.value;
					var title = e.q;
					var t = title.indexOf(inpuss);
					if(t >= 0) {
						if(!flags){
							arr.push(e);
						}
						
					}
					flags = false;
				})
			 

			 if(!flags)
			 { 	 arrs = [];
			 	 arr.forEach(function(e,index)
			 	    {
			 	           
				 	       if(parseInt(select1.value) < e.h && e.h < parseInt(select2.value))
				 	       {			 	  	           
				 	  	           arrs.push(e);
				
							       $scope.dataArr = arrs;
							       
								   main3.style.display = "none";
							   	   main4.style.display = "block";
							   	   
			 	           }
				 	       if( parseInt(select1.value) > e.h && e.h > parseInt(select2.value) || parseInt(select1.value) == parseInt(select2.value)){
			 	           	 
			 	           	       arrs = [];
			 	           	       
			 	           	       $scope.dataArr = arrs;
			 	           }
			 	
			        })	
			 	
			 }
			 flags = false;
			 	
		}
		
        var flag = true;
        
		$scope.find = function() {
			select1.value = "请选择";
			select2.value = "请选择";
			var inputValue = inputs.value;
			if(flag == false) {
				arr = [];
				$scope.data.forEach(function(e, index) {
					var title = e.q;
					var t = title.indexOf(inputValue);
					if(t >= 0) {
						arr.push(e);
						$scope.dataArr = arr;
						main3.style.display = "none";
						main4.style.display = "block";
					}
				})
			}
			flag = false;
		}
	
		
	}])