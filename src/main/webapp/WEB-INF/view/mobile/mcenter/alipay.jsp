<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
    <div data-role="page" id="card">
    <script type="text/javascript" src="/mobile/js/usercenter/recharge.js"></script>
  <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
    <h1>支付宝充值</h1>
    <div class="head-left"><a href="" data-transition="slide" class="qx-icon" data-direction="reverse" ></a> </div>
  </div>
  <!-- /header -->
  <div class="rz">支付宝对单笔金额与每日总额都有限制。</div>
  <!--content -->
  <div data-role="content" style="padding-top:0;">
  <form id="alipayform" action="/wap/recharge/alipayadd.wap" method="get">
    <div data-role="fieldcontain">
    <div class="zhcz">
     <input type="text" name="rmoney" id="rmoney" placeholder="请输入金额" />元</div>
    </div>
    <div class="zc-button">
      <button id="alipaySubmit" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">确认</button>
    </div>
    </form>
  </div>
  <!-- /content --> 
  </div>
  </body>
</html>
<script type="text/javascript">
	function windowChangePage_foundation(url){
		window.location.href=url;
	}
</script>