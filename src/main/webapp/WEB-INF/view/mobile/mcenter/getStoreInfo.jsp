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
					<a id="title_a" href="/wap/mcenter.wap" data-ajax="false"
						class="qx-icon" data-transition="slide" data-direction="reverse">返回</a>
				</div>
				<h1>
					${sessionScope.domain.storeName}
				</h1>
			</div>
			<!-- /header -->
			<!--content -->
			<div data-role="content">
				<div class="order_plant2">
					<!--<div class="order_plant2_nr">-->
					<div class="order_title">店主信息:</div>
					<div class="order_plant2_nr">
					<table width="100%">
					<tr>
						<td width="30%">店主名称：</td><td>${sessionScope.domain.bossName}</td>
					</tr>
					<tr>
						<td width="30%">店主手机：</td><td>${sessionScope.domain.storeMobile}</td>
					</tr>
					<tr>
						<td width="30%">店主电话：</td><td>${sessionScope.domain.storePhone}</td>
					</tr>
					<tr>
						<td width="30%">店主QQ：</td><td>${sessionScope.domain.storeQq}</td>
					</tr>
					<tr>
						<td width="30%">店铺邮箱：</td><td>${sessionScope.domain.storeEmail}</td>
					</tr>
					<tr>
						<td width="30%">店铺网址：</td><td>${sessionScope.domain.netUrl}</td>
					</tr>
					<tr>
						<td width="30%">店铺地址：</td><td>${sessionScope.domain.address}</td>
					</tr>
					</table>
					

					</div>
				</div>
				
			</div>
			<!-- /content -->
		</div>
	</body>
</html>