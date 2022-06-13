function forgetPassword_reset_ma() {
    //var sign = $("#sign").val();
    var userName = $("#userName").val();
    var phone = $("#phone").val();
//    if (sign == null || sign == undefined || sign == "undefined" || sign == "" || userName == null || userName == undefined || userName == "undefined" || userName == "" || phone == null || phone == undefined || phone == "undefined" || phone == "") {
//        tigMessage_foundation("获取参数失败,您可能不是从正常路径进入。");
//        return
    if (userName == null || userName == undefined || userName == "undefined" || userName == "" || phone == null || phone == undefined || phone == "undefined" || phone == "") {
        tigMessage_foundation("获取参数失败,您可能不是从正常路径进入。");
        return
    } else {
        var np = $("#password").val();
        var rnp = $("#repassword").val();
        if (np == "undefined" || np == undefined || np == null || np == "") {
            tigMessage_foundation("请填写新的密码");
            return
        }
        if (rnp == "undefined" || rnp == undefined || rnp == null || rnp == "") {
            tigMessage_foundation("请再次确认新的密码");
            return
        }
        if (np.length < 6 || np.length > 16) {
            tigMessage_foundation("请确保新密码长度6-16位");
            return
        }
        if (np != rnp) {
            tigMessage_foundation("两次密码设置不一致");
            return
        }
//        var storage = window.localStorage;
//        var storeid = storage.getItem("storeId");
//        var userid = storage.getItem("userid");
//        var cmd = 1008;
//        var dataparm = 'rqmsg={"body":{"userName":"' + userName + '","phone":"' + phone + '",';
//        dataparm += '"newPass":"' + np + '",';
//        dataparm += '"sign":"' + sign + '"},';
//        dataparm += '"head":{"cmd":' + cmd + ',"id":"' + randomCmdNum_foundation() + '","token":"' + getToken_foundation() + '"}}';
//        
        var dataparm = {"userName":userName,
        				"phone":phone,
        				"np":np
        				//,"sign":sign
        				};//cmd = 1008
        $.ajax({
        	type:"post",
            url: "/wap/forgetPasswordResetMa.do",
            data: dataparm,
//            dataType: "jsonp",
//            jsonp: "callback",
//            jsonpCallback: "success_jsonp",
//            timeout: 3000,
//            dataFilter: function(json) {
//                return json
//            },
            success: function(data) {
        		var result = data.split(",");
                if (result[0] == "100000") {
                    gotoa("/wap/succeedChangeLoginPassword.do")
                } else {
                    tigMessage_foundation(result[1])
                }
                return
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                tigMessage_foundation("操作用户过多，请稍后重试!")
            }
        })
    }
};