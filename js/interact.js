(function($){
	$('.HTMLinfo').bind("mouseover",function(e){
		
	//	this.style.bottom="40%";
		
		
	}).bind("mouseout",function(e){
	//	this.style.bottom="0%"
		
		
	});
	//$html=$('.HTMLinfo');
	$width=$('.ballon3div').width();
	var left=Math.round((window.innerWidth-$width)/2)
	$('.ballon3div').css({left:left+'px'})
	
	 
	
	//circle position
//	var circle_container_width=Math.round(window.innerWidth/2);
//	var circle_container_height=Math.round(window.innerHeight*0.3);
//	var left_cir=Math.round((circle_container_width-100)/2);
//	var top_cir=Math.round((circle_container_height-100)/2);
//	$('.circle').css({top:top_cir+'px',left:left_cir+"px"})
	
	
	//img

//	$('.infotop img').each(function(i,ele){
//		var right=Math.round((circle_container_width-140)/2);
//		var top=Math.round((circle_container_width-$(this).height())/2);
//		$(this).css({top:top+'px',right:right+"px"})
//	})
})($)
