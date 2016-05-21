(function($){
		function circleprogress(dom,value){
									 
			    $(dom).each(function(index, el) {
			        var num = value * 3.6;
			        num=Math.round(num);
			        if (num<=180) {
			            $(this).find('.right').css('-webkit-transform', "rotate(" + num + "deg) translateZ(0px)");
			            $(this).find('.right').css('transform', "rotate(" + num + "deg) translateZ(0px)");
			         	$(this).find('.left').css('-webkit-transform', "rotate("+0+ "deg) translateZ(0px)");
			            $(this).find('.left').css('transform', "rotate("+0+ "deg) translateZ(0px)");
			        } else {
			            $(this).find('.right').css('-webkit-transform', "rotate(180deg) translateZ(0px)");
			            $(this).find('.left').css('-webkit-transform', "rotate(" + (num - 180) + "deg) translateZ(0px)");
			            $(this).find('.right').css('transform', "rotate(180deg) translateZ(0px)");
			            $(this).find('.left').css('transform', "rotate(" + (num - 180) + "deg) translateZ(0px)");
			        };
			    });
 
			}		
			if(!$.plug)$.plug={};
			$.plug.circleprogress=circleprogress;
	
})($)
