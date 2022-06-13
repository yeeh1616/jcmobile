<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page import="java.lang.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<body>
		<jsp:include page="../include/htmlheader.jsp"></jsp:include>
		
		<div data-role="page">
			<div data-role="header" data-position="fixed" data-tap-toggle="false">
				<div class="head-left">
					<a id="title_a" href="/wap/recharge/recharge.wap" data-ajax="false"
						class="qx-icon" data-transition="slide" data-direction="reverse">返回</a>
				</div>
				<h1>
					转账充值
				</h1>
			</div>
			<!-- /header -->
			<!--content -->
			<div data-role="content">
				<div class="order_plant2">
					<div class="order_title">转账充值:</div>
					<!--<div class="order_plant2_nr">-->
					<div>
					<table width="100%">
					<tr bgcolor="#ffffff">
						<td width="20%" align="center">类型</td>
						<td width="60%" align="center">账号</td>
						<td width="20%" align="center">收款人</td>
					</tr>
					<c:forEach items="${list}" var="obj" varStatus="vs">
					<tr style="font-family:'宋体'; font-size:13px;" bgcolor="#ffffff">
						<td width="20%" align="center">
							<c:choose><c:when test="${obj.type == 1}">银行卡</c:when><c:when test="${obj.type == 2}">支付宝</c:when><c:when test="${obj.type == 3}">财付通</c:when><c:when test="${obj.type == 4}">微信</c:when></c:choose>
						</td>
						<td width="60%" align="center" style="color:blue;">
						<c:choose><c:when test="${obj.type == 1}">
							<table width="100%"><tr><td align="center">${obj.account}</td></tr><tr><td align="center">${obj.accountName}</td></tr></table>
						</c:when>
						<c:otherwise>${obj.account}</c:otherwise>
						</c:choose>
						</td>
						<td width="20%" align="center">${obj.accountUserName}</td>
					</tr>
					</c:forEach>
					</table>
				
					</div>
					<br/>
					
					<div class="order_title">店主信息:</div>
					<div>
					<table width="100%">
					<tr>
						<td>店主名称：</td><td>${s.bossName}</td>
					</tr>
					<tr>
						<td>店主手机：</td><td>${s.storeMobile}</td>
					</tr>
					<tr>
						<td>店主电话：</td><td>${s.storePhone}</td>
					</tr>
					<tr>
						<td>店主QQ：</td><td>${s.storeQq}</td>
					</tr>
					<tr>
						<td>店铺地址：</td><td>${s.netUrl}</td>
					</tr>
					</table>
					
					
					<!-- 
					<ul>
						<li style="width: 30%;float:left;">店主名称：</li>
						<li style="width: 70%;float:left;">${s.bossName}</li>
					</ul>
					<ul>
						<li style="width: 30%;float:left;">店主手机：</li>
						<li style="width: 70%;float:left;">${s.storeMobile}</li>
					</ul>
					<ul>
						<li style="width: 30%;float:left;">店主电话：</li>
						<li style="width: 70%;float:left;">${s.storePhone}</li>
					</ul>
					<ul>
						<li style="width: 30%;float:left;">店主QQ：</li>
						<li style="width: 70%;float:left;">${s.storeQq}</li>
					</ul>
					<ul>
						<li style="width: 30%;float:left;">店铺地址：</li>
						<li style="width: 70%;float:left;">${s.netUrl}</li>
					</ul>
					 -->

					</div>
				</div>
				
			</div>
			<!-- /content -->
		</div>
	</body>
</html>