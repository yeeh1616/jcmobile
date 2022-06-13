function setTransPass_sc() {
	var tpFlag = $("#transPassFlag").val();
	if (tpFlag != null) {
        if (tpFlag == "Y") {
            tigMessage_foundation("您已设置过交易密码");
            return
        }
    }
    var tp = $("#password").val();
    var rtp = $("#repassword").val();
    if (tp == "undefined" || tp == undefined || tp == null || tp == "") {
        tigMessage_foundation("请填写交易密码");
        return
    }
    if (tp.length < 6 || tp.length > 16) {
        tigMessage_foundation("请确保新密码长度6-16位");
        return
    }
    if (rtp == "undefined" || rtp == undefined || rtp == null || rtp == "") {
        tigMessage_foundation("请确认密码");
        return
    }
    if (tp != rtp) {
        tigMessage_foundation("两次密码设置不一致");
        return
    }

    var dataparm = {"newDrawPass":tp,
    				"functionCode":"5"};//cmd = 1007
    $.ajax({
        url: "/wap/resetPassword.wap",
        data: dataparm,
        success: function(data) {
    		var result = data.split(",");
            if ("100000" == result[0]) {
                gotoa("/wap/succeedSetPassword.wap")
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