<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<jsp:include page="../../../include/htmlheader.jsp"></jsp:include>
</head>
<body>
<!-- Index Page -->
<div data-role="page" id="card">
<script type="text/javascript" src="/mobile/js/usercenter/recharge/sft/recharge.js"></script>
  <div data-role="header" data-position="fixed" data-id="top">
    <h1>信用卡充值</h1>
    <div class="head-left"><a href="/wap/recharge/recharge.wap" data-transition="slide" class="qx-icon" data-direction="reverse" ></a> </div>
  </div>
  
  <ul class="ui-grid-c">
     <li style="width:50% !important;float:left;line-height:28px;">
     	<a data-ajax="false" href="/wap/recharge/rechargeNo1.wap?type=DR" data-transition="none" class="ui-link ui-btn" style="padding-top:9px !important;padding-bottom:9px !important;">储蓄卡</a>
     </li>
     <li style="width:50% !important;float:left;line-height:35px important;">
     	<a class="ui-btn-active ui-state-persist ui-link ui-btn" data-transition="none" style="padding-top:9px !important;padding-bottom:9px !important;">信用卡</a>
     </li>
  </ul>
  
  <!-- /header -->
  <div class="rz">银行对单笔金额与每日总额都有限制。</div>
  <!--content -->
  <div data-role="content" style="padding-top:0;">
    <div class="jine">
     <input type="hidden" id="cardType" value="CR" />
     <input type="text" name="name" placeholder="请输入金额" id="inputMoney"/>元</div>
     <select id="bankType">
     	<option selected="selected">选择银行</option>
		<option value="BOC">中国银行</option>
		<option value="ICBC">工商银行</option>
		<option value="CCB">建设银行</option>
		<option value="CMB">招商银行</option>
		<!--<option value="ABC">农业银行</option>-->
		<option value="COMM">交通银行</option>
		<option value="CIB">兴业银行</option>
		<option value="CMBC">民生银行</option>
		<option value="SPDB">浦东发展银行</option>
		<option value="SZPAB">平安银行</option>
		<option value="CEB">光大银行</option>
		<option value="GDB">广发银行</option>
		<option value="CITIC">中信银行</option>
		<option value="PSBC">中国邮储银行</option>
		<option value="HXB">华夏银行</option>
		<option value="HKBEA">东亚银行</option>
		<option value="NCC">南昌银行</option>
		<option value="NBCB">宁波银行</option>
		<option value="CITI">花旗银行</option>
		<option value="BCCB">北京银行</option>
		<option value="BSB">包商银行</option>
		<option value="LZ">兰州银行</option>
		<option value="NJCB">南京银行</option>
		<option value="WFCCB">潍坊银行</option>
		<option value="HCCB">杭州银行</option>
		<option value="WZCB">温州银行</option>
		<option value="SR">上饶银行</option>
		<option value="SHRCB">上海农商银行</option>
		<option value="HEB">河北银行</option>
		<option value="BOS">上海银行</option>
		<option value="JSB">江苏银行</option>
     </select>
     <div class="zc-button">
      <button onclick="next();" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">下一步</button>
    </div>
    </div>
  <!-- /content --> 
</div>
</body>
</html>