<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.suny.com.cn/customer.tld" prefix="customertags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<jsp:include page="../../include/htmlheader.jsp"></jsp:include>
</head>
<body>
<div data-role="page">
<script type="text/javascript" src="/mobile/js/usercenter/putMoney/putMoneyYHK.js"></script>
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1> 充值成功</h1>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding: 0;
background-color: #FFFEEC;
border: 1px solid #ccc;
padding-bottom: 2.5em;">
    <div class="success_icon"><img src="/mobile/images/icons-png/duigou.png" width="30" height="30"></div>
    <div class="success_txt">
      <div>${returnMessage} ！<span id="spanMoney">${money}</span>元！</div>
      <div class="tz">点击查看<a data-transition="slide" rel="external"  data-ajax="false"  href="/wap/mcenter.wap">账户中心</a>,或返回<a data-transition="slide" data-ajax="false"  href="/?mfrom=${mfrom }&storeId=${domain.storeId}">购彩大厅</a></div>
    </div>
    <div class="clear"></div>
  </div>
  <!-- /content --> 

</div>
<script type="text/javascript">
$(document).on("pageload",function(event,data){
  hideLoader();
});
</script>
</body>
</html>