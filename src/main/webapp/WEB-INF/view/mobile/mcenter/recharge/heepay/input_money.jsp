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
    <h1>�㸶����ֵ</h1>
    <div class="head-left"><a href="/wap/recharge/recharge.wap" data-transition="slide" class="qx-icon" data-direction="reverse" ></a> </div>
  </div>
  <!-- /header -->
  <div class="rz">�㸶�����֧��</div>
  <!--content -->
  <div data-role="content" style="padding-top:0;">
     <div class="jine"><input type="text" id="money" placeholder="��������"/>Ԫ</div>
     <div class="zc-button"><button data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all" onclick="next();">��һ��</button></div>
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
			  hideLoader(); // ����ҳ�������
			 
			  /*$("#formsubmit").remove();
			  $(str).appendTo("body");
			  $("#formsubmit").submit();*/
			 
			  var data = str.split("`");
			  if (data[0] == "SUCCESS") {
			  	location.href = data[1];
			  } else {
			  	tigMessage_foundation(data[1]);
			  } 
			  hideLoader(); // ����ҳ�������
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				hideLoader(); // ����ҳ�������
				tigMessage_foundation("�����û����࣬���Ժ�����");
			}
		});
  		} else {
  			tigMessage_foundation("�����������");
  		}
  	}
  	//��ʾ������  
	function showLoader() {  
	    //��ʾ������.for jQuery Mobile 1.2.0  
	    $.mobile.loading('show', {  
	        text: '������...', //����������ʾ������  
	        textVisible: true, //�Ƿ���ʾ����  
	        theme: 'a',        //������������ʽa-e  
	        textonly: false,   //�Ƿ�ֻ��ʾ����  
	        html: ""           //Ҫ��ʾ��html���ݣ���ͼƬ��  
	    });  
	}
	  
	//���ؼ�����.for jQuery Mobile 1.2.0  
	function hideLoader(){  
	    //���ؼ�����  
	    $.mobile.loading('hide');  
	} 
  --></script>
</div>
</body>
</html>