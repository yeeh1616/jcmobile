function openInfo_initAll_oi() {
    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_initAll_oi, openInfo_initAll_oi);
    var cmd = 1013;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var dataparm = 'rqmsg={"body":{},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null) {
                    var pailie3 = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 1
                    });
                    if (pailie3 != null && pailie3 != undefined && pailie3 != "undefined") {
                        $("#sp_pailie3_name").text(pailie3[0].licenseName);
                        $("#sp_pailie3_info").text("第" + pailie3[0].issue + "期 " + pailie3[0].openWinTime);
                        $("#sp_pailie3_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        if (pailie3[0].winNumber != null && pailie3[0].winNumber.length > 0) {
                            storage.setItem("pailie3_first_no", pailie3[0].winNumber);
                            var a = pailie3[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 1);
                            p2 = padLeft_foundation(a[1], "0", 1);
                            p3 = padLeft_foundation(a[2], "0", 1)
                        }
                        $("#sp_pailie3_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + '</li><div class="clear"></div></ul>')
                    }
                    var pailie5 = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 2
                    });
                    if (pailie5 != null && pailie5 != undefined && pailie5 != "undefined") {
                        $("#sp_pailie5_name").text(pailie5[0].licenseName);
                        $("#sp_pailie5_info").text("第" + pailie5[0].issue + "期 " + pailie5[0].openWinTime);
                        $("#sp_pailie5_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        if (pailie5[0].winNumber != null && pailie5[0].winNumber.length > 0) {
                            storage.setItem("pailie5_first_no", pailie5[0].winNumber);
                            var a = pailie5[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 1);
                            p2 = padLeft_foundation(a[1], "0", 1);
                            p3 = padLeft_foundation(a[2], "0", 1);
                            p4 = padLeft_foundation(a[3], "0", 1);
                            p5 = padLeft_foundation(a[4], "0", 1)
                        }
                        $("#sp_pailie5_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + '</li><div class="clear"></div></ul>')
                    }
                    var qixingcai = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 3
                    });
                    if (qixingcai != null && qixingcai != undefined && qixingcai != "undefined") {
                        $("#sp_qixingcai_name").text(qixingcai[0].licenseName);
                        $("#sp_qixingcai_info").text("第" + qixingcai[0].issue + "期 " + qixingcai[0].openWinTime);
                        $("#sp_qixingcai_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        var p6 = "00";
                        var p7 = "00";
                        if (qixingcai[0].winNumber != null && qixingcai[0].winNumber.length > 0) {
                            storage.setItem("qixingcai_first_no", qixingcai[0].winNumber);
                            var a = qixingcai[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 1);
                            p2 = padLeft_foundation(a[1], "0", 1);
                            p3 = padLeft_foundation(a[2], "0", 1);
                            p4 = padLeft_foundation(a[3], "0", 1);
                            p5 = padLeft_foundation(a[4], "0", 1);
                            p6 = padLeft_foundation(a[5], "0", 1);
                            p7 = padLeft_foundation(a[6], "0", 1)
                        }
                        $("#sp_qixingcai_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + "</li> <li>" + p7 + '</li><div class="clear"></div></ul>')
                    }
                    var daletou = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 4
                    });
                    if (daletou != null && daletou != undefined && daletou != "undefined") {
                        $("#sp_daletou_name").text(daletou[0].licenseName);
                        $("#sp_daletou_info").text("第" + daletou[0].issue + "期 " + daletou[0].openWinTime);
                        $("#sp_daletou_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        var p6 = "00";
                        var p7 = "00";
                        if (daletou[0].winNumber != null && daletou[0].winNumber.length > 0) {
                            storage.setItem("daletou_first_no", daletou[0].winNumber);
                            var a = daletou[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 2);
                            p2 = padLeft_foundation(a[1], "0", 2);
                            p3 = padLeft_foundation(a[2], "0", 2);
                            p4 = padLeft_foundation(a[3], "0", 2);
                            p5 = padLeft_foundation(a[4], "0", 2);
                            p6 = padLeft_foundation(a[5], "0", 2);
                            p7 = padLeft_foundation(a[6], "0", 2)
                        }
                        $("#sp_daletou_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + '</li><li class="blue">' + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>')
                    }
                    var shuangseqiu = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 11
                    });
                    if (shuangseqiu != null && shuangseqiu != undefined && shuangseqiu != "undefined") {
                        $("#sp_shuangseqiu_name").text(shuangseqiu[0].licenseName);
                        $("#sp_shuangseqiu_info").text("第" + shuangseqiu[0].issue + "期 " + shuangseqiu[0].openWinTime);
                        $("#sp_shuangseqiu_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        var p6 = "00";
                        var p7 = "00";
                        if (shuangseqiu[0].winNumber != null && shuangseqiu[0].winNumber.length > 0) {
                            storage.setItem("shuangseqiu_first_no", shuangseqiu[0].winNumber);
                            var a = shuangseqiu[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 2);
                            p2 = padLeft_foundation(a[1], "0", 2);
                            p3 = padLeft_foundation(a[2], "0", 2);
                            p4 = padLeft_foundation(a[3], "0", 2);
                            p5 = padLeft_foundation(a[4], "0", 2);
                            p6 = padLeft_foundation(a[5], "0", 2);
                            p7 = padLeft_foundation(a[6], "0", 2)
                        }
                        $("#sp_shuangseqiu_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>')
                    }
                    var qilecai = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 13
                    });
                    if (qilecai != null && qilecai != undefined && qilecai != "undefined") {
                        $("#sp_qilecai_name").text(qilecai[0].licenseName);
                        $("#sp_qilecai_info").text("第" + qilecai[0].issue + "期 " + qilecai[0].openWinTime);
                        $("#sp_qilecai_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        var p6 = "00";
                        var p7 = "00";
                        if (qilecai[0].winNumber != null && qilecai[0].winNumber.length > 0) {
                            storage.setItem("qilecai_first_no", qilecai[0].winNumber);
                            var a = qilecai[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 2);
                            p2 = padLeft_foundation(a[1], "0", 2);
                            p3 = padLeft_foundation(a[2], "0", 2);
                            p4 = padLeft_foundation(a[3], "0", 2);
                            p5 = padLeft_foundation(a[4], "0", 2);
                            p6 = padLeft_foundation(a[5], "0", 2);
                            p7 = padLeft_foundation(a[6], "0", 2)
                        }
                        $("#sp_qilecai_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>')
                    }
                    var threeD = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 12
                    });
                    if (threeD != null && threeD != undefined && threeD != "undefined") {
                        $("#sp_3D_name").text(threeD[0].licenseName);
                        $("#sp_3D_info").text("第" + threeD[0].issue + "期 " + threeD[0].openWinTime);
                        $("#sp_3D_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        if (threeD[0].winNumber != null && threeD[0].winNumber.length > 0) {
                            storage.setItem("threeD_first_no", threeD[0].winNumber);
                            var a = threeD[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 1);
                            p2 = padLeft_foundation(a[1], "0", 1);
                            p3 = padLeft_foundation(a[2], "0", 1)
                        }
                        $("#sp_3D_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + '</li><div class="clear"></div></ul>')
                    }
                    var jinqiu = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 8
                    });
                    if (jinqiu != null && jinqiu != undefined && jinqiu != "undefined") {
                        $("#sp_jinqiu_name").text(jinqiu[0].licenseName);
                        $("#sp_jinqiu_info").text("第" + jinqiu[0].issue + "期 " + jinqiu[0].openWinTime);
                        $("#sp_jinqiu_winNo").html("");
                        var p1 = "0";
                        var p2 = "0";
                        var p3 = "0";
                        var p4 = "0";
                        var p5 = "0";
                        var p6 = "0";
                        var p7 = "0";
                        var p8 = "0";
                        if (jinqiu[0].winNumber != null && jinqiu[0].winNumber.length > 0) {
                            storage.setItem("jinqiu_first_no", jinqiu[0].winNumber);
                            var a = jinqiu[0].winNumber.split("-");
                            p1 = a[0];
                            p2 = a[1];
                            p3 = a[2];
                            p4 = a[3];
                            p5 = a[4];
                            p6 = a[5];
                            p7 = a[6];
                            p8 = a[7]
                        }
                        $("#sp_jinqiu_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + '</li><div class="clear"></div></ul>')
                    }
                    var banquanchang = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 7
                    });
                    if (banquanchang != null && banquanchang != undefined && banquanchang != "undefined") {
                        $("#sp_6chang_name").text(banquanchang[0].licenseName);
                        $("#sp_6chang_info").text("第" + banquanchang[0].issue + "期 " + banquanchang[0].openWinTime);
                        $("#sp_6chang_winNo").html("");
                        var p1 = "0";
                        var p2 = "0";
                        var p3 = "0";
                        var p4 = "0";
                        var p5 = "0";
                        var p6 = "0";
                        var p7 = "0";
                        var p8 = "0";
                        var p9 = "0";
                        var p10 = "0";
                        var p11 = "0";
                        var p12 = "0";
                        if (banquanchang[0].winNumber != null && banquanchang[0].winNumber.length > 0) {
                            storage.setItem("banquanchang_first_no", banquanchang[0].winNumber);
                            var a = banquanchang[0].winNumber.split("-");
                            p1 = a[0];
                            p2 = a[1];
                            p3 = a[2];
                            p4 = a[3];
                            p5 = a[4];
                            p6 = a[5];
                            p7 = a[6];
                            p8 = a[7];
                            p9 = a[8];
                            p10 = a[9];
                            p11 = a[10];
                            p12 = a[11]
                        }
                        $("#sp_6chang_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + "</li><li>" + p9 + "</li> <li>" + p10 + "</li><li>" + p11 + "</li><li>" + p12 + '</li><div class="clear"></div></ul>')
                    }
                    var shengfucai = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 5
                    });
                    if (shengfucai != null && shengfucai != undefined && shengfucai != "undefined") {
                        $("#sp_shengfucai_name").text(shengfucai[0].licenseName + "/" + "任选九场");
                        $("#sp_shengfucai_info").text("第" + shengfucai[0].issue + "期 " + shengfucai[0].openWinTime);
                        $("#sp_shengfucai_winNo").html("");
                        var p1 = "0";
                        var p2 = "0";
                        var p3 = "0";
                        var p4 = "0";
                        var p5 = "0";
                        var p6 = "0";
                        var p7 = "0";
                        var p8 = "0";
                        var p9 = "0";
                        var p10 = "0";
                        var p11 = "0";
                        var p12 = "0";
                        var p13 = "0";
                        var p14 = "0";
                        if (shengfucai[0].winNumber != null && shengfucai[0].winNumber.length > 0) {
                            storage.setItem("shengfucai_first_no", shengfucai[0].winNumber);
                            var a = shengfucai[0].winNumber.split("-");
                            p1 = a[0];
                            p2 = a[1];
                            p3 = a[2];
                            p4 = a[3];
                            p5 = a[4];
                            p6 = a[5];
                            p7 = a[6];
                            p8 = a[7];
                            p9 = a[8];
                            p10 = a[9];
                            p11 = a[10];
                            p12 = a[11];
                            p13 = a[12];
                            p14 = a[13]
                        }
                        $("#sp_shengfucai_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + "</li><li>" + p9 + "</li> <li>" + p10 + "</li><li>" + p11 + "</li><li>" + p12 + "</li><li>" + p13 + "</li><li>" + p14 + '</li><div class="clear"></div></ul>')
                    }
                    var lanqiu = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 10
                    });
                    if (lanqiu != null && lanqiu != undefined && lanqiu != "undefined") {
                        $("#sp_lanqiu_name").text(lanqiu[0].licenseName);
                        $("#sp_lanqiu_info").text(lanqiu[0].raceTime);
                        $("#sp_lanqiu_team1").html("");
                        $("#sp_lanqiu_team1").html(lanqiu[0].guestTeam);
                        $("#sp_lanqiu_team2").html("");
                        $("#sp_lanqiu_team2").html(lanqiu[0].hostTeam);
                        $("#sp_lanqiu_teamfen").html("");
                        $("#sp_lanqiu_teamfen").html(lanqiu[0].allScore)
                    }
                    var zuqiu = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 9
                    });
                    if (zuqiu != null && zuqiu != undefined && zuqiu != "undefined") {
                        $("#sp_zuqiu_name").text(zuqiu[0].licenseName);
                        $("#sp_zuqiu_info").text(zuqiu[0].raceTime);
                        $("#sp_zuqiu_team1").html("");
                        $("#sp_zuqiu_team1").html(zuqiu[0].hostTeam);
                        $("#sp_zuqiu_team2").html("");
                        $("#sp_zuqiu_team2").html(zuqiu[0].guestTeam);
                        $("#sp_zuqiu_teamfen").html("");
                        $("#sp_zuqiu_teamfen").html(zuqiu[0].allScore)
                    }
                    setTimeout(function () {
                        iscrollObj.refresh()
                    }, 300)
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_initAll_oi() {
    var t = this;
    var cmd = 1013;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var dataparm = 'rqmsg={"body":{},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null) {
                    var pailie3 = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 1
                    });
                    if (pailie3 != null && pailie3 != undefined && pailie3 != "undefined") {
                        $("#sp_pailie3_name").text(pailie3[0].licenseName);
                        $("#sp_pailie3_info").text("第" + pailie3[0].issue + "期 " + pailie3[0].openWinTime);
                        $("#sp_pailie3_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        if (pailie3[0].winNumber != null && pailie3[0].winNumber.length > 0) {
                            storage.setItem("pailie3_first_no", pailie3[0].winNumber);
                            var a = pailie3[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 1);
                            p2 = padLeft_foundation(a[1], "0", 1);
                            p3 = padLeft_foundation(a[2], "0", 1)
                        }
                        $("#sp_pailie3_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + '</li><div class="clear"></div></ul>')
                    }
                    var pailie5 = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 2
                    });
                    if (pailie5 != null && pailie5 != undefined && pailie5 != "undefined") {
                        $("#sp_pailie5_name").text(pailie5[0].licenseName);
                        $("#sp_pailie5_info").text("第" + pailie5[0].issue + "期 " + pailie5[0].openWinTime);
                        $("#sp_pailie5_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        if (pailie5[0].winNumber != null && pailie5[0].winNumber.length > 0) {
                            storage.setItem("pailie5_first_no", pailie5[0].winNumber);
                            var a = pailie5[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 1);
                            p2 = padLeft_foundation(a[1], "0", 1);
                            p3 = padLeft_foundation(a[2], "0", 1);
                            p4 = padLeft_foundation(a[3], "0", 1);
                            p5 = padLeft_foundation(a[4], "0", 1)
                        }
                        $("#sp_pailie5_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + '</li><div class="clear"></div></ul>')
                    }
                    var qixingcai = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 3
                    });
                    if (qixingcai != null && qixingcai != undefined && qixingcai != "undefined") {
                        $("#sp_qixingcai_name").text(qixingcai[0].licenseName);
                        $("#sp_qixingcai_info").text("第" + qixingcai[0].issue + "期 " + qixingcai[0].openWinTime);
                        $("#sp_qixingcai_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        var p6 = "00";
                        var p7 = "00";
                        if (qixingcai[0].winNumber != null && qixingcai[0].winNumber.length > 0) {
                            storage.setItem("qixingcai_first_no", qixingcai[0].winNumber);
                            var a = qixingcai[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 1);
                            p2 = padLeft_foundation(a[1], "0", 1);
                            p3 = padLeft_foundation(a[2], "0", 1);
                            p4 = padLeft_foundation(a[3], "0", 1);
                            p5 = padLeft_foundation(a[4], "0", 1);
                            p6 = padLeft_foundation(a[5], "0", 1);
                            p7 = padLeft_foundation(a[6], "0", 1)
                        }
                        $("#sp_qixingcai_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + "</li> <li>" + p7 + '</li><div class="clear"></div></ul>')
                    }
                    var daletou = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 4
                    });
                    if (daletou != null && daletou != undefined && daletou != "undefined") {
                        $("#sp_daletou_name").text(daletou[0].licenseName);
                        $("#sp_daletou_info").text("第" + daletou[0].issue + "期 " + daletou[0].openWinTime);
                        $("#sp_daletou_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        var p6 = "00";
                        var p7 = "00";
                        if (daletou[0].winNumber != null && daletou[0].winNumber.length > 0) {
                            storage.setItem("daletou_first_no", daletou[0].winNumber);
                            var a = daletou[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 2);
                            p2 = padLeft_foundation(a[1], "0", 2);
                            p3 = padLeft_foundation(a[2], "0", 2);
                            p4 = padLeft_foundation(a[3], "0", 2);
                            p5 = padLeft_foundation(a[4], "0", 2);
                            p6 = padLeft_foundation(a[5], "0", 2);
                            p7 = padLeft_foundation(a[6], "0", 2)
                        }
                        $("#sp_daletou_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + '</li><li class="blue">' + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>')
                    }
                    var shuangseqiu = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 11
                    });
                    if (shuangseqiu != null && shuangseqiu != undefined && shuangseqiu != "undefined") {
                        $("#sp_shuangseqiu_name").text(shuangseqiu[0].licenseName);
                        $("#sp_shuangseqiu_info").text("第" + shuangseqiu[0].issue + "期 " + shuangseqiu[0].openWinTime);
                        $("#sp_shuangseqiu_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        var p6 = "00";
                        var p7 = "00";
                        if (shuangseqiu[0].winNumber != null && shuangseqiu[0].winNumber.length > 0) {
                            storage.setItem("shuangseqiu_first_no", shuangseqiu[0].winNumber);
                            var a = shuangseqiu[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 2);
                            p2 = padLeft_foundation(a[1], "0", 2);
                            p3 = padLeft_foundation(a[2], "0", 2);
                            p4 = padLeft_foundation(a[3], "0", 2);
                            p5 = padLeft_foundation(a[4], "0", 2);
                            p6 = padLeft_foundation(a[5], "0", 2);
                            p7 = padLeft_foundation(a[6], "0", 2)
                        }
                        $("#sp_shuangseqiu_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>')
                    }
                    var qilecai = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 13
                    });
                    if (qilecai != null && qilecai != undefined && qilecai != "undefined") {
                        $("#sp_qilecai_name").text(qilecai[0].licenseName);
                        $("#sp_qilecai_info").text("第" + qilecai[0].issue + "期 " + qilecai[0].openWinTime);
                        $("#sp_qilecai_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        var p4 = "00";
                        var p5 = "00";
                        var p6 = "00";
                        var p7 = "00";
                        if (qilecai[0].winNumber != null && qilecai[0].winNumber.length > 0) {
                            storage.setItem("qilecai_first_no", qilecai[0].winNumber);
                            var a = qilecai[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 2);
                            p2 = padLeft_foundation(a[1], "0", 2);
                            p3 = padLeft_foundation(a[2], "0", 2);
                            p4 = padLeft_foundation(a[3], "0", 2);
                            p5 = padLeft_foundation(a[4], "0", 2);
                            p6 = padLeft_foundation(a[5], "0", 2);
                            p7 = padLeft_foundation(a[6], "0", 2)
                        }
                        $("#sp_qilecai_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li> <li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>')
                    }
                    var threeD = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 12
                    });
                    if (threeD != null && threeD != undefined && threeD != "undefined") {
                        $("#sp_3D_name").text(threeD[0].licenseName);
                        $("#sp_3D_info").text("第" + threeD[0].issue + "期 " + threeD[0].openWinTime);
                        $("#sp_3D_winNo").html("");
                        var p1 = "00";
                        var p2 = "00";
                        var p3 = "00";
                        if (threeD[0].winNumber != null && threeD[0].winNumber.length > 0) {
                            storage.setItem("threeD_first_no", threeD[0].winNumber);
                            var a = threeD[0].winNumber.split("-");
                            p1 = padLeft_foundation(a[0], "0", 1);
                            p2 = padLeft_foundation(a[1], "0", 1);
                            p3 = padLeft_foundation(a[2], "0", 1)
                        }
                        $("#sp_3D_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + '</li><div class="clear"></div></ul>')
                    }
                    var jinqiu = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 8
                    });
                    if (jinqiu != null && jinqiu != undefined && jinqiu != "undefined") {
                        $("#sp_jinqiu_name").text(jinqiu[0].licenseName);
                        $("#sp_jinqiu_info").text("第" + jinqiu[0].issue + "期 " + jinqiu[0].openWinTime);
                        $("#sp_jinqiu_winNo").html("");
                        var p1 = "0";
                        var p2 = "0";
                        var p3 = "0";
                        var p4 = "0";
                        var p5 = "0";
                        var p6 = "0";
                        var p7 = "0";
                        var p8 = "0";
                        if (jinqiu[0].winNumber != null && jinqiu[0].winNumber.length > 0) {
                            storage.setItem("jinqiu_first_no", jinqiu[0].winNumber);
                            var a = jinqiu[0].winNumber.split("-");
                            p1 = a[0];
                            p2 = a[1];
                            p3 = a[2];
                            p4 = a[3];
                            p5 = a[4];
                            p6 = a[5];
                            p7 = a[6];
                            p8 = a[7]
                        }
                        $("#sp_jinqiu_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + '</li><div class="clear"></div></ul>')
                    }
                    var banquanchang = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 7
                    });
                    if (banquanchang != null && banquanchang != undefined && banquanchang != "undefined") {
                        $("#sp_6chang_name").text(banquanchang[0].licenseName);
                        $("#sp_6chang_info").text("第" + banquanchang[0].issue + "期 " + banquanchang[0].openWinTime);
                        $("#sp_6chang_winNo").html("");
                        var p1 = "0";
                        var p2 = "0";
                        var p3 = "0";
                        var p4 = "0";
                        var p5 = "0";
                        var p6 = "0";
                        var p7 = "0";
                        var p8 = "0";
                        var p9 = "0";
                        var p10 = "0";
                        var p11 = "0";
                        var p12 = "0";
                        if (banquanchang[0].winNumber != null && banquanchang[0].winNumber.length > 0) {
                            storage.setItem("banquanchang_first_no", banquanchang[0].winNumber);
                            var a = banquanchang[0].winNumber.split("-");
                            p1 = a[0];
                            p2 = a[1];
                            p3 = a[2];
                            p4 = a[3];
                            p5 = a[4];
                            p6 = a[5];
                            p7 = a[6];
                            p8 = a[7];
                            p9 = a[8];
                            p10 = a[9];
                            p11 = a[10];
                            p12 = a[11]
                        }
                        $("#sp_6chang_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + "</li><li>" + p9 + "</li> <li>" + p10 + "</li><li>" + p11 + "</li><li>" + p12 + '</li><div class="clear"></div></ul>')
                    }
                    var shengfucai = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 5
                    });
                    if (shengfucai != null && shengfucai != undefined && shengfucai != "undefined") {
                        $("#sp_shengfucai_name").text(shengfucai[0].licenseName + "/" + "任选九场");
                        $("#sp_shengfucai_info").text("第" + shengfucai[0].issue + "期 " + shengfucai[0].openWinTime);
                        $("#sp_shengfucai_winNo").html("");
                        var p1 = "0";
                        var p2 = "0";
                        var p3 = "0";
                        var p4 = "0";
                        var p5 = "0";
                        var p6 = "0";
                        var p7 = "0";
                        var p8 = "0";
                        var p9 = "0";
                        var p10 = "0";
                        var p11 = "0";
                        var p12 = "0";
                        var p13 = "0";
                        var p14 = "0";
                        if (shengfucai[0].winNumber != null && shengfucai[0].winNumber.length > 0) {
                            storage.setItem("shengfucai_first_no", shengfucai[0].winNumber);
                            var a = shengfucai[0].winNumber.split("-");
                            p1 = a[0];
                            p2 = a[1];
                            p3 = a[2];
                            p4 = a[3];
                            p5 = a[4];
                            p6 = a[5];
                            p7 = a[6];
                            p8 = a[7];
                            p9 = a[8];
                            p10 = a[9];
                            p11 = a[10];
                            p12 = a[11];
                            p13 = a[12];
                            p14 = a[13]
                        }
                        $("#sp_shengfucai_winNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + "</li><li>" + p9 + "</li> <li>" + p10 + "</li><li>" + p11 + "</li><li>" + p12 + "</li><li>" + p13 + "</li><li>" + p14 + '</li><div class="clear"></div></ul>')
                    }
                    var lanqiu = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 10
                    });
                    if (lanqiu != null && lanqiu != undefined && lanqiu != "undefined") {
                        $("#sp_lanqiu_name").text(lanqiu[0].licenseName);
                        $("#sp_lanqiu_info").text(lanqiu[0].raceTime);
                        $("#sp_lanqiu_team1").html("");
                        $("#sp_lanqiu_team1").html(lanqiu[0].guestTeam);
                        $("#sp_lanqiu_team2").html("");
                        $("#sp_lanqiu_team2").html(lanqiu[0].hostTeam);
                        $("#sp_lanqiu_teamfen").html("");
                        $("#sp_lanqiu_teamfen").html(lanqiu[0].allScore)
                    }
                    var zuqiu = $.grep(json.body.lotteryDataList, function (value) {
                        return value.licenseId == 9
                    });
                    if (zuqiu != null && zuqiu != undefined && zuqiu != "undefined") {
                        $("#sp_zuqiu_name").text(zuqiu[0].licenseName);
                        $("#sp_zuqiu_info").text(zuqiu[0].raceTime);
                        $("#sp_zuqiu_team1").html("");
                        $("#sp_zuqiu_team1").html(zuqiu[0].hostTeam);
                        $("#sp_zuqiu_team2").html("");
                        $("#sp_zuqiu_team2").html(zuqiu[0].guestTeam);
                        $("#sp_zuqiu_teamfen").html("");
                        $("#sp_zuqiu_teamfen").html(zuqiu[0].allScore)
                    }
                    t.refresh()
                } else {
                    tigMessage_foundation("操作用户过多，请稍后重试!")
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function football_list_shengFu_oi() {
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "</div>";
                                if (against.result == "胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    if (against.result == "负") {
                                        temp += '<div class="part3 loss"><div>'
                                    } else {
                                        if (against.result == "平") {
                                            temp += '<div class="part3 draw"><div>'
                                        }
                                    }
                                }
                                temp += against.result + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    temp += '<div style="height:55px;"></div>';
                    $("#ulShow").html(temp);
                    iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_football_list_shengFu_oi, pulldownAction_football_list_shengFu_oi);
                    setTimeout(function () {
                        iscrollObj.refresh()
                    }, 300)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_football_list_shengFu_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "</div>";
                                if (against.result == "胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    if (against.result == "负") {
                                        temp += '<div class="part3 loss"><div>'
                                    } else {
                                        if (against.result == "平") {
                                            temp += '<div class="part3 draw"><div>'
                                        }
                                    }
                                }
                                temp += against.result + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                    // var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_football_list_shengFu_oi, pulldownAction_football_list_shengFu_oi);
                    setTimeout(function () {
                        iscrollObj.refresh()
                    }, 300);
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function football_list_rangQiu_oi() {
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"2",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "(" + against.ggScore + ")</div>";
                                if (against.result == "胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    if (against.result == "负") {
                                        temp += '<div class="part3 loss"><div>'
                                    } else {
                                        if (against.result == "平") {
                                            temp += '<div class="part3 draw"><div>'
                                        }
                                    }
                                }
                                temp += against.rqResult + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    temp += '<div style="height:55px;"></div>';
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                     iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_football_list_rangQiu_oi, pulldownAction_football_list_rangQiu_oi);
                    iscrollObj.refresh();
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_football_list_rangQiu_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"2",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "(" + against.ggScore + ")</div>";
                                if (against.result == "胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    if (against.result == "负") {
                                        temp += '<div class="part3 loss"><div>'
                                    } else {
                                        if (against.result == "平") {
                                            temp += '<div class="part3 draw"><div>'
                                        }
                                    }
                                }
                                temp += against.rqResult + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                     setTimeout(function () {
                        iscrollObj.refresh();
                    }, 300);
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function football_list_biFen_oi() {
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"5",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "</div>";
                                temp += '<div class="part3 zong"><div class="only_d">' + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    temp += '<div style="height:55px;"></div>';
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                     iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_football_list_biFen_oi, pulldownAction_football_list_biFen_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_football_list_biFen_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"5",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "</div>";
                                temp += '<div class="part3 zong"><div class="only_d">' + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                    setTimeout(function () {
                        iscrollObj.refresh();
                    }, 300);
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function football_list_zongJinQiu_oi() {
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"3",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "</div>";
                                temp += '<div class="part3 zong"><div>' + against.totalGoals + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    temp += '<div style="height:55px;"></div>';
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                     iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_football_list_zongJinQiu_oi, pulldownAction_football_list_zongJinQiu_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_football_list_zongJinQiu_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"3",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "</div>";
                                temp += '<div class="part3 zong"><div>' + against.totalGoals + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                    setTimeout(function () {
                        iscrollObj.refresh();
                    }, 300);
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function football_list_quanBanChang_oi() {
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"4",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "</div>";
                                temp += '<div class="part3 zong"><div>' + against.bqcResult + "</div><div>" +"(" + against.halfScore +")" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    temp += '<div style="height:55px;"></div>';
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                     iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_football_list_quanBanChang_oi, pulldownAction_football_list_quanBanChang_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_football_list_quanBanChang_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"9","playId":"4",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div>";
                                temp += "<span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span>";
                                temp += " </div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.hostTeam + "</div>";
                                temp += '<div class="part3 zong"><div>' + against.bqcResult + "</div><div>" +"(" + against.halfScore +")" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.guestTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                    setTimeout(function () {
                        iscrollObj.refresh();
                    }, 300);
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function basketball_list_shengFu_oi() {
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"10","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div><span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span></div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.guestTeam + "</div>";
                                if (against.result == "主胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    temp += '<div class="part3 loss"><div>'
                                }
                                temp += against.result + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.hostTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    temp += '<div style="height:55px;"></div>';
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                     iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_basketball_list_shengFu_oi, pulldownAction_basketball_list_shengFu_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_basketball_list_shengFu_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"10","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div><span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span></div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.guestTeam + "</div>";
                                if (against.result == "主胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    temp += '<div class="part3 loss"><div>'
                                }
                                temp += against.result + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.hostTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                    setTimeout(function () {
                        iscrollObj.refresh();
                    }, 300);
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function basketball_list_rangFen_oi() {
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"10","playId":"2",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div><span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span></div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.guestTeam + "(" + against.ggScore.split(",")[0] + ")</div>";
                                if (against.result == "主胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    temp += '<div class="part3 loss"><div>'
                                }
                                temp += against.result + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.hostTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    temp += '<div style="height:55px;"></div>';
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                     iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_basketball_list_rangFen_oi, pulldownAction_basketball_list_rangFen_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_basketball_list_rangFen_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"10","playId":"2",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div><span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span></div>";
                                temp += " </div>";
                                temp += '<div class="part2">' + against.guestTeam + "(" + against.ggScore.split(",")[0] + ")</div>";
                                if (against.result == "主胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    temp += '<div class="part3 loss"><div>'
                                }
                                temp += against.result + "</div><div>" + against.allScore + "</div></div>";
                                temp += '<div class="part4">' + against.hostTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                    setTimeout(function () {
                        iscrollObj.refresh();
                    }, 300);
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function basketball_list_shengFenCha_oi() {
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"10","playId":"3",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div><span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span></div>";
                                temp += " </div>";
                                temp += '<div class="part2 wh">' + against.guestTeam + "</div>";
                                if (against.result == "主胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    temp += '<div class="part3 loss"><div>'
                                }
                                temp += against.scoreDifference.split(",")[0] + "</div> <div>" + against.scoreDifference.split(",")[1] + "</div></div>";
                                temp += '<div class="part5">' + against.allScore + "</div>";
                                temp += '<div class="part4 wh">' + against.hostTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    temp += '<div style="height:55px;"></div>';
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                     iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_basketball_list_shengFenCha_oi, pulldownAction_basketball_list_shengFenCha_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_basketball_list_shengFenCha_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"10","playId":"3",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div><span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span></div>";
                                temp += " </div>";
                                temp += '<div class="part2 wh">' + against.guestTeam + "</div>";
                                if (against.result == "主胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    temp += '<div class="part3 loss"><div>'
                                }
                                temp += against.scoreDifference.split(",")[0] + "</div> <div>" + against.scoreDifference.split(",")[1] + "</div></div>";
                                temp += '<div class="part5">' + against.allScore + "</div>";
                                temp += '<div class="part4 wh">' + against.hostTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                    setTimeout(function () {
                        iscrollObj.refresh();
                    }, 300);
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function basketball_list_daXiaoFen_oi() {
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"10","playId":"4",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div><span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span></div>";
                                temp += " </div>";
                                temp += '<div class="part2 wh">' + against.guestTeam + "</div>";
                                if (against.result == "主胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    temp += '<div class="part3 loss"><div>'
                                }
                                temp += against.daxiaofen + "</div> <div>" + against.allScore + "</div></div>";
                                temp += '<div class="part5">' + against.ggScore.split(",")[1] + "</div>";
                                temp += '<div class="part4 wh">' + against.hostTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    temp += '<div style="height:55px;"></div>';
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                     iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_basketball_list_daXiaoFen_oi, pulldownAction_basketball_list_daXiaoFen_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_basketball_list_daXiaoFen_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 3;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    if ($("#spMyDate").text() != null && $("#spMyDate").text() != undefined && $("#spMyDate").text() != "") {
        startDate = $("#spMyDate").text();
        $("#ulShow").html("")
    }
    var dataparm = 'rqmsg={"body":{"licenseId":"10","playId":"4",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += " <h1>" + value.date + " " + value.raceNum + "场开奖比赛</h1>";
                        if (value.lotteryInfoList != null && value.lotteryInfoList.length > 0) {
                            var allInfo = value.lotteryInfoList;
                            $.each(allInfo, function (n, v) {
                                var against = v.againstList[0];
                                temp += "<li>";
                                temp += '<div class="part1">';
                                temp += "<div>" + against.leagueName + "</div>";
                                temp += "<div><span>" + against.number + "</span>&nbsp;<span>" + against.betEndTime + "</span></div>";
                                temp += " </div>";
                                temp += '<div class="part2 wh">' + against.guestTeam + "</div>";
                                if (against.result == "主胜") {
                                    temp += '<div class="part3 win"><div>'
                                } else {
                                    temp += '<div class="part3 loss"><div>'
                                }
                                temp += against.daxiaofen + "</div> <div>" + against.allScore + "</div></div>";
                                temp += '<div class="part5">' + against.ggScore.split(",")[1] + "</div>";
                                temp += '<div class="part4 wh">' + against.hostTeam + "</div>";
                                temp += '<div class="clear"></div>';
                                temp += "</li>"
                            })
                        }
                    });
                    $("#ulShow").html("");
                    $("#ulShow").html(temp);
                    setTimeout(function () {
                        iscrollObj.refresh();
                    }, 300);
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function shengfuOpen_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"5","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("shengfucai_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName + "/" + "任选九场");
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1" ontouchend="    this.s || windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0" class="ui-btn ui-btn-icon-right ui-icon-carat-r"  data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_sf">'
                        } else {
                            temp += '<div class="choose_sf no-bg">'
                        }
                        temp += "<ul><li>" + no[0] + "</li><li>" + no[1] + "</li><li>" + no[2] + "</li><li>" + no[3] + "</li><li>" + no[4] + "</li><li>" + no[5] + "</li><li>" + no[6] + "</li><li>" + no[7] + "</li><li>" + no[8] + "</li><li>" + no[9] + "</li><li>" + no[10] + "</li><li>" + no[11] + "</li><li>" + no[12] + "</li><li>" + no[13] + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ulShengFu").html("");
                    $("#ulShengFu").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_shengfuOpen_list_oi, pullupAction__shengfuOpen_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_shengfuOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"5","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("shengfucai_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName + "/" + "任选九场");
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1" ontouchend="    this.s || windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0" class="ui-btn ui-btn-icon-right ui-icon-carat-r"  data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_sf">'
                        } else {
                            temp += '<div class="choose_sf no-bg">'
                        }
                        temp += "<ul><li>" + no[0] + "</li><li>" + no[1] + "</li><li>" + no[2] + "</li><li>" + no[3] + "</li><li>" + no[4] + "</li><li>" + no[5] + "</li><li>" + no[6] + "</li><li>" + no[7] + "</li><li>" + no[8] + "</li><li>" + no[9] + "</li><li>" + no[10] + "</li><li>" + no[11] + "</li><li>" + no[12] + "</li><li>" + no[13] + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ulShengFu").html("");
                    $("#ulShengFu").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction__shengfuOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"5","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("shengfucai_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1" ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_sf">'
                        } else {
                            temp += '<div class="choose_sf no-bg">'
                        }
                        temp += "<ul><li>" + no[0] + "</li><li>" + no[1] + "</li><li>" + no[2] + "</li><li>" + no[3] + "</li><li>" + no[4] + "</li><li>" + no[5] + "</li><li>" + no[6] + "</li><li>" + no[7] + "</li><li>" + no[8] + "</li><li>" + no[9] + "</li><li>" + no[10] + "</li><li>" + no[11] + "</li><li>" + no[12] + "</li><li>" + no[13] + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ulShengFu").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function shengfuOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"5","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName + "/" +"任选九场");
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                var p8 = "0";
                var p9 = "0";
                var p10 = "0";
                var p11 = "0";
                var p12 = "0";
                var p13 = "0";
                var p14 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = a[0];
                    p2 = a[1];
                    p3 = a[2];
                    p4 = a[3];
                    p5 = a[4];
                    p6 = a[5];
                    p7 = a[6];
                    p8 = a[7];
                    p9 = a[8];
                    p10 = a[9];
                    p11 = a[10];
                    p12 = a[11];
                    p13 = a[12];
                    p14 = a[13]
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + "</li><li>" + p9 + "</li> <li>" + p10 + "</li><li>" + p11 + "</li><li>" + p12 + "</li><li>" + p13 + "</li><li>" + p14 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_shengfuOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"5","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName + "/" + "任选九场");
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                var p8 = "0";
                var p9 = "0";
                var p10 = "0";
                var p11 = "0";
                var p12 = "0";
                var p13 = "0";
                var p14 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = a[0];
                    p2 = a[1];
                    p3 = a[2];
                    p4 = a[3];
                    p5 = a[4];
                    p6 = a[5];
                    p7 = a[6];
                    p8 = a[7];
                    p9 = a[8];
                    p10 = a[9];
                    p11 = a[10];
                    p12 = a[11];
                    p13 = a[12];
                    p14 = a[13]
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + "</li><li>" + p9 + "</li> <li>" + p10 + "</li><li>" + p11 + "</li><li>" + p12 + "</li><li>" + p13 + "</li><li>" + p14 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function half6Open_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"7","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("banquanchang_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1" ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_sf">'
                        } else {
                            temp += '<div class="choose_sf no-bg">'
                        }
                        temp += "<ul><li>" + no[0] + "</li><li>" + no[1] + "</li><li>" + no[2] + "</li><li>" + no[3] + "</li><li>" + no[4] + "</li><li>" + no[5] + "</li><li>" + no[6] + "</li><li>" + no[7] + "</li><li>" + no[8] + "</li><li>" + no[9] + "</li><li>" + no[10] + "</li><li>" + no[11] + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ulHalf6").html("");
                    $("#ulHalf6").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_half6Open_list_oi, pullupAction_half6Open_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_half6Open_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"7","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("banquanchang_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_sf">'
                        } else {
                            temp += '<div class="choose_sf no-bg">'
                        }
                        temp += "<ul><li>" + no[0] + "</li><li>" + no[1] + "</li><li>" + no[2] + "</li><li>" + no[3] + "</li><li>" + no[4] + "</li><li>" + no[5] + "</li><li>" + no[6] + "</li><li>" + no[7] + "</li><li>" + no[8] + "</li><li>" + no[9] + "</li><li>" + no[10] + "</li><li>" + no[11] + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ulHalf6").html("");
                    $("#ulHalf6").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction_half6Open_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"7","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("banquanchang_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_sf">'
                        } else {
                            temp += '<div class="choose_sf no-bg">'
                        }
                        temp += "<ul><li>" + no[0] + "</li><li>" + no[1] + "</li><li>" + no[2] + "</li><li>" + no[3] + "</li><li>" + no[4] + "</li><li>" + no[5] + "</li><li>" + no[6] + "</li><li>" + no[7] + "</li><li>" + no[8] + "</li><li>" + no[9] + "</li><li>" + no[10] + "</li><li>" + no[11] + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ulHalf6").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function half6Open_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"7","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                var p8 = "0";
                var p9 = "0";
                var p10 = "0";
                var p11 = "0";
                var p12 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = a[0];
                    p2 = a[1];
                    p3 = a[2];
                    p4 = a[3];
                    p5 = a[4];
                    p6 = a[5];
                    p7 = a[6];
                    p8 = a[7];
                    p9 = a[8];
                    p10 = a[9];
                    p11 = a[10];
                    p12 = a[11]
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + "</li><li>" + p9 + "</li> <li>" + p10 + "</li><li>" + p11 + "</li><li>" + p12 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_half6Open_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"7","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                var p8 = "0";
                var p9 = "0";
                var p10 = "0";
                var p11 = "0";
                var p12 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = a[0];
                    p2 = a[1];
                    p3 = a[2];
                    p4 = a[3];
                    p5 = a[4];
                    p6 = a[5];
                    p7 = a[6];
                    p8 = a[7];
                    p9 = a[8];
                    p10 = a[9];
                    p11 = a[10];
                    p12 = a[11]
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + "</li><li>" + p9 + "</li> <li>" + p10 + "</li><li>" + p11 + "</li><li>" + p12 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function jinQiuOpen_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"8","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("jinqiu_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_sf">'
                        } else {
                            temp += '<div class="choose_sf no-bg">'
                        }
                        temp += "<ul><li>" + no[0] + "</li><li>" + no[1] + "</li><li>" + no[2] + "</li><li>" + no[3] + "</li><li>" + no[4] + "</li><li>" + no[5] + "</li><li>" + no[6] + "</li><li>" + no[7] + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ul4ball").html("");
                    $("#ul4ball").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_jinQiuOpen_list_oi, pullupAction_jinQiuOpen_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_jinQiuOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"8","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("jinqiu_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_sf">'
                        } else {
                            temp += '<div class="choose_sf no-bg">'
                        }
                        temp += "<ul><li>" + no[0] + "</li><li>" + no[1] + "</li><li>" + no[2] + "</li><li>" + no[3] + "</li><li>" + no[4] + "</li><li>" + no[5] + "</li><li>" + no[6] + "</li><li>" + no[7] + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ul4ball").html("");
                    $("#ul4ball").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction_jinQiuOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"8","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("jinqiu_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_sf">'
                        } else {
                            temp += '<div class="choose_sf no-bg">'
                        }
                        temp += "<ul><li>" + no[0] + "</li><li>" + no[1] + "</li><li>" + no[2] + "</li><li>" + no[3] + "</li><li>" + no[4] + "</li><li>" + no[5] + "</li><li>" + no[6] + "</li><li>" + no[7] + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ul4ball").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function jinQiuOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"8","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                var p8 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = a[0];
                    p2 = a[1];
                    p3 = a[2];
                    p4 = a[3];
                    p5 = a[4];
                    p6 = a[5];
                    p7 = a[6];
                    p8 = a[7]
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_jinQiuOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"8","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                var p8 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = a[0];
                    p2 = a[1];
                    p3 = a[2];
                    p4 = a[3];
                    p5 = a[4];
                    p6 = a[5];
                    p7 = a[6];
                    p8 = a[7]
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li><li>" + p5 + "</li> <li>" + p6 + "</li><li>" + p7 + "</li><li>" + p8 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pailie3Open_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"1","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("pailie3_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ulPailie3").html("");
                    $("#ulPailie3").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_pailie3Open_list_oi, pullupAction_pailie3Open_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_pailie3Open_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"1","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("pailie3_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ulPailie3").html("");
                    $("#ulPailie3").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction_pailie3Open_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"1","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("pailie3_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ulPailie3").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pailie3Open_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"1","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 1);
                    p2 = padLeft_foundation(a[1], "0", 1);
                    p3 = padLeft_foundation(a[2], "0", 1)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_pailie3Open_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"1","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 1);
                    p2 = padLeft_foundation(a[1], "0", 1);
                    p3 = padLeft_foundation(a[2], "0", 1)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pailie5Open_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"2","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("pailie5_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + "</li><li>" + padLeft_foundation(no[3], "0", 1) + "</li><li>" + padLeft_foundation(no[4], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ulPailie5").html("");
                    $("#ulPailie5").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_pailie5Open_list_oi, pullupAction_pailie5Open_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_pailie5Open_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"2","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("pailie5_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + "</li><li>" + padLeft_foundation(no[3], "0", 1) + "</li><li>" + padLeft_foundation(no[4], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ulPailie5").html("");
                    $("#ulPailie5").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction_pailie5Open_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"2","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("pailie5_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + "</li><li>" + padLeft_foundation(no[3], "0", 1) + "</li><li>" + padLeft_foundation(no[4], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ulPailie5").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pailie5Open_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"2","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 1);
                    p2 = padLeft_foundation(a[1], "0", 1);
                    p3 = padLeft_foundation(a[2], "0", 1);
                    p4 = padLeft_foundation(a[3], "0", 1);
                    p5 = padLeft_foundation(a[4], "0", 1)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_pailie5Open_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"2","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 1);
                    p2 = padLeft_foundation(a[1], "0", 1);
                    p3 = padLeft_foundation(a[2], "0", 1);
                    p4 = padLeft_foundation(a[3], "0", 1);
                    p5 = padLeft_foundation(a[4], "0", 1)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function qixingcaiOpen_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"3","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("qixingcai_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + "</li><li>" + padLeft_foundation(no[3], "0", 1) + "</li><li>" + padLeft_foundation(no[4], "0", 1) + "</li><li>" + padLeft_foundation(no[5], "0", 1) + "</li><li>" + padLeft_foundation(no[6], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ulQixingcai").html("");
                    $("#ulQixingcai").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_qixingcaiOpen_list_oi, pullupAction_qixingcaiOpen_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_qixingcaiOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"3","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("qixingcai_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + "</li><li>" + padLeft_foundation(no[3], "0", 1) + "</li><li>" + padLeft_foundation(no[4], "0", 1) + "</li><li>" + padLeft_foundation(no[5], "0", 1) + "</li><li>" + padLeft_foundation(no[6], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ulQixingcai").html("");
                    $("#ulQixingcai").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction_qixingcaiOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"3","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("qixingcai_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + "</li><li>" + padLeft_foundation(no[3], "0", 1) + "</li><li>" + padLeft_foundation(no[4], "0", 1) + "</li><li>" + padLeft_foundation(no[5], "0", 1) + "</li><li>" + padLeft_foundation(no[6], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ulQixingcai").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function qixingcaiOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"3","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 1);
                    p2 = padLeft_foundation(a[1], "0", 1);
                    p3 = padLeft_foundation(a[2], "0", 1);
                    p4 = padLeft_foundation(a[3], "0", 1);
                    p5 = padLeft_foundation(a[4], "0", 1);
                    p6 = padLeft_foundation(a[5], "0", 1);
                    p7 = padLeft_foundation(a[6], "0", 1)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + "</li> <li>" + p7 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_qixingcaiOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"3","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 1);
                    p2 = padLeft_foundation(a[1], "0", 1);
                    p3 = padLeft_foundation(a[2], "0", 1);
                    p4 = padLeft_foundation(a[3], "0", 1);
                    p5 = padLeft_foundation(a[4], "0", 1);
                    p6 = padLeft_foundation(a[5], "0", 1);
                    p7 = padLeft_foundation(a[6], "0", 1)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + "</li> <li>" + p7 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function daletouOpen_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"4","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("daletou_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 2) + "</li><li>" + padLeft_foundation(no[1], "0", 2) + "</li><li>" + padLeft_foundation(no[2], "0", 2) + "</li><li>" + padLeft_foundation(no[3], "0", 2) + "</li><li>" + padLeft_foundation(no[4], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[5], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[6], "0", 2) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ulDaletou").html("");
                    $("#ulDaletou").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_daletouOpen_list_oi, pullupAction_daletouOpen_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_daletouOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"4","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("daletou_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 2) + "</li><li>" + padLeft_foundation(no[1], "0", 2) + "</li><li>" + padLeft_foundation(no[2], "0", 2) + "</li><li>" + padLeft_foundation(no[3], "0", 2) + "</li><li>" + padLeft_foundation(no[4], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[5], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[6], "0", 2) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ulDaletou").html("");
                    $("#ulDaletou").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction_daletouOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"4","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("daletou_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 2) + "</li><li>" + padLeft_foundation(no[1], "0", 2) + "</li><li>" + padLeft_foundation(no[2], "0", 2) + "</li><li>" + padLeft_foundation(no[3], "0", 2) + "</li><li>" + padLeft_foundation(no[4], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[5], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[6], "0", 2) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ulDaletou").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function daletouOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"4","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 2);
                    p2 = padLeft_foundation(a[1], "0", 2);
                    p3 = padLeft_foundation(a[2], "0", 2);
                    p4 = padLeft_foundation(a[3], "0", 2);
                    p5 = padLeft_foundation(a[4], "0", 2);
                    p6 = padLeft_foundation(a[5], "0", 2);
                    p7 = padLeft_foundation(a[6], "0", 2)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + '</li><li class="blue">' + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_daletouOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"4","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 2);
                    p2 = padLeft_foundation(a[1], "0", 2);
                    p3 = padLeft_foundation(a[2], "0", 2);
                    p4 = padLeft_foundation(a[3], "0", 2);
                    p5 = padLeft_foundation(a[4], "0", 2);
                    p6 = padLeft_foundation(a[5], "0", 2);
                    p7 = padLeft_foundation(a[6], "0", 2)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + '</li><li class="blue">' + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function shuangseqiuOpen_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"11","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("shuangseqiu_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 2) + "</li><li>" + padLeft_foundation(no[1], "0", 2) + "</li><li>" + padLeft_foundation(no[2], "0", 2) + "</li><li>" + padLeft_foundation(no[3], "0", 2) + "</li><li>" + padLeft_foundation(no[4], "0", 2) + "</li><li>" + padLeft_foundation(no[5], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[6], "0", 2) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ulShuangseqiu").html("");
                    $("#ulShuangseqiu").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_shuangseqiuOpen_list_oi, pullupAction_shuangseqiuOpen_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_shuangseqiuOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"11","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("shuangseqiu_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 2) + "</li><li>" + padLeft_foundation(no[1], "0", 2) + "</li><li>" + padLeft_foundation(no[2], "0", 2) + "</li><li>" + padLeft_foundation(no[3], "0", 2) + "</li><li>" + padLeft_foundation(no[4], "0", 2) + "</li><li>" + padLeft_foundation(no[5], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[6], "0", 2) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ulShuangseqiu").html("");
                    $("#ulShuangseqiu").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction_shuangseqiuOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"11","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("shuangseqiu_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 2) + "</li><li>" + padLeft_foundation(no[1], "0", 2) + "</li><li>" + padLeft_foundation(no[2], "0", 2) + "</li><li>" + padLeft_foundation(no[3], "0", 2) + "</li><li>" + padLeft_foundation(no[4], "0", 2) + "</li><li>" + padLeft_foundation(no[5], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[6], "0", 2) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ulShuangseqiu").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function shuangseqiuOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"11","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 2);
                    p2 = padLeft_foundation(a[1], "0", 2);
                    p3 = padLeft_foundation(a[2], "0", 2);
                    p4 = padLeft_foundation(a[3], "0", 2);
                    p5 = padLeft_foundation(a[4], "0", 2);
                    p6 = padLeft_foundation(a[5], "0", 2);
                    p7 = padLeft_foundation(a[6], "0", 2)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_shuangseqiuOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"11","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 2);
                    p2 = padLeft_foundation(a[1], "0", 2);
                    p3 = padLeft_foundation(a[2], "0", 2);
                    p4 = padLeft_foundation(a[3], "0", 2);
                    p5 = padLeft_foundation(a[4], "0", 2);
                    p6 = padLeft_foundation(a[5], "0", 2);
                    p7 = padLeft_foundation(a[6], "0", 2)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function qilecaiOpen_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"13","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("qilecai_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 2) + "</li><li>" + padLeft_foundation(no[1], "0", 2) + "</li><li>" + padLeft_foundation(no[2], "0", 2) + "</li><li>" + padLeft_foundation(no[3], "0", 2) + "</li><li>" + padLeft_foundation(no[4], "0", 2) + "</li><li>" + padLeft_foundation(no[5], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[6], "0", 2) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ulQilecai").html("");
                    $("#ulQilecai").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_qilecaiOpen_list_oi, pullupAction_qilecaiOpen_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_qilecaiOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"13","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("qilecai_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 2) + "</li><li>" + padLeft_foundation(no[1], "0", 2) + "</li><li>" + padLeft_foundation(no[2], "0", 2) + "</li><li>" + padLeft_foundation(no[3], "0", 2) + "</li><li>" + padLeft_foundation(no[4], "0", 2) + "</li><li>" + padLeft_foundation(no[5], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[6], "0", 2) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ulQilecai").html("");
                    $("#ulQilecai").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction_qilecaiOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"13","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("qilecai_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 2) + "</li><li>" + padLeft_foundation(no[1], "0", 2) + "</li><li>" + padLeft_foundation(no[2], "0", 2) + "</li><li>" + padLeft_foundation(no[3], "0", 2) + "</li><li>" + padLeft_foundation(no[4], "0", 2) + "</li><li>" + padLeft_foundation(no[5], "0", 2) + '</li><li class="blue">' + padLeft_foundation(no[6], "0", 2) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ulQilecai").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function qilecaiOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"13","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 2);
                    p2 = padLeft_foundation(a[1], "0", 2);
                    p3 = padLeft_foundation(a[2], "0", 2);
                    p4 = padLeft_foundation(a[3], "0", 2);
                    p5 = padLeft_foundation(a[4], "0", 2);
                    p6 = padLeft_foundation(a[5], "0", 2);
                    p7 = padLeft_foundation(a[6], "0", 2)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pulldownAction_qilecaiOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"13","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                var p4 = "0";
                var p5 = "0";
                var p6 = "0";
                var p7 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 2);
                    p2 = padLeft_foundation(a[1], "0", 2);
                    p3 = padLeft_foundation(a[2], "0", 2);
                    p4 = padLeft_foundation(a[3], "0", 2);
                    p5 = padLeft_foundation(a[4], "0", 2);
                    p6 = padLeft_foundation(a[5], "0", 2);
                    p7 = padLeft_foundation(a[6], "0", 2)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + "</li><li>" + p4 + "</li> <li>" + p5 + "</li><li>" + p6 + '</li> <li class="blue">' + p7 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function threeDOpen_list_oi() {
    $("#spPage_recharge").text("");
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"12","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("threeD_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#ul3D").html("");
                    $("#ul3D").html(temp);
                    var iscrollObj = iscrollAssist.newVerScrollForPull($("#wrapper_isroll"), pulldownAction_threeDOpen_list_oi, pullupAction_threeDOpen_list_oi);
                    iscrollObj.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_threeDOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"12","playId":"1",';
    dataparm += '"pageIndex":"0",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("threeD_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text("");
                    $("#ul3D").html("");
                    $("#ul3D").html(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function pullupAction_threeDOpen_list_oi() {
    var t = this;
    var cmd = 1014;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var pageNo = $("#spPage_recharge").text();
    if (pageNo == null || pageNo == undefined || pageNo == "") {
        pageNo = 2
    } else {
        pageNo++
    }
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"12","playId":"1",';
    dataparm += '"pageIndex":"' + pageNo + '",';
    dataparm += ' "pageSize":"' + pageSize + '",';
    dataparm += '"sDate":"' + startDate + '","eDate":"' + endDate + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                var first_no = storage.getItem("threeD_first_no");
                if (json.body.lotteryDataList != null && json.body.lotteryDataList.length > 0) {
                    var allList = json.body.lotteryDataList;
                    $("#spName").text(allList[0].licenseName);
                    var temp = "";
                    $.each(allList, function (index, value) {
                        var no = value.winNumber.split("-");
                        var linkUrl = "final_display.html?q=" + value.issue;
                        temp += '<li><a ontouchmove="this.s = 1"   ontouchend="this.s ||windowChangePage_foundation(\'' + linkUrl + '\'), this.s = 0"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide">';
                        temp += '<div class="center">';
                        temp += '<div class="center-t open_list_lf"> 第' + value.issue + "期 </div>";
                        temp += '<div class="center-r"> ' + value.openWinTime + "</div>";
                        temp += '<div class="clear"></div>';
                        if (first_no != null && first_no == value.winNumber) {
                            temp += '<div class="choose_no">'
                        } else {
                            temp += '<div class="choose_no no-bg">'
                        }
                        temp += "<ul><li>" + padLeft_foundation(no[0], "0", 1) + "</li><li>" + padLeft_foundation(no[1], "0", 1) + "</li><li>" + padLeft_foundation(no[2], "0", 1) + '</li><div class="clear"></div> </ul></div>';
                        temp += "</div></a></li>"
                    });
                    $("#spPage_recharge").text(pageNo);
                    $("#ul3D").append(temp);
                    t.refresh()
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
function threeDOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"12","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 1);
                    p2 = padLeft_foundation(a[1], "0", 1);
                    p3 = padLeft_foundation(a[2], "0", 1)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function pulldownAction_threeDOpen_detail_oi() {
    var q = getQueryString_foundation("q");
    if (q == "undefined" || q == undefined || q == null || q == "") {
        tigMessage_foundation("未获取相关信息");
        return
    }
    var cmd = 1015;
    var pageSize = 10;
    var storage = window.localStorage;
    var userid = storage.getItem("userid");
    var date = new Date();
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    var a = mydate.getDate() - 2;
    var dat = new Date((+date) - 2 * 24 * 3600 * 1000);
    var startDate = "";
    var endDate = "";
    var dataparm = 'rqmsg={"body":{"licenseId":"12","issue":"' + q + '"},';
    dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 30000,
        dataFilter: function (json) {
            return json
        },
        success: function (json, textStatus) {
            if (json.head.retCode == "100000") {
                var shengfucai = json.body;
                $("#spName").text(shengfucai.licenseName);
                $("#spInfo").text("第" + shengfucai.issue + "期 " + shengfucai.openWinTime);
                $("#spNo").html("");
                var p1 = "0";
                var p2 = "0";
                var p3 = "0";
                if (shengfucai.bonusNumber != null && shengfucai.bonusNumber.length > 0) {
                    var a = shengfucai.bonusNumber.split("-");
                    p1 = padLeft_foundation(a[0], "0", 1);
                    p2 = padLeft_foundation(a[1], "0", 1);
                    p3 = padLeft_foundation(a[2], "0", 1)
                }
                $("#spNo").html("<ul><li>" + p1 + "</li><li>" + p2 + "</li> <li>" + p3 + '</li><div class="clear"></div></ul>');
                if (json.body.datails != null && json.body.datails.length > 0) {
                    var allList = json.body.datails;
                    var temp = "";
                    $.each(allList, function (index, value) {
                        temp += '<div class="ui-grid-b">';
                        temp += '<div class="ui-block-a"><span>' + value.awards + "</span></div>";
                        temp += '<div class="ui-block-b"><span>' + value.noteNumber + "</span></div>";
                        temp += '<div class="ui-block-c"><span>' + value.noteMoney + "</span></div>";
                        temp += "</div>"
                    });
                    $("#divDetail").html(' <div class="ui-grid-b head_bg"><div class="ui-block-a"><span>奖项</span></div><div class="ui-block-b"><span>中奖注数</span></div><div class="ui-block-c"><span>每注金额（元）</span></div></div>');
                    $("#divDetail").append(temp)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    });
    this.refresh()
}
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var myDateOpt1 = {
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
        pulldownAction_football_list_shengFu_oi()
    }
};
var myDateOpt2 = {
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
        pulldownAction_football_list_quanBanChang_oi()
    }
};
var myDateOpt3 = {
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
        pulldownAction_football_list_biFen_oi()
    }
};
var myDateOpt4 = {
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
        pulldownAction_football_list_rangQiu_oi()
    }
};
var myDateOpt5 = {
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
        pulldownAction_football_list_zongJinQiu_oi()
    }
};
var myDateOpt6 = {
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
        pulldownAction_basketball_list_daXiaoFen_oi()
    }
};
var myDateOpt7 = {
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
        pulldownAction_basketball_list_rangFen_oi()
    }
};
var myDateOpt8 = {
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
        pulldownAction_basketball_list_shengFu_oi()
    }
};
var myDateOpt9 = {
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
        pulldownAction_basketball_list_shengFenCha_oi()
    }
};