
var dateUtils = new DateUtils();
var guess = new Guess(10, 6);
$(document).ready(function () {
	guess.init();
	// 异步请求
	loadSch();
	
	// 弹出时赋值
	$("a[name=betNN]").click(function(){
		$("#hun_zhan").attr("v", $(this).attr("v"));
		$("#h_race").html($("li[id="+$(this).attr("v")+"]").attr("guest")+"VS"+$("li[id="+$(this).attr("v")+"]").attr("host"));
		// 胜负赔率
		var odds = guess.getDgPlayOdds($(this).attr("v"), 1).split(",");
		if ( odds != 'null' ) {
			$("#table_sf").find("a[name=betN]").eq(0).find("span").html(odds[1]);
			$("#table_sf").find("a[name=betN]").eq(1).find("span").html(odds[0]);
			/*$("#table_sf").find("a[name=betN]").each(function(index){
				$(this).find("span").html(odds[index]);
			});*/
		} else {
			$("#table_sf").find("a[name=betN]").each(function(index){
				$(this).find("span").html("不受注");
			});
		}
		// 让分胜负赔率
		odds = guess.getDgPlayOdds($(this).attr("v"), 2).split(",");
		if ( odds != 'null' ) {
			$("#table_rq").find("a[name=betN]").eq(0).find("span").html(odds[1]);
			$("#table_rq").find("a[name=betN]").eq(1).find("span").html(odds[0]);
			/*$("#table_rq").find("a[name=betN]").each(function(index){
				$(this).find("span").html(odds[index]);
			});*/
			$("#rfvid").html(guess.getGgRqOrRf($(this).attr("v")).split("`")[0]);
		} else {
			$("#table_rq").find("a[name=betN]").each(function(index){
				$(this).find("span").html("不受注");
			});
			$("#rfvid").html("让<br>分");
		}
		// 胜分差
		odds = guess.getPlayOdds($(this).attr("v"), 3).split(",");
		if ( odds != 'null' ) {
			$("#table_bf").find("a[name=betN]").each(function(index){
				$(this).find("span").html(odds[index]);
			});
		} else {
			$("#table_bf").find("a[name=betN]").each(function(index){
				$(this).find("span").html("不受注");
			});
		}
		// 大小法
		odds = guess.getDgPlayOdds($(this).attr("v"), 4).split(",");
		if ( odds != 'null' ) {
			$("#table_bq").find("a[name=betN]").each(function(index){
				$(this).find("span").html(odds[index]);
			});
			$("#zfvid").html(guess.getGgRqOrRf($(this).attr("v")).split("`")[1]);
		} else {
			$("#table_bq").find("a[name=betN]").each(function(index){
				$(this).find("span").html("不受注");
			});
			$("#zfvid").html("大<br />小<br />分");
		}
		
		$("#hun_zhan a[name=betN].active").removeClass("active");
		
		var bets = $("li[id="+$(this).attr("v")+"]").attr("bet").split(",");
		for ( var i = 0; i < bets.length; i++ ) {
			$("#hun_zhan a[name=betN][bet="+bets[i]+"]").addClass("active");
		}
	});
	
	// 单击事件
	$("td[name=betN],a[name=betN]").click(function(){
		var whichPageId = $.mobile.activePage.attr("id");//jQuery.mobile.activePage获取当点活动的page
		if ( $(this).html().indexOf("不受注") > -1 ) {
			return false;
		}
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		if ( whichPageId == "betPanelId" ) {
			// 在主界面中选中胜平负/让球胜平负
			var obj = $(this).parent().parent().parent().parent().parent();
			var sels = "", selName = "";
			var counter = 0;
			$(obj).find("td[name=betN].active").each(function(index){
				sels += $(this).attr("bet") + ",";
				selName += $(this).attr("v") + ",";
				counter++;
			});
			// 已选择过的彩果
			var bets = $(obj).attr("bet").split(",");
			var betNs = $("a[v="+$(obj).attr("id")+"]").html().split(",");
			var source = "", sourceN = "";
			var tag = -1;
			for ( var i = 0; i < bets.length; i++ ) {
				if ( bets[i].split("-")[0] != "1" && bets[i].split("-")[0] != "2" ) {
					tag = i;
					break;
				} 
			}
			if ( tag > -1 ) {
				for ( var i = tag; i < bets.length; i++ ) {
					source += bets[i] + ",";
					sourceN += betNs[i] + ",";
				}
				source = source.substring(0, source.length - 1);
				sourceN = sourceN.substring(0, sourceN.length - 1);
			}
			if ( sels != "" ) {
				sels = sels.substring(0, sels.length - 1);
				selName = selName.substring(0, selName.length - 1);
				if ( source != "" ) {
					sels += "," + source;
					selName += "," + sourceN;
				}
				$(obj).attr("bet", sels);
				$("a[v="+$(obj).attr("id")+"]").html(selName);
			} else {
				if ( source != "" ) {
					$(obj).attr("bet", source);
					$("a[v="+$(obj).attr("id")+"]").html(sourceN);
				} else {
					$(obj).attr("bet", "");
					$("a[v="+$(obj).attr("id")+"]").html("单击展开投注区");
				}
			}
			$(obj).attr("betlen", counter);
		} else {	// 在投注区中选号
			
		}
		calc();
	});
	
	// 确认选中
	$("#qrSelBtnId").click(function(){
		var counter = 0;
		var bet = "", betName = "";
		$("#hun_zhan").find("a[name=betN].active").each(function(index){
			bet += $(this).attr("bet") + ",";
			betName += $(this).attr("v") + ",";
			counter++;
		});
		if ( bet != "" ) {
			bet = bet.substring(0, bet.length-1);
			betName = betName.substring(0, betName.length-1);
			$("a[v="+$("#hun_zhan").attr("v")+"]").html(betName);
		} else {
			$("a[v="+$("#hun_zhan").attr("v")+"]").html("点击展开投注区");
		}
		$("li[id="+$("#hun_zhan").attr("v")+"]").attr("bet", bet);
		$("li[id="+$("#hun_zhan").attr("v")+"]").attr("betlen", counter);
		
		$("li[id="+$("#hun_zhan").attr("v")+"] td[name=betN].active").removeClass("active");
		
		var bets = $("li[id="+$("#hun_zhan").attr("v")+"]").attr("bet").split(",");
		for ( var i = 0; i < bets.length; i++ ) {
			$("li[id="+$("#hun_zhan").attr("v")+"] td[name=betN][bet="+bets[i]+"]").addClass("active");
		}
		
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
					if ($(this).attr("betlen") != "0") {
						html += '<li id="'+$(this).attr("id")+'">'+
									'<a class="ui-link" href="#">'+
									'<img height="53" width="53" src="/mobile/images/guanbi.png">'+
									'</a>'+
									'<div class="zx_no jingcai_out">'+
									'<span>'+$(this).attr("guest")+'</span>'+
									'<span class="vs">VS</span>'+
									'<span>'+$(this).attr("host")+'</span>'+
									'<div class="clear"></div>'+
									'</div>'+
									'<div class="zhushu jingcai_shu">';
						var bets = $(this).attr("bet").split(",");
						var betNs = $("a[v="+$(this).attr("id")+"]").html().split(",");
						for ( var i = 0; i < bets.length; i++ ) {
							html += '<span class="active" bet="'+bets[i]+'">'+betNs[i]+'</span>';
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
				calcBetNum();
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
		
		if ( date == "" ) {
			date = obj.id.substring(0,8);
			var dd = date.substring(0, 4)+"-"+date.substring(4, 6)+"-"+date.substring(6);
			html += '<h1>'+date.substring(4, 6)+'月'+date.substring(6)+'日 '+dateUtils.getWeekDay(dd)+' '+(counterMap.get(date)=='undefined'?'0':counterMap.get(date))+'场比赛可投注</h1>';
		}
		var sfOdds = [];
		if ( obj.sfdgodds == 'null' ) {
			sfOdds = ["不受注","不受注","不受注"];
		} else {
			sfOdds = obj.sfdgodds.split(",");
		}
		var rfSfOdds = [];
		if ( obj.rfsfdgodds == 'null' ) {
			rfSfOdds = ["不受注","不受注","不受注"];
		} else {
			rfSfOdds = obj.rfsfdgodds.split(",");
		}
		var rfcss = obj.ggqf.substring(0,1) == "-" ? "green" : "red";
		if ( date == obj.id.substring(0,8) ) {
			html += '<li id="'+obj.id+'" host="'+obj.hostname+'" guest="'+obj.guestname+'" style="background: none;" betlen="0" bet="">'+
				        '<div class="part1">'+
				          '<div>'+obj.leaguename+'</div>'+
				          '<div>'+obj.id.substring(8)+'</div><div>'+getAheadTime(obj.stoptime.substring(11,16))+'</div>'+
				        '</div>'+
				        '<div class="part_r">'+
				        '<div class="top">'+
				        '<div style="width:30%">'+obj.guestname+'</div>'+
				        '<div style=" width:10% !important">VS</div>'+
				        '<div style="width:60%">'+obj.hostname+'<span class="'+rfcss+'">'+obj.ggqf+'</span></div>'+
				        '</div>'+
				        
				        '<table class="table_0 new_t" width="99%" cellspacing="0" cellpadding="0" border="0">'+
				        '<tbody>'+
				        '<tr>'+
				        '<td width="16%" style="background-color: #5bbdfb; color:#FFF">胜负</td>'+
				        '<td class="sf f " width="40%" v="客胜" pl="4.10" t="0" bet="1-0" name="betN">'+
				        '<a href="#">'+
				        '客胜'+
				        '<span>'+sfOdds[1]+'</span>'+
				        '</a>'+
				        '</td>'+
				        '<td class="sf s " width="40%" v="主胜" pl="1.59" t="0" bet="1-3" name="betN">'+
				        '<a href="#">'+
				        '主胜'+
				        '<span>'+sfOdds[0]+'</span>'+
				        '</a>'+
				        '</td>'+
				        '</tr>'+
				        '<tr>'+
				        '<td width="16%" style="background-color: #7fda33; color:#FFF">让分</td>'+
				        '<td class="rsf f " width="40%" v="让分客胜" pl="2.05" t="1" bet="2-0" name="betN">'+
				        '<a href="#">'+
				        '客胜'+
				        '<span>'+rfSfOdds[1]+'</span>'+
				        '</a>'+
				        '</td>'+
				        '<td iclass="rsf s " width="40%" v="让分主胜" pl="2.67" t="1" bet="2-3" name="betN">'+
				        '<a href="#">'+
				        '主胜'+
				        '<span>'+rfSfOdds[0]+'</span>'+
				        '</a>'+
				        '</td>'+
				        '</tr>'+
				        '</tbody>'+
				        '</table>'+
				        
				        '<div class="bottom_all">'+
				        '<div>'+
				        '<a  href="#hun_zhan" class="check_a s" data-transition="slide" odd="" name="betNN" v="'+obj.id+'" data-ajax="false">点击展开投注区</a>'+
				        '</div>'+
				        '</div>'+
				        '</div>'+
				        '<div class="clear"></div>'+
			      '</li>';
		} else {
			date = obj.id.substring(0,8);
			var dd = date.substring(0, 4)+"-"+date.substring(4, 6)+"-"+date.substring(6);
			html += '<h1>'+date.substring(4, 6)+'月'+date.substring(6)+'日 '+dateUtils.getWeekDay(dd)+' '+(counterMap.get(date)=='undefined'?'0':counterMap.get(date))+'场比赛可投注</h1>';
			html += '<li id="'+obj.id+'" host="'+obj.hostname+'" guest="'+obj.guestname+'" style="background: none;" betlen="0" bet="">'+
				        '<div class="part1">'+
				          '<div>'+obj.leaguename+'</div>'+
				          '<div>'+obj.id.substring(8)+'</div><div>'+getAheadTime(obj.stoptime.substring(11,16))+'</div>'+
				        '</div>'+
				        '<div class="part_r">'+
				        '<div class="top">'+
				        '<div style="width:30%">'+obj.guestname+'</div>'+
				        '<div style=" width:10% !important">VS</div>'+
				        '<div style="width:60%">'+obj.hostname+'<span class="'+rfcss+'">'+obj.ggqf+'</span></div>'+
				        '</div>'+
				        
				        '<table class="table_0 new_t" width="99%" cellspacing="0" cellpadding="0" border="0">'+
				        '<tbody>'+
				        '<tr>'+
				        '<td width="16%" style="background-color: #5bbdfb; color:#FFF">胜负</td>'+
				        '<td class="sf f " width="40%" v="客胜" pl="4.10" t="0" bet="1-0" name="betN">'+
				        '<a href="#">'+
				        '客胜'+
				        '<span>'+sfOdds[1]+'</span>'+
				        '</a>'+
				        '</td>'+
				        '<td class="sf s " width="40%" v="主胜" pl="1.59" t="0" bet="1-3" name="betN">'+
				        '<a href="#">'+
				        '主胜'+
				        '<span>'+sfOdds[0]+'</span>'+
				        '</a>'+
				        '</td>'+
				        '</tr>'+
				        '<tr>'+
				        '<td width="16%" style="background-color: #7fda33; color:#FFF">让分</td>'+
				        '<td class="rsf f " width="40%" v="让分客胜" pl="2.05" t="1" bet="2-0" name="betN">'+
				        '<a href="#">'+
				        '客胜'+
				        '<span>'+rfSfOdds[1]+'</span>'+
				        '</a>'+
				        '</td>'+
				        '<td iclass="rsf s " width="40%" v="让分主胜" pl="2.67" t="1" bet="2-3" name="betN">'+
				        '<a href="#">'+
				        '主胜'+
				        '<span>'+rfSfOdds[0]+'</span>'+
				        '</a>'+
				        '</td>'+
				        '</tr>'+
				        '</tbody>'+
				        '</table>'+
				        
				        '<div class="bottom_all">'+
				        '<div>'+
				        '<a  href="#hun_zhan" class="check_a s" data-transition="slide" odd="" name="betNN" v="'+obj.id+'" data-ajax="false">点击展开投注区</a>'+
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
		if ($(this).attr("bet") != "") {
			counter++;
		}
	});
	$("#schNumId").html(counter);
}

function calcBetNum() {
	var betCode = getBetCode();
	
	var passString = "1c1";
	
	if ( passString != "" ) {
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
