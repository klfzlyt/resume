 (function($){
 	function ratio(iswidth,width,height,dom,scale,isback){
 		var ratioo=scale||1;
 		//console.log(ratioo);
 		//var isback=!(isback||true);
 		var ratio=width/height;
  		if(iswidth){  		
  			var wi=window.innerWidth*ratioo;
  			var _pxheight=Math.round(wi/ratio)+"px";
  		//	if(isback)
	  			document.querySelector(dom).style.backgroundSize=wi+"px "+_pxheight
  		//	else
  				document.querySelector(dom).style.height=_pxheight;
  		}
  		else{
  			var he=window.innerHeight*ratioo;
  			var _pxwidth=Math.round(he*ratio)+"px";	
  		//	if(isback)
  				document.querySelector(dom).style.backgroundSize=_pxwidth+" "+he+"px";
		//	else
				document.querySelector(dom).style.width=_pxwidth;
  		}		
}
 	 if(!$.plug)$.plug={};
	 $.plug.ratio=ratio;        
 })($)
