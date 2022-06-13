<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/usercenter/mcenter.js"></script>
  	<script type="text/javascript" src="/mobile/js/usercenter/forgetPassword.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>忘记交易密码</h1>
            <div class="head-left"><a onclick="gotoa('/wap/drawingMoney.wap')" style="cursor:pointer;" data-transition="slide" class="qx-icon" data-direction="reverse"></a> </div>
        </div>
        <!-- /header -->
        <div class="rz">输入用户名，填写手机号获取验证码。</div>
        <!--content -->
        <div data-role="content" style="padding-top:0;">
            <div data-role="fieldcontain">
                <input type="text" name="name" id="name" placeholder="输入用户名">
                <div class="yzm">
                    <input type="text" name="phone" id="phone" placeholder="输入手机号">
                </div>
                <div class="yzm_button"><a onclick="forgetTransPass_vfCode_sc('phone')" id="a_vfcode">获取验证码</a></div>
                <div class="clear"></div>
                <input type="text" name="vfCode" id="vfCode" placeholder="输入验证码">
            </div>
            <div class="zc-button">
                <button onclick="forgetTransPass_next_sc()" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">下一步</button>
            </div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>
