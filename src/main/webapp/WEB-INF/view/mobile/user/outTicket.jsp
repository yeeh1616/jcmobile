<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<body>
		<jsp:include page="../include/htmlheader.jsp"></jsp:include>
		<script type="text/javascript"
			src="/mobile/js/usercenter/purchaseCenter.js"></script>
		<!-- 全部投注 -->
		<input type="hidden" id="orderId" value="${orderId}"/>
		<div data-role="page" id="order">
			<div data-role="header" data-position="fixed" data-tap-toggle="false"
				id="top">
				<div class="head-left">
					<a href="/wap/order.wap?orderId=${orderId}" data-ajax="false" class="qx-icon"
						data-transition="slide" data-direction="reverse">订单详情</a>
				</div>
				<h1>
					出票详情
				</h1>
			</div>
			<!-- /header -->
			<!--content -->
			<div data-role="content" id="wrapper_no_bottom">
				<!--第一部分 -->
				<div class="order_plant3">
					<div class="order_title">
						出票详情:
					</div>
					<div class="order_plant3_nr">
						<ul id="ul_ticket_list">
						</ul>
					</div>
				</div>
			</div>
			<!-- /content -->
<script>
	$(document).ready(function() {
		var orderId = $("#orderId").val();
		BindDetailOut_Ticket(orderId);
	});
</script>
		</div>
		<!-- 最近中奖 -->
	</body>
</html>