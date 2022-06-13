function getQueryString_foundation(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2])
    }
    return null
}

function forgetTransPass_reset_sc() {
	var s = $("input[name='sign']").val();
    var sign = getQueryString_foundation("s");
    if (sign == null || sign == undefined || sign == "undefined" || sign == "") {
        tigMessage_foundation("获取参数失败");
        return
    } else {
        var np = $("#password").val();
        var rnp = $("#repassword").val();
        if (np == "undefined" || np == undefined || np == null || np == "") {
            tigMessage_foundation("请填写新的交易密码");
            return
        }
        if (rnp == "undefined" || rnp == undefined || rnp == null || rnp == "") {
            tigMessage_foundation("请再次确认新的交易密码");
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
//        var storeid = $("input[name='storeId']").val();
//        var userid = $("input[name='userId']").val();
        var dataparm = {
//        				'userId':userid,
//        				'storeId':storeid,
        				'newDrawPass':np,
        				'sign':sign,
        				'functionCode':"9"};//cmd = 1007
        
        $.ajax({
            url: "/wap/resetPassword.wap",
            data: dataparm,
            success: function(data) {
        		var result = data.split(",");
        		if("100000" == result[0]){
                    window.location = "/wap/succeedChangeDrawpassword.do"
        		}else{
        			tigMessage_foundation(result[1])
        		}
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                tigMessage_foundation("操作用户过多，请稍后重试!")
            }
        })
    }
}