
	 $(window).scroll(function(){
        var sc=$(window).scrollTop();
        var rwidth=$(window).width()+$(document).scrollLeft();
        var rheight=$(window).height()+$(document).scrollTop();
        if(sc>0){
            $("#back").css("display","block");
            $("#back").css("left",(rwidth-80)+"px");
            $("#back").css("top",(rheight-120)+"px");
			$("#back").parent().css("background","white")
        }else{
            $("#back").css("display","none");
			$("#back").parent().css("background","transparent")
        }
    });
    $("#back").click(function(){
        $('body,html').animate({scrollTop:0},300);
    });
