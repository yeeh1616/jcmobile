<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<jsp:include page="../../include/htmlheader.jsp"></jsp:include>
</head>
<body>
<!-- Index Page -->
<div data-role="page" id="card">
  <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
    <div class="head-left"><a href="/wap/mcenter.wap" class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a></div>
    <h1>充值</h1>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" class="common-icon" style="padding-left:0;padding-right:0">
    <!--
    <ul data-role="listview" data-inset="true">
      <li>
         <a <c:choose><c:when test="${sftKey eq '1'}">href="/wap/recharge/rechargeNo1.wap?type=DR"</c:when><c:otherwise>onclick="alert('该店铺暂不支持盛付通充值');"</c:otherwise></c:choose> data-transition="slideup">
          <img src="/mobile/images/yhk-icon.png"/><h2>储蓄卡充值</h2><p>支持多家银行快速充值</p>
        </a>
      </li>
    </ul>
    <ul data-role="listview" data-inset="true">
      <li>
        <a <c:choose><c:when test="${sftKey eq '1'}">href="/wap/recharge/rechargeNo1.wap?type=CR"</c:when><c:otherwise>onclick="alert('该店铺暂不支持盛付通充值');"</c:otherwise></c:choose> data-transition="slideup">
          <img src="/mobile/images/xinyongka.png"/><h2>信用卡充值</h2><p>方便，快捷，安全</p>
        </a>
      </li>
    </ul>
    -->
    <!-- 
    <ul data-role="listview" data-inset="true"><li> <a href="#"> <img src="/mobile/images/zfb_icon.png"><h2>支付宝充值</h2><p>无手续费，充值立即到账</p></a></li>
    </ul>
     -->
    <ul data-role="listview" data-inset="true">
      <li>
        <a href="/wap/putMoneyZZ.wap">
        <img src="/mobile/images/zhuanzhang.png"/><h2>转账充值</h2><p>最传统的充值方式</p>
        </a>
      </li>
    </ul>
    <c:if test="${hfbKey eq '1'}" >
    <ul data-role="listview" data-inset="true">
      <li>
        <a href="/wap/recharge/Heepay.wap" data-ajax="false">
        <img src="/mobile/images/heepay.png"/><h2>汇付宝充值</h2><p>方便快捷的充值方式</p>
        </a>
      </li>
    </ul>
    </c:if>
    <c:if test="${sftKey eq '1'}" >
    <ul data-role="listview" data-inset="true">
      <li>
        <a href="/wap/recharge/rechargeNo1.wap?type=DR" data-ajax="false">
        <img src="/mobile/images/sft.png"/><h2>盛付通充值</h2><p>方便快捷的充值方式</p>
        </a>
      </li>
    </ul>
    </c:if>
  </div>
  <!-- /content --> 
</div>
</body>
</html>