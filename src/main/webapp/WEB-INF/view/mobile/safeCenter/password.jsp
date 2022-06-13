<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
    <div data-role="page">
      	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
	  	<script type="text/javascript" src="/mobile/js/safeCenter/password.js"></script>
	    <!-- Index Page -->
	    <input type="hidden" id="transPassFlag" value="${transPassFlag}"/>
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>交易密码</h1>
            <div class="head-left"><a href="/wap/safe.wap" style="cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse"></a> </div>
        </div>
        <div id="divTP" class="rz">
        	<c:if test="${transPassFlag == 'Y'}">
        		您已设置了交易密码
        	</c:if>
        </div>
        <!-- /header -->
        <!--content -->
        <div id="divTPContent" data-role="content" style="padding-top:0px;<c:if test="${transPassFlag == 'Y'}">display:none;</c:if>">
            <div data-role="fieldcontain">
                <div>
                    <input type="password" name="password" id="password" placeholder="设置密码（密码长度6--16位）">
                </div>
                <div>
                    <input type="password" name="repassword" id="repassword" placeholder="确认密码">
                </div>
            </div>
            <div class="zc-button">
                <button onclick="setTransPass_sc()" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">确认提交</button>
            </div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>
