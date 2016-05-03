(function($){
     
	 function reversemove(setting){
            //selector
           
                 var param = $.extend({
                dom: document,
                domrange: 50,
                direction: -1,
                istranlate: false,
                isrotate: false,
                ratio:1,
                background_position:false
            }, setting);
            var background_position=param.background_position;
            var ratio=param.ratio;
            var dom= param.dom;
            var domrange= param.domrange;
            var direction= param.direction;
            var $ele;
            if(typeof dom==="string" &&dom.length!== 0){
                $ele =$(dom);
           }
       
            if($.isEmptyObject(dom)||! dom)throw new Error( "empty object or errr argument");
            if(dom instanceof $)$ele=dom;
            else $ele= $(dom);
           
            var screen_size=Math.min( window.innerHeight,window .innerWidth);
            var percer_of_range= domrange/screen_size;
            var pre_X;
            var pre_Y;      
            
           $(document).bind("mousemove" ,function(e){
           	//console.log(e.type);
           		
                 if(pre_X&& pre_Y){
                 		if(pre_X===e.pageX && pre_Y===e.pageY)return;
                       var offersetX= direction*(pre_X -e.pageX);
                       var  offersetY= direction*(pre_Y -e.pageY);
                       if(param.istranlate){
                           $ele.each( function() {
                           		if(background_position){
                           			
                           			var X=$(this).css("background-position-X");
                           			var XX=X.match( /-?[0-9]+/);
                           			var positionX=parseInt(XX[0]);
                           			var Y=$(this).css("background-position-Y");
                           			var YY=Y.match( /-?[0-9]+/);
                           			var positionY=parseInt(YY[0]);
                           		//	console.log(offersetX)
                           		
                           			var newX=positionX-offersetX*percer_of_range*ratio*-1;
                           			var newY=positionY-offersetY*percer_of_range*ratio*-1;
                           			if(newX>=0)newX=0;
                           			if(newY>=0)newY=0;
                           			newX=newX+"px";
                           			newY=newY+'px';
                           			$(this).css({'background-position-X':newX,'background-position-Y':newY});
                           			return;
                           		}
                                 ele =$(this);
                                  var postionX=ele.position().left;
                                  var postionY= ele.position().top;
                                ele.css({left:postionX- offersetX*percer_of_range*ratio,top:postionY -offersetY*percer_of_range*ratio});                                                           
                           });
                      }
                       else if(param.isrotate){
                           $ele.each( function(){
                                  var self= this;
                                  var transform_str=self. style.transform;
                                 if(transform_str=== "")transform_str= "rotateZ(0deg)";
                                  var reg_arry=transform_str.match( /-?[0-9]+/);
                                  var num_ori=parseInt(reg_arry[ 0]);                                                                
                                transform_str =transform_str.replace(/-?[0-9]+/ ,Math.floor(num_ori-offersetX *percer_of_range*ratio));
                                self.style.transform= transform_str;                                                                
                           });
                      }
                      
                }
                                          
                pre_X =e.pageX;
                pre_Y =e.pageY;
           });
           
           
           
           
           
           
     }
	 if(!$.plug)$.plug={};
	 $.plug.reversemove=reversemove;          
})($)
