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
  	<script type="text/javascript" src="/mobile/js/safeCenter/changePhone.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>修改手机号</h1>
            <div class="head-left"><a onclick="gotoa('/wap/safe.wap')" style="cursor:pointer;" data-transition="slide" class="qx-icon" data-direction="reverse"></a> </div>
        </div>
        <!-- /header -->
        <div id="divPhoneNo" class="rz">
        	<c:if test="${phone != null && phone !=''}">
        		当前已绑定的手机号码：${phone}
        	</c:if>
        </div>
        <!--content -->
        <div data-role="content" style="padding-top:0;">
            <div data-role="fieldcontain">
                <input type="hidden" name="oldphone" id="oldphone" placeholder="旧手机号码" value="${phone}"/>
                <input type="text" name="newphone" id="newphone" placeholder="新手机号码"/>
                <div class="yzm">
                    <input type="text" name="vfcode" id="vfcode" placeholder="输入验证码"/>
                </div>
                <div class="yzm_button"><a id="a_vfcode" style="cursor:pointer;" onclick="modifyPhone_vfCode_sc()">获取验证码</a></div>
                <div class="clear"></div>
            </div>
            <div style="text-align:center;color:#A9A9A9;"><span>验证码将发送到号码：${phone}</span></div>
            <div class="zc-button">
                <button onclick="modifyPhone_sc()" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">确认修改</button>
            </div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>
