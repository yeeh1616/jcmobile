function getQueryString_foundation(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2])
    }
    return null
}

function windowChangePage_foundation(url){
	window.location.href = url;
}

function getAccountInfo_init_ma(type) {
    getAccountInfo_ma(type)
}

function goToCapitalManagement(){
	window.location.href = "/wap/capitalManagement.wap";
}

function goToQiankuandan(){
	window.location.href = "/wap/qiankuandan.wap";
}

function goToQukuanjilu(){
	window.location.href = "/wap/qukuanjilu.wap";
}

function goToZhanghumingxi(){
	window.location.href = "/wap/zhanghumingxi.wap";
}

function getAccountInfo_ma(type) {
	var pageSize = 10;
    $("#spPage_recharge").text(1);
    $("#spPage_draw").text(1);
    $("#spPage_detail").text(1);
    $("#spPage_debit").text(1);
    switch (type) {
    case "1":
        var dataparm = {'type':type,
        				'pageNo':1,
        				'pageSize':pageSize};//cmd:1011
        $.ajax({
            url: "/wap/getRecords.wap",
            data: dataparm,
            success: function(json, textStatus) {
                if (json.head.retCode == "100000") {
                    if (json.body.drowlist != null) {
                        var temp = "";
                        $.each(json.body.drowlist,
                        function(index, value) {
                        	//var linkUrl = "/wap/recharge.wap?timespan=" + Date.parse(new Date()) + "&id=" + value.id + "&rechargeTime=" + value.rechargeTime + "&state=" + value.state + "&money=" + value.rechargeMoney + "&method=" + value.rechargeMethod;
                        	var linkUrl = "/wap/getRecordDetails.wap?id=" + value.id + "&type=1";
                            temp += "<li>";
                            temp += '<a onclick="windowChangePage_foundation(\'' + linkUrl + "')\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" data-transition='slide'>";
                            temp += '<div class="funds-l">';
                            temp += '<div class="order-time"><span>' + value.rechargeTime + "</span></div>";
                            temp += '<div class="order-money">' + value.state + "</div>";
                            temp += "</div>";
                            temp += '<div class="order-right">';
                            temp += '<div class="order-cz"><span>' + value.rechargeMoney + "</span>元</div>";
                            temp += '<div class="order-zhuangtai">' + value.rechargeMethod + "</div>";
                            temp += "</div>";
                            temp += "</a>";
                            temp += "</li>"
                        });
                        $("#ulRechargeHistory").html("");
                        $("#ulRechargeHistory").append(temp);
                        var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_recharge_ma, pullupAction_recharge_ma);
                        iscrollObj.refresh()
                    } else {
                        tigMessage_foundation("操作用户过多，请稍后重试!")
                    }
                }
                else if(json.head.retCode == "100001"){
			windowChangePage_foundation("login.html");
			}
				else {
                    tigMessage_foundation(json.head.retDesc)
                }
                return
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                tigMessage_foundation("操作用户过多，请稍后重试!")
            }
        });
        break;
    case "2":
    	var dataparm ={'type':type,
        			   'pageNo':1,
        			   'pageSize':pageSize};//cmd = 1011
        $.ajax({
            url: "/wap/getRecords.wap",
            data: dataparm,
            success: function(json, textStatus) {
                if (json.head.retCode == "100000") {
                    if (json.body.drowlist != null) {
                        $("#ulDrawHistory").html("");
                        var temp = "";
                        $.each(json.body.drowlist,
                        function(index, value) {
                            //var linkUrl = "/wap/mention.wap?id=" + value.id + "&rechargeTime=" + encodeURIComponent(value.drawingTime) + "&state=" + encodeURIComponent(escape(value.state)) + "&money=" + value.drawingMoney + "&method=" + encodeURIComponent(escape(value.drawingMethod));
                        	var linkUrl = "/wap/getRecordDetails.wap?id=" + value.id + "&type=2";
                        	temp += "<li>";
                            //temp += '<a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0" class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        	temp += '<a onclick="windowChangePage_foundation(\'' + linkUrl + "')\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" data-transition='slide'>";
                        	temp += '<div class="funds-l">';
                            temp += '<div class="order-time"><span>' + value.drawingTime + "</span></div>";
                            temp += '<div class="order-money">' + value.state + "</div>";
                            temp += "</div>";
                            temp += '<div class="order-right">';
                            temp += '<div class="order-cz"><span>' + value.drawingMoney + "</span>元</div>";
                            temp += '<div class="order-zhuangtai">' + value.drawingMethod + "</div>";
                            temp += "</div>";
                            temp += "</a>";
                            temp += "</li>"
                        });
                        $("#ulDrawHistory").append(temp);
                        var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_draw_ma, pullupAction_draw_ma);
                        iscrollObj.refresh()
                    } else {
                        tigMessage_foundation("操作用户过多，请稍后重试!")
                    }
                } else {
                    tigMessage_foundation(json.head.retDesc)
                }
                return
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                tigMessage_foundation("操作用户过多，请稍后重试!")
            }
        });
        break;
    case "3":
    	var dataparm ={'type':type,
 			   'pageNo':1,
 			   'pageSize':pageSize};//cmd = 1011
    	$.ajax({
            url: "/wap/getRecords.wap",
            data: dataparm,
            success: function(json, textStatus) {
                if (json.head.retCode == "100000") {
                    if (json.body.drowlist != null) {
                        var temp = "";
                        $("#ulAccountDetail").html("");
                        $.each(json.body.drowlist,
                        function(index, value) {
                            temp += "<li>";
                            temp += '<a  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                            temp += '<div class="funds-l">';
                            temp += '<div class="order-time"><span>' + value.createTime + "</span></div>";
                            temp += '<div class="order-money">账户余额：' + value.balance + "元</div>";
                            temp += "</div>";
                            temp += '<div class="order-right">';
                            temp += '<div class="order-cz"><span>' + value.money + "</span>元</div>";
                            temp += '<div class="order-zhuangtai">' + value.type + "</div>";
                            temp += "</div>";
                            temp += "</a>";
                            temp += "</li>"
                        });
                        $("#ulAccountDetail").append(temp);
                        var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_detail_ma, pullupAction_detail_ma);
                        iscrollObj.refresh()
                    } else {
                        tigMessage_foundation("操作用户过多，请稍后重试!")
                    }
                } else {
                    tigMessage_foundation(json.head.retDesc)
                }
                return
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                tigMessage_foundation("操作用户过多，请稍后重试!")
            }
        });
        break;
    case "4":
    	var dataparm ={'type':type,
 			   'pageNo':1,
 			   'pageSize':pageSize};//cmd = 1011
    	$.ajax({
            url: "/wap/getRecords.wap",
            data: dataparm,
            success: function(json, textStatus) {
                if (json.head.retCode == "100000") {
                    if (json.body.drowlist != null) {
                        var temp = "";
                        $("#ulDebit").html("");
                        $.each(json.body.drowlist,
                        function(index, value) {
                            temp += "<li>";
                            temp += '<a  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                            temp += '<div class="funds-l">';
                            temp += '<div class="order-time"><span>' + value.createTime + "</span></div>";
                            temp += '<div class="order-money">' + value.returnTime + "</div>";
                            temp += "</div>";
                            temp += '<div class="order-right">';
                            temp += '<div class="order-cz"><span>欠款金额：' + value.money + "</span>元</div>";
                            temp += '<div class="order-zhuangtai">' + value.state + "</div>";
                            temp += "</div>";
                            temp += "</a>";
                            temp += "</li>"
                        });
                        $("#ulDebit").append(temp);
                        var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_debit_ma, pullupAction_debit_ma);
                        iscrollObj.refresh()
                    } else {
                        tigMessage_foundation("操作用户过多，请稍后重试!")
                    }
                } else {
                    tigMessage_foundation(json.head.retDesc)
                }
                return
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                tigMessage_foundation("操作用户过多，请稍后重试!")
            }
        });
        break;
    default:
        break
    }
}

//var pullupAction_recharge_ma = function() {
function pullupAction_recharge_ma() {
    var t = this;
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 1
    } else {
        pageNo++
    }
    var pageSize = 10;
    var dataparm = {'type':1,
    				'pageNo':pageNo,
    				'pageSize':pageSize};//cmd = 1011
    
    $.ajax({
        url: "/wap/getRecords.wap",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 9000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.drowlist != null) {
                    var temp = "";
                    $.each(json.body.drowlist,
                    function(index, value) {
                        //var linkUrl = "recharge.html?timespan=" + Date.parse(new Date()) + "&id=" + value.id + "&rechargeTime=" + encodeURIComponent(value.rechargeTime) + "&state=" + encodeURIComponent(escape(value.state)) + "&money=" + value.rechargeMoney + "&method=" + encodeURIComponent(escape(value.rechargeMethod));
                        //temp += '<a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + "'), this.s = 0\"  class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" data-transition='slide'>";
                        var linkUrl = "/wap/getRecordDetails.wap?id=" + value.id + "&type=1";
                        temp += "<li>";
                        temp += '<a onclick="windowChangePage_foundation(\'' + linkUrl + "')\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" data-transition='slide'>";
                        temp += '<div class="funds-l">';
                        temp += '<div class="order-time"><span>' + value.rechargeTime + "</span></div>";
                        temp += '<div class="order-money">' + value.state + "</div>";
                        temp += "</div>";
                        temp += '<div class="order-right">';
                        temp += '<div class="order-cz"><span>' + value.rechargeMoney + "</span>元</div>";
                        temp += '<div class="order-zhuangtai">' + value.rechargeMethod + "</div>";
                        temp += "</div>";
                        temp += "</a>";
                        temp += "</li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ulRechargeHistory").append(temp);
//                    t.refresh();
//                    this.refresh()
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    //this.refresh()
};

//var pulldownAction_recharge_ma = function() {
function pulldownAction_recharge_ma() {
    var t = this;
//    var cmd = 1011;
//    var storage = window.localStorage;
//    var userid = storage.getItem("userid");
//    var storeId = storage.getItem("storeId");
//    var token = getToken_foundation();
    var pageSize = 10;
    var dataparm = {'type':1,
    				'pageNo':1,
    				'pageSize':pageSize};
    $.ajax({
        url: "/wap/getRecords.wap",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.drowlist != null) {
                    var temp = "";
                    $.each(json.body.drowlist,
                    function(index, value) {
//                        var linkUrl = "recharge.html?timespan=" + Date.parse(new Date()) + "&id=" + value.id + "&rechargeTime=" + encodeURIComponent(value.rechargeTime) + "&state=" + encodeURIComponent(escape(value.state)) + "&money=" + value.rechargeMoney + "&method=" + encodeURIComponent(escape(value.rechargeMethod));
//                        temp += "<li>";
//                        temp += '<a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + "'), this.s = 0\"  class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" data-transition='slide'>";
                    	var linkUrl = "/wap/getRecordDetails.wap?id=" + value.id + "&type=1";
                        temp += "<li>";
                        temp += '<a onclick="windowChangePage_foundation(\'' + linkUrl + "')\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" data-transition='slide'>";
                    	temp += '<div class="funds-l">';
                        temp += '<div class="order-time"><span>' + value.rechargeTime + "</span></div>";
                        temp += '<div class="order-money">' + value.state + "</div>";
                        temp += "</div>";
                        temp += '<div class="order-right">';
                        temp += '<div class="order-cz"><span>' + value.rechargeMoney + "</span>元</div>";
                        temp += '<div class="order-zhuangtai">' + value.rechargeMethod + "</div>";
                        temp += "</div>";
                        temp += "</a>";
                        temp += "</li>"
                    });
                    $("#ulRechargeHistory").html("");
                    $("#ulRechargeHistory").append(temp);
                    //t.refresh()
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    //this.refresh()
};

//var pulldownAction_draw_ma = function() {
function pulldownAction_draw_ma() {
    var t = this;
    var pageSize = 10;
    var dataparm = {'type':2,
    				'pageNo':1,
    				'pageSize':pageSize};//1011
    $.ajax({
        url: "/wap/getRecords.wap",
        data: dataparm,
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.drowlist != null) {
                    var temp = "";
                    $.each(json.body.drowlist,
                    function(index, value) {
//                        var linkUrl = "mention.html?id=" + value.id + "&rechargeTime=" + encodeURIComponent(value.drawingTime) + "&state=" + encodeURIComponent(escape(value.state)) + "&money=" + value.drawingMoney + "&method=" + encodeURIComponent(escape(value.drawingMethod));
//                        temp += "<li>";
//                        temp += '<a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0" class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                    	var linkUrl = "/wap/getRecordDetails.wap?id=" + value.id + "&type=2";
                        temp += "<li>";
                        temp += '<a onclick="windowChangePage_foundation(\'' + linkUrl + "')\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" data-transition='slide'>";
                    	temp += '<div class="funds-l">';
                        temp += '<div class="order-time"><span>' + value.drawingTime + "</span></div>";
                        temp += '<div class="order-money">' + value.state + "</div>";
                        temp += "</div>";
                        temp += '<div class="order-right">';
                        temp += '<div class="order-cz"><span>' + value.drawingMoney + "</span>元</div>";
                        temp += '<div class="order-zhuangtai">' + value.drawingMethod + "</div>";
                        temp += "</div>";
                        temp += "</a>";
                        temp += "</li>"
                    });
                    $("#spPage_draw").text(1);
                    $("#ulDrawHistory").html("");
                    $("#ulDrawHistory").append(temp);
                    //t.refresh()
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    //this.refresh()
};
//var pullupAction_draw_ma = function() {
function pullupAction_draw_ma() {
    var t = this;
//    var cmd = 1011;
//    var storage = window.localStorage;
//    var userid = storage.getItem("userid");
//    var storeId = storage.getItem("storeId");
    var pageNo = $("#spPage_draw").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var pageSize = 10;
    var dataparm = {'type':2,
			'pageNo':pageNo,
			'pageSize':pageSize};//1011
    $.ajax({
        url: "/wap/getRecords.wap",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.drowlist != null) {
                    var temp = "";
                    $.each(json.body.drowlist,
                    function(index, value) {
//                        var linkUrl = "mention.html?id=" + value.id + "&rechargeTime=" + encodeURIComponent(value.drawingTime) + "&state=" + encodeURIComponent(escape(value.state)) + "&money=" + value.drawingMoney + "&method=" + encodeURIComponent(escape(value.drawingMethod));
//                        temp += "<li>";
                    	var linkUrl = "/wap/getRecordDetails.wap?id=" + value.id + "&type=2";
                        temp += "<li>";
                        temp += '<a onclick="windowChangePage_foundation(\'' + linkUrl + "')\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" data-transition='slide'>";
                    	temp += '<a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0" class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="funds-l">';
                        temp += '<div class="order-time"><span>' + value.drawingTime + "</span></div>";
                        temp += '<div class="order-money">' + value.state + "</div>";
                        temp += "</div>";
                        temp += '<div class="order-right">';
                        temp += '<div class="order-cz"><span>' + value.drawingMoney + "</span>元</div>";
                        temp += '<div class="order-zhuangtai">' + value.drawingMethod + "</div>";
                        temp += "</div>";
                        temp += "</a>";
                        temp += "</li>"
                    });
                    $("#spPage_draw").text(pageNo);
                    $("#ulDrawHistory").append(temp);
                    //t.refresh()
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    //this.refresh()
};
//var pulldownAction_detail_ma = function() {
function pulldownAction_detail_ma() {
    var t = this;
    var pageSize = 10;
    var dataparm = {'type':3,
    				'pageNo':1,
    				'pageSize':pageSize};
    $.ajax({
        url: "/wap/getRecords.wap",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.drowlist != null) {
                    var temp = "";
                    $.each(json.body.drowlist,
                    function(index, value) {
                        temp += "<li>";
                        temp += '<a  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="funds-l">';
                        temp += '<div class="order-time"><span>' + value.createTime + "</span></div>";
                        temp += '<div class="order-money">账户余额：' + value.balance + "元</div>";
                        temp += "</div>";
                        temp += '<div class="order-right">';
                        temp += '<div class="order-cz"><span>' + value.money + "</span>元</div>";
                        temp += '<div class="order-zhuangtai">' + value.type + "</div>";
                        temp += "</div>";
                        temp += "</a>";
                        temp += "</li>"
                    });
                    $("#spPage_detail").text(1);
                    $("#ulAccountDetail").html("");
                    $("#ulAccountDetail").append(temp);
                    //t.refresh()
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    //this.refresh()
};
//var pullupAction_detail_ma = function() {
function pullupAction_detail_ma() {
    var t = this;
    var pageNo = $("#spPage_detail").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var pageSize = 10;
    var dataparm = {'type':3,
			'pageNo':pageNo,
			'pageSize':pageSize};
    $.ajax({
        url: "/wap/getRecords.wap",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.drowlist != null) {
                    var temp = "";
                    $.each(json.body.drowlist,
                    function(index, value) {
                        temp += "<li>";
                        temp += '<a  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="funds-l">';
                        temp += '<div class="order-time"><span>' + value.createTime + "</span></div>";
                        temp += '<div class="order-money">账户余额：' + value.balance + "元</div>";
                        temp += "</div>";
                        temp += '<div class="order-right">';
                        temp += '<div class="order-cz"><span>' + value.money + "</span>元</div>";
                        temp += '<div class="order-zhuangtai">' + value.type + "</div>";
                        temp += "</div>";
                        temp += "</a>";
                        temp += "</li>"
                    });
                    $("#spPage_detail").text(pageNo);
                    $("#ulAccountDetail").append(temp);
                    //t.refresh()
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    //this.refresh()
};
//var pulldownAction_debit_ma = function() {
function pulldownAction_debit_ma() {
    var t = this;
    var pageSize = 10;
    var dataparm = {'type':4,
			'pageNo':1,
			'pageSize':pageSize};
    $.ajax({
        url: "/wap/getRecords.wap",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.drowlist != null) {
                    var temp = "";
                    $.each(json.body.drowlist,
                    function(index, value) {
                        temp += "<li>";
                        temp += '<a  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="funds-l">';
                        temp += '<div class="order-time"><span>' + value.createTime + "</span></div>";
                        temp += '<div class="order-money">' + value.returnTime + "</div>";
                        temp += "</div>";
                        temp += '<div class="order-right">';
                        temp += '<div class="order-cz"><span>欠款金额：' + value.money + "</span>元</div>";
                        temp += '<div class="order-zhuangtai">' + value.state + "</div>";
                        temp += "</div>";
                        temp += "</a>";
                        temp += "</li>"
                    });
                    $("#spPage_debit").text(1);
                    $("#ulDebit").html("");
                    $("#ulDebit").append(temp);
                    //t.refresh()
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    //this.refresh()
};
//var pullupAction_debit_ma = function() {
function pullupAction_debit_ma() {
    var t = this;
    var pageNo = $("#spPage_debit").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var pageSize = 10;
    var dataparm = {'type':4,
			'pageNo':pageNo,
			'pageSize':pageSize};
    $.ajax({
        url: "/wap/getRecords.wap",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.drowlist != null) {
                    var temp = "";
                    $.each(json.body.drowlist,
                    function(index, value) {
                        temp += "<li>";
                        temp += '<a  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="funds-l">';
                        temp += '<div class="order-time"><span>' + value.createTime + "</span></div>";
                        temp += '<div class="order-money">账户余额：' + value.balance + "元</div>";
                        temp += "</div>";
                        temp += '<div class="order-right">';
                        temp += '<div class="order-cz"><span>' + value.money + "</span>元</div>";
                        temp += '<div class="order-zhuangtai">' + value.type + "</div>";
                        temp += "</div>";
                        temp += "</a>";
                        temp += "</li>"
                    });
                    $("#spPage_debit").text(pageNo);
                    $("#ulDebit").append(temp);
                    //t.refresh()
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    //this.refresh()
};