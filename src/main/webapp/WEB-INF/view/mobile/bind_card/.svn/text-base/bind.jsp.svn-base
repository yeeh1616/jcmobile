<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/usercenter/mcenter.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>取款方式绑定</h1>
            <div class="head-left"><a onclick="gotoa('/wap/mcenter.wap')"  style="cursor:pointer;" data-transition="slide" class="qx-icon" data-direction="reverse">返回</a></div>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" id="wrapper_no_bottom">
            <div class="rz">
                <div class="fl">取款方式信息</div>
                <div class=" fr change_card"><a data-ajax="false" href="/wap/drawingMoney.wap" style=" cursor:pointer;"  data-transition="slide">进入取款页面>></a></div>
                <!--
                <div class="fr"><img src="/mobile/images/icons-png/duigou.png"/></div>
                --><div class="clear"></div>
            </div>
            
            <!-- 银行卡 -->
            <c:choose>
            <c:when test="${!empty mws[0]}"><div>
            <div id="divRealName" class="zsxm">真实姓名：<span>${mb.certiNameHide}</span><span class="fr">
			<c:choose>
			<c:when test="${mws[0].accountState == 2}"><a href="#" style="color: red">当前默认</a></c:when>
			<c:otherwise><a href="/wap/updDefaultState.wap?id=${mws[0].id}">设为默认</a></c:otherwise>
			</c:choose>
            </span></div>
            <div id="divBankName" class="sfzh">开户银行：<span>${mws[0].typeName}</span><span class="fr"><a data-ajax="false" href="/wap/updGetMoney.wap?id=${mws[0].id}">修改</a></span></div>
            <div id="divBranchName" class="sfzh">支行名称：<span>${mws[0].reserved1}</span></div>
            <div id="divCardNo" class="sfzh">银行卡号：<span>尾号${mws[0].accountCardHide}</span></div>
            </div></c:when>
            <c:otherwise><div class="zc-button" style=" padding-left:1em; padding-right:1em;">
               <a data-ajax="false" href="/wap/n_bind.wap?type=1"><button class=" ui-btn ui-shadow ui-corner-all">添加银行卡</button></a>
            </div></c:otherwise>
            </c:choose>
            
            <!-- 微信 -->
            <c:choose>
            <c:when test="${!empty mws[1]}"><div>
            <div id="divRealName" class="zsxm">真实姓名：<span>${mb.certiNameHide}</span><span class="fr">
			<c:choose>
			<c:when test="${mws[1].accountState == 2}"><a href="#" style="color: red">当前默认</a></c:when>
			<c:otherwise><a href="/wap/updDefaultState.wap?id=${mws[1].id}">设为默认</a></c:otherwise>
			</c:choose>
            </span></div>
            <div id="divBankName" class="sfzh">账号类型：<span>微信</span><span class="fr"><a data-ajax="false" href="/wap/updGetMoney.wap?id=${mws[1].id}">修改</a></span></div>
            <div id="divCardNo" class="sfzh">微信账号：<span>${mws[1].accountCardHide}</span></div>
            </div></c:when>
            <c:otherwise><div class="zc-button" style=" padding-left:1em; padding-right:1em;">
                <a data-ajax="false" href="/wap/n_bind.wap?type=2"><button class=" ui-btn ui-shadow ui-corner-all">添加微信</button></a>
            </div></c:otherwise>
            </c:choose>
            
            
            <!-- 支付宝 -->
            <c:choose>
            <c:when test="${!empty mws[2]}"><div>
            <div id="divRealName" class="zsxm">真实姓名：<span>${mb.certiNameHide}</span><span class="fr">
			<c:choose>
			<c:when test="${mws[2].accountState == 2}"><a href="#" style="color: red">当前默认</a></c:when>
			<c:otherwise><a href="/wap/updDefaultState.wap?id=${mws[2].id}">设为默认</a></c:otherwise>
			</c:choose>
            </span></div>
            <div id="divBankName" class="sfzh">账号类型：<span>支付宝</span><span class="fr"><a data-ajax="false" href="/wap/updGetMoney.wap?id=${mws[2].id}">修改</a></span></div>
            <div id="divCardNo" class="sfzh">支付宝账号：<span>${mws[2].accountCardHide}</span></div>
            </div></c:when>
            <c:otherwise><div class="zc-button" style=" padding-left:1em; padding-right:1em;">
               <a data-ajax="false" href="/wap/n_bind.wap?type=3"><button class=" ui-btn ui-shadow ui-corner-all">添加支付宝</button></a>
            </div></c:otherwise>
            </c:choose>
        </div>
        </div>
</body>
</html>
