(function($){
	function star(setting){
	
	var param=$.extend({
		classname:"star",
		twinklename:"star_twinkle",
		bigstar:{
			src:"./img/star_big.png",
			number:30
		},
		midstar:{
			src:"./img/star_mid.png",
			number:30
		},
		smallstar:{
			src:"./img/star_tiny.png",
			number:30
		}
		
	},setting);
	
	
	var twinkle=param.twinklename;
	var bigstar=param.bigstar;
	var midstar=param.midstar;
	var smallstar=param.smallstar;
	var container=setting.container;
	var container_size=$(container);//container.getBoundingClientRect();
	var class_name=param.classname;
	var move_arr=[];
	function generate_star(star){		
		for(var i=0;i<star.number;i++){
			var random_width=Math.round(Math.random()*container_size.width());
			var random_height=Math.round(Math.random()*container_size.height());
			var $img=$("<img/>").attr("src",star.src).attr('width',"20px");
			var $star=$('<div></div>').addClass(class_name).append($img).appendTo($(container));
			if(i%5===0)$star.addClass(twinkle);
			$star.get(0).style.left=random_width+"px";
			$star.get(0).style.top=random_height+"px";			
			move_arr.push($star.get(0));
		}				
	}
	generate_star(smallstar);
	generate_star(midstar);
	generate_star(bigstar);
	return move_arr;
	
	}
		 if(!$.plug)$.plug={};
	 $.plug.star=star;   
})($)
