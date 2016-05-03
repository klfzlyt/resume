(function($){
	function spaceship(setting){
		var param=$.extend({
			pic_range:"45-64",
			prefix:"./img/spaceship-",
			postfix:".png",
			data_begin:0,
			data_end:1000,
			container:document,
			speed:80,
			pic_width:"50px"
		},setting);
		var container=param.container;
		var speed=param.speed;
		var data_end=param.data_end;
		var data_begin=param.data_begin;
		var postfix=param.postfix;
		var prefix=param.prefix;
		var pic_src_arr=[];
		var num_aryy=param.pic_range.split('-');		
		var begin_num=parseInt(num_aryy[0]);
		var end_num=parseInt(num_aryy[1]);
		var dif=end_num-begin_num;
		var part=Math.round((data_end-data_begin)/dif);
		
		for (var i=begin_num;i<=end_num;i++) {
			pic_src_arr.push(prefix+i+postfix)
			var $img=$("<img/>").attr("src",prefix+i+postfix).appendTo($(container)).css({position:"absolute"});
			//.attr("width",param.pic_width);
			$img.get(0).dataset[data_begin+(i-begin_num)*part+""]="display:none";
			$img.get(0).dataset[data_begin+(i-begin_num)*part+speed+""]="display:block";
			if(i!==end_num)
			$img.get(0).dataset[data_begin+(i-begin_num)*part+(2*speed)+""]="display:none";
		}
		
	}
	
	if(!$.plug)$.plug={};
	$.plug.spaceship=spaceship
	
})($)
