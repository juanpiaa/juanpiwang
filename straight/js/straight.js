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
		strSer.remove();
		
	}])
	.controller('ShopCtrl', ['strSer', '$scope', '$location', 'cartSer', '$http', '$state', function(strSer,$scope, $location,cartSer,$http,$state){
		$http.get('http://127.0.0.1:8020/juanpiwang/straight/js/global-healthCare.json').success(function(data){
			$scope.data = data.list;
		});
		$scope.showGoods = function(){
			$state.go('substr',{id:JSON.stringify(this.item)});
		}
	}])
	.controller('Substr', ['strSer', '$scope', '$location', 'cartSer', '$stateParams', '$state', 'favSer',function(strSer,$scope, $location,cartSer,$stateParams,$state,favSer){
		$scope.goback = function(){
			window.history.back();
			//$location.path('straight');
		}
		var obj = JSON.parse($stateParams.id);
		$scope.datas = obj;
		
		obj.count = 1;
		var img;
		var flyer;
		$scope.addsomeGoods = function(){
			
			cartSer.addgoodss($scope.datas);
			img = $('.btn').parent().parent().children().eq(0).children().eq(1).children().eq(2).attr('src');
			flyer = $('<img class="flyer-img" style="width:2.875rem" src="' + img + '">'); //抛物体对象   
			flyer.fly({
				start: {
					left: event.pageX - 200, //抛物体起点横坐标   
					top: event.pageY - 400 //抛物体起点纵坐标   
				},
				end: {
					left: event.pageX - 120, //抛物体终点横坐标   
					top: event.pageY + 530, //抛物体终点纵坐标   
					width: 0,
					height: 0
				},
				onEnd: function() { //console.log(this);
					$("#tip").show().animate({
						width: '200px'
					}, 300).fadeOut(500); ////成功加入购物车动画效果   
					this.destroy(); //销毁抛物体   
				}
			});
		}
		$scope.addGoods = function(){
			favSer.tianjia($scope.datas);
		}
			var main = document.querySelector('.main')
			var oMark=document.querySelector('.mark');
			var oFloat=document.querySelector('.float_layer');
			var oBig=document.querySelector('.big_pic');
			var oSmall=document.querySelector('.small_pic');
			var oImg=document.querySelector('.big_pic img');
			oMark.addEventListener('touchstart',function(e){
			
				oFloat.style.display='block';
				oBig.style.display='block';
			});
			
			oMark.addEventListener('touchend',function(e){
			
				oFloat.style.display='none';
				oBig.style.display='none';
			});
			oMark.addEventListener('touchmove',function(ev){
				var oEvent=ev||event;
				var l=oEvent.touches[0].clientX-main.offsetLeft-oSmall.offsetLeft-oFloat.offsetWidth/2;
				var t=oEvent.touches[0].clientY-main.offsetTop-oSmall.offsetTop-oFloat.offsetHeight/2;
				if(l<0)
				{
					l=0;
				}
				else if(l>oMark.offsetWidth-oFloat.offsetWidth)
				{
					l=oMark.offsetWidth-oFloat.offsetWidth;
				}
				
				if(t<0)
				{
					t=0;
				}
				else if(t>oMark.offsetHeight-oFloat.offsetHeight)
				{
					t=oMark.offsetHeight-oFloat.offsetHeight;
				}
				oFloat.style.left=l+'px';
				oFloat.style.top=t+'px';
				var percentX=l/(oMark.offsetWidth-oFloat.offsetWidth);
				var percentY=t/(oMark.offsetHeight-oFloat.offsetHeight);
				oImg.style.left=-percentX*(oImg.offsetWidth-oBig.offsetWidth)+'px';
				oImg.style.top=-percentY*(oImg.offsetHeight-oBig.offsetHeight)+'px';
			});
	}])
	.controller('FavCtrl',['strSer','$scope','$stateParams','favSer',function(strSer,$scope,$stateParams,favSer){
		
		$scope.arr = favSer.zhanshi();
		
	}])

	