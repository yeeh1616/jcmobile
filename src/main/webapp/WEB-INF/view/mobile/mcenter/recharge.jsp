<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
    <!-- Index Page -->
<div data-role="page" id="card">
  <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
    <div class="head-left"><a href="#" class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a></div>
    <h1>充值</h1>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" class="common-icon" style="padding-left:0;padding-right:0">
      <ul data-role="listview" data-inset="true">
      <li> <a href="#"> <img src="/mobile/images/yhk-icon.png"/>
        <h2>银行卡充值</h2>
        <p>支持多家银行快速充值</p>
        </a> </li>
    </ul>
    <ul data-role="listview" data-inset="true">
      <li> <a href="register_phone.html" data-transition="slideup"> <img src="/mobile/images/xinyongka.png"/>
        <h2>信用卡充值</h2>
        <p>方便，快捷，安全</p>
        </a> </li>
    </ul>
    <ul data-role="listview" data-inset="true">
      <li> <a href="javascript:$.mobile.changePage('/wap/recharge/rechargezfb.wap');"> <img src="/mobile/images/zfb_icon.png"/>
        <h2>支付宝充值</h2>
        <p>无手续费，充值立即到账</p>
        </a> </li>
    </ul>
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