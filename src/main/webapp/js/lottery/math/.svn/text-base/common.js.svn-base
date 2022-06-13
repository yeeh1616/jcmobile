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
			alert("请先投注！");
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
					var issueNum = parseInt($("buyIssueNumId").val(),10);
					var pay = parseInt($("#betInfoId").attr("betNum")) * mult * 2 * issueNum;
					var balance = parseFloat(data);
					if ( pay > balance ) {
						alert("余额不足，请您先充值！");
					} else {
						// 表单提交
						var issueNum = parseInt($("#buyIssueNumId").val(),10);
						if ( issueNum == 1 ) {
							formSubmit();
						} else if ( issueNum > 1 ) {
							chaseFormSubmit();
						}
					}
				}
		    }
		});
	});
	
	// 倍数
	$("#multipleId,#buyIssueNumId").keydown(function(event){
		if ( ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) || event.keyCode == 8) {
			return true;
		} else {
			return false;
		}
	});
	$("#multipleId,#buyIssueNumId").keyup(function(event){
		if ( $(this).val() != "" ) {
			calcTotal();
		}
	});
	// 追加投注
	$("#mov1").click(function(){
		calcTotal();
	});
});

function calcTotal() {
	var mult = parseInt($("#multipleId").val(),10);
	var issueNum = parseInt($("#buyIssueNumId").val(),10);
	var betNum = 0;
	$("#ul_list").children().each(function(index){
		betNum += parseInt($(this).attr("betNum"));
	});
	var base = 2;
	if($("#mov1").prop("checked") == true) {
		base = 3;
	}
	$("#divze2").html('<span>共'+(betNum*mult*base*issueNum)+'元</span><br>'+issueNum+"期"+betNum+'注'+mult+'倍 ');
}

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
	if( parseInt($("#licenseId").val()) > 100 ) {
		$(form).find("input[name=issue]").val($("#currentIssueId").html());
	}
	var base = "0";
	if($("#mov1").prop("checked") == true) {
		base = "1";
	}
	$(form).find("input[name=zjFlag]").val(base);
	$(form).submit();
}

function chaseFormSubmit() {
	var form = $("#chasingBuyFormId");
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
	$(form).find("input[name=reserved1]").val($("#buyIssueNumId").val());
	var base = "0";
	if($("#mov1").prop("checked") == true) {
		base = "1";
	}
	try{
		if ( $("#stopBonusId").prop("checked") ) {
			$(form).find("input[name=winStop]").val("1");
		} 
	} catch ( ex ) {}
	$(form).find("input[name=zjFlag]").val(base);
	$(form).submit();
}