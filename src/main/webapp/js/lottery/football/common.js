$(document).on("pageinit",function(event){
	  $(window).on("orientationchange",function(){
		  radomOne();
		  /*if(event.orientation){ 
		      if(event.orientation == 'portrait'){ 
		    	  alert("portrait");//竖屏 
		      } 
		      else if(event.orientation == 'landscape') { 
		    	  alert("landscape");//横评 
		      } 
		  } */
	  });      
	  
	// 帮助文档
	$(".head-right .sm-icon").click(function(){
		$.mobile.changePage("#helpPage", "slideup"); 
	});
	
	$("#returnBtnId").click(function(){
		$.mobile.changePage("#betPanelId", "slideup"); 
	});
});
$(document).ready(function () {
	// 付款
	$("#fukuanPop").click(function(){
		var betNum = 0;
		$("#ul_list").children().each(function(index){
			betNum += parseInt($(this).attr("betNum"));
		});
		if ( betNum > 0 ) {
			// 二次确认
			$(this).prop("href","#dialog");
			// 先判断余额，如果未登录，先登录
			
		} else {
			tigMessage_foundation("请先投注！");
			$(this).prop("href","#");
		}
	});
	
	$("#lastQrBtnId").click(function(){
		var clickNum = $(this).attr("clickNum");
		if ( clickNum == "1" ) {
			tigMessage_foundation("正在接受订单，请不用重复提交！");
			return false;
		} 
		$.ajax({
		    type: "post",
		    url: "/common/getAccountUsable.json",
		    async: false,
		    dataType: "json",
		    error: function(xMLHttpRequest, textStatus, errorThrown){
			},
		    success: function (data){
				if ( data == '-1' ) {
					// 尚未登录
					$.mobile.changePage("#loginPage", "slideup"); 
				} else {
					$("#lastQrBtnId").attr("clickNum", "1");
					// 判断余额是否足够
					var mult = parseInt($("#multipleId").val(),10);
					var pay = parseInt($("#betInfoId").attr("betNum")) * mult * 2;
					var balance = parseFloat(data);
					if ( pay > balance ) {
						tigMessage_foundation("余额不足，请您先充值！");
					} else {
						// 表单提交
						formSubmit();
					}
				}
		    }
		});
	});
});

function formSubmit() {
	var form = $("#lotteryBuyFormId");
	var betCode = "";
	var betNum = 0;
	$("#ul_list").children().each(function(index){
		betCode += $(this).attr("code") + ";";
		betNum += parseInt($(this).attr("betNum"));
	});
	betCode = betCode.substring(0, betCode.length - 1);
	var multiple = $("#multipleId").val();
	$(form).find("input[name=singleFlag]").val("0");
	$(form).find("input[name=betCode]").val(betCode);
	$(form).find("input[name=betNum]").val(betNum);
	$(form).find("input[name=multiple]").val(multiple);
	$(form).find("input[name=betPrice]").val(betNum*2);
	$(form).find("input[name=betState]").val("1");
	$(form).find("input[name=betType]").val("1");
	$(form).find("input[name=betFrom]").val("4");
	$(form).submit();
}