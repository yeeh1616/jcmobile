<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/safeCenter/changePassword.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>修改密码</h1>
            <div class="head-left"><a onclick="goto('/wap/safe.wap')" style="cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse"></a> </div>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" style="padding-top:0px;">
            <div data-role="fieldcontain">
                <div>
                    <input type="password" name="oldpassword" id="oldpassword" placeholder="旧密码">
                </div>
                <div>
                    <input type="password" name="newpassword" id="newpassword" placeholder="新密码（密码长度6--15位）">
                </div>
                <div>
                    <input type="password" name="repassword" id="repassword" placeholder="确认新密码">
                </div>
            </div>
            <div class="zc-button">
                <button onclick="modifyPassword_sc()" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">立即修改</button>
            </div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>
<script type="text/javascript">
function goto(url){
	window.location.href=url;
}
</script>
