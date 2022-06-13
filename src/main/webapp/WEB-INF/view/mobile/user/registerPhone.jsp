<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<body>
		<jsp:include page="../include/htmlheader.jsp"></jsp:include>
		<script type="text/javascript" src="/mobile/js/usercenter/registerPhone.js"></script>
		<!-- Index Page -->
    <div data-role="page" id="register_phone">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>欢迎注册通行证</h1>
            <div class="head-left"><a href="#" onclick="gotoa('/wap/registerPage.do')" data-transition="slide" data-direction="reverse">关闭</a> </div>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" id="wrapper_no_bottom">
            <div data-role="fieldcontain" style="padding-left:1em;padding-right:1em">
                <div>
                    <label for="fname">填写手机号：</label>
                    <input type="text" name="phone_no" id="phone_no" placeholder="">
                </div>
                <div>
                    <label for="fname">用户密码：</label>
                    <input type="password" name="password" id="password" placeholder="">
                </div>
                <div>
                    <label for="fname">确认密码：</label>
                    <input type="password" name="repassword" id="repassword" placeholder="">
                </div>
                <div>
                    <label for="fname">店铺邀请码：</label>
                    <c:if test="${domain.storeId != -1}">
                    <input type="text" name="invitation_code" id="invitation_code" placeholder="" value="${fn:substring(domain.netUrl,0,fn:indexOf(domain.netUrl,'.cp020')) }">
                    </c:if>
                    <c:if test="${domain.storeId == -1}">
                    <input type="text" name="invitation_code" id="invitation_code" placeholder="">
                     </c:if>
                </div>
            </div>
            <div style="padding-left:1em;padding-right:1em">
                <div class="yzm">
                    <input type="text" name="vfcode" id="vfcode" placeholder="">
                </div>
                <div class="yzm_button"><a id="a_vfcode" onclick="register_vfCode_ma()">获取验证码</a></div>
                <div class="clear"></div>
            </div>
            <div style="padding-left:1em;padding-right:1em">
                <div class="zc-button">
                    <button onclick="register_ma()" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">确认提交</button>
                </div>
            </div>
            <div style="padding-left:1em;padding-right:1em">
                <div class="tk"><input id="ckbIAgree" name="" class="fx" type="checkbox" value="" checked><div class="neirong_tk">我同意<a data-transition="slideup" data-direction="reverse" href="#">“服务条款”</a>和<a data-transition="slideup" data-direction="reverse" href="#">“网络游戏用户隐私权保护和个人信息利用政策”</a></div></div>
            </div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>