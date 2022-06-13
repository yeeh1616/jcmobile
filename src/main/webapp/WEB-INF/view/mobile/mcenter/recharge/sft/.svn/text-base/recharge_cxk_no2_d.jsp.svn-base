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
  <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
    <h1>储蓄卡充值</h1>
    <div class="head-left"><a href="/wap/recharge/rechargeNo1.wap?type=DR" data-transition="slide" class="qx-icon" data-direction="reverse"></a> </div>
  </div>
  <!-- /header -->
  <div class="rz" style="background-color: #2486DA; color: #fff;">当前选择：${sessionScope.bankName}&nbsp;充值金额：${sessionScope.money} 元</div>
  <!--content -->
  <div data-role="content" style="padding-top:0;">
    <div data-role="fieldcontain">
      <div class="clear"></div>
       <div class="zhcz">
     	<select id="cardNumber">
     	 <c:forEach items="${sessionScope.bankInfoList}" var="list">
     	  <option value="${list.cardNo}">${list.cardNoHide}</option>
     	 </c:forEach>
     	</select>
       </div>
       <div class="yzm">
        <input  type="text" name="code" placeholder="输入验证码"/>
      </div>
      <div class="yzm_button">
      	<a onclick="getCode('DR','d');" id="a_vfcode">获取验证码</a>
      </div>
      <div class="clear"></div>
    </div>
    <div class="zc-button">
      <button onclick="submitCode();" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">确 定</button>
    </div>
     <div class="zc-button">
    	<button onclick="window.location.href='/wap/recharge/switchBankCard.wap?type=DR'" class=" ui-btn ui-shadow ui-corner-all">选择其他银行卡</button>
  	</div>
  </div>
  <!-- /content --> 
</div>
</body>
</html>