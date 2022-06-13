<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page import="java.lang.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<body>
		<jsp:include page="../include/htmlheader.jsp"></jsp:include>
		
		<input type="hidden" name="morderId" value="${param.morderId}"/>
		<script type="text/javascript" src="/mobile/js/usercenter/purchaseCenter.js"></script>
		<!-- 全部投注 -->
		<div data-role="page" id="order">
			<div data-role="header" data-position="fixed" data-tap-toggle="false" id="top">
				<div class="head-left">
					<a id="title_a" href="/wap/mergerJoinList.wap" data-ajax="false"
						class="qx-icon" data-transition="slide" data-direction="reverse">合买记录</a>
				</div>
				<h1>
					合买详情
				</h1>
			</div>
			<!-- /header -->
			<!--content -->
			<div data-role="content" id="wrapper_no_bottom">
				<!--第一部分 -->
				<div class="order_plant1">
					<div class="order_plant1_right">
						<div class="order_plant1_name">
							<span id="order_plant1_name_spanName">${body.lo.licenseName}</span>
						</div>
						<div class="order_plant1_time">
							<span>方案编号：${body.mo.id}</span>
						</div>
					</div>
				</div>
				
				<div class="order_title">&nbsp;&nbsp;方案信息: </div>
				<div style="background:#fff;" >
					<br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;发起人:</span><span style="color: blue">${fn:substring(body.mo.username,0,2) }**</span></div>				
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;方案总金额：</span><span style="color: red">${body.mo.betPrice}</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;注数：</span><span>${body.lo.betNum }</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;倍数：</span><span>${body.lo.multiple}</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;保底份数:</span><span style="color: blue">${body.mo.insNum}</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;提成：</span><span style="color: red">
					<c:choose>
					<c:when test='${body.mo.brokerage <= 0}'>无提成</c:when>
				    <c:otherwise>${body.mo.brokerage * 100}%</c:otherwise>
					</c:choose>
					</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;发起人认购：</span><span style="color: blue">${body.mo.launchNum}</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;方案状态：</span><span>
					<c:choose>
			      	<c:when test="${body.mo.state == '1'}">未满员</c:when>
			      	<c:when test="${body.mo.state == '2'}">已满员</c:when>
			      	<c:when test="${body.mo.state == '3'}">已撤单</c:when>
			      	</c:choose><span style="color: red">(${body.mo.showProgress})</span>
					</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;出票状态：</span><span style="color: blue">${body.lo.stateName}</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;保密类型：</span><span style="color: blue">${body.mo.showLevelName}</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;方案发起时间：</span><span style="color: blue">${body.lo.orderDate }</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;认购截至时间：</span><span style="color: red">${body.mo.reserved2 }</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;方案描述：</span><span>${body.mo.partDetail}</span></div>
					<br/><br/>
				</div>
				
				<!--第二部分 -->
				<!--  <div class="order_plant3">
					<div class="order_title">
						投注详情:
					</div>
					<div class="order_plant3_nr">
						<c:set value="${body.orderInfo.betcodeInfo}" var="info"></c:set>
						<ul id="ul_ticket_list">
						<c:choose>
						<c:when test="${body.orderInfo.licenseId eq '9' or body.orderInfo.licenseId eq '10'}">
							<li>
								<div style=\"align:left\"><span>
									${fn:replace(info, ";","</span></div><div class='clear'></div><div style='align:left'><span>")}
								</span></div>
							</li>
						</c:when>
						<c:otherwise>
							<li>
								<div class="zui_hao choose_hao"><span>
									${fn:replace(info, ";","</span></div><div class='clear'></div><div class='zui_hao choose_hao'><span>")}
								</span></div>
							</li>
						</c:otherwise>
						</c:choose>
						</ul>
					</div>
				</div>-->
				<!--第三部分 -->
				<div class="order_plant2">
					<div class="order_title">
						认购记录:
					</div>
					<div class="order_plant2_nr">
					<ul>
						<li style="width: 33.333%;float:left;">参与人:</li>
						<li style="width: 33.333%;float:left;">合买金额:</li>
						<li style="width: 33.333%;float:left;">奖金:</li>
						<!-- 
						<li style="width: 25%;float:left;">日期:</li>
						 -->
						<div class="clear:both;"></div>
					</ul>
						<ul>
						<c:forEach items="${body.mjList}" var="list" varStatus="vs">
							<li style="width: 33.333%;float:left;">${fn:substring(list.joinUsername,0,2)}**</li>
							<li style="width: 33.333%;float:left;color: red;">${list.joinPrice}</li>
							<li style="width: 33.333%;float:left;color: red;">${list.bonus}</li>
							<!-- 
							<li style="width: 25%;float:left;">${list.joinDate}</li>
							 -->
							<div class="clear:both;"></div>
						</c:forEach>
						</ul>
					</div>
				</div>
			</div>
			<!-- /content -->
		</div>
	</body>
</html>