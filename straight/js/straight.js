app.controller('StrCtrl', ['$css', 'strSer', 'strFac','$scope', '$rootScope', '$location', '$state', function ($css, strSer,strFac,$scope,$rootScope,$location,$state) {
		var self = this;
		$css.add('./straight/css/straight.css');
		strFac.showData().then(function(response){
			$scope.data = response.data.list;
		});
		strFac.showData_one().then(function(response){
			$scope.data_one = response.data.list;
		});
		strFac.showData_two().then(function(response){
			$scope.data_two = response.data.list;
		});
		strFac.showData_three().then(function(response){
			$scope.data_three = response.data.data;
		});
		$scope.showGoods = function(){
			//strSer.addGoods(this.item);
			$state.go('substr',{id:JSON.stringify(this.item)});
		}
		
	}])
	.controller('ShopCtrl', ['strSer', '$scope', '$location', 'cartSer', '$http', '$state', function(strSer,$scope, $location,cartSer,$http,$state){
		$http.get('http://127.0.0.1:8020/juanpiwang/straight/js/global-healthCare.json').success(function(data){
			$scope.data = data.list;
		});
		$scope.showGoods = function(){
			$state.go('substr',{id:JSON.stringify(this.item)});
		}
	}])
	.controller('Substr', ['strSer', '$scope', '$location', 'cartSer', '$stateParams',function(strSer,$scope, $location,cartSer,$stateParams){
		$scope.goback = function(){
			window.history.back();
			//$location.path('straight');
		}
		var obj = JSON.parse($stateParams.id);
		$scope.datas = obj;
		$scope.addsomeGoods = function(){
			cartSer.addgoodss($scope.datas);
		}
	}])
	
	