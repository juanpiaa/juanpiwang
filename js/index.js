
//	 $(window).scroll(function(){
//        var sc=$(window).scrollTop();
//        var rwidth=$(window).width()+$(document).scrollLeft();
//        var rheight=$(window).height()+$(document).scrollTop();
//        if(sc>0){
//            $("#back").css("display","block");
//            $("#back").css("left",(rwidth-80)+"px");
//            $("#back").css("top",(rheight-120)+"px");
//			$("#back").parent().css("background","white")
//        }else{
//            $("#back").css("display","none");
//			$("#back").parent().css("background","transparent")
//        }
//    });
//    $("#back").click(function(){
//        $('body,html').animate({scrollTop:0},300);
//    });
//

//返回顶部
function myEvent(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}
}
myEvent(window,'load',function(){
	var oRTT=document.getElementById('back');
	var pH=document.documentElement.clientHeight;
	var timer=null;
	var scrollTop;

window.onscroll=function(){
	scrollTop = window.pageYOffset 
	|| document.documentElement.scrollTop 
	|| document.body.scrollTop 
	|| 0;
	};

	oRTT.onclick=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var now=scrollTop;
			var speed=(0-now)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(scrollTop==0){
				clearInterval(timer);
			}
			document.documentElement.scrollTop=scrollTop+speed;
			document.body.scrollTop=scrollTop+speed;
		}, 30);
	}
});


//头部样式
 $(window).scroll(function(){
        var sc=$(window).scrollTop();
	if(sc>45){
		$(".header").hide();
		$('.nav').css({
		    'position' : 'fixed',
		    'background' : 'white',
		    'left':0,
		    'top':0
		});
	}else{
		$(".header").show();
		$('.nav').css({
		    'position' : 'static',
		   
		});
	}
  });
//底部图片切换
 	function picInit(){
 		$(".one").attr("src","comimg/0.png");
 		$(".two").attr("src","comimg/1.png");
 		$(".three").attr("src","comimg/2.png");
 		$(".four").attr("src","comimg/3.png");
 		$(".five").attr("src","comimg/4.png");
 	}
	$(".footer .first").click(function(){
	   picInit();
	   $(".one").attr("src","comimg/00.png");
	});
	$(".footer .two").click(function(){
	   picInit();
	   $(".two").attr("src","comimg/11.png");
	});

	$(".footer .three").click(function(){
	   picInit();
	   $(".three").attr("src","comimg/22.png");
	});

	$(".footer .four").click(function(){
	   picInit();
	   $(".four").attr("src","comimg/33.png");
	});

	$(".footer .five").click(function(){
	   picInit();
	   $(".five").attr("src","comimg/44.png");
	});