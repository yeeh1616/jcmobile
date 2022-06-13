/**
 * 获取充值金额与银行卡类型
 */  
function next(){
	var bank = $("#bankType").val();
	var money = $("#inputMoney").val();
	var cardType = $("#cardType").val();
	if(money.length == 0){
		tigMessage_foundation("请输入充值金额");
  		return false;
  	}
  	if(/^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/.test(money) && money > 0){
		if(bank != "undefined" && bank != undefined && bank != null && bank != "" && bank != "选择银行"){
			  $("#pageForm").remove();
			  $("<form id='pageForm' action='/wap/recharge/rechargeNo2.wap' method='post'>" 
					  + "<input type='hidden' value='" + money + "' name='money' />"
					  + "<input type='hidden' value='" + bank + "' name='bank' />"
					  + "<input type='hidden' value='" + cardType + "' name='cardType' />"
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


/**
 * 提交信息 获取验证码
 * @Author zh
 */
function getCode(cardType,p){
	if($("#a_vfcode").html()!="获取验证码"){
		tigMessage_foundation('验证码已发送，请两分钟后再次验证');
		return false;
	}
	var dataparm;
	if(p == 'pd'){
		var agreementNo = $("#cardNumber").val();//协议号
		dataparm = {"agreementNo":agreementNo, "cardType":cardType};
	}else if(p == 'p'){
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
		    if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
		    	tigMessage_foundation("请填写手机号码");
		        return false;
		    }
		    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(phone)) {
		        tigMessage_foundation("手机号格式不正确");
		        return false;
		    }
			dataparm = {"agreementNo":agreementNo, "cardType":cardType,"userName":userName,"IdCard":IdCard,"phone":phone};
			if('CR' == cardType){
				var moonth = $("#tail_moonth").val();
				var year = $("#tail_year").val();
				var effectiveDate = moonth+"/"+year;//信用卡有效期
				var tail = $("input[name=tail]").val();//信用卡后三位
				if (moonth == "undefined" || moonth == undefined || moonth == null || moonth == "" || moonth == "选择"
					|| year == "undefined" || year == undefined || year == null || year == "" || year == "选择") {
			    	tigMessage_foundation("请选择信用卡有效期");
			        return false;
			    }
				if (tail.length == 0){
					tigMessage_foundation("请输入银行卡背面后三位");
					return false;
				}
			    if (!/^\d{3}$/.test(tail)) {
			        tigMessage_foundation("银行卡后三位输入有误");
			        return false;
			    }
				dataparm = {"agreementNo":agreementNo, "cardType":cardType,"userName":userName,"IdCard":IdCard,"phone":phone,"effectiveDate":effectiveDate,"tail":tail};
			}
	}else if(p == 'd'){
		var bankCard = $("#cardNumber").val();//银行卡号
		dataparm = {"bankCard":bankCard, "cardType":cardType};
	}else{
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
	    if (phone == "undefined" || phone == undefined || phone == null || phone == "") {
	    	tigMessage_foundation("请填写手机号码");
	        return false;
	    }
	    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(phone)) {
	        tigMessage_foundation("手机号格式不正确");
	        return false;
	    }
		dataparm = {"agreementNo":agreementNo, "cardType":cardType,"bankCard":bankCard,"userName":userName,"IdCard":IdCard,"phone":phone};
		if('CR' == cardType){
			var moonth = $("#tail_moonth").val();
			var year = $("#tail_year").val();
			var effectiveDate = moonth+"/"+year;//信用卡有效期
			var tail = $("input[name=tail]").val();//信用卡后三位
			if (moonth == "undefined" || moonth == undefined || moonth == null || moonth == "" || moonth == "选择"
				|| year == "undefined" || year == undefined || year == null || year == "" || year == "选择") {
		    	tigMessage_foundation("请选择信用卡有效期");
		        return false;
		    }
			if (tail.length == 0){
				tigMessage_foundation("请输入银行卡背面后三位");
				return false;
			}
		    if (!/^\d{3}$/.test(tail)) {
		        tigMessage_foundation("银行卡后三位输入有误");
		        return false;
		    }
			dataparm = {"agreementNo":agreementNo, "cardType":cardType,"bankCard":bankCard,"userName":userName,"IdCard":IdCard,"phone":phone,"effectiveDate":effectiveDate,"tail":tail};
		}
	}
	getCodeIng(dataparm);
}






/**
 * 异步提交数据 获取验证码
 */
function getCodeIng(dataparm){
	showLoader();//显示页面加载器
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
				var b = "true";
				$("#a_vfcode").attr("v", "122");
				var timer = setInterval(function() {
					if (parseInt($("#a_vfcode").attr("v")) > 1 & b == "true") {
						$("#a_vfcode").attr("v", parseInt(parseInt($("#a_vfcode").attr("v")) - 1));
						var s = parseInt(parseInt($("#a_vfcode").attr("v")) - 1);
						if (s < 10) {
							s = "    " + s + "s";
						} else if (s < 100) {
							s = "   " + s + "s";
						} else {
							s = "        " + s + "s";
						}
						$("#a_vfcode").html(s);
					} else {
						b = "false";
						$("#a_vfcode").html("获取验证码");
						$("#a_vfcode").attr("v", "122");
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

/**
 * 订单预校验成功 校验验证码
 * @Author zh
 */
function submitCode(){
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
			if(date == "000"){//返回首页
				window.location.href = "/";
				return false;
			}
			if(date == "001"){//返回登录 
				window.location.href = "/wap/login.do";
				return false;
			}
			if(date == "SUCCESS"){//验证成功 进入充值成功界面
				wap_changePage("/wap/recharge/rechargeSuccess.wap","");
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


