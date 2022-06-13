/****获取充值金额与银行卡类型 putMoneyYHK ****/  
function next(){
	var bank = $("#bankType").val();
	var money = $("#inputMoney").val();
	if(money.length == 0){
		tigMessage_foundation("请输入充值金额");
  		return false;
  	}
  	if(/^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/.test(money) && money > 0){
		if(bank.length != 0){
			  $("#pageForm").remove();
			  $("<form id='pageForm' action='/wap/recharge/putMoneyYHKing.wap' method='post'>" 
			+ "<input type='hidden' value='" + money + "' name='money' />"
			+ "<input type='hidden' value='" + bank + "' name='bank' />"
			+ "</form>").appendTo("body");
		  $("#pageForm").submit();
		}else{
			tigMessage_foundation("请选择银行卡类型");
  			return false;
		}
  	}else{
  		tigMessage_foundation("金额输入有误");
  		return false;
  	}

}


/**** 提交数据 验证码校验****/
function tijiao(){
	var code = $("input[name=code]").val();//验证码
	if(code.length == 0){
		tigMessage_foundation("请输入验证码!");
		return false;
	}
	if(!/^[0-9]{6}$/.test(code)){
		tigMessage_foundation("无效验证码!");
		return false;
	}
	showLoader();//显示页面加载器
	$.ajax({
        url: "/wap/recharge/sftVerifyCode.do",	        
        data: "validateCode="+code,
	    dataType: "text",
	    success: function(date) {
			hideLoader();//隐藏页面加载器
			//返回首页
			if(date == "000"){
				window.location.href = "/";
				return false;
			}
			//返回登录 
			if(date == "001"){
				window.location.href = "/wap/login.do";
				return false;
			}
			//验证成功 进入充值成功界面
			if(date == "SUCCESS"){
				wap_changePage("/wap/recharge/putMoneyYHKSucc.wap","");
				//window.location.href = "/wap/recharge/putMoneyYHKSucc.wap";
			}else{
				tigMessage_foundation(date);
				return false;
			}
		},
	    error: function(XMLHttpRequest, textStatus, errorThrown) {
			hideLoader();//隐藏页面加载器
			tigMessage_foundation("操作用户过多，请稍后重试");
	        return false;
		}
	});
}

/*********订单预校验 无协议************/
function register_vfCode_ma() {
	var temp = $("#a_vfcode").html();
	if($("#a_vfcode").html()!="获取验证码"){
		tigMessage_foundation('验证码已发送，请两分钟后再次验证');
		return false;
	}
	
	var bankCard = $("input[name=bankCard]").val();//银行卡号
	var userName = $("input[name=userName]").val();//持卡人姓名
	var IdCard = $("input[name=IdCard]").val();//身份证号码
	var phone = $("input[name=phone]").val();//手机号
	if(bankCard.length == 0){
		tigMessage_foundation("请输入银行卡号");
		return false;
	}
	if(!/^[0-9]{16,19}$/.test(bankCard)){
		tigMessage_foundation("无效银行卡号");
		return false;
	}
	if(userName.length == 0){
		tigMessage_foundation("请输入持卡人姓名");
		return false;
	}
	if(!/^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/.test(userName)){
		tigMessage_foundation("持卡人姓名输入有误");
		return false;
	}
	if(IdCard.length == 0){
		tigMessage_foundation("请输入身份证号");
		return false;
	}
	if(!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(IdCard)){
		tigMessage_foundation("无效身份证号码");
		return false;
	}
	var isMobile = /^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
    	tigMessage_foundation("请填写手机号码");
        return false;
    }
    if (!isMobile.test(phone)) {
        tigMessage_foundation("手机号格式不正确");
        return false;
    }
    showLoader();//显示页面加载器
    /****订单预校验****/
    var dataparm = {"phone":phone,"bankCard":bankCard,"userName":userName,"IdCard":IdCard};
	$.ajax({
        url: "/wap/recharge/sftPrepareVerify.do",
        data: dataparm,
        dataType: "text",
        success: function(date) {
			hideLoader();//隐藏页面加载器
			if(date == "001"){
				window.location.href = "/wap/login.do";
				return false;
			}
			if(date == "000"){
				window.location.href = "/";
				return false;
			}
			if(date == "SUCCESS"){
				tigMessage_foundation("验证码发送成功");
				/****定时发送验证码****/
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
			}else{
				tigMessage_foundation(date);
				return false;
			}
		},
        error: function(XMLHttpRequest, textStatus, errorThrown) {
			hideLoader();//隐藏页面加载器
			tigMessage_foundation("操作用户过多，请稍后重试");
            return false;
        }
    });
}


/*********订单预校验 有协议************/
function register_vfCode_ma_t() {
	var temp = $("#a_vfcode").html();
	if($("#a_vfcode").html()!="获取验证码"){
		tigMessage_foundation('验证码已发送，请两分钟后再次验证');
		return false;
	}
	
	var agreementNo = $("#cardNumber").val();//协议号
	var userName = $("input[name=userName]").val();//持卡人姓名
	var IdCard = $("input[name=IdCard]").val();//身份证号码
	var phone = $("input[name=phone]").val();//手机号
	
	if(userName.length == 0){
		tigMessage_foundation("请输入持卡人姓名");
		return false;
	}
	if(!/^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/.test(userName)){
		tigMessage_foundation("持卡人姓名输入有误");
		return false;
	}
	if(IdCard.length == 0){
		tigMessage_foundation("请输入身份证号");
		return false;
	}
	if(!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(IdCard)){
		tigMessage_foundation("无效身份证号码");
		return false;
	}
	var isMobile = /^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;
	if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
    	tigMessage_foundation("请填写手机号码");
        return false;
    }
    if (!isMobile.test(phone)) {
        tigMessage_foundation("手机号格式不正确");
        return false;
    }
    showLoader();//显示页面加载器
    /****订单预校验****/
    var dataparm = {"phone":phone,"agreementNo":agreementNo,"userName":userName,"IdCard":IdCard};
	$.ajax({
        url: "/wap/recharge/sftPrepareVerify.do",
        data: dataparm,
        dataType: "text",
        success: function(date) {
			hideLoader();//隐藏页面加载器
			if(date == "001"){
				window.location.href = "/wap/login.do";
				return false;
			}
			if(date == "000"){
				window.location.href = "/";
				return false;
			}
			if(date == "SUCCESS"){
				tigMessage_foundation("验证码发送成功");
				/****定时发送验证码****/
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
			}else{
				tigMessage_foundation(date);
				return false;
			}
		},
        error: function(XMLHttpRequest, textStatus, errorThrown) {
			hideLoader();//隐藏页面加载器
			tigMessage_foundation("操作用户过多，请稍后重试");
            return false;
        }
    });
}

/*********订单预校验 有协议************/
function register_vfCode_ma_z(type) {
	var temp = $("#a_vfcode").html();
	if($("#a_vfcode").html()!="获取验证码"){
		tigMessage_foundation('验证码已发送，请两分钟后再次验证');
		return false;
	}
	var param = $("#cardNumber").val();//协议号 or 银行卡号
	showLoader();//显示页面加载器
    /****订单预校验****/
	var str = type.tostring;
    var dataparm;
    if(type == 1){
    	dataparm = {'agreementNo':param};
    }else{
    	dataparm = {'bankCard':param};
    }
    $.ajax({
        url: "/wap/recharge/sftPrepareVerify.do",
        data: dataparm,
        dataType: "text",
        success: function(date) {
			hideLoader();//隐藏页面加载器
			if(date == "001"){
				window.location.href = "/wap/login.do";
				return false;
			}
			if(date == "000"){
				window.location.href = "/";
				return false;
			}
			if(date == "SUCCESS"){
				tigMessage_foundation("验证码发送成功");
				/****定时发送验证码****/
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
			}else{
				tigMessage_foundation(date);
				return false;
			}
		},
        error: function(XMLHttpRequest, textStatus, errorThrown) {
			hideLoader();//隐藏页面加载器
			tigMessage_foundation("操作用户过多，请稍后重试");
            return false;
        }
    });
}



/******************************************************************************/
//显示加载器  
function showLoader() {  
    //显示加载器.for jQuery Mobile 1.2.0  
    $.mobile.loading('show', {  
        text: '处理中...', //加载器中显示的文字  
        textVisible: true, //是否显示文字  
        theme: 'a',        //加载器主题样式a-e  
        textonly: false,   //是否只显示文字  
        html: ""           //要显示的html内容，如图片等  
    });  
}
  
//隐藏加载器.for jQuery Mobile 1.2.0  
function hideLoader(){  
    //隐藏加载器  
    $.mobile.loading('hide');  
} 


