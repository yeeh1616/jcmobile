function windowChangePage_foundation(url){
	window.location.href = url;
}

//function flag_init_sc() {
//    var tpFlag = $("#transPassFlag").val();
//    var vFlag = $("#verifiedFlag").val();
//    var pFlag = $("#phoneFlag").val();
//    if (tpFlag != null) {
//        if (tpFlag == "Y") {
//            $("#spTPFlag").text("已设置")
//        } else {
//            $("#spTPFlag").text("未设置")
//        }
//        if (vFlag == "Y") {
//            $("#spVFlag").text("已认证")
//        } else {
//            $("#spVFlag").text("未认证")
//        }
//        if (pFlag == "Y") {
//            $("#spPhoneFlag").text("修改")
//        } else {
//            $("#spPhoneFlag").text("未绑定")
//        }
//    } else {
//        tigMessage_foundation("获取用户信息失败");
//        return
//    }
//}

//function authenticateRealName_jump_sc() {
//	$.ajax({
//		type:'post',
//		url:'/wap/getVerifiedFlag.wap',
//		async:false,
//		success:function(data){
//			if('Y' == data){
//				windowChangePage_foundation("/wap/authentication.wap")
//			}else if('N' == data){
//				windowChangePage_foundation("/wap/n_authentication.wap")
//			}else if('-1' == data){
//				windowChangePage_foundation("/wap/login.wap")
//			}else{
//				tigMessage_foundation("获取用户信息失败");
//			}
//		},
//		error:function(XMLHttpRequest, textStatus, errorThrown){
//			tigMessage_foundation("获取用户信息失败");
//		}
//	});
//}

function modifyPassword_sc() {
    var op = $("#oldpassword").val();
    var np = $("#newpassword").val();
    var rnp = $("#repassword").val();
    if (op == "undefined" || op == undefined || op == null || op == "") {
        tigMessage_foundation("请填写旧密码");
        return false
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
    var dataparm = {'oldPass':op,
    				 'newPass':np,
    				 'functionCode':'2'};//cmd:1007
    
    $.ajax({
    	type:"post",
        url: "/wap/changePassword.wap",
        data: dataparm,
        async:false,
        success: function(data) {
    		if('-4' != data){
    			var result = data.split(",");
        		if ("100000" == result[0]) {
    				window.location.href = "/wap/succeedChangepassword.wap"
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

function authenticateRealName_jump_sc() {
	$.ajax({
    	type:"post",
        url: "/wap/isAuthentication.wap",
        async:false,
        success: function(data) {
			//data = "N";
    		if('-4' == data){
    			window.location.href = "/wap/login.wap";
    		}else if('Y' == data){
    			window.location.href = "/wap/authenticationPage.wap";
    		}else if('N' == data){
    			window.location.href = "/wap/n_authenticationPage.wap"
    		}else{
    			tigMessage_foundation("error!")
    		}
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试!")
        }
    })
}

function bankCard_jump_ma() {
	$.ajax({
		type:"post",
		url:"/wap/getBankCardFlags.wap",
		async:false,
		success:function(data){
			var flags = data.split(",");
		    var bFlag = flags[0];
		    var vFlag = flags[1];
		    if (vFlag != null) {
		        if (vFlag == "Y") {
		            if (bFlag != null) {
		                if (bFlag == "Y") {
		                    windowChangePage_foundation("/wap/bindCard/bind.wap")
		                } else {
		                    windowChangePage_foundation("/wap/bindCard/n_bind.wap")
		                }
		            }
		        } else {
		            tigMessage_foundation("实名认证后，才能绑定银行卡，请先进行实名认证");
		            return
		        }
		    } else {
		        tigMessage_foundation("获取用户信息失败");
		        return
		    }
		},
	});
}