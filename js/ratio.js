 (function($){
 	function ratio(iswidth,width,height,dom,scale){
 		var ratioo=scale||1;
 		//console.log(ratioo);
 		var ratio=width/height;
  		if(iswidth){  		
  			var wi=window.innerWidth*ratioo;
  			var _pxheight=wi/ratio+"px";
  			document.querySelector(dom).style.backgroundSize=wi+"px "+_pxheight  			  			
  		}
  		else{
  			var he=window.innerHeight*ratioo;
  			var _pxwidth=he*ratio+"px";	
  			document.querySelector(dom).style.backgroundSize=_pxwidth+" "+he+"px";  			
  		}		
}
 	 if(!$.plug)$.plug={};
	 $.plug.ratio=ratio;        
 })($)
