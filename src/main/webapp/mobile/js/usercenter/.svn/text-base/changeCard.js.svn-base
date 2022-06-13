$(document).ready(function (){
	var type = $("input[name='type']").val();
	var id = $("input[name='mwid']").val();
	$("#updTj").click(function(){
		switch (type) {
		case '1':updYHK(id);
			break;
		case '2':updWX(id);
			break;
		case '3':updZFB(id);
			break;
		default:
			tigMessage_foundation("出错了！");
			break;
		}
	});
})


/**
 * 银行卡
 * @return
 */
function updYHK(id) {
	var yName = $("#card_hang").val();
	var zName = $("#card_zhi").val();
	var accountCard = $("#accountCard").val();
	var raccountCard = $("#raccountCard").val();

    if (yName == "undefined" || yName == undefined || yName == null || yName == "") {
        tigMessage_foundation("请输入开户行！");
        return false;
    }
    if (zName == "undefined" || zName == undefined || zName == null || zName == "") {
        tigMessage_foundation("请输入支行名称！");
        return false;
    }
    
    if (accountCard == "undefined" || accountCard == undefined || accountCard == null || accountCard == "") {
        tigMessage_foundation("账号不能为空！");
        return false;
    }
    if (raccountCard == "undefined" || raccountCard == undefined || raccountCard == null || raccountCard == "") {
        tigMessage_foundation("确认账号不能为空！");
        return false;
    }
    if(accountCard != raccountCard){
    	tigMessage_foundation("两次输入不一致！");
        return false;
    }
    
    $("#updBankForm").remove();
	$("<form action=\"/wap/updGetMoneyInfo.wap\" id=\"updBankForm\">" +
		"<input type=\"hidden\" value="+yName+" name=\"accountName\"/>" +
		"<input type=\"hidden\" value="+zName+" name=\"branchName\"/>" +
		"<input type=\"hidden\" value="+accountCard+" name=\"accountCard\"/>" +
		"<input type=\"hidden\" value="+id+" name=\"id\"/>" +
		"<input type=\"submit\" id=\"updbankSubmit\"/></form>").appendTo("body");
	$("#updbankSubmit").submit();
    return true;
}

/**
 * 微信
 * @return
 */
function updWX(id) {
	var accountCard = $("#accountCard").val();
    var raccountCard = $("#raccountCard").val();

    if (accountCard == "undefined" || accountCard == undefined || accountCard == null || accountCard == "") {
        tigMessage_foundation("账号不能为空！");
        return false;
    }
    if (raccountCard == "undefined" || raccountCard == undefined || raccountCard == null || raccountCard == "") {
        tigMessage_foundation("确认账号不能为空！");
        return false;
    }
    if (accountCard != raccountCard) {
        tigMessage_foundation("两次输入不一致！");
        return false;
    }
    $("#updBankForm").remove();
	$("<form action=\"/wap/updGetMoneyInfo.wap\">" +
		"<input type=\"hidden\" value="+accountCard+" name=\"accountCard\"/>" +
		"<input type=\"hidden\" value="+id+" name=\"id\"/>" +
		"<input type=\"submit\" id=\"updbankSubmit\"/></form>").appendTo("body");
	$("#updbankSubmit").submit();
    return true;
}

/**
 * 支付宝
 * @return
 */
function updZFB(id) {
	var accountCard = $("#accountCard").val();
    var raccountCard = $("#raccountCard").val();

    if (accountCard == "undefined" || accountCard == undefined || accountCard == null || accountCard == "") {
        tigMessage_foundation("账号不能为空！");
        return false;
    }
    if (raccountCard == "undefined" || raccountCard == undefined || raccountCard == null || raccountCard == "") {
        tigMessage_foundation("确认账号不能为空！");
        return false;
    }
    if (accountCard != raccountCard) {
        tigMessage_foundation("两次输入不一致！");
        return false;
    }
    $("#updBankForm").remove();
	$("<form action=\"/wap/updGetMoneyInfo.wap\" id=\"updBankForm\">" +
		"<input type=\"hidden\" value="+accountCard+" name=\"accountCard\"/>" +
		"<input type=\"hidden\" value="+id+" name=\"id\"/>" +
		"<input type=\"submit\" id=\"updbankSubmit\"/></form>").appendTo("body");
	$("#updbankSubmit").submit();
    return true;
}