function userLoginIn_foundation(username, userpwd) {
    var u = $("#" + username).val();
    var p = $("#" + userpwd).val();
    if (u == "undefined" || u == undefined || u == null || u == "") {
        tigMessage_foundation("请填写用户名");
        return
    }
    if (p == "undefined" || p == undefined || p == null || p == "") {
        tigMessage_foundation("请填写密码");
        return
    }
    var dataparm = 'rqmsg={"body":{"loginName":"' + u + '","password":"' + p + '"},"head":{"cmd":1004,"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 3000,
        dataFilter: function(json) {
            return json
        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                var storage = window.localStorage;
                storage.setItem("userid", json.body.userId);
                storage.setItem("storeId", json.body.storeId);
                storage.setItem("token", json.head.token);
                storage.setItem("Name", u);
                storage.setItem("Pwd", p);
                storage.setItem("IDNumber", json.body.IDNumber);
                storage.setItem("storeName", json.body.storeName);
                storage.setItem("availableBalance", json.body.availableBalance);
                storage.setItem("bCardFlag", json.body.bCardFlag);
                storage.setItem("bankCard", json.body.bankCard);
                storage.setItem("bankName", json.body.bankName);
                storage.setItem("branchName", json.body.branchName);
                storage.setItem("phoneFlag", json.body.phoneFlag);
                storage.setItem("phoneNumber", json.body.phoneNumber);
                storage.setItem("realName", json.body.realName);
                storage.setItem("transPassFlag", json.body.transPassFlag);
                storage.setItem("verifiedFlag", json.body.verifiedFlag);
                userid = json.body.userId;
                if (getQueryString_foundation("type") == "outTicket") {
                    var r = "";
                    if (getQueryString("u") == "football" || getQueryString("u") == "basketball") {
                        r = "&CheckID=" + getQueryString("CheckID") + "&refAddress=" + getQueryString("refAddress");
                    }
                    window.location.href = "../buy_tickets/" + getQueryString_foundation("u") + "/out_tickets.html?multiple=" + getQueryString_foundation("multiple") + "&issueNum=" + getQueryString_foundation("issueNum") + r;
                } else {
                    windowChangePage_foundation("user.html?storeId=" + json.body.storeId)
                }
            } else {
                tigMessage_foundation(json.head.retDesc)
            }
            return
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}
function userLoginOut_foundation() {
    var dataparm = 'rqmsg={"body":{},"head":{"cmd":1038,"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 3000,
        dataFilter: function(json) {
            return json
        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000" || json.head.retCode == "100001") {
                if (window.localStorage.getItem("userid") != null) {
                    window.localStorage.removeItem("userid")
                }
                if (window.localStorage.getItem("storeId") != null) {
                    window.localStorage.removeItem("storeId")
                }
                window.localStorage.clear();
                windowChangePage_foundation("login.html")
            } else {
                tigMessage(json.head.retDesc)
            }
        }
    })
}
function createVFCode_foundation(phone) {
    var code = "";
    var isMobile = /^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
        return code
    } else {
        if (!isMobile.test(phone)) {
            return code
        }
    }
    var dataparm = 'rqmsg={"body":{"phone":"' + phone + '"},"head":{"cmd":1001,"id":"' + randomCmdNum_foundation() + '","token":""}}';
    $.ajax({
        url: getApiUrl_foundation(),
        data: dataparm,
        async: false,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "success_jsonp",
        timeout: 3000,
        dataFilter: function(json) {
            return json
        },
        success: function(json, textStatus) {
            if (json.head.retCode == "100000") {
                code = json.head.retDesc
            } else {}
            return code
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            return code
        }
    });
    return code
}
function getToken_foundation() {
    var storage = window.localStorage;
    var token = storage.getItem("token");
    if (token != null) {
        return token
    } else {
        return ""
    }
}
function getQueryString_foundation(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2])
    }
    return null
}
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
function randomCmdNum_foundation() {
    var mydatet = new Date();
    var s = mydatet.getFullYear().toString() + parseInt(mydatet.getMonth() + 1).toString() + mydatet.getDate().toString() + mydatet.getHours().toString() + mydatet.getMinutes().toString() + mydatet.getSeconds().toString() + getRandom_foundation(10000).toString();
    return s
}
function getRandom_foundation(n) {
    return Math.floor(Math.random() * n)
}
function getApiUrl_foundation() {
    //return "http://115.28.236.76:7077/mobile/request.do"
    return "http://123.57.11.15:7077/mobile/request.do";
}
function changePage_foundation(u) {
    $.mobile.changePage(u + "?timespan=" + Date.parse(new Date()), {
        transition: "slideleft"
    })
}
function windowChangePage_foundation(t) {
    if (t.indexOf("?") > -1) {
        window.location.href = t + "&timespan=" + Date.parse(new Date())
    } else {
        window.location.href = t + "?timespan=" + Date.parse(new Date())
    }
}
function padLeft_foundation(str, padChar, width) {
    var ret = str;
    while (ret.length < width) {
        if (ret.length + padChar.length < width) {
            ret = padChar + ret
        } else {
            ret = padChar.substring(0, width - ret.length) + ret
        }
    }
    return ret
};