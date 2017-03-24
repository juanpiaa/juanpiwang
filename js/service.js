angular.module('myApp')
	.service('homeSer', [function () {
			this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:2000,
			autoplayDisableOnInteraction:false,
	  		})
		};
		this.remove =  function (){
			$(document).on("click",".nav a",function(){
				$(".down_pic").remove();
				$('.nav a').removeClass();
				$(this).toggleClass("active");
			});
		}
	}])
	.service('sxSer', [function () {
			this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:2000,
			autoplayDisableOnInteraction:false,
	  		})
		}
	}])
	.service('nzSer', [function () {
			this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:2000,
		    autoplayDisableOnInteraction:false,
	  		})
		}
	}])
	.service('shSer', [function () {
			this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:2000,
		    autoplayDisableOnInteraction:false,
	  		})
		}
	}])
	.service('pintuanSer', [function () {
			this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:2000,
		    autoplayDisableOnInteraction:false,
	  		})
		}
	}])
	
	.service('strSer', [function () {
		this.remove =  function (){
			$(document).on("click",".nav a",function(){
				$('.nav a').removeClass();
				$(this).toggleClass("active");
			});
		}
	}])
	
	.service('worldSer', [function () {
		this.lunbo = function(){
			var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	    	observer:true,
	   	 	pagination: '.swiper-pagination',
		    autoplay:1000,
		    autoplayDisableOnInteraction: false,
	  		})
		}
	}])
	
	.service('cartSer', [function () {
		var arr = [];
		this.addgoodss = function(obj){
			
			if(arr.length == 0)
			{
				arr.push(obj);
				console.log(1);
				return;
			}
			else
			{
				for( item of arr){
					
					if(item.goods_id == obj.goods_id){
						item.count+=1;
						return;
					}
				}
                arr.push(obj);
		   }
		}
		this.showAllgoods = function(){
			return arr;
		}
	}])
	.service('favSer',[function () {
		var arr = [];
		this.tianjia = function(obj){
			arr.push(obj);
		}
		this.zhanshi = function(){
			return arr;
		}
	}])

	
	.service('mineSer', [function () {
		
	}])
	