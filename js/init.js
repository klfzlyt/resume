var imgLoad=imagesLoaded("div",{ background: true }, function() {
  // images have loaded
       			
           			 console.log("done");
           			 
       
			 
			 
			 
			 
			 
			 	
			 	
			 
			 
			 
			 		 	
			 	//背景偏移生成，动态得到大图片偏移
			 	$.plug.background(true,".scene1-1",6700,$.plug.ratio(true,1080,1920,".scene1-1"));
			 	$.plug.background(false,".scene2-1",18000,$.plug.ratio(false,4500,1667,".scene2-1"));
			 	$.plug.background(false,".scene2-2",22000,$.plug.ratio(false,4500,1667,".scene2-2"));
				$.plug.background(false,".scene3-1",42000,$.plug.ratio(false,3840,2160,".scene3-1"));
				$.plug.background(false,".scene3-2",48000,$.plug.ratio(false,3840,2160,".scene3-2"));
			 	$.plug.background(false,".scene4-1",58000,$.plug.ratio(false,2560,1496,".scene4-1"));
			 	$.plug.background(false,".scene4-2",62000,$.plug.ratio(false,2560,1496,".scene4-2"));
			 	$.plug.background(false,".scene5-1",76000,$.plug.ratio(false,2857,1216,".scene5-1"));
			 	$.plug.background(false,".scene6-1",94000,$.plug.ratio(false,800,800,".scene6-1"));
			 	$.plug.background(true,	".scenev-1-1",94000,$.plug.ratio(true,600,1200,".scenev-1-1"));
			 	$.plug.background(true,	".scenev-1-2",98000,$.plug.ratio(true,600,1200,".scenev-1-2"));
			 	$.plug.background(true,	".scenev-1-3",102000,$.plug.ratio(true,600,1200,".scenev-1-3"));
			 	
			 	var datatop;
			 	var aniflag=true;
			 	s= skrollr.init({					
//				keyframe: function(element, name, direction) {
//      			console.log(name,direction)
//      			
//      				for(var i=0;i<hided_element.length;i++){
//      					if(name==="data8000"&&direction==="down"){
//      						$(hided_element[i]).hide();
//      					}
//      					if(name==="data8000"&&direction==="up"){
//      						$(hided_element[i]).show();
//      					}
//      				}
//      			
//      			
//  			},
    			  render: function(data) {
        				//Log the current scroll position.
        				//23000------0
        				//25000------90
        				//cirlce-1
        				datatop=data.curTop;
        				if(data.curTop>=23000 && data.curTop<25000){
        					var num=Math.round((data.curTop-23000)/22);
        					$('.circle-1').find('span.value').text(num);
        					$.plug.circleprogress('.circle-1',num);
        				}
        				
        				
        				//cirlce-2
        				if(data.curTop>=46000 && data.curTop<54000){
        					var num=Math.round((data.curTop-46000)/133);
        					$('.circle-2').find('span.value').text(num);
        					$.plug.circleprogress('.circle-2',num);
        				}
        				
        				
        				//cirlce-3
        				if(data.curTop>=78000 && data.curTop<84000){
        					var num=Math.round((data.curTop-78000)/75);
        					$('.circle-3').find('span.value').text(num);
        					$.plug.circleprogress('.circle-3',num);
        				}	
        				//cirlce-4
        				if(data.curTop>=103000 && data.curTop<109000){
        					var num=Math.round((data.curTop-103000)/133);
        					$('.circle-4').find('span.value').text(num);
        					$.plug.circleprogress('.circle-4',num);
        				}
        				//console.log(data.curTop);
        				
        				if(datatop>10000&&aniflag){
        					touch_animate();
        					aniflag=false
        				}
        				
        				
    				},
    				mobileDeceleration:0.004,
    				smoothScrolling:true
    				
    				
			});
			 	
			 	
			 	
		
			 	
			 	//
			 	var hided_element=['.star_container','.hello_world'];
			 	
			 	
			 	
			 	
			 	//$.plug.circleprogress('.circle',22);
			 	/*
			 	 * animation
			 	 * totaltime,dom,parts,interval,stopframe
			 	 */
			 	var Walkman1=$.plug.animate(900,".walkman1",36,-122,19);
   				var Walkman2=$.plug.animate(1500,".walkman2",36,-80,19);
				var Walkman3=$.plug.animate(1500,".walkman3",26,-94,19);
				var Walkman4=$.plug.animate(1500,".walkman4",20,-206,19);
//				setInterval(function(){
//					if(num_for_scroll===pre_num)marine.stop();
//				},1500);
//				$(document).bind("scroll",function(){
//					num_for_scroll++;
//					if(!marine.animating()){marine.resume();}
//					pre_num=num_for_scroll;
//				});
				function ani_resume(){
						if(datatop>10100 && datatop<=22000){
						Walkman1.resume();
					}
					if(datatop>67000 && datatop<=76000){
						Walkman2.resume();
					}
					if(datatop>94000 && datatop<=110000){
						Walkman3.resume();
					}
					Walkman4.resume();
				}
				function ani_stop(){
					if(datatop>10100 && datatop<=22000){
						Walkman1.stop();
					}
					if(datatop>67000 && datatop<=76000){
						Walkman2.stop();
					}
					if(datatop>94000 && datatop<=110000){
						Walkman3.stop();
					}
					Walkman4.stop();
				}
				
				function touch_animate(){
					$(document).on("touchstart",ani_resume);
					$(document).on("touchend",ani_stop);					
					$(document).on("touchmove",ani_resume);
				}
				function off_touch_animate(){
					$(document).off("touchstart",ani_resume);
					$(document).off("touchend",ani_stop);					
					$(document).off("touchmove",ani_resume);
				}
			 	
			 	
			 	//end of animation
     
			
//			 if(s.isMobile()){
			 
//			 	$.plug.star({
//			 		container:document.querySelector('.star_container'),
//					bigstar:{
//						src:"./img/star_big.png",
//						number:10
//					},
//					midstar:{
//						src:"./img/star_mid.png",
//						number:20
//					}
//			 	});
//			 }
//			 else{
			 	//$.plug.ratio(false,2560,1600,".star_planet",1.3)
//			 	var stars=$.plug.star({container:document.querySelector('.star_container')});
//			 	$.plug.reversemove({
//			 		dom:stars,
//			 		istranlate:true
//			 	});
//			 	$.plug.reversemove({
//			 		dom:".star_planet",
//			 		istranlate:true,
//			 		ratio:1,
//			 		background_position:true,
//			 		domrange:50
//			 	})
//			 }	 
			    			 
//         		$.plug.spaceship({
//			 	container:document.querySelector('.spaceship'),
//			 	data_begin:3500,
//			 	data_end:4500,
//			 	speen:80
//			 	});
			 	$.plug.star({
			 		container:document.querySelector('.star_container'),
					bigstar:{
						src:"./img/star_big.png",
						number:5
					},
					midstar:{
						src:"./img/star_mid.png",
						number:10
					}
			 	});
           	 $('.loding').hide();         
          
			 $(".scene1").css("opacity","1");           			 
           			 
           			 
});
imgLoad.on( 'progress', function( instance, image ) {
  var result = image.isLoaded ? 'loaded' : 'broken';
  console.log( 'image is ' + result + ' for ' + image.img.src );
});