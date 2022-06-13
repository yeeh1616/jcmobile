<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<jsp:include page="../include/htmlheader.jsp"></jsp:include>
</head>
<body>
<!-- Index Page -->
<div data-role="page" id="card">
<script type="text/javascript" src="/mobile/js/usercenter/putMoney/putMoneyYHK.js"></script>
  <div data-role="header" data-position="fixed" data-id="top">
    <h1>充值</h1>
    <div class="head-left"><a href="/wap/recharge/putMoneyHome.wap" data-transition="slide" class="qx-icon" data-direction="reverse" ></a> </div>
  </div>
  <!-- /header -->
  <div class="rz">银行对单笔金额与每日总额都有限制。</div>
  <!--content -->
  <div data-role="content" style="padding-top:0;">
    <div class="jine">
     <input type="text" name="name" placeholder="请输入金额" id="inputMoney">元</div>
     <div class="xz_bank"><a id="banks" href="#year" data-dialog="true"  data-transition="pop" role="button" class="ui-shadow ui-btn ui-corner-all ui-btn-inline">请选择银行</a></div><div class="zc-button">
      <button onclick="next();" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">下一步</button>
    </div>
    </div>
  <!-- /content --> 
</div>
<!--银行弹出-->
<div role="dialog" id="year" data-history="false">
  <div data-role="header" data-theme="a" data-position="fixed" >
  	<a class="ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right" data-rel="back"></a>
    <h1>选择银行</h1>
  </div>
  <div data-role="content" data-theme="a" style=" overflow:auto; padding:0px;">
     <ul data-role="listview" style="background-color:#f5f5f5;overflow:auto;">
      <li><a  onclick="banks('中国银行','BOC');" data-ajax="false">中国银行</a></li>
      <li><a  onclick="banks('工商银行','ICBC');" data-ajax="false">工商银行</a></li>
      <li><a  onclick="banks('建设银行','CCB');" data-ajax="false">建设银行</a></li>
      <li><a  onclick="banks('招商银行','CMB');" data-ajax="false">招商银行</a></li>
      <li><a  onclick="banks('民生银行','CMBC');" data-ajax="false">民生银行</a></li>
      <li><a  onclick="banks('中国邮政储蓄银行','PSBC');" data-ajax="false">中国邮政储蓄银行</a></li>
      <li><a  onclick="banks('浦东发展银行','SPDB');" data-ajax="false">浦东发展银行</a></li>
      <li><a  onclick="banks('平安银行','SZPAB');" data-ajax="false">平安银行</a></li>
      <li><a  onclick="banks('光大银行','CEB');" data-ajax="false">光大银行</a></li>
      <li><a  onclick="banks('广东发展银行','GDB');" data-ajax="false">广东发展银行</a></li>
    </ul>
  </div>
</div> 
<input type="hidden" name="bankType" id="bankType"/>
<script type="text/javascript">
//选择银行卡类型
function banks(name,type){
	$("#banks").html("");
	$("#banks").html(name);
	document.getElementById("bankType").value = type; 
	$.mobile.changePage("#card", "slideup"); 
}
</script>
</body>
</html>