<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
  </head> 
  <body>
  	<script type="text/javascript" src="/mobile/js/safeCenter/changPhoneInput.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>添加手机号</h1>
            <div class="head-left"><a onclick="gotoa('/wap/safe.wap')" style="cursor:pointer;" data-transition="slide" class="qx-icon" data-direction="reverse"></a> </div>
        </div>
        <!-- /header -->
        <div id="divPhoneNo" class="rz">
        	请绑定手机号码
        </div>
        <!--content -->
        <div data-role="content" style="padding-top:0;">
            <div data-role="fieldcontain">
                <div class="zhcz">
                	<input type="text" id="phone" placeholder="输入手机号码"/>
                </div>
                <div class="zhcz">
                	<input type="text" id="rphone" placeholder="确认手机号码"/>
                </div>
                <div class="yzm">
                    <input type="text" name="vfcode" id="vfcode" placeholder="输入验证码"/>
                </div>
                <div class="yzm_button">
                	<a id="a_vfcode" style="cursor:pointer;" onclick="modifyPhone_vfCode_add()">获取验证码</a>
                </div>
                <div class="clear"></div>
            </div>
            <div class="zc-button">
                <button onclick="modifyPhone_add()" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">确认提交</button>
            </div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>
