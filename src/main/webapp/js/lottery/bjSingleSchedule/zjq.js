
var dateUtils = new DateUtils();
var guess = new SingleSchedule(5);
$(document).ready(function () {
	guess.init(schedules);
	loadSch();
	
	// 单击事件
	$("div[name=betN]").click(function(){
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		calc();
	});
	
	// 到确认页面
	$(".qd-button").click(function(){
		var betCode = "";
		var len = 0;
		$("#betUlList").find("li").each(function(index){
			if ($(this).find(".active").length > 0) {
				betCode += $(this).attr("id") + ":";
				$(this).find(".active").each(function(index){
					betCode += $(this).attr("bet") + ",";
				});
				betCode = betCode.substring(0, betCode.length-1) + ":0|";
				len++;
			}
		});
		if ( len < 1 ) {
			tigMessage_foundation("至少选择1场比赛！");
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
					if ($(this).find(".active").length > 0) {
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
						$(this).find(".active").each(function(index){
							html += '<span class="active" bet="'+$(this).attr("bet")+'">'+$(this).attr("bet")+'</span>';
						});
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

function loadSch() {
	$("#betUlList").empty();
	var html = '';
	var date = "";
	var ndate = $("#ndateValId").val();
	// 期号
	$("#lotteryBuyFormId").find("input[name=issue]").val(schedules[0].issue);
	var counterMap = new Hashtable();
	for ( var i = 0; i < schedules.length; i++ ) {
		var obj = schedules[i];
		if (  obj.zjqOdds == 'null' ) {
			continue;
		}
		date = schedules[i].uuid.substring(0,8);
		
		if ( dateUtils.formatGuessDate(schedules[i].betEndTime, $("#aheadTimeId").val()) > ndate ) {
			if ( counterMap.get(date) != 'undefined' ) {
				counterMap.put(date, parseInt(counterMap.get(date))+1);
			} else {
				counterMap.put(date, 1);
			}
		} 
	}
	$("input[name=issue]").val(schedules[0].issue);
	date = "";
	for ( var i = 0; i < schedules.length; i++ ) {
		if ( dateUtils.formatGuessDate(schedules[i].betEndTime, $("#aheadTimeId").val()) <= ndate ) {
			continue;
		}
		var obj = schedules[i];
		if (  obj.zjqOdds == 'null' ) {
			continue;
		}
		var odds = obj.zjqOdds.split(",");
		if ( date == "" ) {
			date = obj.uuid.substring(0,8);
			var dd = date.substring(0, 4)+"-"+date.substring(4, 6)+"-"+date.substring(6);
			html += '<h1>'+date.substring(4, 6)+'月'+date.substring(6)+'日 '+dateUtils.getWeekDay(dd)+' '+(counterMap.get(date)=='undefined'?'0':counterMap.get(date))+'场比赛可投注</h1>';
		}
		if ( date == obj.uuid.substring(0,8) ) {
			html += '<li id="'+obj.uuid+'" host="'+obj.hostTeam+'" guest="'+obj.guestTeam+'">'+
				        '<div class="part1" style="background: none;">'+
						'<div>'+obj.leagueName+'</div>'+
						'<div>'+obj.uuid.substring(8)+'</div>'+
						'<div> '+getAheadTime(obj.betEndTime.substring(11,16))+'截止</div>'+
						'</div>'+
						'<div class="part_r">'+
						'<div class="top">'+
						'<div style="width:50%">'+obj.hostTeam+'</div>'+
						'<div style=" width:10% !important">VS</div>'+
						'<div style="width:40%">'+obj.guestTeam+'</div>'+
						'</div>'+
						'<div class="bfen">'+
						'<div class="one" name="betN" bet="0">'+
						'<a href="#" style="color:red">'+
						'0'+
						'<span>'+odds[0]+'</span>'+
						'</a>'+
						'</div>'+
						'<div class="two " name="betN" bet="1">'+
						'<a href="#" style="color:red">'+
						'1'+
						'<span>'+odds[1]+'</span>'+
						'</a>'+
						'</div>'+
						'<div class="three" name="betN" bet="2">'+
						'<a href="#" style="color:red">'+
						'2'+
						'<span>'+odds[2]+'</span>'+
						'</a>'+
						'</div>'+
						'<div class="four" name="betN" bet="3">'+
						'<a href="#" style="color:red">'+
						'3'+
						'<span>'+odds[3]+'</span>'+
						'</a>'+
						'</div>'+
						'<div class="five" name="betN" bet="4">'+
						'<a href="#" style="color:red">'+
						'4'+
						'<span>'+odds[4]+'</span>'+
						'</a>'+
						'</div>'+
						'<div class="six " name="betN" bet="5">'+
						'<a href="#" style="color:red">'+
						'5'+
						'<span>'+odds[5]+'</span>'+
						'</a>'+
						'</div>'+
						'<div class="seven" name="betN" bet="6">'+
						'<a href="#" style="color:red">'+
						'6'+
						'<span>'+odds[6]+'</span>'+
						'</a>'+
						'</div>'+
						'<div class="eight" name="betN" bet="7">'+
						'<a href="#" style="color:red">'+
						'7+'+
						'<span>'+odds[7]+'</span>'+
						'</a>'+
						'</div>'+
						'</div>'+
						'</div>'+
						'<div class="clear"></div>'+
			      '</li>';
		} else {
			date = obj.uuid.substring(0,8);
			var dd = date.substring(0, 4)+"-"+date.substring(4, 6)+"-"+date.substring(6);
			html += '<h1>'+date.substring(4, 6)+'月'+date.substring(6)+'日 '+dateUtils.getWeekDay(dd)+' '+(counterMap.get(date)=='undefined'?'0':counterMap.get(date))+'场比赛可投注</h1>';
			html += '<li id="'+obj.uuid+'" host="'+obj.hostTeam+'" guest="'+obj.guestTeam+'">'+
			        '<div class="part1" style="background: none;">'+
					'<div>'+obj.leagueName+'</div>'+
					'<div>'+obj.uuid.substring(8)+'</div>'+
					'<div> '+getAheadTime(obj.betEndTime.substring(11,16))+'截止</div>'+
					'</div>'+
					'<div class="part_r">'+
					'<div class="top">'+
					'<div style="width:50%">'+obj.hostTeam+'</div>'+
					'<div style=" width:10% !important">VS</div>'+
					'<div style="width:40%">'+obj.guestTeam+'</div>'+
					'</div>'+
					'<div class="bfen">'+
					'<div class="one" name="betN" bet="0">'+
					'<a href="#" style="color:red">'+
					'0'+
					'<span>'+odds[0]+'</span>'+
					'</a>'+
					'</div>'+
					'<div class="two " name="betN" bet="1">'+
					'<a href="#" style="color:red">'+
					'1'+
					'<span>'+odds[1]+'</span>'+
					'</a>'+
					'</div>'+
					'<div class="three" name="betN" bet="2">'+
					'<a href="#" style="color:red">'+
					'2'+
					'<span>'+odds[2]+'</span>'+
					'</a>'+
					'</div>'+
					'<div class="four" name="betN" bet="3">'+
					'<a href="#" style="color:red">'+
					'3'+
					'<span>'+odds[3]+'</span>'+
					'</a>'+
					'</div>'+
					'<div class="five" name="betN" bet="4">'+
					'<a href="#" style="color:red">'+
					'4'+
					'<span>'+odds[4]+'</span>'+
					'</a>'+
					'</div>'+
					'<div class="six " name="betN" bet="5">'+
					'<a href="#" style="color:red">'+
					'5'+
					'<span>'+odds[5]+'</span>'+
					'</a>'+
					'</div>'+
					'<div class="seven" name="betN" bet="6">'+
					'<a href="#" style="color:red">'+
					'6'+
					'<span>'+odds[6]+'</span>'+
					'</a>'+
					'</div>'+
					'<div class="eight" name="betN" bet="7">'+
					'<a href="#" style="color:red">'+
					'7+'+
					'<span>'+odds[7]+'</span>'+
					'</a>'+
					'</div>'+
					'</div>'+
					'</div>'+
					'<div class="clear"></div>'+
		      '</li>';
		}
		
	}
	$(html).appendTo($("#betUlList"));
}

function calc() {
	var counter = 0;
	$("#betUlList").find("li").each(function(index){
		if ($(this).find(".active").length > 0) {
			counter++;
		}
	});
	$("#schNumId").html(counter);
}

function calcBetNum() {
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
		$("#betInfoId").html('<span>共'+betMoney+'元</span><br/>'+betNum+'注'+mult+'倍');
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
		
		var passLimit = 6;
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