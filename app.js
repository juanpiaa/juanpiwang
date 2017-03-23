
var app = angular.module('myApp', ['ui.router', 'angularCSS'])
	.run(['$window', '$rootScope' , function ($window, $rootScope) {
		
		$rootScope.$on('$locationChangeSuccess', function () {
			//如果浏览器地址包含 market（闪送超市）那么就隐藏footer
			if ($window.location.href.indexOf('market')&&$window.location.href.indexOf('substr') != -1) {
				$rootScope.rootIsFooterShow = false;
			} else {
				$rootScope.rootIsFooterShow = true;
			}
		});
	}])
	.config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			// $urlRouterProvider.otherwise('/home');
			// // 配置默认锚点
		    $urlRouterProvider.when('', 'home');
		    $urlRouterProvider.when('/straight', 'straight/straight01');
			$stateProvider
				.state('home', {
					//这里对应着页面上#home的地址
					url : '/home',
					templateUrl : './home/home.html',
					controller : 'HomeCtrl as homeCtrl'
				})
				.state('home.nvzhuang', {
			        url: '/nvzhuang',
			        templateUrl: './home/nvzhuang.html',
			        controller:'NzCtrl as nzCtrl'
			    })
				.state('home.shoes', {
			        url: '/shoes',
			        templateUrl: './home/shoes.html',
			        controller:'ShCtrl as shCtrl'
			    })
			    //最后疯抢
				.state('activity', {
					url : '/activity',
					template : '<div ui-view></div>',
					controller : 'activityCtrl'
				})
				.state('activity.crazy', {
					url : '/crazy',
					templateUrl : 'home/crazy.html',
					controller : 'activityCtrl'
				})
			    //9.9包邮
				.state('freepost', {
					url : '/freepost',
					template : '<div ui-view></div>',
					controller : 'postCtrl'
				})
				.state('freepost.post', {
					url : '/post',
					templateUrl : 'home/post.html',
					controller : 'postCtrl'
				})
			    //即将上线
				.state('goonline', {
					url : '/goonline',
					template : '<div ui-view></div>',
					controller : 'onlineCtrl'
				})
				.state('goonline.online', {
					url : '/online',
					templateUrl : 'home/online.html',
					controller : 'onlineCtrl'
				})
			    //拼团
				.state('shoppin', {
					url : '/shoppin',
					template : '<div ui-view></div>',
					controller : 'pintuanCtrl'
				})
				.state('shoppin.pintuan', {
					url : '/pintuan',
					templateUrl : 'home/pintuan.html',
					controller : 'pintuanCtrl'
				})
				
				.state('straight', {
					url : '/straight',
					templateUrl : './straight/straight.html',
					controller : 'StrCtrl as strCtrl'
				})
				.state('straight.straight01', {
			        url: '/straight01',
			        templateUrl: './straight/straight01.html'
			    })
			    .state('straight.straight02', {
			        url: '/straight02',
			        templateUrl: './straight/straight02.html'
			    })
			    .state('straight.straight03', {
			        url: '/straight03',
			        templateUrl: './straight/straight03.html'  
			    })
			    .state('straight.straight04', {
			        url: '/straight04',
			        templateUrl: './straight/straight04.html'
			    })
			    .state('substr', {
			        url: '/substr:id',
			        templateUrl: './straight/substr.html',
			        controller: 'Substr as substr'
			    })
			    .state('shop', {
			    	url: '/shop',
			        templateUrl: './straight/shop.html',
			        controller: 'ShopCtrl as shopctrl'
			    })
			    
				.state('world', {
					url : '/world',
					templateUrl : './world/world.html',
					controller : 'WorldCtrl as worldCtrl'
				})
				.state('cart', {
					url : '/cart',
					templateUrl : './cart/cart.html',
					controller : 'CartCtrl as cartCtrl'
				})
				.state('mine', {
					url : '/mine',
					templateUrl : './mine/mine.html',
					controller : 'MineCtrl as mineCtrl'
				})
			
		}])
	
