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
	
	 
	
	
})($)
