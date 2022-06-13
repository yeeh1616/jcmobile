$(document).ready(function (){
	var type = $("input[name='type']").val();
	$("#bdqkfs").click(function(){
		var flag = false;
		switch (type) {
		case '1':flag = yhkInfo();
			break;
		case '2':flag = wxInfo();
			break;
		case '3':flag = zfbInfo();
			break;
		default:
			tigMessage_foundation("出错了！");
			break;
		}
		if(flag){
			$("#bankSubmit").remove();
			$("<input type=\"submit\" id=\"bankSubmit\" value=\"正在提交...\"/>").appendTo("#bankForm");
			$("#bankSubmit").submit();
		}
	});
})
/**
 * 银行卡
 * @return
 */
function yhkInfo() {
    var accountName = $("#accountName").val();//取款方式名称
    var branchName = $("#branchName").val();//支行名称
    var accountCard = $("#accountCard").val();//取款账号
    
    if (accountName == "undefined" || accountName == undefined || accountName == null || accountName == "") {
        tigMessage_foundation("请填写开户银行");
        return false;
    }
    if(!/^[\u4E00-\u9FA5]+$/.test(accountName)){
    	tigMessage_foundation("银行名称必须为中文！");
        return false
    }
    
    if (branchName == "undefined" || branchName == undefined || branchName == null || branchName == "") {
        tigMessage_foundation("请填写支行名称");
        return false;
    }
    if(!/^[\u4E00-\u9FA5]+$/.test(branchName)){
    	tigMessage_foundation("支行名称必须为中文！");
        return false
    }
    
    if (accountCard == "undefined" || accountCard == undefined || accountCard == null || accountCard == "") {
        tigMessage_foundation("请填写银行卡号");
        return false;
    }
    if(!/^[0-9]+$/.test(accountCard)){
    	tigMessage_foundation("账号必须为纯数字！");
        return false
    }
    return true;
}

/**
 * 微信
 * @return
 */
function wxInfo() {
    var accountCard = $("#accountCard").val();//取款账号
    var raccountCard = $("#raccountCard").val();//确认取款账号
    if (accountCard == "undefined" || accountCard == undefined || accountCard == null || accountCard == "") {
        tigMessage_foundation("号码不能为空！");
        return false;
    }
    if (raccountCard == "undefined" || raccountCard == undefined || raccountCard == null || raccountCard == "") {
        tigMessage_foundation("确认号码不能为空！");
        return false;
    }
    if (accountCard != raccountCard) {
        tigMessage_foundation("两次输入不一致！");
        return false;
    }
    return true;
}

/**
 * 支付宝
 * @return
 */
function zfbInfo() {
	var accountCard = $("#accountCard").val();//取款账号
    var raccountCard = $("#raccountCard").val();//确认取款账号
    if (accountCard == "undefined" || accountCard == undefined || accountCard == null || accountCard == "") {
        tigMessage_foundation("号码不能为空！");
        return false;
    }
    if (raccountCard == "undefined" || raccountCard == undefined || raccountCard == null || raccountCard == "") {
        tigMessage_foundation("确认号码不能为空！");
        return false;
    }
    if (accountCard != raccountCard) {
        tigMessage_foundation("两次输入不一致！");
        return false;
    }
    return true;
}