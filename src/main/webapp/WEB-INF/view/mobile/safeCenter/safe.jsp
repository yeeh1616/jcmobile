<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<!-- Index Page -->
    <div data-role="page" id="setting">
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/safeCenter/safeCenter.js"></script>
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <div class="head-left"><a onclick="gotoa('/wap/mcenter.wap')" style="cursor:pointer;"  class="qx-icon" data-transition="slide" data-direction="reverse"></a></div>
            <h1>安全中心</h1>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" class="ui-content" id="wrapper_no_bottom">
            <!--充值&提现 -->
            <div class="common-icon">
                <ul data-role="listview" data-inset="true">

                    <li><a data-transition="slide" onclick="windowChangePage_foundation('/wap/changePasswordPage.wap')">登录密码<span>修改</span></a></li>

                    <li><a data-transition="slide" onclick="windowChangePage_foundation('/wap/changePhonePage.wap')">绑定手机<span>
                        <c:if test="${phoneFlag == 'Y'}">修改</c:if>
                    	<c:if test="${phoneFlag == 'N'}">设置</c:if> 
                    </span></a></li>
                    <!--<li><a data-transition="slide" onclick="windowChangePage_foundation('/wap/passwordPage.wap')">设置交易密码<span id="spTPFlag">
                    	<c:if test="${transPassFlag == 'N'}">未设置</c:if>
                    	<c:if test="${transPassFlag == 'Y'}">已设置</c:if>
                    </span></a></li>
                    --><li><a data-transition="slide" href="/wap/authenticationPage.wap">实名认证<span id="spVFlag">
                        <c:if test="${verifiedFlag == 'N'}">未认证</c:if>
                    	<c:if test="${verifiedFlag == 'Y'}">已认证</c:if>
                    </span></a></li>
                </ul>
                <ul data-role="listview" data-inset="true">
                    <li><a data-transition="slide" onclick="windowChangePage_foundation('/wap/informationPage.wap')">我的资料</a></li>
                </ul>
            </div>
            <!--充值&提现 end-->
        </div>
        <!-- /content -->
    </div>
</body>
</html>
<script type="text/javascript">
	function gotoa(url){
		window.location.href=url;
	}
	flag_init_sc()
</script>