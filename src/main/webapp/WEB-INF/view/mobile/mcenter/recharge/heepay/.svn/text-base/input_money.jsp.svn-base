<%@ page language="java" import="java.util.*"  pageEncoding="GB2312" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<jsp:include page="../../../include/htmlheader.jsp"></jsp:include>
</head>
<body>
<!-- Index Page -->
<div data-role="page" id="card">
  <div data-role="header" data-position="fixed" data-id="top">
    <h1>汇付宝充值</h1>
    <div class="head-left"><a href="/wap/recharge/recharge.wap" data-transition="slide" class="qx-icon" data-direction="reverse" ></a> </div>
  </div>
  <!-- /header -->
  <div class="rz">汇付宝快捷支付</div>
  <!--content -->
  <div data-role="content" style="padding-top:0;">
     <div class="jine"><input type="text" id="money" placeholder="请输入金额"/>元</div>
     <div class="zc-button"><button data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all" onclick="next();">下一步</button></div>
    </div>
  <!-- /content -->
  <script type="text/javascript"><!--
  	function next(){
  		showLoader();
  		var money = $("#money").val();
  		if (/^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/.test(money) && money > 0) {
			$.ajax({
			url: "/wap/recharge/createOrderQuick.wap",
			data: "money=" + money,
			dataType: "text",
			success: function(str) {
			  hideLoader(); // 隐藏页面加载器
			 
			  /*$("#formsubmit").remove();
			  $(str).appendTo("body");
			  $("#formsubmit").submit();*/
			 
			  var data = str.split("`");
			  if (data[0] == "SUCCESS") {
			  	location.href = data[1];
			  } else {
			  	tigMessage_foundation(data[1]);
			  } 
			  hideLoader(); // 隐藏页面加载器
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				hideLoader(); // 隐藏页面加载器
				tigMessage_foundation("操作用户过多，请稍后重试");
			}
		});
  		} else {
  			tigMessage_foundation("金额输入有误");
  		}
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
  --></script>
</div>
</body>
</html>