<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<body>
    <div data-role="page">
    	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
		<script type="text/javascript" src="/mobile/js/usercenter/resetAccount.js"></script>
		<!-- Index Page -->
		<input type="hidden" id="phone" value="${phone}"/>
		<!-- <input type="hidden" id="sign" value="${sign}"/> -->
		<input type="hidden" id="userName" value="${userName}"/>
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>重新设置密码</h1>
            <div class="head-left"><a href="/wap/accountPasswordPage.do" data-transition="slide" class="qx-icon" data-direction="reverse"></a> </div>
        </div>
        <!-- /header -->
        <div class="rz">请重新设置密码。</div>
        <!--content -->
        <div data-role="content" style="padding-top:0;">
            <div data-role="fieldcontain">
                <input type="password" name="password" id="password" placeholder="输入新的密码">
                <input type="password" name="repassword" id="repassword" placeholder="再次确认新的密码">
            </div>
            <div class="zc-button">
                <button onclick="forgetPassword_reset_ma()" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">确认提交</button>
            </div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>