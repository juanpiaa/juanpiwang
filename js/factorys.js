app.factory('homeFac', ['$http',function ($http,homeSer) {
		return {
			getData : function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/shangxin.json');
			},
			getlunbodata: function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/shangxin_banner.json');
			},
		}
	}])
	.factory('nzFac', ['$http',function ($http,strSer) {
		return {
			//女装
			getnzData : function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/nvzhuang.json');
				console.log(111)
			},
			getnzlunbodata: function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/nvzhuang_banner.json');
			}
		}
	}])
	.factory('shFac', ['$http',function ($http,strSer) {
		return {
			//鞋子
			getshData : function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/shoes.json');
			},
			getshlunbodata: function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/shoes_banner.json');
			}
		}
	}])
	.factory('craFac', ['$http',function ($http) {
		return {
			//最后疯抢
			getcrazyData : function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/crazy.json');
			}
		}
	}])
	.factory('postFac', ['$http',function ($http) {
		return {
			//9.9元
			getpostData : function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/livingHomeCookhouseGoodsData.json');
			}
		}
	}])
	.factory('pintuanFac', ['$http',function ($http) {
		return {
			//拼团
			getpintuanData : function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/pintuan.json');
			},
			getptlunbodata: function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/shoes_banner.json');
			}
		}
	}])
	.factory('onlineFac', ['$http',function ($http) {
		return {
			//即将上线
			getonlineData : function(){
				return $http.get('http://127.0.0.1:8020/juanpiwang/home/js/livingHomeDepartmentGoodsData.json');
			}
			
		}
	}])
	.factory('strFac', ['$http', function ($http,strSer) {
			
			return {
				showData : function(){
					return $http.get('http://127.0.0.1:8020/juanpiwang/straight/js/global-baby.json');
				},
				showData_one : function(){
					return $http.get('http://127.0.0.1:8020/juanpiwang/straight/js/global-beauty.json');

				},
				showData_two : function(){
					return $http.get('http://127.0.0.1:8020/juanpiwang/straight/js/global-food.json');

				},
				showData_three : function(){
					return $http.get('http://127.0.0.1:8020/juanpiwang/straight/js/global-goods.json');

				},
			}
		}])
	.factory('worldFac', ['$http' ,function ($http,worldSer) {
		
		return {
		  globals 	: function() {
		  	return $http.get('http://127.0.0.1:8020/juanpiwang/world/global_1.json')
		  }
		}
	}])
	.factory('cartFac', [function (cartSer) {
		var pageName = "购物车"
		return {
			pageName : pageName
		}
	}])
	.factory('mineFac', [function (mineSer) {
		var pageName = "我的"
		return {
			pageName : pageName
		}
	}])