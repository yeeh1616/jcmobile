<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.suny.com.cn/customer.tld" prefix="customertags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="/mobile/css/jquery.mobile-1.4.5.min.css"/>
<link rel="stylesheet" type="text/css" href="/mobile/css/base.css"/>
<script type="text/javascript" src="/mobile/js/jquery.min.js"></script>
<script type="text/javascript" src="/mobile/js/jquery.mobile-1.4.5.min.js"></script>
</head>
<body>
<div data-role="page"  id="succeed">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >支付成功</h1>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding: 0;
background-color: #FFFEEC;
border: 1px solid #ccc;
padding-bottom: 2.5em;">
    <div class="success_icon"><img src="/mobile/images/icons-png/duigou.png" width="30" height="30"></div>
    <div class="success_txt">
      <div>您已成功购买彩票,付款金额<span id="spanMoney">${order.betPrice }</span>元！</div>
      <div class="tz">点击查看<a data-transition="slide" rel="external"  data-ajax="false"  href="/wap/orderListsChasePage.wap">购彩记录</a>,或返回<a data-transition="slide" data-ajax="false"  href="/?mfrom=${mfrom }&storeId=${domain.storeId}">购彩大厅</a></div>
    </div>
    <div class="clear"></div>
  </div>
  <!-- /content --> 

</div>
</body>
</html>