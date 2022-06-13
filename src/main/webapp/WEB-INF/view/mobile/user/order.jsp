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
		<input type="hidden" id="orderId" value="${orderId}">
		<input type="hidden" id="type" value="${type}">
		<div data-role="page" id="order">
			<div data-role="header" data-position="fixed" data-tap-toggle="false"
				id="top">
				<div class="head-left">
					<a id="title_a" href="/wap/orderListsPage.wap" data-ajax="false"
						class="qx-icon" data-transition="slide" data-direction="reverse">购彩记录</a>
				</div>
				<div class="head-right"><a onclick="gotoa('/')"  data-ajax="false" class="qx-icon" data-transition="slide" data-direction="reverse" >购彩大厅</a></div>
				<h1>
					订单详情
				</h1>
			</div>
			<!-- /header -->
			<!--content -->
			<div data-role="content" id="wrapper_no_bottom">
				<!--第一部分 -->
				<div class="order_plant1">
					<div class="order_plant1_img">
						<img id="img_plant1" src="" alt="" class="ui-li-icon">
					</div>
					<div class="order_plant1_right">
						<div class="order_plant1_name">
							<span id="order_plant1_name_spanName"></span>
						</div>
						<div class="order_plant1_time">
							<span id="order_plant1_time_spanTime"></span>
						</div>
					</div>
				</div>
				<!--第二部分 -->
				<div class="order_plant2">
					<div class="order_title">
						投注信息:
					</div>
					<div class="order_plant2_nr">
						<ul>
							<li>
								<div class="order_plant2_name">
									订单编号：
								</div>
								<div class="order_plant2_txt" id="order_plant2_txt_orderid">
									--
								</div>
							</li>
							<li>
								<div class="order_plant2_name">
									中奖状态：
								</div>
								<div class="order_plant2_txt weikai" id="order_plant2_txt_type">
									--
								</div>
							</li>
							<li>
								<div class="order_plant2_name">
									支付金额：
								</div>
								<div class="order_plant2_txt" id="order_plant2_txt_paymoney"
									style="color: red">
									<span>--</span>
								</div>
							</li>
							<li>
								<div class="order_plant2_name">
									投注倍数：
								</div>
								<div class="order_plant2_txt" id="order_plant2_txt_multiple">
									--倍
								</div>
							</li>
							<li>
								<div class="order_plant2_name">
									中奖金额：
								</div>
								<div class="order_plant2_txt" id="order_plant2_txt_finiBonus"
									style="color: red">
									<span>--</span>
								</div>
							</li>
							<!--流单情况（如果没出现流单这个LI 不会出现）-->
							<li id="li_liudan">
								<div class="order_plant2_name">
									出票金额：
								</div>
								<div class="order_plant2_txt" id="order_plant2_txt_money"
									style="color: red">
									<span>--</span>
								</div>
							</li>
							<!--流单情况（如果没出现流单这个LI 不会出现）end-->
						</ul>
					</div>
				</div>
				<!--第三部分 -->
				<div class="order_plant3">
					<div class="order_title">
						投注方案:
					</div>
					<div class="order_plant3_nr">
						<ul id="ul_ticket_list">
							<!--一组票-->
						</ul>
					</div>
					<div class="tzxq">
						<a href="#" id="out_ticket_a" data-ajax="false"
							data-transition="none">出票详情</a>
					</div>
				</div>
			</div>
			<!-- /content -->
			<!-- 最近中奖 -->
		</div>
<script>
	$(document).ready(function(){
		var orderId = $("#orderId").val();
		var type = $("#type").val();
		BindDetailOrder(orderId,type);
	});
</script>
	</body>
</html>