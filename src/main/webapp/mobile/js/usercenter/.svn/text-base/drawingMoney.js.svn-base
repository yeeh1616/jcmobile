$(document).ready(function (){
	$("#qdtj").click(function(){
	    var at = $("#money").val();
	    
	    var accountType = $("input[name='accountType']").val();
	    var ktMoney = $("input[name='keMoney']").val();
	    var dataparm = {'money':at,'accountType':accountType}
	    
	    var regex = /^\d+\.?\d{0,2}$/;
	    if (at == "undefined" || at == undefined || at == null || at == "") {
	        tigMessage_foundation("请填写提款金额");
	        return false
	    }
	    if (!regex.test(at)) {
	        tigMessage_foundation("提款金额格式不正确");
	        return false
	    }
	    if (ktMoney - at < 0) {
	        tigMessage_foundation("提款金额不能大于账户余额");
	        return
	    }
	    showLoader();
	    $.ajax({
	        url: "/wap/succeedDrawingmoney.wap",
	        data: dataparm,
	        success: function(data) {
	    		var result = data.split(",");
	    		if("100000" == result[0]){
	    			var url = "/wap/succeedDrawingmoneyPage.wap";
	    			hideLoader();
	    			window.location.href = url;
	    		}else {
	              tigMessage_foundation(result[1])
	            }
	        },
	        error: function(XMLHttpRequest, textStatus, errorThrown) {
	            tigMessage_foundation("操作用户过多，请稍后重试!")
	        }
	    })

	});
})

function forgetPassword() {
	var url = "/wap/forgetPassword.wap";
	window.location.href = url;
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