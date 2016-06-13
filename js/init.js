var imgLoad=imagesLoaded("div",{ background: true }, function() {
 				//before skrollr set the size and keyframe
			 	//背景偏移生成，动态得到大图片偏移
			 	$.plug.background(true,".scene1-1",6700,$.plug.ratio(true,1080,1920,".scene1-1"));
			 	$.plug.background(false,".scene2-1",18000,$.plug.ratio(false,4500,1667,".scene2-1"));
			 	$.plug.background(false,".scene2-2",22000,$.plug.ratio(false,4500,1667,".scene2-2"));
				$.plug.background(false,".scene3-1",42000,$.plug.ratio(false,3840,2160,".scene3-1"));
				$.plug.background(false,".scene3-2",48000,$.plug.ratio(false,3840,2160,".scene3-2"));
			 	$.plug.background(false,".scene4-1",58000,$.plug.ratio(false,2560,1496,".scene4-1"));
			 	$.plug.background(false,".scene4-2",62000,$.plug.ratio(false,2560,1496,".scene4-2"));
			 	$.plug.background(false,".scene5-1",76000,$.plug.ratio(false,2857,1216,".scene5-1"));
			 	$.plug.background(false,".scene6-1",112000,$.plug.ratio(false,800,800,".scene6-1"));
			 	$.plug.background(true,	".scenev-1-1",94000,$.plug.ratio(true,600,1200,".scenev-1-1"));
			 	$.plug.background(true,	".scenev-1-2",98000,$.plug.ratio(true,600,1200,".scenev-1-2"));
			 	$.plug.background(true,	".scenev-1-3",102000,$.plug.ratio(true,600,1200,".scenev-1-3"));
			 	
			 	
			 	//init the skrollr
			 	var datatop;
			 	var aniflag=true;
			 	s= skrollr.init({
    			  render: function(data) {
        				//Log the current scroll position.
        				//23000------0
        				//25000------90
        				//cirlce-1
        				datatop=data.curTop;
        				if(data.curTop>=20000 && data.curTop<25000){
        					var num=Math.round((data.curTop-20000)/55);
        					$('.circle-1').find('span.value').text(num);
        					$.plug.circleprogress('.circle-1',num);
        				}        				        				
        				//cirlce-2
        				if(data.curTop>=42000 && data.curTop<47000){
        					var num=Math.round((data.curTop-42000)/62);
        					$('.circle-2').find('span.value').text(num);
        					$.plug.circleprogress('.circle-2',num);
        				}        				
        				
        				//cirlce-3
        				if(data.curTop>=60000 && data.curTop<65000){
        					var num=Math.round((data.curTop-60000)/59);
        					$('.circle-3').find('span.value').text(num);
        					$.plug.circleprogress('.circle-3',num);
        				}	
        				//cirlce-4
        				if(data.curTop>=78000 && data.curTop<83000){
        					var num=Math.round((data.curTop-78000)/62);
        					$('.circle-4').find('span.value').text(num);
        					$.plug.circleprogress('.circle-4',num);
        				}
        				
        				//cirlce-5
        				if(data.curTop>=96000 && data.curTop<101000){
        					var num=Math.round((data.curTop-96000)/63);
        					$('.circle-5').find('span.value').text(num);
        					$.plug.circleprogress('.circle-5',num);
        				}
        				if(aniflag){
        					touch_animate();
        					aniflag=false
        				}        				        			
    				},
    				mobileDeceleration:0.004,
    				smoothScrolling:true    				    				
			});
			 	
			 	
			 	
		
			 	
				//spritesheet 
			 	var Walkman1=$.plug.animate(900,".walkman1",36,-122,19);
   			var Walkman2=$.plug.animate(1500,".walkman2",36,-80,19);
				var Walkman3=$.plug.animate(1500,".walkman3",26,-94,19);
				var Walkman4=$.plug.animate(1500,".walkman4",20,-172,20);
				function ani_resume(){
						if(datatop>9100 && datatop<=18000){
						Walkman1.resume();
					}
					if(datatop>51000 && datatop<=58000){
						Walkman2.resume();
					}
					if(datatop>69000 && datatop<=76000){
						Walkman3.resume();
					}
						if(datatop>103000 && datatop<=110000){
					Walkman4.resume();
					}
				}

				function ani_stop(){
					if(datatop>9100 && datatop<=18000){
						Walkman1.stop();
					}
					if(datatop>51000 && datatop<=58000){
						Walkman2.stop();
					}
					if(datatop>69000 && datatop<=76000){
						Walkman3.stop();
					}
						if(datatop>103000 && datatop<=110000){
					Walkman4.stop();
				}
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
				
				
				//star
			 	$.plug.star({
			 		container:document.querySelector('.star_container'),	 
			 	});
			 	
			 //loaded	
       $('.loding').hide();          
			 $(".scene1").css("opacity","1");           			 
           			 
           			 
});
