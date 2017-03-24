app.controller('MineCtrl', ['$css', 'mineSer', 'mineFac', function ($css, mineSer, mineFac) {
		var self = this;
		self.pageName = mineFac.pageName;
		$css.add("./mine/css/mine.css");
	}])