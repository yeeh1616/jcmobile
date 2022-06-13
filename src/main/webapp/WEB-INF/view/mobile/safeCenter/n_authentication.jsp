<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<!-- Index Page -->
    <div data-role="page">
    	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
  		<script type="text/javascript" src="/mobile/js/safeCenter/n_authentication.js"></script>
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>实名认证</h1>
            <div class="head-left"><a onclick="gotoa('/wap/safe.wap')" style="cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse"></a> </div>
        </div>
        <!-- /header -->
        <div class="rz">
            <div id="divAuth" class="fl">您未进行实名认证</div>
            <div class="fr"><img src="/mobile/images/icons-png/chahao.png"/></div>
            <div class="clear"></div>
        </div>
        <!--content -->
        <div data-role="content" style="padding-top:0;">
            <div data-role="fieldcontain">
            	<form method="post" action="/wap/authentication.wap" id="authenForm">
	                <input type="text" name="cName" id="cName" placeholder="请填写姓名" />
	                <input type="text" name="cNumber" id="cNumber" placeholder="请填写身份证号码" />
            	</form>
            </div>

            <div class="zc-button">
                <button data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all" id="submit_but">确认提交</button>
            </div>

        </div>
        <!-- /content -->
    </div>
</body>
</html>