function forgetTransPass_vfCode_sc(phone){
	if($("#a_vfcode").html()!="获取验证码"){
		tigMessage_foundation('验证码已发送，请两分钟后再次验证');
		return;
	}
	var p=$("#"+phone).val();
	var isMobile=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
	if(p=="undefined"||p==undefined||p==null||p==""){
		tigMessage_foundation("请填写手机号码");
		return
	}else{
		if(!isMobile.test(p)){
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
	
	
	
	$.ajax({
		type:"post",
		url:"/wap/generateMessage.wap",
		data:{'phone':p},
		success:function(data){
			tigMessage_foundation('验证码已发送')
		},
		error:function(XMLHttpRequest,textStatus,errorThrown){
			tigMessage_foundation("操作用户过多，请稍后重试");
			return
		}
	})
}

function forgetTransPass_next_sc() {
    var userName = $("#name").val();
    var phone = $("#phone").val();
    var vfCode = $("#vfCode").val();
    if (userName == "undefined" || userName == undefined || userName == null || userName == "") {
        tigMessage_foundation("请填写用户名");
        return
    }
    var isMobile = /^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
        tigMessage_foundation("请填写手机号码");
        return
    } else {
        if (!isMobile.test(phone)) {
            tigMessage_foundation("手机号格式不正确");
            return
        }
    }
    if (vfCode == "undefined" || vfCode == undefined || vfCode == null || vfCode == "") {
        tigMessage_foundation("请获取验证码");
        return
    }
    var dataparm={'phone':phone,
	    		  'vfCode':vfCode,
	    		  'userName':userName
	    		 };//cmd:1005
    $.ajax({
    	type:"post",
        url: "/wap/vfCodeNext.wap",
        data: dataparm,
        success: function(data) {
    		var result = data.split(",");
    		if ("100500" == result[0]) {
    			var url = "/wap/resetPasswordPage.wap?s=" + result[2];
				window.location.href = url;
				//window.location = "resetPassword.jsp?s=" + result[2]
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