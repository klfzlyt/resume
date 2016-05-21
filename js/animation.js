(function($){
		function animate(totaltime,dom,parts,interval,stopframe){
				var temp=0;
				var stop_flag=false;
				var timer=null;
					var num=temp*(interval);
					$(dom).css({"background-position-x":num+"px"});
					temp++;
					if(stop_flag&&temp===stopframe){
						clearInterval(timer),timer=null
						stop_flag=false;
					}
					if(temp===parts)temp=0;
				
				return {
					animating:function(){return timer!==null?true:false},
					stop:function(va){
						stop_flag=true;
						//clearInterval(timer),timer=null
					},
					resume:function(){
							if(timer!==null)return
							var str=$(dom).css("background-position-x");
							var matched=str.match(/-?[0-9]+/);
							var num=parseInt(matched[0]);
							temp=num/interval;
							timer=setInterval(function(){
							var num=temp*(interval);
							$(dom).css({"background-position-x":num+"px"});
							temp++;
							if(stop_flag&&temp===stopframe){
								clearInterval(timer),timer=null
								stop_flag=false;
							}
							if(temp===parts)temp=0
						},totaltime/parts);
					}
					
				}
				//$(dom)
			}		
			if(!$.plug)$.plug={};
			$.plug.animate=animate;
	
})($)
