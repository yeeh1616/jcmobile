<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/usercenter/mcenter.js"></script>
  	<script type="text/javascript" src="/mobile/js/usercenter/resetPassword.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>忘记交易密码</h1>
            <div class="head-left"><a onclick="gotoa('/wap/resetPasswordPage.wap')" style="cursor:pointer;"  data-transition="slide" class="qx-icon" data-direction="reverse"></a> </div>
        </div>
        <!-- /header -->
        <div class="rz">请重新设置新的交易密码。</div>
        <!--content -->
        <div data-role="content" style="padding-top:0;">
            <div data-role="fieldcontain">
                <input type="password" name="password" id="password" placeholder="输入新的交易密码">
                <input type="password" name="repassword" id="repassword" placeholder="再次确认新的交易密码">
            </div>
            <div class="zc-button">
            	<input type="hidden" name="sign" value="${sign}"/>
                <button onclick="forgetTransPass_reset_sc()" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">确认提交</button>
            </div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>
