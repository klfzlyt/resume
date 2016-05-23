(function($){
		function background(isheight,dom,number,realwidth_height){
				if(isheight){
					//translate3d(0,0,0)
					var num=-(realwidth_height-window.innerHeight);
					if(num>0)return;
					//$('.scence1').data("6300","fdsfds")
				 	$(dom).data(number+"","transform:translate3d(0,"+num+"px,0)");
				 	//$(dom).get(0).dataset[number+""]="-webkit-transform:translate3d(0,"+num+"px,0)";
				}
				else{
					var num=-(realwidth_height-window.innerWidth);
					if(num>0)return;
					//$(dom).get(0).dataset[number+""]="transform:translate3d("+num+"px,0,0)";
					$(dom).data(number+"","transform:translate3d("+num+"px,0,0)");
				 	//$(dom).get(0).dataset[number+""]="-webkit-transform:translate3d("+num+"px,0,0)";
				}
					
				
				//$(dom)
			}		
			if(!$.plug)$.plug={};
			$.plug.background=background;
	
})($)
