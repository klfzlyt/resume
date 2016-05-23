 (function($){
 	function ratio(iswidth,width,height,dom,scale,isback){
 		var ratioo=scale||1;
 		//console.log(ratioo);
 		//var isback=!(isback||true);
 		var ratio=width/height;
  		if(iswidth){  		
  			var wi=window.innerWidth*ratioo;
  			var numb=Math.round(wi/ratio);
  			var _pxheight=numb+"px";
  		//	if(isback)
	  			//document.querySelector(dom).style.backgroundSize=wi+"px "+_pxheight
  		//	else
  				document.querySelector(dom).style.height=_pxheight;
  				return numb;
  		}
  		else{
  			var he=window.innerHeight*ratioo;
  			var numb=Math.round(he*ratio);
  			var _pxwidth=numb+"px";	
  		//	if(isback)
  				//document.querySelector(dom).style.backgroundSize=_pxwidth+" "+he+"px";
		//	else
				document.querySelector(dom).style.width=_pxwidth;
				return numb;
  		}		
}
 	 if(!$.plug)$.plug={};
	 $.plug.ratio=ratio;        
 })($)
