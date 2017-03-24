
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



//$(function(){	
//
//	$(window).scroll(function() {		
//
//		if($(window).scrollTop() >= 100){
//
//			$('#back').fadeIn(300); 
//
//		}
//
//	});
//
//	$('#back').click(function(){
//		console.log(this)
//		console.log(document.body.scrollTop)
//
//	$('html,body').animate({scrollTop: '0px'}, 800);});	
//
//});

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
