
var dateUtils = new DateUtils();
var guess = new Guess(10, 1);
$(document).ready(function () {
	guess.init();
	loadSch();
	
	// 单击事件
	$(".part3").click(function(){
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
					if ($(this).find(".active").length > 0) {
						html += '<li id="'+$(this).attr("id")+'">'+
									'<a class="ui-link" href="#">'+
										'<img height="53" width="53" onclick="HideTicketDiv(0)" src="/mobile/images/guanbi.png">'+
									'</a>'+
									'<div class="zx_no " style="margin-left:2em">'+
										'<div class="zu_r ticket_rang">';
						var sid = $(this).attr("id");
						var hag = [$(this).attr("guest"), $(this).attr("host")];
						var sty = ["part2", "part4"];
						$(this).find(".part3").each(function(index){
							html += '<div bet="'+$(this).attr("bet")+'" class="'+sty[index]+' none_linh '+($(this).hasClass("active") ? "active":"")+'" onclick="addOrRmStyle(this)">'+
							'<a href="#">'+
							'<div class="zul_txt">'+hag[index]+'</div>'+
							'<div class="zul_txt">'+
							'<span>'+$(this).attr("betname")+'</span>'+
							'<span>'+guess.getBetOdds(sid, $(this).attr("bet"))+'</span>'+
							'</div>'+
							'</a>'+
							'</div>';
						});
						html += '</div>'+
							'<div class="jing_dan_sf gray" onclick="setDan(this)">'+
							'<a href="#">胆</a>'+
							'</div>'+
							'<div class="clear"></div>'+
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
	
	var counterMap = new Hashtable();
	for ( var i = 0; i < schedules.length; i++ ) {
		var obj = schedules[i];
		if (  obj.sfggodds == 'null' ) {
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
		if (  obj.sfggodds == 'null' ) {
			continue;
		}
		var odds = obj.sfggodds.split(",");
		if ( date == "" ) {
			date = obj.id.substring(0,8);
			var dd = date.substring(0, 4)+"-"+date.substring(4, 6)+"-"+date.substring(6);
			html += '<h1>'+date.substring(4, 6)+'月'+date.substring(6)+'日 '+dateUtils.getWeekDay(dd)+' '+(counterMap.get(date)=='undefined'?'0':counterMap.get(date))+'场比赛可投注</h1>';
		}
		if ( date == obj.id.substring(0,8) ) {
			html += '<li id="'+obj.id+'" host="'+obj.hostname+'" guest="'+obj.guestname+'">'+
				        '<div class="part1" style="background: none;">'+
						'<div>'+obj.leaguename+'</div>'+
						'<div>'+obj.id.substring(8)+'</div>'+
						'<div> '+getAheadTime(obj.stoptime.substring(11,16))+'截止</div>'+
						'</div>';
						
						html += '<div class="part3 s " bet="0" betName="客胜">'+
						'<a href="#"><div style=" border-bottom:none">'+obj.guestname+'</div>'+
						'<div style=" border-top:none">客胜<span style=" margin-left:5px;">'+odds[1]+'</span>'+
						'</div></a></div>'+
						'<div class="part3 f " bet="3" betName="主胜">'+
						'<a href="#"><div style=" border-bottom:none">'+obj.hostname+'</div>'+
						'<div style=" border-top:none">主胜<span style=" margin-left:5px;">'+odds[0]+'</span>'+
						'</div></a></div>';
						
						html += '<div class="clear"></div>'+
			      '</li>';
		} else {
			date = obj.id.substring(0,8);
			var dd = date.substring(0, 4)+"-"+date.substring(4, 6)+"-"+date.substring(6);
			html += '<h1>'+date.substring(4, 6)+'月'+date.substring(6)+'日 '+dateUtils.getWeekDay(dd)+' '+(counterMap.get(date)=='undefined'?'0':counterMap.get(date))+'场比赛可投注</h1>';
			html += '<li id="'+obj.id+'" host="'+obj.hostname+'" guest="'+obj.guestname+'">'+
				        '<div class="part1" style="background: none;">'+
						'<div>'+obj.leaguename+'</div>'+
						'<div>'+obj.id.substring(8)+'</div>'+
						'<div> '+getAheadTime(obj.stoptime.substring(11,16))+'截止</div>'+
						'</div>';
						html += '<div class="part3 s " bet="0" betName="客胜">'+
						'<a href="#"><div style=" border-bottom:none">'+obj.guestname+'</div>'+
						'<div style=" border-top:none">客胜<span style=" margin-left:5px;">'+odds[1]+'</span>'+
						'</div></a></div>'+
						'<div class="part3 f " bet="3" betName="主胜">'+
						'<a href="#"><div style=" border-bottom:none">'+obj.hostname+'</div>'+
						'<div style=" border-top:none">主胜<span style=" margin-left:5px;">'+odds[0]+'</span>'+
						'</div></a></div>';
						html += '<div class="clear"></div>'+
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
			$(this).find(".zu_r .active").each(function(index){
				betCode += $(this).attr("bet") + ",";
			});
			if ( $(this).find(".jing_dan_sf.active").length > 0 ) {
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
		//$("#betInfoId").html('<span>共'+betMoney+'元</span><br/>'+betNum+'注'+mult+'倍');
		var highestBonus = guess.calcBonus(betCode, passString, mult); // 最大奖金
		var minBonus = guess.calcMinBonus(betCode, passString, mult);  // 最小奖金
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
			$(this).find(".zu_r .active").each(function(index){
				betCode += $(this).attr("bet") + ",";
			});
			if ( $(this).find(".jing_dan_sf.active").length > 0 ) {
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

//获取投注号码
function getBetCode() {
	var betCode = "";
	$("#ul_list").children().each(function(index){
		if ( $(this).find(".active").length > 0 ) {
			betCode += $(this).attr("id") + ":";
			$(this).find(".zu_r .active").each(function(index){
				betCode += $(this).attr("bet") + ",";
			});
			if ( $(this).find(".jing_dan_sf.active").length > 0 ) {
				betCode = betCode.substring(0, betCode.length-1) + ":2|";
			} else {
				betCode = betCode.substring(0, betCode.length-1) + ":0|";
			}
		}
	});
	betCode = betCode.substring(0, betCode.length - 1);
	return betCode;
}
