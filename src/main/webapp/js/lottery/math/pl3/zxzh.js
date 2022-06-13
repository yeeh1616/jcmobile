var combAlg = new CombAlgorithm();
$(document).ready(function () {
	
	$("#barayId").empty();
	var html = '';
	for ( var i = 0; i < 10; i++ ) {
		html += '<li v='+i+'><a href="#">'+i+'</a><p>'+zxHhOmit[0].dmos[i].omit+'</p> </li>';
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
		if ( counter < 3 ) {
			alert("至少选3个号");
		} else {
			$.mobile.changePage("#out_tickets", "slideup"); 
			// 填充投注数据
			var betNum = combAlg.calcCombNum(counter,3)*6;
			var t = "", code = "";
			$(".ball_active").each(function(index){
				t += '<span>'+$(this).attr("v")+'</span>';
				code += $(this).attr("v")+",";
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
		$.mobile.changePage("#betPanelId", "slideup"); 
		calc();
	});
	
	// 机选号码
	$(".cp_button .jx").click(function(){
		var code = "", t = "";
		var array = rarray(3, 10);
		for ( var i = 0; i < 3; i++ ) {
			code += array[i] + ",";
			t += '<span>'+array[i]+"</span>";
		}
		code = code.substring(0, code.length-1);
		var html = '<li id="li_1" betNum="6" code="'+code+'">'+
					'<a class="ui-link" href="#"><img width="53" height="53" src="/mobile/images/guanbi.png" onclick="removeT(this)"></a>'+
					'<div class="zx_no">';
			html += t;
			html +=	'<div class="clear"></div>'+
					'</div>'+
					'<div class="zhushu">复式 6注12元</div>'+
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
	if ( counter >= 3 ) {
		betNum = combAlg.calcCombNum(counter,3)*6;
	}
	$("#divze").html('<span>共'+(betNum*2)+'元</span><br /> '+betNum+'注');
}

function radomOne() {
	 $(".ball_active").removeClass("ball_active");
	var array = rarray(3, 10);
	for ( var i = 0; i < 3; i++ ) {
		$("li[v="+array[i]+"]").addClass("ball_active");
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

