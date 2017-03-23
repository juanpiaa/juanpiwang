app.controller('WorldCtrl', ['$css', 'worldSer', 'worldFac', "$scope", 'strSer', '$state', function ($css, worldSer, worldFac,$scope,strSer,$state) {
		var self = this;
		self.pageName = worldFac.pageName;
		worldFac.globals().then(function (res) {
			self.word = res.data.list;
		})
		$scope.addGoods = function(){
			$state.go('substr',{id:JSON.stringify(this.item1)});
		}
		
		
		
		
		
	}])