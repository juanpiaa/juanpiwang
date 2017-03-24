app.controller('WorldCtrl', ['$css', 'worldSer', 'worldFac', "$scope", 'strSer', '$state', function ($css, worldSer, worldFac,$scope,strSer,$state) {
		var self = this;
		$scope.addGoods = function(){
			//strSer.addGoods(this.item);
			$state.go('substr',{id:JSON.stringify(this.item1)});
		}
		$css.add('./lib/swiper-3.3.1.min.css');
		worldFac.globals().then(function (res) {
			self.word = res.data.list;
		});
		worldFac.getlunbodata().then(function(res){
                self.dswiper=res.data.data.banner_ads;
                console.log( self.dswiper);
                worldSer.lunbo();
        });
		
		
	}])
.controller('WorldtowCtrl',["$scope",'world2Fac' ,'$state', function ($scope,world2Fac,$state){
	var self = this;
	world2Fac.getsuju().then(function (res) {
			self.suju = res.data.data.aaa[0].goodsList;
		});
		$scope.addGoods = function(){
			//strSer.addGoods(this.item);
			$state.go('substr',{id:JSON.stringify(this.item)});
		}
//	$('.nav').on('click','li',function(){
//		
//	})
}])