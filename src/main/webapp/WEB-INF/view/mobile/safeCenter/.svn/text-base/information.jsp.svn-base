<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/safeCenter/n_authentication.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>我的资料</h1>
            <div class="head-left"><a onclick="gotoa('/wap/safe.wap')" style="cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse"></a> </div>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" style="padding:0;">
            <div id="divRealName" class="zsxm">真实姓名：<span>${certiName}</span>
            </div>
            <div id="divIDNum" class="sfzh">身份证号：<span>
            	<c:if test="${certiNumber!=null && certiNumber != ''}">${certiNumber}</c:if>
            	<c:if test="${certiNumber==null && certiNumber == ''}">您还未进行实名验证</c:if>
            </span></div>
            <div id="divPhone" class="sfzh">绑定手机：<span>
                <c:if test="${phone!=null && phone != ''}">${phone}</c:if>
            	<c:if test="${phone==null && phone == ''}">您还未绑定手机号</c:if>
            </span></div>
            <div id="divBankCard" class="sfzh">银行卡号：<span>
                <c:if test="${bankAccount!=null && bankAccount != ''}">${bankAccount}</c:if>
            	<c:if test="${bankAccount==null && bankAccount == ''}">您还未绑定银行卡</c:if>
            </span></div>
            <div class="xts">小提示：作为提现的唯一凭据，请填写与身份证相同的信息。</div>
        </div>
</body>
</html>