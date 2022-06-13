<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/safeCenter/safeCenter.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>注册成功</h1>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" style="padding: 0;
background-color: #FFFEEC;
border: 1px solid #ccc;
padding-bottom: 2.5em;">
            <div class="success_icon"><img src="/mobile/images/icons-png/duigou.png" width="30" height="30"></div>
            <div class="success_txt">
                <div>恭喜<span id="spPhone"></span>,注册成功！</div>
                <div class="tz">点击查看<a data-transition="slide" rel="external" onclick="gotoa('/wap/safe.wap')" style="cursor:pointer;">完善资料</a>,或<a data-transition="slide" rel="external" onclick="gotoa('/')" style="cursor:pointer;">先随便逛逛</a></div>
            </div>
            <div class="clear"></div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>
<script type="text/javascript">
    function init_register() {
        var phone = getQueryString_foundation('phone');
        $("#spPhone").text(phone);
    }
    init_register();
</script>