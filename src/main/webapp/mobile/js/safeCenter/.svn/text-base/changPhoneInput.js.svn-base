/**
 * 获取验证码
 * @Author zh
 * @return
 */
function modifyPhone_vfCode_add() {
	if($("#a_vfcode").html()!="获取验证码"){
		tigMessage_foundation('验证码已发送，请两分钟后再次验证');
		return;
	}

    var phone = $("#phone").val();
    var rphone = $("#rphone").val();
    var isMobile = /^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
    	tigMessage_foundation("请填写手机号");
    	return;
    }
    if (!isMobile.test(phone)) {
        tigMessage_foundation("手机号格式不正确");
        return;
    }
    if (rphone == "undefined" || rphone == undefined || rphone == null || rphone == "") {
        tigMessage_foundation("请再次输入手机号");
        return;
    }
    if (phone != rphone) {
        tigMessage_foundation("两次号码输入不一致");
        return;
    }
    var b="true";
	$("#a_vfcode").attr("v","122");
	var timer = setInterval(function(){
       if( parseInt($("#a_vfcode").attr("v")) > 1 && b == "true"){
		   $("#a_vfcode").attr("v", parseInt(parseInt($("#a_vfcode").attr("v"))-1));
		   var s = parseInt(parseInt($("#a_vfcode").attr("v"))-1);
		   s = "剩余" + s + "秒";
		   $("#a_vfcode").html(s);
	   }else{
		   b="false";
		   $("#a_vfcode").html("获取验证码");
		   $("#a_vfcode").attr("v","122");
		   clearInterval(timer);
	   }
    }, 1000);
	
    var dataparm = {'phone':phone};//cmd:1001
    $.ajax({
        url: '/wap/generateMessage.wap',
        data: dataparm,
        success: function(data) {
			if ("1" == data) {
				tigMessage_foundation("验证码已发送")
			}
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试");
            return
        }
    })
}

/**
 * 提交数据
 * @Author zh
 * @return
 */
function modifyPhone_add() {
    var phone = $("#phone").val();
    var rphone = $("#rphone").val();
    var vfc = $("#vfcode").val();
    var isMobile = /^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
    	tigMessage_foundation("请填写手机号");
    	return;
    }
    if (!isMobile.test(phone)) {
        tigMessage_foundation("手机号格式不正确");
        return;
    }
    if (rphone == "undefined" || rphone == undefined || rphone == null || rphone == "") {
        tigMessage_foundation("请再次输入手机号");
        return;
    }
    if (phone != rphone) {
        tigMessage_foundation("两次号码输入不一致");
        return;
    }
    if(vfc == "undefined" || vfc == undefined || vfc == null || vfc == ''){
    	tigMessage_foundation("请输入验证码");
        return;
    }
    var dataparm1 = {'phone':phone, 'vfCode':vfc};//cmd = 1005
    $.ajax({
    	type:"post",
        url: '/wap/updPhone.do',
        data: dataparm1,
        success: function(data) {
			var result = data.split(",");
            if ("100000" == result[0]) {
            	window.location.href = "/wap/succeedChangephone.wap"
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