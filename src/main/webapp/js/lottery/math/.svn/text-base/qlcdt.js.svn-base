var combAlg = new CombAlgorithm();
$(document).ready(function () {
	
	var html = '';
	for ( var i = 1; i < 10; i++ ) {
		html += '<li v="0'+i+'"><a href="#">0'+i+'</a><p>0</p></li>';
	}
	for ( var i = 10; i < 31; i++ ) {
		html += '<li v="'+i+'"><a href="#">'+i+'</a><p>0</p></li>';
	}
	html += '<div style="clear:both"></div>';
	$(html).appendTo($("#beforeAreaId"));
	
	// 遗漏
	for ( var i = 0; i < ptOmit[0].dmos.length; i++ ) {
		$("#beforeAreaId").find("li[v="+ptOmit[0].dmos[i].data+"]").find("p").html(ptOmit[0].dmos[i].omit);
	}
	
	// 选号
	$("#beforeAreaId li").click(function(){
		if ( $(this).hasClass("ball_active") && $(this).hasClass("dan_txt") ) {
			$(this).removeClass("ball_active").removeClass("dan_txt");
			$(this).children().eq(0).html($(this).attr("v"));
		} else if ( $(this).hasClass("ball_active") ){
			if ( $("#beforeAreaId li.dan_txt").length == 6 ) {
				alert("前区最多设6个胆！");
				return false;
			}
			$(this).addClass("dan_txt");
			$(this).children().eq(0).html($(this).attr("v")+"胆");
		} else {
			$(this).addClass("ball_active");
		}
		calc();
	});
	
	// 摇一摇机选
	$(".con_top_img").click(function(){
		radomOne();
	});
	
	// 清空
	$(".qk-button").click(function(){
		$("li.ball_active").each(function(index){
			$(this).children().eq(0).html($(this).attr("v"));
		});
		$("li.blue_active").each(function(index){
			$(this).children().eq(0).html($(this).attr("v"));
		});
		$("li.ball_active").removeClass("ball_active").removeClass("dan_txt");
		calc();
	});
	
	// 到确认页
	$("#qrBtnId").click(function(){
		var betNum = 0;
		var before = $("#beforeAreaId").find(".ball_active").length;
		if ( before > 7 ) {
			var bdan = $("#beforeAreaId").find(".dan_txt").length;
			before = before - bdan;
			if ( bdan > 0 ) {
				betNum = combAlg.calcCombNum(before,7-bdan) ;
			} else {
				betNum = 0;
			}
		}
		if ( betNum == 0 ) {
			alert("至少选择8个球,至少包含1个胆");
		} else {
			$.mobile.changePage("#out_tickets", "slideup"); 
			// 填充投注数据
			var t = "", code = "";
			if ( $("#beforeAreaId").find(".dan_txt").length > 0 ) {
				code += "(";
				$("#beforeAreaId").find(".dan_txt").each(function(index){
					code += $(this).attr("v")+",";
				});
				code = code.substring(0, code.length-1) + ")";
				$("#beforeAreaId").find(".ball_active").each(function(index){
					if ( !$(this).hasClass("dan_txt") ) {
						code += $(this).attr("v")+",";
					}
				});
			} else {
				$("#beforeAreaId").find(".ball_active").each(function(index){
					code += $(this).attr("v")+",";
				});
			}
			$("#beforeAreaId").find(".ball_active").each(function(index){
				t += '<span>'+$(this).children().eq(0).html()+'</span>';
			});
			code = code.substring(0, code.length-1);
			var html = '<li id="li_1" betNum='+betNum+' code="'+code+'">'+
					'<a class="ui-link" href="#"><img width="53" height="53" src="/mobile/images/guanbi.png" onclick="removeT(this)"></a>'+
					'<div class="zx_no">';
			html += t;
			html +=	'<div class="clear"></div>'+
					'</div>'+
					'<div class="zhushu">'+(betNum>1?"复式":"单式")+' '+betNum+'注'+(betNum*2)+'元</div>'+
					'</li>';
			$(html).appendTo($("#ul_list"));
			calcTotal();
		}
	});
	
	// 自选号码
	$(".cp_button .zx").click(function(){
		$("li.ball_active").removeClass("ball_active");
		$("li.dan_txt").each(function(index){
			$(this).children().eq(0).html($(this).children().eq(0).html().substring(0,2));
			$(this).removeClass("dan_txt");
		});
		$.mobile.changePage("#betPanelId", "slideup"); 
		calc();
	});
	
	// 机选号码
	$(".cp_button .jx").click(function(){
		var code = "", t = "";
		var array = rarray(7, 31);
		for ( var i = 0; i < 7; i++ ) {
			code += array[i] + ",";
			t += '<span>'+array[i]+"</span>";
		}
		code = code.substring(0, code.length-1);
		var html = '<li id="li_1" betNum="1" code="'+code+'">'+
					'<a class="ui-link" href="#"><img width="53" height="53" src="/mobile/images/guanbi.png" onclick="removeT(this)"></a>'+
					'<div class="zx_no">';
			html += t;
			html +=	'<div class="clear"></div>'+
					'</div>'+
					'<div class="zhushu">单式 1注2元</div>'+
					'</li>';
		$(html).appendTo($("#ul_list"));
		calcTotal();
	});
	// 清空列表
	$(".cp_button .qk").click(function(){
		$("#ul_list").empty();
		calcTotal();
	});
	
});

function removeT(obj) {
	$(obj).parent().parent().remove();
	calcTotal();
}

function calc() {
	var before = $("#beforeAreaId").find(".ball_active").length;
	var betNum = 0;
	if ( before > 7  ) {
		var bdan = $("#beforeAreaId").find(".dan_txt").length;
		before = before - bdan;
		if ( bdan > 0 ) {
			betNum = combAlg.calcCombNum(before,7-bdan);
		} else {
			betNum = 0;
		}
	}
	$("#divze").html('<span>共'+(betNum*2)+'元</span><br /> '+betNum+'注');
}

function radomOne() {
	$(".ball_active").removeClass("ball_active");
	var beforeArray = rarray(7, 31);
	for (var i = 0; i < beforeArray.length; i++ ) {
		$("#beforeAreaId").find("li[v="+beforeArray[i]+"]").addClass("ball_active");
	}
	calc();
}

function r(max) {
	return Math.floor(Math.random()*max);
}

function rarray( num, max ) {
	var buf = new Array();	
	while ( buf.length < num ) {
		var rand = Math.floor(Math.random()*max) + "";
		if ( rand == 0 )
			continue;
		if ( rand.length == 1 ) {
			rand = "0" + rand;
		}
		var repeat = false;
		for ( var i = 0; i < buf.length; i++ ) {
			if ( rand == buf[i] ) {
				repeat = true;
				break;
			}
		}
		if ( repeat ) {
			continue;
		}
		buf.push(rand);
	}
	buf.sort();
	return buf;
}
