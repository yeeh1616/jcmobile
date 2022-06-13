<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/safeCenter/safeCenter.js"></script>
  	<script type="text/javascript">
        function pload_pass() { setTimeout("location.href='/wap/mcenter.wap'", 3000); }
        pload_pass();
    </script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>交易密码设置成功</h1>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" style="padding: 0;
background-color: #FFFEEC;
border: 1px solid #ccc;
padding-bottom: 2.5em;">
            <div class="success_icon"><img src="/mobile/images/icons-png/duigou.png" width="30" height="30"></div>
            <div class="success_txt">
                <div>您已成功设置交易密码！</div>
                <div class="tz">如果页面没有跳转,请点击<a data-transition="slide" rel="external" href="/wap/mcenter.wap">返回安全中心</a></div>
                <div class="tz red">正在为您转到登录页面,请稍后..</div>
            </div>
            <div class="clear"></div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>