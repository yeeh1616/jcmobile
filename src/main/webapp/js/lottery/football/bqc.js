var RADOM_INDEX = ["3","1","0"];
var football = new Football();
$(document).ready(function () {
	loadSch();
	
	// 选号
	$(".ui-controlgroup-controls a").click(function(){
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		calc();
	});
	
	// 摇一摇
	$(".con_top_img").click(function(){
		radomOne();
	});
	
	// 清空
	$(".qk-button").click(function(){
		$("a.active").removeClass("active");
		calc();
	});
	
	// 到确认页
	$("#qrBtnId").click(function(){
		var counter = 0;
		$("#wrapper").find(".ui-controlgroup-controls").each(function(index){
			if ( $(this).find("a.active").length > 0 ) {
				counter++;
			}
		});
		if ( counter != 12 ) {
			alert("未选满比赛");
		} else {
			$.mobile.changePage("#out_tickets", "slideup"); 
			// 填充投注数据
			var betArray = new Array();
			var t = "", code = "";
			$("#wrapper").find(".ui-controlgroup-controls").each(function(index){
				var sArray = new Array();
				t += '<span>';
				$(this).find("a.active").each(function(i){
					sArray.push($(this).attr("bet"));
					t += $(this).attr("bet");
					code += $(this).attr("bet");;
				});
				t += '</span>';
				code += ",";
				betArray.push(sArray);
			});
			code = code.substring(0, code.length-1);
			var betNum = football.calcBetNum(betArray);
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
		$("a.active").removeClass("active");
		$.mobile.changePage("#betPanelId", "slideup"); 
		calc();
	});
	// 机选号码
	$(".cp_button .jx").click(function(){
		var code = "", t = "";
		for ( var i = 0; i < 12; i++ ) {
			var r = RADOM_INDEX[football.random(3)];
			code += r + ",";
			t += '<span>'+r+"</span>";
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
	
	// 倍数
	$("#multipleId").keydown(function(event){
		if ( ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) || event.keyCode == 8) {
			return true;
		} else {
			return false;
		}
	});
	$("#multipleId").keyup(function(event){
		if ( $(this).val() != "" ) {
			calcTotal();
		}
	});
});

function calcTotal() {
	var mult = parseInt($("#multipleId").val(),10);
	var betNum = 0;
	$("#ul_list").children().each(function(index){
		betNum += parseInt($(this).attr("betNum"));
	});
	$("#divze2").html('<span>共'+(betNum*mult*2)+'元</span><br>'+betNum+'注'+mult+'倍 ');
}

function removeT(obj) {
	$(obj).parent().parent().remove();
	calcTotal();
}

// 机选1注
function radomOne() {
	$("a.active").removeClass("active");
	$("#wrapper").find(".ui-controlgroup-controls").each(function(index){
		var bet = RADOM_INDEX[football.random(3)];
		$(this).find("a[bet="+bet+"]").addClass("active");
	});
	calc();
}

function calc() {
	var counter = 0;
	$("#wrapper").find(".ui-controlgroup-controls").each(function(index){
		if ( $(this).find("a.active").length > 0 ) {
			counter++;
		}
	});
	if ( counter == 12 ) {
		var betArray = new Array();
		$("#wrapper").find(".ui-controlgroup-controls").each(function(index){
			var sArray = new Array();
			$(this).find("a.active").each(function(i){
				sArray.push($(this).attr("bet"));
			});
			betArray.push(sArray);
		});
		var betNum = football.calcBetNum(betArray);
		$("#divze").html('<span>共'+betNum*2+'元</span><br />'+betNum+'注</div>');
	} else {
		$("#divze").html('<span>共0元</span><br />0注</div>');
	}
}

function loadSch() {
	html = "";
	for ( var i = 0; i < schedules.length; i++ ) {
		html += '<div class="sf_list">      <div class="zhu_team">主</div>'+
			      '<div class="ke_team">客</div>'+
			      '<div class="team_shengfu" id="team_0">'+schedules[i].hostTeam+'<span>VS</span>'+schedules[i].guestTeam+'</div>'+
			      '<div class="banq">半场</div>'+
			      '<div data-role="controlgroup" data-type="horizontal" class="spf ui-controlgroup ui-controlgroup-horizontal ui-corner-all"><div class="ui-controlgroup-controls "> <a href="#" class="ui-link ui-btn ui-shadow ui-corner-all ui-first-child" data-role="button" bet="3">3（胜）</a> <a href="#" class="ui-link ui-btn ui-shadow ui-corner-all" data-role="button" bet="1">1（平）</a> <a href="#" class="ui-link ui-btn ui-shadow ui-corner-all ui-last-child" data-role="button" bet="0">0（负）</a> </div></div>'+
			      '<div class="banq">全场</div>'+
			    '<div data-role="controlgroup" data-type="horizontal" class="spf ui-controlgroup ui-controlgroup-horizontal ui-corner-all"><div class="ui-controlgroup-controls "> <a href="#" class="ui-link ui-btn ui-shadow ui-corner-all ui-first-child" data-role="button" bet="3">3（胜）</a> <a href="#" class="ui-link ui-btn ui-shadow ui-corner-all"  data-role="button" bet="1">1（平）</a> <a href="#" class="ui-link ui-btn ui-shadow ui-corner-all ui-last-child" data-role="button" bet="0">0（负）</a> </div></div>'+
			    '</div>';
	}
	$(html).appendTo($("#wrapper"));
}


