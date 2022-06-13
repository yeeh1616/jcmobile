var licenseId = $("#licenseId").val();
var playId = $("#playId").val();


var myScroll;
var pullDownEl;
var pullDownOffset;
var pullUpEl;
var pullUpOffset;
var generatedCount = 0;
var boolType = 0;
var boolTypeDown = 0;
/**
 * 下拉刷新
 */
function pullDownAction() {
	setTimeout(function() {
		if (boolTypeDown == 0) {
			$("#pulldown").offsetHeight = 20;
			pulldownAction_initAll_oi(licenseId, playId);
			boolType = 1;
		}
		myScroll.refresh();
	}, 1000);
	setTimeout(function() {
		boolType = 0;
	}, 5000);
}

/**
 * 上拉操作
 */
function pullUpAction() {
	setTimeout(function() {
		if (boolType == 0) {
			$("#pullup").offsetHeight = 20;
			pullupAction_initAll_oi(licenseId);
			boolTypeDown = 1;
		}
		myScroll.refresh();
	}, 1000);
	setTimeout(function() {
		boolTypeDown = 0;
	}, 5000);
}

/**
 * 初始化iScroll控件
 */
function loaded() {
	pullDownEl = document.getElementById('pulldown');
	pullDownOffset = pullDownEl.offsetHeight;
	if(licenseId != 9 && licenseId != 10){		
		pullUpEl = document.getElementById('pullup');
		pullUpOffset = pullUpEl.offsetHeight;
	}
	myScroll = new iScroll(
			'wrapper_isroll',
			{
				scrollbarClass : 'myScrollbar', /* 重要样式 */
				useTransition : false, /* 此属性不知用意，本人从true改为false */
				topOffset : pullDownOffset,
				onRefresh : function() {
					if (pullDownEl.className.match('loading')) {
						pullDownEl.className = '';
						pullDownEl.querySelector('.pulldown-label').innerHTML = '下拉刷新...';
					} else if (licenseId != 9 && licenseId != 10 && pullUpEl.className.match('loading')) {
						pullUpEl.className = '';
						pullUpEl.querySelector('.pullup-label').innerHTML = '上拉加载更多...';
					}
				},
				onScrollMove : function() {
					if (this.y > 5 && !pullDownEl.className.match('flip')) {
						pullDownEl.className = 'flip';
						pullDownEl.querySelector('.pulldown-label').innerHTML = '松手开始更新...';
						this.minScrollY = 0; // alert('下拉方法');
					} else if (this.y < 5 && pullDownEl.className.match('flip')) {
						pullDownEl.className = '';
						pullDownEl.querySelector('.pulldown-label').innerHTML = '下拉刷新...';
						this.minScrollY = -pullDownOffset;
					} else if (licenseId != 9 && licenseId != 10 && this.y < (this.maxScrollY - 55)
							&& !pullUpEl.className.match('flip')) {
						pullUpEl.className = 'flip';
						pullUpEl.querySelector('.pullup-label').innerHTML = '松手开始更新...';
						this.maxScrollY = this.maxScrollY;
					} else if (licenseId != 9 && licenseId != 10 && this.y > (this.maxScrollY + 55)
							&& pullUpEl.className.match('flip')) {
						pullUpEl.className = '';
						pullUpEl.querySelector('#pullup').innerHTML = '上拉加载更多...';
						this.maxScrollY = pullUpOffset;
					}
				},
				onScrollEnd : function() {
					if (pullDownEl.className.match('flip')) {
						pullDownEl.className = 'loading';
						pullDownEl.querySelector('.pulldown-label').innerHTML = '加载中...';
						pullDownAction(); // Execute custom function (ajax
											// call?)
					} else if (licenseId != 9 && licenseId != 10 && pullUpEl.className.match('flip')) {
						pullUpEl.className = 'loading';
						pullUpEl.querySelector('.pullup-label').innerHTML = '加载中...';
						pullUpAction(); // Execute custom function (ajax call?)
					}
				}
			});

	setTimeout(function() {
		document.getElementById('wrapper_isroll').style.left = '0';
	}, 800);
}

// 初始化绑定iScroll控件
document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', loaded, false);

/**
 * 下拉操作
 * @param licenseId
 * @return
 */
function pulldownAction_initAll_oi(licenseId,playId) {
	var strs = "";//精彩足球 竞彩篮球参数
	if(playId != null && playId != "" && playId != undefined){
		var startDate = "";
	    var endDate = "";
	    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
	        startDate = $("#spMyDate").text();
	        //$("#kaijiang_jclq").html("")
	    }
	    strs += "&playId="+playId+"&sDate="+startDate+"&eDate="+endDate;
	}
	$.ajax( {
		url : "/wap/open/refresh.wap",
		type: "post",
	    data: "licenseId=" + licenseId + strs,
	    dataType: "json",
        dataFilter: function (json) {
            return json
        },
		error : function(XMLHttpRequest, textStatus, errorThrown) {
        	tigMessage_foundation("操作用户过多，请稍后重试!")
		},
		success : function(json,textStatus) {
			var list = json.body.lotteryDataList;//所有请求数据响应集合
			if(list == null || list == undefined){
				return tigMessage_foundation("操作用户过多，请稍后重试!");
			}
			/**
			 * 竞彩足球
			 */
			if (licenseId == 9){
				temp = "";//定义页面刷星内容
				$.each(list, function (index, value) {
					temp += " \n<h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
						var allInfo = value.lotteryInfoList;
						$.each(allInfo, function (n, v) {
							var against = v.againstList[0];
							var str = "";
							if(against.result == "胜"){str = " win";}else if(against.result == "平"){str = " loss";}else if(against.result == "负"){str = " draw";}
							temp += "\n<li>\n";
							/*
							 * NO.1
							 */
							temp += "  <div class=\"part1\"><div>"+against.leagueName+"</div><div><span>"+against.number+"</span><span>"+against.betEndTime+"</span></div></div>\n";
							/*
							 * NO.2
							 */
							if(playId == 2){
								temp += "  <div class=\"part2\">"+against.hostTeam+"("+against.ggScore+")</div>\n";
							}else{
								temp += "  <div class=\"part2\">"+against.hostTeam+"</div>\n";
							}
							/*
							 * NO.3
							 */
							if(playId == 1){
								temp += "  <div class=\"part3"+str+"\"><div>"+against.result+"</div><div>"+against.allScore+"</div></div>\n";
							}else if(playId == 2){
								temp += "  <div class=\"part3"+str+"\"><div>"+against.rqResult+"</div><div>"+against.allScore+"</div></div>\n";
							}
							if(playId == 3){
								temp += "  <div class=\"part3 zong\"><div>"+against.totalGoals+"</div><div>"+against.allScore+"</div></div>\n";
							}
							if(playId == 4){
								temp += "  <div class=\"part3 zong\"><div>"+against.bqcResult+"</div><div>("+against.halfScore+")"+against.allScore+"</div></div>\n";
							}
							if(playId == 5){
								temp += "  <div class=\"part3 zong\"><div class=\"only_d\">"+against.allScore+"</div></div>\n";
							}
							/*
							 * NO.4
							 */
							temp += "  <div class=\"part4\">"+against.guestTeam+"</div>\n";
							temp += "  <div class=\"clear\"></div>\n";
							temp += "</li>";
						});
				});
				$("#kaijiang_jczq").html("");//清空页面
				$("#kaijiang_jczq").html(temp);//写出到页面
				
			}
			/**
			 * 竞彩篮球
			 */
			else if(licenseId == 10){
				temp = "";//定义页面刷星内容
				$.each(list, function (index, value) {
                    temp += "\n <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                    if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                        var allInfo = value.lotteryInfoList;
                        $.each(allInfo, function (n, v) {
                            var against = v.againstList[0];
                            var str = "";
                            if(playId == 2){
                            	if (against.rfResult == "主胜") {str = " win";} else {str = " loss";}
                            }else{
                            	if (against.result == "主胜") {str = " win";} else {str = " loss";}
                            }
                            
                            temp += "\n <li>\n";
                            /*
                             * NO.1
                             */
                            temp += "  <div class=\"part1\"><div>" + against.leagueName + "</div><div><span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span></div></div>\n";
                            /*
                             * NO.2
                             */
                            if(playId == 2){
                            	temp += "  <div class=\"part2\">" + against.guestTeam + "(" + against.ggScore.split(",")[0] + ")</div>\n";
                            }else{
                            	if(playId == 3 || playId == 4){
                            		temp += "  <div class=\"part2 wh\">" + against.guestTeam + "</div>\n";
                            	}else{
                            		temp += "  <div class=\"part2\">" + against.guestTeam + "</div>\n";
                            	}
                            }
                            /*
                             * NO.3
                             */
                            if(playId == 1){
                            	temp += "  <div class=\"part3"+str+"\"><div>"+against.result + "</div><div>" + against.allScore + "</div></div>\n";
                            }
                            if(playId == 2){
                            	temp += "  <div class=\"part3"+str+"\"><div>"+against.rfResult + "</div><div>" + against.allScore + "</div></div>\n";	
                            }
                            if(playId == 3){
                            	temp += "  <div class=\"part3"+str+"\"><div>"+against.scoreDifference.split(",")[0]+"</div><div>"+against.scoreDifference.split(",")[1]+"</div></div>\n";
                            }
                            if(playId == 4){
                            	temp += "  <div class=\"part3"+str+"\"><div>"+against.daxiaofen+"</div><div>"+against.allScore+"</div></div>\n";
                            }
                            /*
                             * NO.5
                             */
                            if(playId == 3){
                            	temp += '  <div class="part5">' + against.allScore + "</div>\n";
                            }else if(playId == 4){
                            	temp += '  <div class="part5">' + against.ggScore.split(",")[1] +"</div>\n";
                            }
                            /*
                             * NO.4
                             */
                            if(playId == 3 || playId == 4){
                            	temp += '  <div class="part4 wh">' + against.hostTeam + "</div>\n";
                            }else{
                            	temp += '  <div class="part4">' + against.hostTeam + "</div>\n";
                            }
                            temp += '  <div class="clear"></div>\n';
                            temp += " </li>"
                        })
                    }
                });
				$("#kaijiang_jclq").html("");//清空页面
				$("#kaijiang_jclq").html(temp);//写出到页面
			}
			/**
			 * 胜负彩 数字彩
			 */
			else{
				var temp = "";
				for(var i = 0; i < list.length; i++){
					temp += "\n  <li>\n";
					temp += "    <a href=\"/wap/open/openListBylIdIssue.wap?licenseId="+licenseId+"&issue="+list[0].issue+"\" rel=\"external\" data-transition=\"slide\">\n";
					temp += "    <div class=\"center\">\n";
					temp += "    <div class=\"center-t open_list_lf\">第"+list[i].issue+"期</div>\n";
					temp += "    <div class=\"center-r\">"+list[i].openWinTime+"</div>\n";
					temp += "    <div class=\"clear\"></div>\n";
					var str = "";
					if(i != 0){
						str = " no-bg";
					}
					if(licenseId == 5 || licenseId == 6 || licenseId == 7 || licenseId == 8){
						temp += "    <div class=\"choose_sf"+str+"\">\n";
					}else{
						temp += "    <div class=\"choose_no"+str+"\">\n";
					}
					
					var win = "";
					if(licenseId == 1 || licenseId == 2 || licenseId == 3 || licenseId == 5 || licenseId == 6 || licenseId == 7 || licenseId == 8 || licenseId == 12 || licenseId == 101 || licenseId == 103){
						for(var j = 0; j < list[i].winNumberArray.length; j++){
							win += "<li>"+list[i].winNumberArray[j]+"</li>";
						}
					}else if(licenseId == 4){
						for(var k = 0; k < list[i].winNumberArray; k++){
							win += "<li ";
							if(k > list[i].winNumberArray.length-2){
								win += "class=\"blue\"";
							}
							win += ">"+list[i].winNumberArray[k]+"</li>";
						}
					}else{
						for(var l = 0; l < list[i].winNumberArray.length; l++){
							win += "<li ";
							if(l > list[i].winNumberArray.length-1){
								win +="class=\"blue\"";
							}
							win += ">"+list[i].winNumberArray[l]+"</li>";
						}
					}
					temp += "    <ul>"+win+"<div class=\"clear\"></div></ul>\n";
					temp += "    </div>\n"
					temp += "    </div>\n";
					temp += "    </a>\n";
					temp += "  </li>\n";
				}
				$("#kaijiang").html("");
				//console.log(temp); //调试函数  将内容输出到控制台
				$("#kaijiang").html(temp);
				
			}
		}
	});
}

/**
 * 上拉炒作
 * @param licenseId
 * @return
 */
function pullupAction_initAll_oi(licenseId) {
	var pageNo = $("#spPage_recharge").text();
	if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2;
    } else {
        pageNo++;
    }
	$.ajax( {
		url : "/wap/open/refresh.wap",
		type: "post",
	    data: "licenseId=" + licenseId+"&pageIndex="+pageNo,
	    dataType: "json",
        dataFilter: function (json) {
            return json
        },
		error : function(XMLHttpRequest, textStatus, errorThrown) {
        	tigMessage_foundation("操作用户过多，请稍后重试!")
		},
		success : function(json,textStatus) {
			var list = json.body.lotteryDataList;
			if(list != null && list != undefined){
				var temp = "";
				for(var i = 0; i < list.length; i++){
					temp += "<li>\n";
					temp += "  <a href=\"/wap/open/openListBylIdIssue.wap?licenseId="+licenseId+"&issue="+list[0].issue+"\" rel=\"external\" data-transition=\"slide\">\n";
					temp += "  <div class=\"center\">\n";
					temp += "  <div class=\"center-t open_list_lf\">第"+list[i].issue+"期</div>\n";
					temp += "  <div class=\"center-r\">"+list[i].openWinTime+"</div>\n";
					temp += "  <div class=\"clear\"></div>\n";
					var str = " no-bg";
					if(licenseId == 5 || licenseId == 6 || licenseId == 7 || licenseId == 8){
						temp += "  <div class=\"choose_sf"+str+"\">\n";
					}else{
						temp += "  <div class=\"choose_no"+str+"\">\n";
					}
					
					var win = "";
					if(licenseId == 1 || licenseId == 2 || licenseId == 3 || licenseId == 5 || licenseId == 6 || licenseId == 7 || licenseId == 8 || licenseId == 12 || licenseId == 101 || licenseId == 103){
						for(var j = 0; j < list[i].winNumberArray.length; j++){
							win += "<li>"+list[i].winNumberArray[j]+"</li>";
						}
					}else if(licenseId == 4){
						for(var k = 0; k < list[i].winNumberArray; k++){
							win += "<li ";
							if(k > list[i].winNumberArray.length-2){
								win += "class=\"blue\"";
							}
							win += ">"+list[i].winNumberArray[k]+"</li>";
						}
					}else{
						for(var l = 0; l < list[i].winNumberArray.length; l++){
							win += "<li ";
							if(l > list[i].winNumberArray.length-1){
								win +="class=\"blue\"";
							}
							win += ">"+list[i].winNumberArray[l]+"</li>";
						}
					}
					temp += "  <ul>"+win+"<div class=\"clear\"></div></ul>\n";
					temp += "  </div>\n"
					temp += "  </a>\n";
					temp += "</li>\n";
				}
				$("#spPage_recharge").text(pageNo);
				$("#kaijiang").append(temp);
			}else{
				return tigMessage_foundation("操作用户过多，请稍后重试!");
			}
		}
	});
}

/**
 * 界面提示函数
 * @param m
 * @return
 */
function tigMessage_foundation(m) {
    var info = m;
    $.mobile.loading("show", {
        text: m,
        textVisible: true,
        theme: "a",
        textonly: true,
        html: ""
    });
    setTimeout(function() {
        $.mobile.loading("hide")
    },
    2000)
}

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var myDateOpt = {
    preset: "date",
    theme: "sense-ui",
    display: "modal",
    mode: "scroller",
    dateFormat: "yyyymmdd",
    setText: "确定",
    cancelText: "取消",
    dateOrder: "yymmdd",
    dayText: "日",
    monthText: "月",
    yearText: "年",
    endYear: currentYear,
    onSelect: function (valueText, btn, inst) {
        $("#spMyDate").text(valueText);
        pulldownAction_initAll_oi(licenseId, playId);
    }
};

