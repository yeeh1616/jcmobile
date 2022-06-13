function forgetPassword_vfCode_ma() {

if($("#a_vfcode").html()!="获取验证码")
{
tigMessage_foundation('验证码已发送，请两分钟后再次验证');
return;
}

    var phone = $("#phone").val();
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

                     if( parseInt($("#a_vfcode").attr("v"))>1 & b=="true")
				   {
				   $("#a_vfcode").attr("v",parseInt(parseInt($("#a_vfcode").attr("v"))-1));
				   var s=parseInt(parseInt($("#a_vfcode").attr("v"))-1);
				   if(s<10)
				   {
				   s="    "+s+"s";
				   }
				   else if(s<100)
				   {
			       s="   "+s+"s";
				   }
				   else
				   {
				   s="        "+s+"s";
				   }
				     $("#a_vfcode").html(s);
				   }
				   else
				   {
				   b="false";
				   $("#a_vfcode").html("获取验证码");
				   $("#a_vfcode").attr("v","122");
				   clearInterval(timer);
				   }
                }, 1000);
	
    //var dataparm = 'rqmsg={"body":{"phone":"' + phone + '"},"head":{"cmd":1001,"id":"' + randomCmdNum_foundation() + '","token":"' + getToken_foundation() + '"}}';
    var dataparm = {"phone":phone};//cmd:1001
    $.ajax({
        url: "/wap/forgetPasswordVfCodeMa.do",
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
//                    //$("#vfcode").val(code)
//                }
//            } else {}
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            tigMessage_foundation("操作用户过多，请稍后重试");
            return
        }
    })
}

function forgetPassword_next_ma() {
    var userName = $("#name").val();
    var phone = $("#phone").val();
    var vfc = $("#vfcode").val();
    if (userName == "undefined" || userName == undefined || userName == null || userName == "") {
        tigMessage_foundation("请填写用户名");
        return
    }
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
    if (userName == "undefined" || userName == undefined || userName == null || userName == "") {
        tigMessage_foundation("请填写验证码");
        return
    }
//    var cmd1 = 1005;
//    var dataparm1 = 'rqmsg={"body":{"phone":"' + phone + '","vfCode":"' + vfc + '",';
//    dataparm1 += ' "userName":"' + userName + '"},';
//    dataparm1 += '"head":{"cmd":' + cmd1 + ',"id":"' + randomCmdNum_foundation() + '","token":"' + getToken_foundation() + '"}}';
//    
    var dataparm1 = {"phone":phone,
    				 "vfCode":vfc,
    				 "userName":userName};//cmd1 = 1005
    $.ajax({
        url: "/wap/forgetPasswordNextMa.do",
        data: dataparm1,
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "success_jsonp",
//        timeout: 3000,
//        dataFilter: function(json) {
//            return json
//        },
        success: function(data) {
    		var result = data.split(",");
            if (result[0] == "100500") {
        		var form = $('<form method = "post" action="/wap/resetAccount.do"></form>');
        		//form.append($("<input type='hidden' name='sign' value='"+result[2]+"' />"));
        		form.append($("<input type='hidden' name='userName' value='"+userName+"' />"));
        		form.append($("<input type='hidden' name='phone' value='"+phone+"' />"));
        		form.appendTo("body");
        		form.submit();
//            	function(params,requestURL){//查询订单详情
//            		var param = params || {};
//            		
//            		var form = $('<form method = "post" action="'+ requestURL +'"></form>');
//            		$.each(param,function(key,value){
//            			form.append($("<input type='hidden' name='"+key+"' value='"+value+"' />")); 
//            		});
//            		form.appendTo("body");
//            		form.submit();
//            	}
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