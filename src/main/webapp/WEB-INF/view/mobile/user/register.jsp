<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<body>
		<jsp:include page="../include/htmlheader.jsp"></jsp:include>
		<script type="text/javascript" src="/mobile/js/usercenter/register.js"></script>
		<!-- Index Page -->
    	<div data-role="page" id="register">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <div class="head-left"><a href="/wap/login.do" class="qx-icon" data-transition="slide" data-direction="reverse">购彩大厅</a></div>
            <h1>欢迎注册通行证</h1>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content">
            <ul data-role="listview" data-inset="true">
                <li>
                    <a onclick="gotoa('/wap/registerPhonePage.do')" style="cursor:pointer;" data-transition="slideup">
                        <img src="/mobile/images/shouji.png">
                        <h2>手机号注册</h2>
                        <p>免费验证短信，快速注册</p>
                    </a>
                </li>
            </ul>
            <ul style="display:none;" data-role="listview" data-inset="true">
                <li>
                    <a href="#">
                        <img src="../images/youxiang.png">
                        <h2>邮箱注册</h2>
                        <p>使用您的常用邮箱注册</p>
                    </a>
                </li>
            </ul>
            <div class="">如果您已经注册凤凰微彩帐号，<a data-transition="slideup" data-direction="reverse" onclick="gotoa('/wap/login.do')" style="cursor:pointer;">请直接登录</a></div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>