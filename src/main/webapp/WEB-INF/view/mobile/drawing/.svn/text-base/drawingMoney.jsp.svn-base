<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
	<script type="text/javascript" src="/mobile/js/usercenter/drawingMoney.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>账户提现</h1>
            <div class="head-left"><a onclick="gotoa('/wap/mcenter.wap')" style=" cursor:pointer;"  data-transition="slide" class="qx-icon" data-direction="reverse">用户中心</a></div>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" id="wrapper_no_bottom">
            <div class="rz">
                <div class="fl"><span id="spBalance" style="color:#F00">可用：<fmt:formatNumber value="${money[0]}" pattern="#,###.##" minFractionDigits="2"></fmt:formatNumber>元 |可取：<fmt:formatNumber value="${money[1]}" pattern="#,###.##" minFractionDigits="2"></fmt:formatNumber>元</span></div>
                <div class=" fr change_card"><!--<a href="#" style=" cursor:pointer;"  data-transition="slide">更换取款方式</a>--></div>
                <div class="clear"></div>
            </div>
            <div class="zsxm">真实姓名：<span id="spRealName">${mb.certiName}</span></div>
            <div class="sfzh">
            <c:choose>
            <c:when test="${mw.accountType eq '1'}">开户银行：</c:when>
            <c:otherwise>账号类型:</c:otherwise>
            </c:choose>
            <span id="spBankName">${mw.typeName}</span></div>
            <c:if test="${mw.reserved1 != null}">
            <div class="sfzh">支行名称：<span id="spBranchBank">${mw.reserved1}</span></div>
            </c:if>
            <div class="sfzh">
            <c:choose>
            	<c:when test="${mw.accountType eq '1'}">银行卡号：</c:when>
            	<c:otherwise>${mw.typeName}账号：</c:otherwise>
            </c:choose>
            <span id="spBankCard">${mw.accountCard}</span></div>
            <div style="padding-left:1em; padding-right:1em;">
                <div style="float:left; width:28%;line-height: 53px;">提款金额：</div>
                <div style=" float:left; width:72%">
                    <div>
                        <input type="text" id="money" placeholder="请输入金额"/>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <!--<div style="padding-left:1em; padding-right:1em;">
                <div style="float:left; width:28%;line-height: 53px;">交易密码：</div>
                <div style=" float:left; width:72%">
                    <div>
                        <input type="password" id="tpwd" placeholder="请输入交易密码"/>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="wjmi_jy"><a data-transition="slide" onclick="forgetPassword()" style="cursor:pointer;">忘记交易密码？</a></div>
            </div>
            -->
            <div class="zc-button" style=" padding-left:1em; padding-right:1em;">
            	<input type="hidden" name="accountType" value="${mw.accountType}"/>
            	<input type="hidden" name="keMoney" value="${money[1]}"/>
                <button data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all" id="qdtj">确认提交</button>
            </div>
            
            <div class="zc-button" style=" padding-left:1em; padding-right:1em;">
                <a href="/wap/bind.wap"><button class=" ui-btn ui-shadow ui-corner-all">更换取款方式</button></a>
            </div>
            
        </div>
    </div>
</body>
</html>
