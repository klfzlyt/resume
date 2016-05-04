(function($){
	$('.HTMLinfo').bind("mouseover",function(e){
		
	//	this.style.bottom="40%";
		
		
	}).bind("mouseout",function(e){
	//	this.style.bottom="0%"
		
		
	});
	$html=$('.HTMLinfo');
	$width=$('.HTMLinfo_container img').width()+20;
	var left=Math.round((window.innerWidth-$width)/2)
	$('.HTMLinfo').css({left:left+'px'})
	
	
	
	
})($)
