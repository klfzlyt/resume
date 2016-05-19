(function($){
		function background(isheight,dom,number){
				if(isheight){
					//translate3d(0,0,0)
					var num=-($(dom).height()-window.innerHeight);
					if(num>0)return;
				 	$(dom).get(0).dataset[number+""]="transform:translate3d(0,"+num+"px,0)";
				 	//$(dom).get(0).dataset[number+""]="-webkit-transform:translate3d(0,"+num+"px,0)";
				}
				else{
					var num=-($(dom).width()-window.innerWidth);
					if(num>0)return;
					$(dom).get(0).dataset[number+""]="transform:translate3d("+num+"px,0,0)";
				 	//$(dom).get(0).dataset[number+""]="-webkit-transform:translate3d("+num+"px,0,0)";
				}
					
				
				//$(dom)
			}		
			if(!$.plug)$.plug={};
			$.plug.background=background;
	
})($)
