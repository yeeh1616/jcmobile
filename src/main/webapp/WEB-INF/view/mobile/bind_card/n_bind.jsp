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
      	<input type="hidden" value="${param.type}" name="type"/>
  		<script type="text/javascript" src="/mobile/js/usercenter/n_bind.js"></script>
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>绑定取款方式</h1>
            <div class="head-left"><a onclick="gotoa('/wap/mcenter.wap')" style="cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse"></a> </div>
        </div>
        <!--content -->
        <div data-role="content" id="wrapper_no_bottom">
            <!-- /header -->
            <div class="rz">
                <div class="fl">您未绑定取款方式，请尽快绑定</div>
                <div class="fr"><img src="/mobile/images/icons-png/chahao.png"/></div>
                <div class="clear"></div>
            </div>
            <div data-role="fieldcontain" style="padding-left:1em; padding-right:1em">
                <form action="/wap/addBind.wap?type=${param.type}" id="bankForm">
                <div>
                    <label for="fname">真实名称：</label>
                    <input type="text" disabled='disabled' name="certiName" id="certiName" value="${mb.certiName}"/>
                </div>
                <c:if test="${param.type eq '1'}">
                <div>
                    <label for="fname">开户银行：</label>
                    <input type="text" name="accountName" id="accountName" placeholder="请填写您银行卡的开户行，如：中国银行"/>
                </div>
                <div>
                    <label for="fname">支行名称：</label>
                    <input type="text" name="branchName" id="branchName" placeholder="请填写支行名称"/>
                </div>
                </c:if>
                <c:choose>
                <c:when test="${param.type eq '1'}">
                <div>
                    <label for="fname">银行卡号：</label>
                    <input type="text" name="accountCard" id="accountCard" placeholder="请认真填写银行卡卡号"/>
                </div>
                </c:when>
                <c:when test="${param.type eq '2'}">
                <div>
                    <label for="fname">微信账号：</label>
                    <input type="text" name="accountCard" id="accountCard" placeholder="请填写微信号"/>
                </div>
                <div>
                    <label for="fname">确认账号：</label>
                    <input type="text" name="raccountCard" id="raccountCard" placeholder="请再次填写微信号"/>
                </div>
                </c:when>
                <c:when test="${param.type eq '3'}">
                <div>
                    <label for="fname">支付宝账号：</label>
                    <input type="text" name="accountCard" id="accountCard" placeholder="请填写支付宝账号"/>
                </div>
                <div>
                    <label for="fname">确认账号：</label>
                    <input type="text" name="raccountCard" id="raccountCard" placeholder="请再次填写支付宝账号"/>
                </div>
                </c:when>
                </c:choose>
                </form>
            </div>
            <div class="zc-button" style="padding-left:1em; padding-right:1em">
                <button data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all" id="bdqkfs">确认提交</button>
            </div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>
