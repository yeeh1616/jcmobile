<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>实名认证</h1>
            <div class="head-left"><a onclick="gotoa('/wap/safe.wap')" style="cursor:pointer;"  data-transition="slide" class="qx-icon" data-direction="reverse"></a></div>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" id="wrapper_no_bottom">
            <div class="rz">
                <div class="fl">您已完成实名认证</div>
                <div class="fr"><img src="/mobile/images/icons-png/duigou.png"></div>
                <div class="clear"></div>
            </div>
            <div id="divRealName" class="zsxm">真实姓名：<span>${mb.certiName}</span></div>
            <div id="divIDNum" class="sfzh">身份证号：<span>${mb.certiNumber}</span></div>
        </div>
	</div>
</body>
</html>