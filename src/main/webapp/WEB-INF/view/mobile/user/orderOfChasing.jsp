<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page import="java.lang.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<body>
		<jsp:include page="../include/htmlheader.jsp"></jsp:include>
		<script type="text/javascript"
			src="/mobile/js/usercenter/purchaseCenter.js"></script>
		<!-- 全部投注 -->
		<input type="hidden" id="orderId" value="${orderId}">
		<input type="hidden" id="type" value="${type}">
		<div data-role="page" id="order">
			<div data-role="header" data-position="fixed" data-tap-toggle="false"
				id="top">
				<div class="head-left">
					<a id="title_a" href="/wap/orderListsChasePage.wap" data-ajax="false"
						class="qx-icon" data-transition="slide" data-direction="reverse">购彩记录</a>
				</div>
				<h1>
					追号详情
				</h1>
			</div>
			<!-- /header -->
			<!--content -->
			<div data-role="content" id="wrapper_no_bottom">
				<!--第一部分 -->
				<div style="background:#fff;" >
					<c:set var="len" value="${fn:length(json.body.orderList)}"/>
					&nbsp;&nbsp;&nbsp;总金额：${json.body.orderPrice}元 &nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;总期数：${len}期
					</br></br>
					<c:set var="betCodeArr" value="${fn:split(json.body.orderList[0].betCode, ';')}" />
					<c:set var="betCode" value="${fn:join(betCodeArr, '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')}" />
					<div style="display:inline;">&nbsp;&nbsp;&nbsp;投注详情:</div>				
					<div style="display:inline;">${betCode}</div>
					</br></br>
				</div>
				<!--第二部分 -->
				<div class="order_plant2">
					<div class="order_title">
						投注信息:
					</div>
					<div class="order_plant2_nr">
					<ul>
						<li style="width: 33.333%;float:left;">期号:</li>
						<li style="width: 33.333%;float:left;">状态:</li>
						<li style="width: 33.333%;float:left;">奖金:</li>
						<div class="clear:both;"></div>
						<!--流单情况（如果没出现流单这个LI 不会出现）-->
					</ul>
					<c:forEach var="list" items="${json.body.orderList}" varStatus="varStatus">
						<ul>
							<li style="width: 33.333%;float:left;">${list.issue}</li>
							<li style="width: 33.333%;float:left;">${list.stateName}</li>
							<li style="width: 33.333%;float:left;">${list.finiBonus}</li>
							<div class="clear:both;"></div>
							<!--流单情况（如果没出现流单这个LI 不会出现）-->
						</ul>
					</c:forEach>
					</div>
				</div>
			</div>
			<!-- /content -->
			<!-- 最近中奖 -->
		</div>
	</body>
</html>