function register_vfCode_ma() {
	var temp = $("#a_vfcode").html();
	if($("#a_vfcode").html()!="获取验证码"){
		tigMessage_foundation('验证码已发送，请两分钟后再次验证');
		return;
	}
    var phone = $("#phone_no").val();
    var isMobile = /^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
        tigMessage_foundation("请填写手机号码");
        return
    } else {
        if (!isMobile.test(phone)) {
            tigMessage_foundation("手机号格式不正确");
            return
        }
    }
    var b="true";
	$("#a_vfcode").attr("v","122");
	var timer= setInterval(function () {
		   if( parseInt($("#a_vfcode").attr("v"))>1 & b=="true"){
			   $("#a_vfcode").attr("v",parseInt(parseInt($("#a_vfcode").attr("v"))-1));
			   var s=parseInt(parseInt($("#a_vfcode").attr("v"))-1);
			   if(s<10){
				   s="    "+s+"s";
			   }
			   else if(s<100){
				   s="   "+s+"s";
			   }
			   else{
				   s="        "+s+"s";
			   }
			       $("#a_vfcode").html(s);
		   }
		   else{
			   b="false";
			   $("#a_vfcode").html("获取验证码");
			   $("#a_vfcode").attr("v","122");
			   clearInterval(timer);
		   }
        }, 1000);
	
    //var dataparm = 'rqmsg={"body":{"phone":"' + phone + '"},"head":{"cmd":1001,"id":"' + randomCmdNum_foundation() + '","token":"' + getToken_foundation() + '"}}';
    var dataparm = {"phone":phone};
	$.ajax({
        url: "/wap/registerVfCodeMa.do",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(json, textStatus) {
//            if (json.head.retCode == "100000") {
//                var code = json.head.retDesc;
//                if (code != null && code != "") {
//                    // $("#vfcode").val(code)
//                }
//            } else {}
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试");
            return
        }
    })
}

function register_ma() {
    if ($("#ckbIAgree").prop("checked")) {} else {
        tigMessage_foundation('同意"服务条款"才能注册');
        return
    }
    var phone = $("#phone_no").val();
    var pwd = $("#password").val();
    var repwd = $("#repassword").val();
    var ivCode = $("#invitation_code").val();
    var vfCode = $("#vfcode").val();
    var isMobile = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
        tigMessage_foundation("请填写手机号");
        return false
    } else {
        if (!isMobile.test(phone)) {
            tigMessage_foundation("手机号格式不正确");
            return
        }
    }
    if (pwd == "undefined" || pwd == undefined || pwd == null || pwd == "") {
        tigMessage_foundation("请填写密码");
        return
    }
    if (repwd == "undefined" || repwd == undefined || repwd == null || repwd == "") {
        tigMessage_foundation("请确认密码");
        return
    }
    if (pwd != repwd) {
        tigMessage_foundation("密码不一致");
        return
    }
    if (ivCode == "undefined" || ivCode == undefined || ivCode == null || ivCode == "") {
        tigMessage_foundation("请填写店铺邀请码");
        return
    }
    if (vfCode == "undefined" || vfCode == undefined || vfCode == null || vfCode == "") {
        tigMessage_foundation("请获取验证码");
        return
    }

    var dataparm = {"phone":phone,
    				"psw":pwd,
    				"invitationCode":ivCode,
    				"vfCode":vfCode};//cmd = 1003
    $.ajax({
        url: "/wap/registerMaAH.do",
        data: dataparm,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(data) {
    		var result = data.split(",");
            if (result[0] == "100000") {
                gotoa("/wap/succeedRegister.do?phone=" + phone)
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