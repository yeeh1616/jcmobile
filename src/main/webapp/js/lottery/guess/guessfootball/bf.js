
var dateUtils = new DateUtils();
var guess = new Guess(9, 5);

var JCZQ_INDEX_BF = new Hashtable();
JCZQ_INDEX_BF.put(0, "胜其他");
JCZQ_INDEX_BF.put(1, "1:0");
JCZQ_INDEX_BF.put(2, "2:0");
JCZQ_INDEX_BF.put(3, "2:1");
JCZQ_INDEX_BF.put(4, "3:0");
JCZQ_INDEX_BF.put(5, "3:1");
JCZQ_INDEX_BF.put(6, "3:2");
JCZQ_INDEX_BF.put(7, "4:0");
JCZQ_INDEX_BF.put(8, "4:1");
JCZQ_INDEX_BF.put(9, "4:2");
JCZQ_INDEX_BF.put(10, "5:0");
JCZQ_INDEX_BF.put(11, "5:1");
JCZQ_INDEX_BF.put(12, "5:2");
JCZQ_INDEX_BF.put(13, "平其他");
JCZQ_INDEX_BF.put(14, "0:0");
JCZQ_INDEX_BF.put(15, "1:1");
JCZQ_INDEX_BF.put(16, "2:2");
JCZQ_INDEX_BF.put(17, "3:3");
JCZQ_INDEX_BF.put(18, "负其他");
JCZQ_INDEX_BF.put(19, "0:1");
JCZQ_INDEX_BF.put(20, "0:2");
JCZQ_INDEX_BF.put(21, "1:2");
JCZQ_INDEX_BF.put(22, "0:3");
JCZQ_INDEX_BF.put(23, "1:3");
JCZQ_INDEX_BF.put(24, "2:3");
JCZQ_INDEX_BF.put(25, "0:4");
JCZQ_INDEX_BF.put(26, "1:4");
JCZQ_INDEX_BF.put(27, "2:4");
JCZQ_INDEX_BF.put(28, "0:5");
JCZQ_INDEX_BF.put(29, "1:5");
JCZQ_INDEX_BF.put(30, "2:5");
$(document).ready(function () {
	guess.init();
	// 异步请求
	loadSch();
	
	// 弹出时赋值
	$("a[name=betN]").click(function(){
		$("td[name=betN].active").removeClass("active");
		var odds = $(this).attr("odd").split(",");
		var betNs = $("td[name=betN]");
		$(betNs[12]).children().eq(0).children().eq(1).html(odds[0]);
		for ( var i = 0; i < 12; i++ ) {
			$(betNs[i]).children().eq(0).children().eq(1).html(odds[i+1]);
		}
		$(betNs[17]).children().eq(0).children().eq(1).html(odds[13]);
		for ( var i = 13; i < 17; i++ ) {
			$(betNs[i]).children().eq(0).children().eq(1).html(odds[i+1]);
		}
		$(betNs[30]).children().eq(0).children().eq(1).html(odds[18]);
		for ( var i = 18; i < 30; i++ ) {
			$(betNs[i]).children().eq(0).children().eq(1).html(odds[i+1]);
		}
		
		$("#sfc").attr("v", $(this).attr("v"));
		
		var bets = $("li[id="+$(this).attr("v")+"]").attr("bet").split(",");
		for ( var i = 0; i < bets.length; i++ ) {
			$("td[name=betN][bet="+bets[i]+"]").addClass("active");
		}
	});
	
	// 单击事件
	$("td[name=betN]").click(function(){
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});
	
	// 确认选中
	$("#qrSelBtnId").click(function(){
		var counter = 0;
		var bet = "";
		var betName = "";
		$("td[name=betN].active").each(function(index){
			bet += $(this).attr("bet") + ",";
			betName += JCZQ_INDEX_BF.get($(this).attr("bet")) + ",";
			counter++;
		});
		if ( bet != "" ) {
			bet = bet.substring(0, bet.length-1);
			betName = betName.substring(0, betName.length-1);
			$("a[v="+$("#sfc").attr("v")+"]").html(betName);
		} else {
			$("a[v="+$("#sfc").attr("v")+"]").html("点击展开投注区");
		}
		$("li[id="+$("#sfc").attr("v")+"]").attr("bet", bet);
		$("li[id="+$("#sfc").attr("v")+"]").attr("betlen", counter);
		
		calc();
	});
	
	// 到确认页面
	$(".qd-button").click(function(){
		var betCode = "";
		var len = 0;
		$("#betUlList").find("li").each(function(index){
			if ($(this).attr("betlen") != "0") {
				betCode += $(this).attr("id") + ":" + $(this).attr("bet");
				betCode = betCode.substring(0, betCode.length-1) + ":0|";
				len++;
			}
		});
		if ( len < 2 ) {
			tigMessage_foundation("至少选择2场比赛！");
			$(this).find("a").attr("href", "#");
			return false;
		} else {
			if ( $(this).attr("href") == "#out_tickets" ) {
				//$(this).click();
			} else {
				$(this).find("a").attr("href", "#out_tickets");
				
				// 填充数据
				$("#ul_list").empty();
				var html = '';
				$("#betUlList").find("li").each(function(index){
					if ($(this).attr("betlen") != "0") {
						html += '<li id="'+$(this).attr("id")+'">'+
									'<a class="ui-link" href="#">'+
									'<img height="53" width="53" src="/mobile/images/guanbi.png">'+
									'</a>'+
									'<div class="zx_no jingcai_out">'+
									'<span>'+$(this).attr("host")+'</span>'+
									'<span class="vs">VS</span>'+
									'<span>'+$(this).attr("guest")+'</span>'+
									'<div class="clear"></div>'+
									'</div>'+
									'<div class="zhushu jingcai_shu">';
						var bets = $(this).attr("bet").split(",");
						for ( var i = 0; i < bets.length; i++ ) {
							html += '<span class="active" bet="'+bets[i]+'">'+JCZQ_INDEX_BF.get(bets[i])+'</span>';
						}
						html	+=		'</div>'+
									'<div class="jing_dan gray" onclick="setDan(this)">'+
									'<a href="#">胆</a>'+
									'</div>'+
								'</li>';
					}
				});
				$(html).appendTo($("#ul_list"));
				
				showOrHidePst();
			}
		}
	});
});

function calc() {
	var counter = 0;
	$("#betUlList").find("li").each(function(index){
		if ($(this).attr("betlen") != "0") {
			counter++;
		}
	});
	$("#schNumId").html(counter);
}

String.prototype.replaceAll = function(s1,s2){   
	return this.replace(new RegExp(s1,"gm"),s2);   
}

function loadSch() {
	$("#betUlList").empty();
	var html = '';
	var date = "";
	var ndate = $("#ndateValId").val();
	
	var counterMap = new Hashtable();
	for ( var i = 0; i < schedules.length; i++ ) {
		var obj = schedules[i];
		if (  obj.bfodds == 'null' ) {
			continue;
		}
		date = schedules[i].id.substring(0,8);
		
		if ( dateUtils.formatGuessDate(schedules[i].stoptime, $("#aheadTimeId").val()) > ndate ) {
			if ( counterMap.get(date) != 'undefined' ) {
				counterMap.put(date, parseInt(counterMap.get(date))+1);
			} else {
				counterMap.put(date, 1);
			}
		} 
	}
	date = "";
	for ( var i = 0; i < schedules.length; i++ ) {
		if ( dateUtils.formatGuessDate(schedules[i].stoptime, $("#aheadTimeId").val()) <= ndate ) {
			continue;
		}
		var obj = schedules[i];
		if (  obj.bfodds == 'null' ) {
			continue;
		}
		var odds = obj.bfodds.split(",");
		if ( date == "" ) {
			date = obj.id.substring(0,8);
			var dd = date.substring(0, 4)+"-"+date.substring(4, 6)+"-"+date.substring(6);
			html += '<h1>'+date.substring(4, 6)+'月'+date.substring(6)+'日 '+dateUtils.getWeekDay(dd)+' '+(counterMap.get(date)=='undefined'?'0':counterMap.get(date))+'场比赛可投注</h1>';
		}
		if ( date == obj.id.substring(0,8) ) {
			html += '<li id="'+obj.id+'" host="'+obj.hostname+'" guest="'+obj.guestname+'" betlen="0" bet="">'+
				        '<div class="part1">'+
				          '<div>'+obj.leaguename+'</div>'+
				          '<div>'+obj.id.substring(8)+'</div><div>'+getAheadTime(obj.stoptime.substring(11,16))+'</div>'+
				        '</div>'+
				        '<div class="part_r">'+
				        '<div class="top">'+
				        '<div>'+obj.hostname+'</div>'+
				        '<div>VS</div>'+
				        '<div>'+obj.guestname+'</div>'+
				        '</div>'+
				        '<div class="bottom_all">'+
				        '<div>'+
				        '<a  href="#sfc" data-rel="popup" data-transition="slide" odd="'+obj.bfodds+'" name="betN" v="'+obj.id+'">点击展开投注区</a>'+
				        '</div>'+
				        '</div>'+
				        '</div>'+
				        '<div class="clear"></div>'+
			      '</li>';
		} else {
			date = obj.id.substring(0,8);
			var dd = date.substring(0, 4)+"-"+date.substring(4, 6)+"-"+date.substring(6);
			html += '<h1>'+date.substring(4, 6)+'月'+date.substring(6)+'日 '+dateUtils.getWeekDay(dd)+' '+(counterMap.get(date)=='undefined'?'0':counterMap.get(date))+'场比赛可投注</h1>';
				html += '<li id="'+obj.id+'" host="'+obj.hostname+'" guest="'+obj.guestname+'" betlen="0" bet="">'+
				 '<div class="part1">'+
		          '<div>'+obj.leaguename+'</div>'+
		          '<div>'+obj.id.substring(8)+'</div><div>'+getAheadTime(obj.stoptime.substring(11,16))+'</div>'+
		        '</div>'+
		        '<div class="part_r">'+
		        '<div class="top">'+
		        '<div>'+obj.hostname+'</div>'+
		        '<div>VS</div>'+
		        '<div>'+obj.guestname+'</div>'+
		        '</div>'+
		        '<div class="bottom_all">'+
		        '<div>'+
		        '<a  href="#sfc" data-rel="popup" data-transition="slide" odd="'+obj.bqcggodds+'" name="betN" v="'+obj.id+'">点击展开投注区</a>'+
		        '</div>'+
		        '</div>'+
		        '</div>'+
		        '<div class="clear"></div>'+
	      '</li>';
		}
		
	}
	$(html).appendTo($("#betUlList"));
		
}

function calcBetNum() {
	var betCode = getBetCode();
	
	var passString = "";
	$(".chuan_list .chuans.active").each(function(index){
		passString += $(this).attr("value") + ",";
	});
	if ( passString != "" ) {
		passString = passString.substring(0, passString.length-1);
		betCode = betCode.substring(0, betCode.length-1);
		var betNum = guess.calcBetNum(betCode, passString);
		var mult = parseInt($("#inputValue").val(),10);
		var betMoney = betNum*mult*2;
		$("#betInfoId").attr("betNum", betNum);
		//$("#betInfoId").html('<span>共'+betMoney+'元</span><br/>'+betNum+'注'+mult+'倍');
		var highestBonus = guess.calcBonus(betCode, passString, mult);
		var minBonus = guess.calcMinBonus(betCode, passString, mult);
		$("#betInfoId").html('<span>共'+betMoney+'元</span><br/>奖金：'+minBonus+"～"+highestBonus);
	} else {
		$("#betInfoId").html('<span>共0元</span><br/>');
		$("#betInfoId").attr("betNum", 0);
	}
	
}


/**
 * 过关方式展示/隐藏
 * @return
 */
function showOrHidePst() {
	var counter = 0;
	var betCode = "";
	var dan = false;
	$("#ul_list").children().each(function(index){
		if ( $(this).find(".active").length > 0 ) {
			counter++;
			
			betCode += $(this).attr("id") + ":";
			$(this).find("span.active").each(function(index){
				betCode += $(this).attr("bet") + ",";
			});
			if ( $(this).find("div.active").length > 0 ) {
				betCode = betCode.substring(0, betCode.length-1) + ":2|";
				dan = true;
			} else {
				betCode = betCode.substring(0, betCode.length-1) + ":0|";
			}
		}
	});
	if ( counter > 0 ) {
		betCode = betCode.substring(0, betCode.length-1);
		
		var passLimit = guess.getMaxPassNum();
		if ( guess.playId == 6 ) {
			passLimit = guess.getMixedMaxPassNum(betCode);
		}
		passLimit = counter > passLimit ? passLimit : counter;
		$(".chuan_list .chuans").removeClass("active");
		$(".chuan_list .chuans").each(function(index){
			var len = parseInt($(this).attr("value").split("c")[0],10);
			if ( len <= passLimit ) {
				$(this).show();
				if ( dan &&  parseInt($(this).attr("value").split("c")[1],10) > 1 ) {
					$(this).hide();
				}
			} else {
				$(this).hide();
			}
		});
	}
}

// 获取投注号码
function getBetCode() {
	var betCode = "";
	$("#ul_list").children().each(function(index){
		if ( $(this).find(".active").length > 0 ) {
			betCode += $(this).attr("id") + ":";
			$(this).find("span.active").each(function(index){
				betCode += $(this).attr("bet") + ",";
			});
			if ( $(this).find("div.active").length > 0 ) {
				betCode = betCode.substring(0, betCode.length-1) + ":2|";
			} else {
				betCode = betCode.substring(0, betCode.length-1) + ":0|";
			}
		}
	});
	betCode = betCode.substring(0, betCode.length - 1);
	return betCode;
}