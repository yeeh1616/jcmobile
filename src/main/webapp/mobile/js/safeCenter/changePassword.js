function modifyPassword_sc() {
    var op = $("#oldpassword").val();
    var np = $("#newpassword").val();
    var rnp = $("#repassword").val();
    if (op == "undefined" || op == undefined || op == null || op == "") {
        tigMessage_foundation("请填写旧密码");
        return false;
    }
    if (np == "undefined" || np == undefined || np == null || np == "") {
        tigMessage_foundation("请填写新密码");
        return
    }
    if (np.length < 6 || np.length > 15) {
        tigMessage_foundation("请确保新密码长度6-15位");
        return
    }
    if (rnp == "undefined" || rnp == undefined || rnp == null || rnp == "") {
        tigMessage_foundation("请确认新密码");
        return
    }
    if (np != rnp) {
        tigMessage_foundation("新密码不一致");
        return
    }
    var dataparm ={'oldPass':op,
    			   'newPass':np,
    			   'functionCode':2};//cmd：1007
    
    $.ajax({
        url: '/wap/changeTransPassword.wap',
        data: dataparm,
        success: function(data) {
	    	if('-4' != data){
				var result = data.split(",");
	    		if ("100000" == result[0]) {
					window.location.href = "/wap/succeedChangepasswordPage.wap"
	    		} else {
	    			tigMessage_foundation(result[1])
	    		}
			}
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}