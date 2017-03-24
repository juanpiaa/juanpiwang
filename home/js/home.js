app.controller('HomeCtrl', ['$css', 'homeSer', 'homeFac', '$scope', function ($css, homeSer, homeFac,$scope) {
        var self = this;
        $css.add('./home/css/home.css');
        $css.add('./lib/swiper-3.3.1.min.css');
        homeFac.getData().then(function(res){
        	
                self.data=res.data.list;
        });
        homeFac.getlunbodata().then(function(res){
                $scope.dswiper=res.data.data.banner_ads;
                homeSer.lunbo();
        });
        homeSer.remove();
    }])
.controller('SxCtrl', ['$css', 'sxSer', 'sxFac', '$scope', function ($css, sxSer, sxFac,$scope) {
		var self = this;
        $css.add('./home/css/shangxin.css');
        $css.add('./lib/swiper-3.3.1.min.css');
        sxFac.getData().then(function(res){
                $scope.data=res.data.list;
        });
        sxFac.getlunbodata().then(function(res){
                $scope.dswiper=res.data.data.banner_ads;
                sxSer.lunbo();
        });
        
	}])
.controller('NzCtrl', ['$css', 'nzSer', 'nzFac', function ($css, nzSer, nzFac) {
		var self = this;
        $css.add('./home/css/nvzhuang.css');
        nzFac.getnzData().then(function(res){
                self.data=res.data.list;
                
        });
        nzFac.getnzlunbodata().then(function(res){
                self.dswiper=res.data.data.banner_ads;
                nzSer.lunbo();
        });
	}])
.controller('ShCtrl', ['$css', 'shSer', 'shFac', function ($css, shSer, shFac) {
		var self = this;
        $css.add('./home/css/shoes.css');
        shFac.getshData().then(function(res){
                self.data=res.data.list;
        });
        shFac.getshlunbodata().then(function(res){
                self.dswiper=res.data.data.banner_ads;
                shSer.lunbo();
        });
	}])
        .controller('activityCtrl',['$rootScope','$scope','$css','craFac','strSer', '$state', function ($rootScope,$scope,$css,craFac,strSer,$state) {
                //最后疯抢
            $css.add('./home/css/crazy.css');
            craFac.getcrazyData().success(function(res){
                $scope.data=res.baihuo;
            })
        $scope.addGoods = function(){
			$state.go('substr',{id:JSON.stringify(this.item)});
		}
            
        }])
        .controller('postCtrl',['$rootScope','$scope','$css','postFac', 'strSer', '$state',function ($rootScope,$scope,$css,postFac,strSer,$state) {
                //9.9元包邮
            $css.add('./home/css/post.css');
            postFac.getpostData().success(function(res){
            	
                $scope.data=res.list;
            })
         $scope.addGoods = function(){
		$state.go('substr',{id:JSON.stringify(this.item)});
		}
        }])
        .controller('pintuanCtrl',['$rootScope','$scope','$css','pintuanFac', 'pintuanSer', 'strSer', '$state',function ($rootScope,$scope,$css,pintuanFac,pintuanSer,strSer,$state) {
                //拼团
            $css.add('./home/css/pintuan.css');
            $css.add('./lib/swiper-3.3.1.min.css');
            pintuanFac.getpintuanData().then(function(res){
                $scope.data=res.data.data;
                
            })
                pintuanFac.getptlunbodata().then(function(res){
                        $scope.dswiper=res.data.data.banner_ads;
                        pintuanSer.lunbo();
                   
                });
            $scope.addGoods = function(){
			$state.go('substr',{id:JSON.stringify(this.x)});
		}
        }])

        .controller('onlineCtrl',['$rootScope','$scope','$css','onlineFac', 'strSer', '$state', function ($rootScope,$scope,$css,onlineFac,strSer,$state) {
                //即将上线
            $css.add('./home/css/online.css');
            onlineFac.getonlineData().success(function(res){
                $scope.data=res.list;
            })
            $scope.addGoods = function(){
			$state.go('substr',{id:JSON.stringify(this.item)});
		}
        }])
        .controller('AdviseCtrl', ['$scope', '$timeout','$css', function($scope,$timeout,$css){
            var i = document.getElementsByTagName("meta");
            var timer = $timeout(function(){
                $('.photo').fadeOut(2000);
                
            },2000);
            var timer1 = setTimeout("location.href='http://127.0.0.1:8020/juanpiwang/index.html#/home'",4000);
            $scope.hrefs = function(){
                clearTimeout(timer);
                clearTimeout(timer1);
            }
            
        }])


