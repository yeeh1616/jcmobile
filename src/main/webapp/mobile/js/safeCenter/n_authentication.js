$(document).ready(function (){
	$("#submit_but").click(function(){
		if(inFoVerify()){
			if(confirm("确定提交？\n提交后无法修改!")){
				$("#submit").remove();
				$("<input type=\"submit\" id=\"submit\"/>").appendTo("#authenForm");
				$("#submit").submit();
			}
		}
	});
})

function inFoVerify() {
	var cName = $("#cName").val();
	var cNumber = $("#cNumber").val();
	if(cName == "undefined" || cName == undefined || cName == null || cName == ""){
		tigMessage_foundation("请填写真实姓名");
		return false;
	}
	if(/^([\u4E00-\u9FA5])+$/.test(cName) == false){
		tigMessage_foundation("姓名只能是汉字！");
		return false;
	}
	if(cNumber == "undefined" || cNumber == undefined || cNumber == null || cNumber == ""){
		tigMessage_foundation("请填写身份证号");
		return false;
	}
	if(!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(cNumber)){
		tigMessage_foundation("无效身份证号码！");
		return false;
	}
	return true;
}