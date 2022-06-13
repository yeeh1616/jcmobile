
$(document).ready(function () {
	
	// 清空
	$(".qk-button").click(function(){
		$(".active").removeClass("active");
		calc();
	});
	
	// 帮助文档
	$(".head-right .sm-icon").click(function(){
		$.mobile.changePage("#helpPage", "slideup"); 
	});
	
	$("#returnBtnId").click(function(){
		$.mobile.changePage("#betPanelId", "slideup"); 
	});
	
	$(".chuan_list .chuans").click(function(){
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		//calcBetNum();
	});
	// 确认计算注数
	$("#qrCalBtnId").click(function(){
		// 列表显示为过关
		var passString = "", pst = "";
		$(".chuan_list .chuans.active").each(function(index){
			passString += $(this).children().eq(0).html() + ",";
			pst += $(this).attr("value") + ",";
		});
		if ( passString != "" ) {
			passString = passString.substring(0, passString.length-1);
			pst = pst.substring(0, pst.length-1);
			$("#betTypeBtn").html(passString);
		} else {
			$("#betTypeBtn").html('请选择投注方式<span class="red">（必选）</span>');
		}
		$("#betTypeBtn").attr("passType", pst);
		calcBetNum();
	});
	$("#betTypeBtn").click(function(){
		$(".chuan_list .chuans.active").removeClass("active")
		var pst = $("#betTypeBtn").attr("passType").split(",");
		$(".chuan_list .chuans").each(function(index){
			for ( var i = 0; i < pst.length; i++ ) {
				if ( pst[i] == $(this).attr("value") ) {
					$(this).addClass("active");
				}
			}
		});
	});
	
	// 倍数
	$("#inputValue").keydown(function(event){
		if ( ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) || event.keyCode == 8) {
			return true;
		} else {
			return false;
		}
	});
	$("#inputValue").keyup(function(event){
		if ( $(this).val() != "" ) {
			calcBetNum();
		}
	});
	
	// 清空列表
	$("#qkBtnId").click(function(){
		$(".active").removeClass("active");
		calc();
	});
	
	// 付款
	$("#fukuanPop").click(function(){
		
		if ( $("#betInfoId").attr("betNum") != "0" ) {
			// 二次确认
			$(this).prop("href","#dialog");
			// 先判断余额，如果未登录，先登录
			
		} else {
			$(this).prop("href","#");
			tigMessage_foundation("请选择过关方式！");
		}
	});
	// 确认付款
	$("#lastQrBtnId").click(function(){
		var clickNum = $(this).attr("clickNum");
		if ( clickNum == "1" ) {
			tigMessage_foundation("正在接受订单，请不用重复提交！");
			return false;
		} 
		$.ajax({
		    type: "post",
		    url: "/common/getAccountUsable.json",
		    async: false,
		    //data: "licenseId=" + licenseId,
		    dataType: "json",
		    error: function(xMLHttpRequest, textStatus, errorThrown){
			},
		    success: function (data){
				if ( data == '-1' ) {
					// 尚未登录
					$.mobile.changePage("#loginPage", "slideup"); 
				} else {
					$("#lastQrBtnId").attr("clickNum", "1");
					// 判断余额是否足够
					var mult = parseInt($("#inputValue").val(),10);
					var pay = parseInt($("#betInfoId").attr("betNum")) * mult * 2;
					var balance = parseFloat(data);
					if ( pay > balance ) {
						alert("余额不足，请您先充值！");
					} else {
						// 表单提交
						formSubmit();
					}
				}
		    }
		});
	});
	// 奖金优化页面
	$("#bonusYhPage").click(function(){
		if ( $("#betInfoId").attr("betNum") != "0" ) {
			var passStrings = $("#betTypeBtn").attr("passType").split(",");
			for (var i = 0; i < passStrings.length; i++ ) {
				if ( passStrings[i].split("c")[1] != "1" ) {
					tigMessage_foundation("不支持组合过关优化");
					return false;
				}
			}
			
			var passString = $("#betTypeBtn").attr("passType");
			var betCode = getBetCode();
			// 计算注数
			var betNum = guess.calcBetNum(betCode, passString);
			if ( betNum == 1 ) {
				return false;
			}
			$.mobile.changePage("#bonusPage", "slideup"); 
			$("#planBuy").val(betNum*2*10);
			var singlist = guess.createOptList(betCode, passString);
			createSingleArea(singlist, false);
			
			$("#averYhBtn").click();
		} else {
			tigMessage_foundation("请选择过关方式！");
		}
	});
	$("#averYhBtn").click(function(){
		if ( (parseInt($("#planBuy").val()) % 2) != 0 ) {
			tigMessage_foundation("投注必须为偶数！");
			return false;
		}
		var betMoney = $("#planBuy").val();
		var passString = $("#betTypeBtn").attr("passType");
		var betCode = getBetCode();
		var list = guess.createOptList(betCode, passString);
		list = guess.averOptimize(list, betMoney);
		createSingleArea(list, false);
	});
	$("#brYhBtn").click(function(){
		if ( (parseInt($("#planBuy").val()) % 2) != 0 ) {
			tigMessage_foundation("投注必须为偶数！");
			return false;
		}
		var betMoney = $("#planBuy").val();
		var passString = $("#betTypeBtn").attr("passType");
		var betCode = getBetCode();
		var list = guess.createOptList(betCode, passString);
		list = guess.hotOptimize(list, betMoney);
		createSingleArea(list, false);
	});
	$("#blYhBtn").click(function(){
		if ( (parseInt($("#planBuy").val()) % 2) != 0 ) {
			tigMessage_foundation("投注必须为偶数！");
			return false;
		}
		var betMoney = $("#planBuy").val();
		var passString = $("#betTypeBtn").attr("passType");
		var betCode = getBetCode();
		var list = guess.createOptList(betCode, passString);
		list = guess.coldOptimize(list, betMoney);
		createSingleArea(list, false);
	});
	$("#planBuy").keydown(function(event){
		if ( ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) || event.keyCode == 8) {
			return true;
		} else {
			return false;
		}
	});
	// 奖金优化提交
	$("#fukuanPop2").click(function(){
		$.ajax({
		    type: "post",
		    url: "/common/getAccountUsable.json",
		    async: false,
		    dataType: "json",
		    error: function(xMLHttpRequest, textStatus, errorThrown){
			},
		    success: function (data){
				if ( data == '-1' ) {
					$.mobile.changePage("#loginPage", "slideup"); 
				} else {
					// 判断余额是否足够
					var pay = parseInt($("#planBuy").val());
					var balance = parseFloat(data);
					if ( pay > balance ) {
						tigMessage_foundation("余额不足，请您先充值！");
					} else {
						var form = $("#lotteryBuyFormId");
						var passString = $("#betTypeBtn").attr("passType");
						var betCode = getBetCode();
						var odds = "";////下单赔率 20140420001:3@2.10,1@1.11:1|20140420002:3@2.10:2
						var stopTimes = "";// 对阵的比赛截止时间
						var betCodes = betCode.split("|");
						for( var i = 0; i < betCodes.length; i++ ) {
							var cInfo = betCodes[i].split(":");
							var bets = cInfo[1].split(",");
							odds += cInfo[0] + ":";
							stopTimes += cInfo[0] + "`" + guess.getStopTime(cInfo[0]) + "|";
							for ( var j = 0; j < bets.length; j++ ) {
								odds += bets[j] + "@" + guess.getBetOdds(cInfo[0], bets[j]) + ",";
							}
							odds = odds.substring(0, odds.length - 1) + ":"+guess.getGgRqOrRf(cInfo[0])+ "|";
						}
						
						odds = odds.substring(0, odds.length - 1);
						stopTimes = stopTimes.substring(0, stopTimes.length - 1);
						
						var multiple = 0;
						var betInfo = "";
						$("#singleAreaId").find("tr").each(function(index){
							multiple += parseInt($(this).find("input[name=betNum]").val());
							betInfo += $(this).attr("code") + "`" + $(this).find("input[name=betNum]").val() + ";";
						});
						betInfo = betInfo.substring(0, betInfo.length - 1);
						
						$(form).find("input[name=licenseId]").val(guess.licenseId);
						$(form).find("input[name=playType]").val(guess.playId);
						$(form).find("input[name=passType]").val(passString);
						$(form).find("input[name=singleFlag]").val("1");
						$(form).find("input[name=orderOdds]").val(odds);
						$(form).find("input[name=betNum]").val(parseInt($("#planBuy").val())/parseInt(multiple));
						$(form).find("input[name=betCode]").val(betCode);
						$(form).find("input[name=multiple]").val(-1);
						$(form).find("input[name=betPrice]").val($("#betMoneyId").html());
						$(form).find("input[name=betState]").val("1");
						$(form).find("input[name=issue]").val("1");
						$(form).find("input[name=betType]").val("1");
						$(form).find("input[name=schInfo]").val(betInfo);
						$(form).find("input[name=reserved8]").val(stopTimes);
						
						var theryB = 0;
						$("#singleAreaId").find("tr").each(function(index){
							var bb = parseFloat($(this).children().eq(3).html());
							if ( bb > theryB ) {
								theryB = bb;	
							}
						});
						$(form).find("input[name=theoryBonus]").val(theryB);
						$(form).submit();
					}
				}
		    }
		});
	});
	// 奖金优化返回确认页
	$("#rtQrPageId").click(function(){
		$.mobile.changePage("#out_tickets", "slideup"); 
	});
	
});

function createSingleArea(singlist, hasBox) {
	for ( var i = 0; i < singlist.length; i++ ) {
		if ( singlist[i].multiple < 1 ) {
			tigMessage_foundation("所选方案不能进行该项优化！");
			return false;
		}
	}
	$("#singleAreaId").empty();
	//var passString = $("#betTypeBtn").attr("passType");
	//var betCode = getBetCode();
	var shtml = "";
	var amt = 0;
	for ( var i = 0; i < singlist.length; i++ ) {
		var codes = singlist[i].betCode.split("|");
		amt += singlist[i].multiple;
		var betIn = "";
		for ( var j = 0; j < codes.length; j++ ) {
			var cInfo = codes[j].split(":");
			var sch = guess.scheduleMap.get(cInfo[0]);
			var date = sch.id.substring(0,8);
			var dd = date.substring(0, 4)+"-"+date.substring(4, 6)+"-"+date.substring(6);
			betIn += ' '+dateUtils.getWeekDay2(dd)+cInfo[0].substring(8)+'［<strong>'+getBetName(guess.licenseId, guess.playId, cInfo[1])+' '+guess.getBetOdds(cInfo[0], cInfo[1])+'</strong>］ ×';
		}
		betIn = betIn.substring(0, betIn.length-1);
		shtml += '<tr code="'+singlist[i].betCode+'">'+
	         '<td>'+codes.length+'串1</td>'+
	         '<td>'+betIn+'</td>'+
	         '<td><input type="text" name="betNum" size="2" value="'+singlist[i].multiple+'" base="'+singlist[i].baseBonus+'"></td>'+
	         '<td>'+(new Number(singlist[i].baseBonus*singlist[i].multiple).toFixed(2))+'</td>'+
	       '</tr>';
	}
	
	$(shtml).appendTo($("#singleAreaId"));
	$("#betInfoId2").html('<span>共'+amt*2+'元</span>');
	var theryB = 0, threyM = 0;
	$("#singleAreaId").find("tr").each(function(index){
		var bb = parseFloat($(this).children().eq(3).html());
		if ( bb > theryB ) {
			theryB = bb;	
		}
		if ( bb < threyM || threyM == 0 ) {
			threyM = bb;	
		}
	});
	$("#betInfoId2").html('<span>共'+amt*2+'元</span><br/>奖金：'+threyM+"～"+theryB);
	addDinamicalEvent();
}

function addDinamicalEvent() {
	$("#singleAreaId").find("input[name=betNum]").each(function(index){
		$(this).keydown(function(event){
			if ( ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) || event.keyCode == 8) {
				return true;
			} else {
				return false;
			}
		});
		$(this).keyup(function(event){
			var v = $(this).val();
			if ( v == "" ) {
				return false;
			}
			var o = $(this).parent().next();
			$(o).html(new Number(parseInt(v)*parseFloat($(this).attr("base"))).toFixed(2));
			calcBetN();
		});
	});
}

function calcBetN() {
	var trs = $("#singleAreaId").find("tr");
	var amt = 0;
	for ( var i = 0; i < trs.length; i++ ) {
		amt += parseInt($(trs[i]).find("input[name=betNum]").val());
	}
	var theryB = 0, threyM = 0;
	$("#singleAreaId").find("tr").each(function(index){
		var bb = parseFloat($(this).children().eq(3).html());
		if ( bb > theryB ) {
			theryB = bb;	
		}
		if ( bb < threyM || threyM == 0 ) {
			threyM = bb;	
		}
	});
	$("#betInfoId2").html('<span>共'+amt*2+'元</span><br/>奖金：'+threyM+"～"+theryB);
}

function formSubmit() {
	// 判断第一场比赛是否过期 modified at 2015/03/27
	$.ajax( {
		type : "POST",
		url : "/lottery/getServerDateTime.jhtml",
		async:false, //同步请求方式
		error : function(xMLHttpRequest, textStatus, errorThrown) {
			tigMessage_foundation("与服务器通讯失败，请检查本地网络环境！");
		},
		success : function(data) {
        	var firstTime = guess.getStopTime($("#ul_list").children().eq(0).attr("id"));
        	if ( firstTime <= data ) {
        		tigMessage_foundation("第一场比赛已截止！");
			} else {
				var form = $("#lotteryBuyFormId");
				
				var betCode = getBetCode();
				var odds = "";//下单赔率 20140420001:3@2.10,1@1.11:1|20140420002:3@2.10:2
				var stopTimes = "";// 对阵的比赛截止时间
				
				var passString = $("#betTypeBtn").attr("passType");
				
				var multiple = $("#inputValue").val();
				if ( $("#licenseId").val() == "21") {
					$(form).find("input[name=playType]").val(guess.playId);
				} else {
					$(form).find("input[name=playType]").val("1");
				}
				$(form).find("input[name=passType]").val(passString);
				$(form).find("input[name=singleFlag]").val("0");
				$(form).find("input[name=betCode]").val(betCode);
				$(form).find("input[name=orderOdds]").val(odds);
				$(form).find("input[name=betNum]").val($("#betInfoId").attr("betNum"));
				$(form).find("input[name=multiple]").val(multiple);
				$(form).find("input[name=betPrice]").val(0);
				$(form).find("input[name=betState]").val("1");
				$(form).find("input[name=betType]").val("1");
				$(form).find("input[name=reserved8]").val(stopTimes);
				$(form).find("input[name=theoryBonus]").val(guess.calcBonus(betCode,passString,parseInt(multiple)));
				
				$(form).submit();
			}
		}
	}); 
	
}

function addOrRmStyle(obj) {
	if ( $(obj).hasClass("active") ) {
		$(obj).removeClass("active");
		// 没有选中的彩果应该胆样式去掉
		if ( $(obj).parent().find(".active").length == 0 ) {
			$(obj).parent().next().removeClass("active");
		}
	} else {
		$(obj).addClass("active");
	}
	$("#betTypeBtn").attr("passtype", "");
	$("#betTypeBtn").html('请选择投注方式<span class="red">（必选）</span>');
	showOrHidePst();
	calcBetNum();
}

function setDan(obj) {
	if ( $(obj).hasClass("active") ) {
		$(obj).removeClass("active");
	} else {
		// 没有选中彩果不能设胆
		if ( $(obj).prev().find(".active").length > 0 ) {
			$(obj).addClass("active");
		} else {
			return false;
		}
	}
	$("#betTypeBtn").attr("passtype", "");
	$("#betTypeBtn").html('请选择投注方式<span class="red">（必选）</span>');
	showOrHidePst();
	calcBetNum();
}

function getAheadTime(tm) {
	var ahead = $("#aheadTimeId").val();
	var ham = tm.split(":");
	var result = tm;
	if ( parseInt(ham[1]) >= parseInt(ahead) ) {
		var dd = (parseInt(ham[1]) - parseInt(ahead));
		if ( dd < 10 ) {
			result = ham[0] + ":0" + dd;
		} else {
			result = ham[0] + ":" + dd;
		}
	} else {
		if ( parseInt(ham[0]) > 0 ) {
			ham[0] = parseInt(ham[0]) - 1;
			ham[1] = parseInt(ham[1]) + 60 - parseInt(ahead);
			var dd = (parseInt(ham[1]));
			if ( dd < 10 ) {
				result = ham[0] + ":0" + dd;
			} else {
				result = ham[0] + ":" + dd;
			}
		} else {
			ham[1] = parseInt(ham[1]) + 60 - parseInt(ahead);
			result = "23" +":"+ ham[1];
		}
	}
	
	return result;
}

String.prototype.replaceAll = function(s1,s2){   
	return this.replace(new RegExp(s1,"gm"),s2);   
}

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

var JCLQ_INDEX_SFC = new Hashtable();
JCLQ_INDEX_SFC.put("0", "客胜1-5");
JCLQ_INDEX_SFC.put("1", "客胜6-10");
JCLQ_INDEX_SFC.put("2", "客胜11-15");
JCLQ_INDEX_SFC.put("3", "客胜16-20");
JCLQ_INDEX_SFC.put("4", "客胜21-25");
JCLQ_INDEX_SFC.put("5", "客胜26+");
JCLQ_INDEX_SFC.put("6", "主胜1-5");
JCLQ_INDEX_SFC.put("7", "主胜6-10");
JCLQ_INDEX_SFC.put("8", "主胜11-15");
JCLQ_INDEX_SFC.put("9", "主胜16-20");
JCLQ_INDEX_SFC.put("10", "主胜21-25");
JCLQ_INDEX_SFC.put("11", "主胜26+");

function getBetName(licenseId, playId, bet) {
	var retObj = "";
	switch( licenseId ) {
	case 9:
	{
		switch( playId ) {
		case 1:
			retObj = bet == "3" ? "胜" : bet == "1" ? "平" : "负";
			break;
		case 2:
			retObj = bet == "3" ? "胜(让)" : bet == "1" ? "平(让)" : "负(让)";
			break;
		case 3:
			retObj = bet;
			break;
		case 4:
			retObj = bet.replaceAll("3", "胜").replaceAll("1", "平").replaceAll("0", "负");
			break;
		case 5:
			retObj = JCZQ_INDEX_BF.get(parseInt(bet));
			break;
		case 6:
			var sInfo = bet.split("-");
			retObj = getBetName(licenseId, parseInt(sInfo[0]), sInfo[1]);
			break;
		}
		break;
	}
	case 10:
	{
		switch( playId ) {
		case 1:
			retObj = bet == "3" ? "主胜" : "客胜";
			break;
		case 2:
			retObj = bet == "3" ? "主胜(让)" : "客胜(让)";
			break;
		case 3:
			retObj = JCLQ_INDEX_SFC.get(parseInt(bet));
			break;
		case 4:
			retObj = bet == "0" ? "大分" : "小分";
			break;
		case 6:
			var sInfo = bet.split("-");
			retObj = getBetName(licenseId, parseInt(sInfo[0]), sInfo[1]);
			break;
		}
		break;
	}
	}
	return retObj;
}