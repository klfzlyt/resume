(function($){
		function circleprogress(dom,value){
									 
			    $(dom).each(function(index, el) {
			        var num = value * 3.6;
			        if (num<=180) {
			            $(this).find('.right').css('-webkit-transform', "rotate(" + num + "deg)");
			            $(this).find('.right').css('transform', "rotate(" + num + "deg)");
			         	$(this).find('.left').css('-webkit-transform', "rotate("+0+ "deg)");
			            $(this).find('.left').css('transform', "rotate("+0+ "deg)");
			        } else {
			            $(this).find('.right').css('-webkit-transform', "rotate(180deg)");
			            $(this).find('.left').css('-webkit-transform', "rotate(" + (num - 180) + "deg)");
			            $(this).find('.right').css('transform', "rotate(180deg)");
			            $(this).find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
			        };
			    });
 
			}		
			if(!$.plug)$.plug={};
			$.plug.circleprogress=circleprogress;
	
})($)
