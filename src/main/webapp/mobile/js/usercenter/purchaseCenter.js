//排列五页面跳转
function OrderPai5() {
    var orderid = $("#orderId").val();//getQueryString('orderId');
    if (orderid != null) {
        window.location.href = "/wap/order.wap?orderId=" + orderid;
    }
    else {
        tigMessage("操作超时,将跳转到登录页");
        setTimeout(function () {
            window.location.href = "/wap/login.wap";
        }, 2000);
    }

}

//绑定出票详情
function BindDetailOut_Ticket(orderid) {
//	//FZ 2015-4-16
//	var storage = window.localStorage;
//	var tokenstr = storage.getItem("token");
//     if(tokenstr==null)
//     {
//         tokenstr = "";
//     }
//    var dataparm = "rqmsg={\"body\":{\"orderId\":\"" + orderid + "\"},\"head\":{\"cmd\":1035,\"id\":\"" + RandomCmdNum() + "\",\"token\":\""+ tokenstr +"\"}}";

    var dataparm = {'orderId':orderid};//cmd:1035
    
    $.ajax({
        url: "/wap/outTicketDetails.wap",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function (json) {
//            return json;
//        },
        success: function (json, textStatus) {
            //如果验证成功									   
            if (json.head.retCode == 100000) {

                for (var p = 0; p < json.body.tInfoList.length  ; p++) {
				if (json.body.tInfoList[p].licenseId == "9"||json.body.tInfoList[p].licenseId == "10"){
                    var betCode = '<span>' + json.body.tInfoList[p].betCode.replace(/,/g, '</span><span>').replace(/;/g, '</span></div><div class="clear"></div><div class="zui_hao choose_hao"><span>') + '</span>';//
                    var singleFlag = "复式";//单式复式
                    if (json.body.tInfoList[p].singleFlag == 0) {
                        singleFlag = "单式";
                    }
                    var result = "<div class=\"xq\"><span>" + singleFlag + "</span><span>" + json.body.tInfoList[p].multiple + "倍</span><span>" + json.body.tInfoList[p].stateName + "</span><span>奖金<b>" + json.body.tInfoList[p].finiBonus + "</b>元</span></div>          <div class=\"clear\"></div>";
                    var liresult = "<li><div class=\"\" style=\"align:left\">" + betCode + "</div><div class=\"clear\"></div>" + result + "</li>"
                    $("#ul_ticket_list").append(liresult);//zui_hao choose_hao
					}
					else
					{
					   var betCode = '<span>' + json.body.tInfoList[p].betCode.replace(/,/g, '</span><span>').replace(/;/g, '</span></div><div class="clear"></div><div class="zui_hao choose_hao"><span>') + '</span>';//
                    var singleFlag = "复式";//单式复式
                    if (json.body.tInfoList[p].singleFlag == 0) {
                        singleFlag = "单式";
                    }
                    var result = "<div class=\"xq\"><span>" + singleFlag + "</span><span>" + json.body.tInfoList[p].multiple + "倍</span><span>" + json.body.tInfoList[p].stateName + "</span><span>奖金<b>" + json.body.tInfoList[p].finiBonus + "</b>元</span></div>          <div class=\"clear\"></div>";
                    var liresult = "<li><div class=\"zui_hao choose_hao\">" + betCode + "</div><div class=\"clear\"></div>" + result + "</li>"
                    $("#ul_ticket_list").append(liresult);//
					}
                }

            }
            else {
                tigMessage(json.head.retDesc);
                return false;
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage('列表加载失败，请尝试刷新!');
            return false;
            //  console.log("jsonp.error:"+textStatus);    
        }
    });

}

//绑定订单详情
function BindDetailOrder(orderid,type) {
	if (type == 1) {
		$("#title_a").attr("href", "/wap/orderListsPage.wap");
	} else if (type == 2) {
		$("#title_a").attr("href", "/wap/orderListsBingoPage.wap");
	} else if (type == 3) {
		$("#title_a").attr("href", "/wap/orderListsChasePage.wap");
	}

	// FZ 2015-4-16
//	var storage = window.localStorage;
//	var tokenstr = storage.getItem("token");
//	if (tokenstr == null) {
//		tokenstr = "";
//	}
	var dataparm = {'orderId':orderid};//cmd:1018
	$.ajax( {
				url : "/wap/orderDetails.wap",
				data : dataparm,
//				dataType : "jsonp",
//				jsonp : "callback",
//				jsonpCallback : "success_jsonp",
//				timeout : 3000,
//				dataFilter : function(json) {
//					return json;
//				},
				success : function(json, textStatus) {
					// 如果验证成功
				if (json.head.retCode == 100000) {
					// 排列五
				$("#out_ticket_a").attr("href",
						"/wap/outTicket.wap?orderId=" + orderid);
				if (json.body.orderInfo.licenseId == 1) // 排列三
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/pailie3_tu.png");
				} else if (json.body.orderInfo.licenseId == 2) // 排列五
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/pailie5_tu.png");

				} else if (json.body.orderInfo.licenseId == "3")// 七星彩
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/qixingcai_tu.png");
				} else if (json.body.orderInfo.licenseId == "4")// 大乐透
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/daletou_tu.png");
				} else if (json.body.orderInfo.licenseId == "5")// 胜负彩
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/shengfucai_tu.png");
				} else if (json.body.orderInfo.licenseId == "6")// 任选九
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/renxuan9_tu.png");
				} else if (json.body.orderInfo.licenseId == "7")// 六场半全
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/banquanchang_tu.png");
				} else if (json.body.orderInfo.licenseId == "8")// 四场进球
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/jinqiucai_tu.png");
				} else if (json.body.orderInfo.licenseId == "9")// 竞彩足球
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/jingzu_tu.png");
				} else if (json.body.orderInfo.licenseId == "10")// 竞彩篮球
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/jinglan_tu.png");
				} else if (json.body.orderInfo.licenseId == "11")// 双色球
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/shuangseqiu_tu.png");
				} else if (json.body.orderInfo.licenseId == "12")// 福彩3D
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/3dcai_tu.png");
				} else if (json.body.orderInfo.licenseId == "13")// 七乐彩
				{
					$("#img_plant1").attr("src",
							"/mobile/images/logo-icon/qilecai_tu.png");
				}else if(json.body.orderInfo.licenseId == "101")//11运夺金
				{
					$("#img_plant1").attr("src","/mobile/images/logo-icon/101.png");
				}
				$("#order_plant1_time_spanTime").html(
						json.body.orderInfo.orderDate);
				$("#order_plant1_name_spanName").html(
						json.body.orderInfo.licenseName);
				$("#order_plant2_txt_orderid").html(orderid);
				$("#order_plant2_txt_type").html(json.body.orderInfo.stateName);

				// if(json.body.orderInfo.betState==9)
				{

					// $("#order_plant2_txt_money").html("<span>"+json.body.orderInfo.stateName+"</span>");
					$("#order_plant2_txt_money").html(
							json.body.orderInfo.ticketPrice + "元");
				}
				$("#order_plant2_txt_paymoney").html(
						json.body.orderInfo.betPrice + "元");
				$("#order_plant2_txt_multiple").html(
						json.body.orderInfo.multiple);
				$("#order_plant2_txt_finiBonus").html(
						json.body.orderInfo.finiBonus + "元");
				var result = "";
				var liresult = "";
				// for(var p=0;p<json.body.orderInfo.betcodeInfo.length ;p++)
				{
					if (json.body.orderInfo.licenseId == "9"
							|| json.body.orderInfo.licenseId == "10") {
						var num = '<span>' + json.body.orderInfo.betcodeInfo
								.replace(/;/g,
										'</span></div><div class="clear"></div><div style=\"align:left\"><span>') + '</span>';// class="zui_hao
																																// choose_hao"
																																// class="zui_hao
																																// choose_hao"
						liresult += ' <li><div  style=\"align:left\">' + num + '</div></li><div class="clear"></div>';
					} else {
						//var num = '<span>' + json.body.orderInfo.betcodeInfo.replace(/,/g, '</span><span>').replace(/;/g,'</span></div><div class="clear"></div><div class="zui_hao choose_hao"><span>') + '</span>';
						//liresult += ' <li><div class="zui_hao choose_hao">' + num + '</div></li><div class="clear"></div>';//
						var num = '<span>' + json.body.orderInfo.betcodeInfo.replace(/;/g,'</span></div><div class="clear"></div><div class="zui_hao choose_hao"><span>') + '</span>';
						liresult += ' <li><div class="zui_hao choose_hao">' + num + '</div></li><div class="clear"></div>';//
					}
				}

				$("#ul_ticket_list").html(liresult);
			}

			else {
				tigMessage(json.head.retDesc);
				return false;
			}

		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			tigMessage('列表加载失败，请尝试刷新!');
			return false;
			// console.log("jsonp.error:"+textStatus);
			}
			});
}




/***************************************************************************/

/**
 * 全部投注 刷新 zh
 * @return
 */
function RefreshPurchaseRecord(){
	userPurchaseRecord(1,10,false);
}

/**
 * 全部投注 翻页zh
 * @return
 */
function addMorePurchaseRecord(){
	 var recordIndex = $("#pageNumber").val();
	 if (recordIndex == NaN || recordIndex == '' || recordIndex == undefined || recordIndex == 'undefined' || recordIndex == 'NaN') {
      recordIndex = 0;
   }
	recordIndex = parseInt(recordIndex) +1;
	 userPurchaseRecord(recordIndex,10,true);
}

/**
 * 全部投注 zh
 * @param pNumber
 * @param pSize
 * @param isRefresh
 * @return
 */
function userPurchaseRecord(pNumber, pSize, isRefresh) {
	var dataparm = {'pageNo' : pNumber,'pageSize' : pSize};
	$.ajax( {
		url : '/wap/betRecords.wap',
		data : dataparm,
		success : function(json, textStatus) {
			// 如果验证成功
			if (json.head.retCode == "100000") {
				var totalResult = "";
				for ( var i = 0; i < json.body.orderList.length; i++) {
					var obj = json.body.orderList[i];

					var imgStr = "<img src=\"/mobile/images/logo-icon/pailie3_tu.png\" alt=\"\" class=\"ui-li-icon\">";// 彩种图片
					var nameStr = "<div class=\"order-name\">"
							+ obj.licenseName + "</div>";// 彩种名称
					var dateStr = "<div class=\"order-time\"><span>"
							+ obj.orderDate.substr(0, 11)
							+ "</span><span>"
							+ obj.orderDate.substr(11, 8)
							+ "</span></div>";// 购彩时间
					var moneyStr = "<div class=\"order-money\"><span>"
							+ obj.betPrice + "</span>元</div>";// 购彩金额
					var issueStr = (obj.licenseId == 9||obj.licenseId==10)?"--": "<div class=\"order-cz\">"
							+ obj.issue + "期</div>";// 期号
					var stateStr = "<div class=\"order-zhuangtai\">"
							+ obj.stateName + "</div>";// 状态
					if ( obj.betState == '13' ) {
						stateStr = "<div class=\"order-zhuangtai\"><font color=red>"
							+ obj.finiBonus + "</font></div>";
					} else if ( obj.betState == '9' ||  obj.betState == '10' ) {
						stateStr = "<div class=\"order-zhuangtai\"><font color=red>"
							+ obj.stateName + "</font></div>";
					}
					var orderidStr = obj.orderId;// 下一页参数

					var lid = obj.licenseId;
					if ( lid > 100 && lid < 200 ) {
						lid = 102;
					}
					switch (lid) {
					case 1: {
						imgStr = "<img src=\"/mobile/images/logo-icon/pailie3_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "排列三";
					}
						break;
					case 2: {
						imgStr = "<img src=\"/mobile/images/logo-icon/pailie5_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "排列五";
					}
						break;
					case 3: {
						imgStr = "<img src=\"/mobile/images/logo-icon/qixingcai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "七星彩";
					}
						break;
					case 4: {
						imgStr = "<img src=\"/mobile/images/logo-icon/daletou_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "大乐透";
					}
						break;
					case 5: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shengfucai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "胜负彩";
					}
						break;
					case 6: {
						imgStr = "<img src=\"/mobile/images/logo-icon/renxuan9_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "任选九场";
					}
						break;
					case 7: {
						imgStr = "<img src=\"/mobile/images/logo-icon/banquanchang_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "六场半全";
					}
						break;
					case 8: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jinqiucai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "四场进球";
					}
						break;
					case 9: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jingzu_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "竞彩足球";
					}
						break;
					case 21: {
						imgStr = "<img src=\"/mobile/images/logo-icon/21.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "北京单场";
					}
						break;
					case 22: {
						imgStr = "<img src=\"/mobile/images/logo-icon/21.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "胜负过关";
					}
						break;
					case 10: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jinglan_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "竞彩篮球";
					}
						break;
					case 11: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shuangseqiu_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "双色球";
					}
						break;
					case 12: {
						imgStr = "<img src=\"/mobile/images/logo-icon/3dcai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "福彩3D";
					}
						break;
					case 13: {
						imgStr = "<img src=\"/mobile/images/logo-icon/qilecai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "七乐彩";
					}
						break;
					case 101: {
						imgStr = "<img src=\"/mobile/images/logo-icon/101.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "11运夺金";
					}
						break;
					case 116: {
						imgStr = "<img src=\"/mobile/images/logo-icon/101.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "江苏11选5";
					}
						break;
					case 102: {
						imgStr = "<img src=\"/mobile/images/logo-icon/102.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "11选5";
					}
						break;
					case 103: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shishicai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "江西时时彩";
					}
						break;
					default:
						break;
					}
					
					var nameStr1 = "<div class=\"order-name\">"
							+ nameStr + "</div>";
					var result = "<li  class=\"ui-li-has-icon ui-first-child\"><a data-ajax=\"false\" href=\"/wap/order.wap?orderId="
							+ orderidStr
							+ "&type=1\" data-transition=\"slide\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">"
							+ imgStr
							+ nameStr1
							+ "<div class=\"order-middle\">"
							+ dateStr
							+ moneyStr
							+ "</div> <div class=\"order-right\">"
							+ issueStr + stateStr + "</div></a></li>";
					totalResult += result;

					// $("#list-all").append(result);

				}

				if (isRefresh == false) {
					$("#list-all").html(totalResult);
				} else {
					$("#list-all").append(totalResult);
				}
				$("#pageNumber").attr("value",pNumber);
			} else if (json.head.retCode == "100001") {
				windowChangePage("/wap/login.wap");
			} else {
				tigMessage(json.head.retDesc);
			}
			order_switch = true;
			return;
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			tigMessage('列表加载失败，请稍后重试!');
			console.log("jsonp.error:" + textStatus);
			order_switch = true;
		}
	})

}

/*---------------------中奖记录------------------*/
/**
 * 中间记录 刷新 zh
 */
function RefreshBingoRecord(){
	bingoPurchaseRecord(1,10,false);
}

/**
 * 中奖及记录 翻页 zh
 * @return
 */
function addMoreBingoRecord(){
	var recordIndex = $("#pageNumber").val();
	if (recordIndex == NaN || recordIndex == '' || recordIndex == undefined || recordIndex == 'undefined' || recordIndex == 'NaN') {
       recordIndex = 0;
    }
	recordIndex = parseInt(recordIndex) +1;
	bingoPurchaseRecord(recordIndex,10,true);
}

/**
 * 中奖纪录 zh
 * @param pNumber
 * @param pSize
 * @param isRefresh
 * @return
 */
function bingoPurchaseRecord(pNumber, pSize, isRefresh) {
	var dataparm = {'pageNo' : pNumber,'pageSize' : pSize};
	$.ajax( {
		url : '/wap/bingoRecords.wap',
		data : dataparm,
		success : function(json, textStatus) {
			// 如果验证成功
			if (json.head.retCode == "100000") {
				var totalResult = "";
				for ( var i = 0; i < json.body.orderList.length; i++) {
					var obj = json.body.orderList[i];

					var imgStr = "<img src=\"/mobile/images/logo-icon/pailie3_tu.png\" alt=\"\" class=\"ui-li-icon\">";// 彩种图片
					var nameStr = "<div class=\"order-name\">"
							+ obj.licenseName + "</div>";// 彩种名称
					var dateStr = "<div class=\"order-time\"><span>"
							+ obj.orderDate.substr(0, 11)
							+ "</span><span>"
							+ obj.orderDate.substr(11, 8)
							+ "</span></div>";// 购彩时间
					var moneyStr = "<div class=\"order-money\"><span>"
							+ obj.betPrice + "</span>元</div>";// 购彩金额
					var issueStr = (obj.licenseId == 9||obj.licenseId==10)?"--": "<div class=\"order-cz\">"
							+ obj.issue + "期</div>";// 期号
					var stateStr = "<div class=\"order-zhuangtai\"><font color=red>"
							+ obj.finiBonus + "</font></div>";// 状态
					var orderidStr = obj.orderId;// 下一页参数

					var lid = obj.licenseId;
					if ( lid > 100 && lid < 200 ) {
						lid = 102;
					}
					switch (lid) {
					case 1: {
						imgStr = "<img src=\"/mobile/images/logo-icon/pailie3_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "排列三";
					}
						break;
					case 2: {
						imgStr = "<img src=\"/mobile/images/logo-icon/pailie5_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "排列五";
					}
						break;
					case 3: {
						imgStr = "<img src=\"/mobile/images/logo-icon/qixingcai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "七星彩";
					}
						break;
					case 4: {
						imgStr = "<img src=\"/mobile/images/logo-icon/daletou_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "大乐透";
					}
						break;
					case 5: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shengfucai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "胜负彩";
					}
						break;
					case 6: {
						imgStr = "<img src=\"/mobile/images/logo-icon/renxuan9_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "任选九场";
					}
						break;
					case 7: {
						imgStr = "<img src=\"/mobile/images/logo-icon/banquanchang_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "六场半全场";
					}
						break;
					case 8: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jinqiucai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "四场进球";
					}
						break;
					case 9: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jingzu_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "竞彩足球";
					}
						break;
					case 10: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jinglan_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "竞彩篮球";
					}
						break;
					case 11: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shuangseqiu_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "双色球";
					}
						break;
					case 12: {
						imgStr = "<img src=\"/mobile/images/logo-icon/3dcai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "福彩3D";
					}
						break;
					case 13: {
						imgStr = "<img src=\"/mobile/images/logo-icon/qilecai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "七乐彩";
					}
						break;
					case 101: {
						imgStr = "<img src=\"/mobile/images/logo-icon/101.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "11运夺金";
					}
						break;
					case 102: {
						imgStr = "<img src=\"/mobile/images/logo-icon/102.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "11选5";
					}
						break;
					case 103: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shishicai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "江西时时彩";
					}
						break;
					case 21: {
						imgStr = "<img src=\"/mobile/images/logo-icon/21.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "北京单场";
					}
						break;
					case 22: {
						imgStr = "<img src=\"/mobile/images/logo-icon/21.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "胜负过关";
					}
						break;
					default:
						break;
					}

					var nameStr1 = "<div class=\"order-name\">"
							+ nameStr + "</div>";// 彩种名称
					var result = "<li class=\"ui-li-has-icon ui-first-child\"><a data-ajax=\"false\" href=\"/wap/order.wap?orderId="
							+ orderidStr
							+ "&type=2\" data-transition=\"slide\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">"
							+ imgStr
							+ nameStr1
							+ "<div class=\"order-middle\">"
							+ dateStr
							+ moneyStr
							+ "</div> <div class=\"order-right\">"
							+ issueStr + stateStr + "</div></a></li>";
					totalResult += result;
				}
				if (isRefresh == false) {
					$("#list-bingo").html(totalResult);
				} else {
					$("#list-bingo").append(totalResult);
				}
				$("#pageNumber").attr("value",pNumber);
			} else if (json.head.retCode == "100001") {
				windowChangePage("/wap/login.wap");
			} else {
				tigMessage(json.head.retDesc);
			}
			order_switch = true;
			return;
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			tigMessage('列表加载失败，请稍后重试!');
			console.log("jsonp.error:" + textStatus);
			order_switch = true;
		}
	})
}

/*---------------------追号记录------------------*/
/**
 * 追号记录 刷新 zh
 */
function RefreshOrderListsChasePage(){
	chasePurchaseRecord(1,10,false);
}

/**
 * 追号记录 翻页 zh
 * @return
 */
function addMoreChaseRecord(){
	var recordIndex = $("#pageNumber").val();
	if (recordIndex == NaN || recordIndex == '' || recordIndex == undefined || recordIndex == 'undefined' || recordIndex == 'NaN') {
       recordIndex = 0;
    }
	recordIndex = parseInt(recordIndex) +1;
	chasePurchaseRecord(recordIndex,10,true);
}

/**
 * 追号记录 zh
 * @param pNumber
 * @param pSize
 * @param isRefresh
 * @return
 */
function chasePurchaseRecord(pNumber, pSize, isRefresh) {
	var dataparm = {'pageNo' : pNumber,'pageSize' : pSize};
	$.ajax( {
		url : '/wap/chaseRecords.wap',
		data : dataparm,
		success : function(json, textStatus) {
			if (json.head.retCode == "100000") {
				var totalResult = "";
				for ( var i = 0; i < json.body.coList.length; i++) {
					var obj = json.body.coList[i];

					var imgStr = "<img src=\"/mobile/images/logo-icon/pailie3_tu.png\" alt=\"\" class=\"ui-li-icon\">";// 彩种图片
					var nameStr = "<div class=\"order-name\">"
							+ obj.licenseName + "</div>";// 彩种名称
					var dateStr = "<div class=\"order-time\"><span>"
							+ obj.orderDate.substr(0, 11)
							+ "</span><span>"
							+ obj.orderDate.substr(11, 8)
							+ "</span></div>";// 购彩时间
					var moneyStr = "<div class=\"order-money\"><span>"
							+ obj.betPrice + "</span>元</div>";// 购彩金额
					var issueStr = "";//(obj.licenseId == 9||obj.licenseId==10)?"--":"<div class=\"order-cz\">"
							//+ obj.issue + "期</div>";// 期号--竞彩不展示期号
					var stateStr = "<div class=\"order-zhuangtai\">"
							+ obj.stateName + "</div>";// 状态
					var orderidStr = obj.id;// 下一页参数


					var lid = obj.licenseId;
					if ( lid > 101 && lid < 200 ) {
						lid = 102;
					}
					switch (lid) {
					case 1: {
						imgStr = "<img src=\"/mobile/images/logo-icon/pailie3_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "排列三";
					}
						break;
					case 2: {
						imgStr = "<img src=\"/mobile/images/logo-icon/pailie5_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "排列五"; 
					}
						break;
					case 3: {
						imgStr = "<img src=\"/mobile/images/logo-icon/qixingcai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "七星彩";
					}
						break;
					case 4: {
						imgStr = "<img src=\"/mobile/images/logo-icon/daletou_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "大乐透";
					}
						break;
					case 11: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shuangseqiu_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "双色球";
					}
						break;
					case 12: {
						imgStr = "<img src=\"/mobile/images/logo-icon/3dcai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "福彩3D";
					}
						break;
					case 13: {
						imgStr = "<img src=\"/mobile/images/logo-icon/qilecai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "七乐彩";
					}
						break;
					case 101: {
						imgStr = "<img src=\"/mobile/images/logo-icon/101.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "11运夺金";
					}
						break;
					case 102: {
						imgStr = "<img src=\"/mobile/images/logo-icon/101.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "11选5";
					}
						break;
					case 106: {
						imgStr = "<img src=\"/mobile/images/logo-icon/101.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "贵州11选5";
					}
						break;
					default:
						break;
					}

					var nameStr1 = "<div class=\"order-name\">"
							+ nameStr + "</div>";// 彩种名称
					var result = "<li class=\"ui-li-has-icon ui-first-child\"><a  data-ajax=\"false\" href=\"/wap/orderOfChasing.wap?chasingOrderId="
							+ orderidStr
							+ "&type=3\" data-transition=\"slide\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">"
							+ imgStr
							+ nameStr1
							+ "<div class=\"order-middle\">"
							+ dateStr
							+ moneyStr
							+ "</div> <div class=\"order-right\">"
							+ issueStr + stateStr + "</div></a></li>";
					totalResult += result;

					// $("#list-all").append(result);

				}

				if (isRefresh == false) {
					$("#list-chase").html(totalResult);
				} else {
					$("#list-chase").append(totalResult);
				}
				$("#pageNumber").attr("value",pNumber);

			} else if (json.head.retCode == "100001") {
				windowChangePage("/wap/login.wap");
			} else {
				tigMessage(json.head.retDesc);
			}
			order_switch = true;
			return;
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			tigMessage('列表加载失败，请稍后重试!');
			console.log("jsonp.error:" + textStatus);
			order_switch = true;
		}
	})
}

/*---------------------合买记录------------------*/
/**
 * 合买记录 刷新 zh
 * @return
 */
function RefreshMoreMergerJoinLists(){
	mergerJoinLists(1,10,false);
}

/**
 * 合买记录 翻页 zh
 * @return
 */
function addMoreMergerJoinLists(){
	var recordIndex = $("#pageNumber").val();
	if (recordIndex == NaN || recordIndex == '' || recordIndex == undefined || recordIndex == 'undefined' || recordIndex == 'NaN') {
       recordIndex = 0;
    }
	recordIndex = parseInt(recordIndex) +1;
	mergerJoinLists(recordIndex,10,true);
}


/**
 * 合买记录 zh
 * @param pNumber
 * @param pSize
 * @param isRefresh
 * @return
 */
function mergerJoinLists(pNumber, pSize, isRefresh){
	var dataparm = {'pageNo' : pNumber,'pageSize' : pSize};
	$.ajax( {
		url : '/wap/mergerJoinLists.wap',
		data : dataparm,
		success : function(data) {
			if (null != data) {
				var totalResult = "";
				for ( var i = 0; i < data.mjList.length; i++) {
					var obj = data.mjList[i];

					var imgStr = "<img src=\"/mobile/images/logo-icon/pailie3_tu.png\" alt=\"\" class=\"ui-li-icon\">";// 彩种图片
					var nameStr = "<div class=\"order-name\">"
							+ obj.licenseName + "</div>";// 彩种名称
					var dateStr = "<div class=\"order-time\"><span>"
							+ obj.joinDate
							+ "</span></div>";// 购彩时间
					var moneyStr = "<div class=\"order-money\"><span>投注金额：</span><span>"
							+ obj.joinPrice + "</span>元</div>";// 购彩金额
					var orderStr = (obj.licenseId == 9||obj.licenseId==10)?"--": "<div class=\"order-cz\">方案编号："
							+ obj.orderId + "</div>";// 单号
					var stateStr = "<div class=\"order-zhuangtai\">"
							+ obj.stateName + "</div>";// 状态

					switch (obj.licenseId) {
					case 1: {
						imgStr = "<img src=\"/mobile/images/logo-icon/pailie3_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "排列三";
					}
						break;
					case 2: {
						imgStr = "<img src=\"/mobile/images/logo-icon/pailie5_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "排列五";
					}
						break;
					case 3: {
						imgStr = "<img src=\"/mobile/images/logo-icon/qixingcai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "七星彩";
					}
						break;
					case 4: {
						imgStr = "<img src=\"/mobile/images/logo-icon/daletou_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "大乐透";
					}
						break;
					case 5: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shengfucai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "胜负彩";
					}
						break;
					case 6: {
						imgStr = "<img src=\"/mobile/images/logo-icon/renxuan9_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "任选九场";
					}
						break;
					case 7: {
						imgStr = "<img src=\"/mobile/images/logo-icon/banquanchang_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "六场半全";
					}
						break;
					case 8: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jinqiucai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "四场进球";
					}
						break;
					case 9: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jingzu_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "竞彩足球";
					}
						break;
					case 21: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jingzu_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "北京单场";
					}
						break;
					case 22: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jingzu_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "胜负过关";
					}
						break;
					case 10: {
						imgStr = "<img src=\"/mobile/images/logo-icon/jinglan_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "竞彩篮球";
					}
						break;
					case 11: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shuangseqiu_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "双色球";
					}
						break;
					case 12: {
						imgStr = "<img src=\"/mobile/images/logo-icon/3dcai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "福彩3D";
					}
						break;
					case 13: {
						imgStr = "<img src=\"/mobile/images/logo-icon/qilecai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "七乐彩";
					}
						break;
					case 101: {
						imgStr = "<img src=\"/mobile/images/logo-icon/101.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "11运夺金";
					}
						break;
					case 116: {
						imgStr = "<img src=\"/mobile/images/logo-icon/101.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "江苏11选5";
					}
						break;
					case 102: {
						imgStr = "<img src=\"/mobile/images/logo-icon/xx.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "湖南幸运赛车";
					}
						break;
					case 103: {
						imgStr = "<img src=\"/mobile/images/logo-icon/shishicai_tu.png\" alt=\"\" class=\"ui-li-icon\">";
						nameStr = "江西时时彩";
					}
						break;
					default:
						break;
					}
					
					var nameStr1 = "<div class=\"order-name\">"
							+ nameStr + "</div>";
					var result = "<li  class=\"ui-li-has-icon ui-first-child\"><a data-ajax=\"false\""
							+ "&type=1\" data-transition=\"slide\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" href='/wap/mergerDetails.wap?morderId="+obj.orderId+"'>"
							+ imgStr
							+ nameStr1
							+ "<div class=\"order-middle\">"
							+ dateStr
							+ moneyStr
							+ "</div> <div class=\"order-right\">"
							+ orderStr + stateStr + "</div></a></li>";
					totalResult += result;
				}

				if (isRefresh == false) {
					$("#list-join").html(totalResult);
				} else {
					$("#list-join").append(totalResult);
				}
				$("#pageNumber").attr("value",pNumber);
			} else{
				windowChangePage("/wap/login.wap");
			}
			order_switch = true;
			return;
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			tigMessage('列表加载失败，请稍后重试!');
			console.log("jsonp.error:" + textStatus);
			order_switch = true;
		}
	})


}
