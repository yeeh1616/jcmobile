var combAlg = new CombAlgorithm();
$(document).ready(function () {
	
	var html = '';
	for ( var i = 1; i < 10; i++ ) {
		html += '<li v="0'+i+'"><a href="#">0'+i+'</a><p>0</p></li>';
	}
	for ( var i = 10; i < 36; i++ ) {
		html += '<li v="'+i+'"><a href="#">'+i+'</a><p>0</p></li>';
	}
	html += '<div style="clear:both"></div>';
	$(html).appendTo($("#beforeAreaId"));
	
	html = '';
	for ( var i = 1; i < 10; i++ ) {
		html += '<li v="0'+i+'"><a href="#">0'+i+'</a><p>0</p></li>';
	}
	for ( var i = 10; i < 13; i++ ) {
		html += '<li v="'+i+'"><a href="#">'+i+'</a><p>0</p></li>';
	}
	html += '<div style="clear:both"></div>';
	$(html).appendTo($("#afterAreaId"));
	
	// 遗漏
	for ( var i = 0; i < ptOmit[0].dmos.length; i++ ) {
		$("#beforeAreaId").find("li[v="+ptOmit[0].dmos[i].data+"]").find("p").html(ptOmit[0].dmos[i].omit);
	}
	for ( var i = 0; i < ptOmit[1].dmos.length; i++ ) {
		$("#afterAreaId").find("li[v="+ptOmit[1].dmos[i].data+"]").find("p").html(ptOmit[1].dmos[i].omit);
	}
	
	// 选号
	$("#beforeAreaId li").click(function(){
		if ( $(this).hasClass("ball_active") && $(this).hasClass("dan_txt") ) {
			$(this).removeClass("ball_active").removeClass("dan_txt");
			$(this).children().eq(0).html($(this).attr("v"));
		} else if ( $(this).hasClass("ball_active") ){
			if ( $("#beforeAreaId li.dan_txt").length == 4 ) {
				alert("前区最多设4个胆！");
				return false;
			}
			$(this).addClass("dan_txt");
			$(this).children().eq(0).html($(this).attr("v")+"胆");
		} else {
			$(this).addClass("ball_active");
		}
		calc();
	});
	$("#afterAreaId li").click(function(){
		if ( $(this).hasClass("blue_active") && $(this).hasClass("dan_txt") ) {
			$(this).removeClass("blue_active").removeClass("dan_txt");
			$(this).children().eq(0).html($(this).attr("v"));
		} else if ( $(this).hasClass("blue_active") ){
			$("#afterAreaId li.dan_txt").each(function(index){
				$(this).children().eq(0).html($(this).attr("v"));
			});
			$("#afterAreaId li.dan_txt").removeClass("dan_txt");
			$(this).addClass("dan_txt");
			$(this).children().eq(0).html($(this).attr("v")+"胆");
		} else {
			$(this).addClass("blue_active");
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
		$("li.blue_active").removeClass("blue_active").removeClass("dan_txt");
		calc();
	});
	
	// 到确认页
	$("#qrBtnId").click(function(){
		var betNum = 0;
		var before = $("#beforeAreaId").find(".ball_active").length, after = $("#afterAreaId").find(".blue_active").length;
		if ( before > 5 && after >= 2 ) {
			var bdan = $("#beforeAreaId").find(".dan_txt").length, adan = $("#afterAreaId").find(".dan_txt").length;
			before = before - bdan;
			after = after - adan;
			betNum = combAlg.calcCombNum(before,5-bdan) * combAlg.calcCombNum(after,2-adan);
			if ( (bdan + adan > 0) && betNum > 1 ) {
				
			} else {
				betNum = 0;
			}
		}
		if ( betNum == 0 ) {
			alert("至少选择5个红球,2个蓝球，至少包含一个胆");
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
			code = code.substring(0, code.length-1) + "+";
			
			if ( $("#afterAreaId").find(".dan_txt").length > 0 ) {
				code += "(";
				$("#afterAreaId").find(".dan_txt").each(function(index){
					code += $(this).attr("v")+",";
				});
				code = code.substring(0, code.length-1) + ")";
				$("#afterAreaId").find(".blue_active").each(function(index){
					if ( !$(this).hasClass("dan_txt") ) {
						code += $(this).attr("v")+",";
					}
				});
			} else {
				$("#afterAreaId").find(".blue_active").each(function(index){
					code += $(this).attr("v")+",";
				});
			}
			$("#afterAreaId").find(".blue_active").each(function(index){
				t += '<span class="lan">'+$(this).children().eq(0).html()+'</span>';
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
		$("li.blue_active").removeClass("blue_active");
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
		var array = rarray(5, 35);
		for ( var i = 0; i < 5; i++ ) {
			code += array[i] + ",";
			t += '<span>'+array[i]+"</span>";
		}
		code = code.substring(0, code.length-1)+"+";
		array = rarray(2, 12);
		for ( var i = 0; i < 2; i++ ) {
			code += array[i] + ",";
			t += '<span class="lan">'+array[i]+"</span>";
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
	var before = $("#beforeAreaId").find(".ball_active").length, after = $("#afterAreaId").find(".blue_active").length;
	var betNum = 0;
	if ( before > 5 && after > 2 ) {
		var bdan = $("#beforeAreaId").find(".dan_txt").length, adan = $("#afterAreaId").find(".dan_txt").length;
		before = before - bdan;
		after = after - adan;
		betNum = combAlg.calcCombNum(before,5-bdan) * combAlg.calcCombNum(after,2-adan);
		if ( (bdan + adan > 0) && betNum > 1 ) {
			
		} else {
			betNum = 0;
		}
	}
	$("#divze").html('<span>共'+(betNum*2)+'元</span><br /> '+betNum+'注');
}

function radomOne() {
	$(".ball_active").removeClass("ball_active");
	$(".blue_active").removeClass("blue_active");
	var beforeArray = rarray(5, 35);
	for (var i = 0; i < beforeArray.length; i++ ) {
		$("#beforeAreaId").find("li[v="+beforeArray[i]+"]").addClass("ball_active");
	}
	var afterArray = rarray(2, 12);
	for (var i = 0; i < afterArray.length; i++ ) {
		$("#afterAreaId").find("li[v="+afterArray[i]+"]").addClass("blue_active");
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
