var combAlg = new CombAlgorithm();
$(document).ready(function () {
	$("#barayId").empty();
	var html = '';
	var weight = ["胆码", "拖码"];
	for ( var i = 0; i < 2; i++ ) {
		html += '<div class="con_tittle">'+weight[i]+'</div>'+
		      '<div class="con_con">'+
		        '<div class="con_left">'+
		          '<div class="con_left_top"><span>遗漏</span></div>'+
		        '</div>'+
		        '<div class="con_right">'+
		          '<div class="list big_l" style="">'+
		        '<ul name="betN">';
		for ( var j = 1; j < 10; j++ ) {
			html += '<li class="li_w" v=0'+j+'><a href="#">0'+j+'</a><p>0</p> </li>';
		}
		html += '<li class="li_w" v=10><a href="#">10</a><p>0</p> </li><li class="li_w" v=11><a href="#">11</a><p>0</p> </li>';
		html += '</ul>'+
	          '</div>'+
	        '</div>'+
	        '<div style="clear:both"></div>'+
	      '</div>';
	}
	$(html).appendTo($("#barayId"));
	
	// 选号
	$("ul[name=betN]").eq(0).find("li.li_w").click(function(){
		if ( $(this).hasClass("ball_active") ) {
			$(this).removeClass("ball_active");
		} else {
			if ( $("ul[name=betN]").eq(0).find(".ball_active").length == 7 ) {
				alert("最多设7个胆");
				return false;
			}
			// 相同位置的其它行号码消除
			$("li[v="+$(this).attr("v")+"].ball_active").removeClass("ball_active");
			$(this).addClass("ball_active");
		}
		calc();
	});
	$("ul[name=betN]").eq(1).find("li.li_w").click(function(){
		if ( $(this).hasClass("ball_active") ) {
			$(this).removeClass("ball_active");
		} else {
			// 相同位置的其它行号码消除
			$("li[v="+$(this).attr("v")+"].ball_active").removeClass("ball_active");
			$(this).addClass("ball_active");
		}
		calc();
	});
	
	// 清空
	$(".qk-button").click(function(){
		$("li.ball_active").removeClass("ball_active");
		calc();
	});
	
	// 到确认页
	$("#qrBtnId").click(function(){
		var tuo = $("ul[name=betN]").eq(1).find(".ball_active").length;
		var dan = $("ul[name=betN]").eq(0).find(".ball_active").length;
		var betNum = 0;
		if ( dan > 0 && (dan + tuo > 8) ) {
			betNum = combAlg.calcCombNum(tuo,8-dan);
		}
		if ( betNum > 0 ) {
			$.mobile.changePage("#out_tickets", "slideup"); 
			// 填充投注数据
			var t = "(", code = "(";
			$("ul[name=betN]").each(function(index){
				t += '<span>';
				$(this).find("li.ball_active").each(function(i){
					t += $(this).attr("v") + ",";
					code += $(this).attr("v")+ ",";;
				});
				t = t.substring(0, t.length-1) + '</span>)';
				code = code.substring(0,code.length-1) + ")";
			});
			t = t.substring(0, t.length-1);
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
	var tuo = $("ul[name=betN]").eq(1).find(".ball_active").length;
	var dan = $("ul[name=betN]").eq(0).find(".ball_active").length;
	var betNum = 0;
	if ( dan > 0 && (dan + tuo > 8) ) {
		betNum = combAlg.calcCombNum(tuo,8-dan);
	}
	$("#divze").html('<span>共'+(betNum*2)+'元</span><br /> '+betNum+'注');
}

function radomOne() {
	$(".ball_active").removeClass("ball_active");
	var array = rarray(2, 12);
	for ( var i = 0; i < 2; i++ ) {
		$("ul[name=betN]").eq(i).each(function(index){
			$(this).find("li[v="+array[i]+"]").addClass("ball_active");
		});
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
