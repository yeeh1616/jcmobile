function modifyPhone_vfCode_sc() {
	if($("#a_vfcode").html()!="获取验证码"){
		tigMessage_foundation('验证码已发送，请两分钟后再次验证');
		return;
	}

    var op = $("#oldphone").val();
    var np = $("#newphone").val();
    var isMobile = /^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (op == "undefined" || op == undefined || op == null || op == "") {
        $.ajax({
        	type:"post",
        	url:'/wap/getPhoneFlag.wap',
        	sync:false,
        	success:function(data){
	        	if ("Y" == data){
	                tigMessage_foundation("请填写旧手机号码");
	                return
	            }
        	},
        	error:function(XMLHttpRequest, textStatus, errorThrown){
        		tigMessage_foundation("获取用户信息失败");
        	}
        });
    } else {
        if (!isMobile.test(op)) {
            tigMessage_foundation("旧手机号格式不正确");
            return
        }
    }
    if (np == "undefined" || np == undefined || np == null || np == "") {
        tigMessage_foundation("请填写新手机号");
        return
    }
    if (!isMobile.test(np)) {
        tigMessage_foundation("新手机号格式不正确");
        return
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
	   else
	   {
	   b="false";
	   $("#a_vfcode").html("获取验证码");
	   $("#a_vfcode").attr("v","122");
	   clearInterval(timer);
	   }
    }, 1000);
	
    var vfp = np;
    if (op == "undefined" || op == undefined || op == null || op == "") {} else {
        vfp = op
    }
    var dataparm = {'phone':op};//cmd:1001
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

function modifyPhone_sc() {
    var op = $("#oldphone").val();
    var np = $("#newphone").val();
    var vfc = $("#vfcode").val();
    var isMobile = /^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (op == "undefined" || op == undefined || op == null || op == "") {
        $.ajax({
        	type:"post",
        	url:'/wap/getPhoneFlag.wap',
        	sync:false,
        	success:function(data){
	        	if ("Y" == data){
	                tigMessage_foundation("请填写旧手机号码");
	                return
	            }
        	},
        	error:function(XMLHttpRequest, textStatus, errorThrown){
        		tigMessage_foundation("获取用户信息失败");
        	}
        });
    } else {
        if (!isMobile.test(op)) {
            tigMessage_foundation("旧手机号格式不正确");
            return
        }
    }
    if (np == "undefined" || np == undefined || np == null || np == "") {
        tigMessage_foundation("请填写新手机号");
        return
    }
    if (!isMobile.test(np)) {
        tigMessage_foundation("新手机号格式不正确");
        return
    }
    if (vfc == "undefined" || vfc == undefined || vfc == null || vfc == "") {
        tigMessage_foundation("请输入验证码");
        return
    }
    var vfp = np;
    if (op == "undefined" || op == undefined || op == null || op == "") {} else {
        vfp = op
    }
    var dataparm1 = {'phone':op,//原来是np,永远提示手机号码输入错误
    				 'vfCode':vfc};//cmd = 1005
    $.ajax({
    	type:"post",
        url: '/wap/validation.wap',
        data: dataparm1,
        success: function(data) {
			var result = data.split(",");
            if ("100500" == result[0]) {
            	var dataparm;
                if (op == "undefined" || op == undefined || op == null || op == "") {
                    dataparm = {'newPhone':np,
        					'vfCode':vfc,
        					'functionCode':3};
                } else {
                    dataparm = {
        					'oldPhone':op,
        					'newPhone':np,
        					'vfCode':vfc,
        					'functionCode':4};
                }//cmd:1007
                $.ajax({
                	type:'post',
                    url: '/wap/changePhone.wap',
                    data: dataparm,
                    success: function(data) {
	            		if('-4' != data){
	            			var result = data.split(",");
	                		if ("100000" == result[0]) {
	            				window.location.href = "/wap/succeedChangephone.wap"
	                		} else {
	                			tigMessage_foundation(result[1])
	                		}
	            		}
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        tigMessage_foundation("操作用户过多，请稍后重试!")
                    }
                })
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

function setPhone_sc() {
    var np = $("#newphone").val();
    var vfc = $("#vfcode").val();
    var isMobile = /^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (np == "undefined" || np == undefined || np == null || np == "") {
        tigMessage_foundation("请填写手机号");
        return
    }
    if (!isMobile.test(np)) {
        tigMessage_foundation("手机号格式不正确");
        return
    }
    if (vfc == "undefined" || vfc == undefined || vfc == null || vfc == "") {
        tigMessage_foundation("请输入验证码");
        return
    }
    var vfp = np;
    var dataparm = {'newPhone':np,
					'vfCode':vfc,
					'functionCode':3};//cmd:1007
    $.ajax({
    	type:'post',
        url: '/wap/changePhone.wap',
        data: dataparm,
        success: function(data) {
    		if('-4' != data){
    			var result = data.split(",");
        		if ("100000" == result[0]) {
    				window.location.href = "/wap/succeedChangephone.wap"
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