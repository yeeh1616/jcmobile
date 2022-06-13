var combAlg = new CombAlgorithm();
/**
 * 直选和值注数，0-27对应注数
 */
var ZXHZ = [1,3,6,10,15,21,28,36,45,55,63,69,73,75,75,73,69,63,55,45,36,28,21,15,10,6,3,1];
$(document).ready(function () {
	
	$("#barayId").empty();
	var html = '';
	if ($("#licenseId").val() == "1" ) {
		for ( var i = 0; i < 28; i++ ) {
			html += '<li v='+i+'><a href="#">'+i+'</a><p>'+zxHzOmit[0].dmos[i].omit+'</p> </li>';
		}
	} else {
		for ( var i = 0; i < 28; i++ ) {
			html += '<li v='+i+'><a href="#">'+i+'</a><p>0</p> </li>';
		}
	}
	html += '<div style="clear:both"></div>';
	$(html).appendTo($("#barayId"));
	
	// 选号
	$("#barayId li").click(function(){
		if ( $(this).hasClass("ball_active") ) {
			$(this).removeClass("ball_active");
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
		$("li.ball_active").removeClass("ball_active");
		calc();
	});
	
	// 到确认页
	$("#qrBtnId").click(function(){
		var counter = $(".ball_active").length;
		if ( counter < 1 ) {
			alert("至少选1个号");
		} else {
			// 填充投注数据
			var betNum = 0;
			var t = "", code = "";
			$(".ball_active").each(function(index){
				betNum += ZXHZ[parseInt($(this).attr("v"),10)];
				t += '<span>'+$(this).attr("v")+'</span>';
				code += $(this).attr("v")+",";
			});
			if ( betNum == 1 ) {
				alert("请选择复式号码投注！");
				return false;
			}
			$.mobile.changePage("#out_tickets", "slideup"); 
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
		$.mobile.changePage("#betPanelId", "slideup"); 
		calc();
	});
	
	// 机选号码
	$(".cp_button .jx").click(function(){
		var code = r(28), t = "";
		if ( code < 10 ) {
			code = "0" + code;
		}
		t += '<span>'+code+"</span>";
		var betNum = ZXHZ[parseInt(code,10)];
		if ( betNum == 1 ) {
			return false;
		}
		var html = '<li id="li_1" betNum="'+betNum+'" code="'+code+'">'+
					'<a class="ui-link" href="#"><img width="53" height="53" src="/mobile/images/guanbi.png" onclick="removeT(this)"></a>'+
					'<div class="zx_no">';
			html += t;
			html +=	'<div class="clear"></div>'+
					'</div>'+
					'<div class="zhushu">复式 '+betNum+'注'+(betNum*2)+'元</div>'+
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
	var counter = $(".ball_active").length;
	
	var betNum = 0;
	$(".ball_active").each(function(index){
		betNum += ZXHZ[parseInt($(this).attr("v"),10)];
	});
	$("#divze").html('<span>共'+(betNum*2)+'元</span><br /> '+betNum+'注');
}

function radomOne() {
	 $(".ball_active").removeClass("ball_active");
	var array = r(28);
	$("li[v="+array+"]").addClass("ball_active");
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

