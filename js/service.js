angular.module('myApp')
	.service('homeSer', [function () {
			this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:1000,
	  		})
		}
	}])
	.service('nzSer', [function () {
			this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:1000,
	  		})
		}
	}])
	.service('shSer', [function () {
			this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:1000,
	  		})
		}
	}])
	.service('pintuanSer', [function () {
			this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:1000,
	  		})
		}
	}])
	
	.service('strSer', [function () {
		
	}])
	
	.service('worldSer', [function () {
		
	}])
	
	.service('cartSer', [function () {
		var arr = [];
		this.addgoodss = function(obj){
			arr.push(obj);
		}
		this.showAllgoods = function(){
			return arr;
		}
	}])
	
	.service('mineSer', [function () {
		
	}])
	