<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.suny.com.cn/customer.tld" prefix="customertags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<jsp:include page="../mobile/include/htmlheader.jsp"></jsp:include>
</head>

<body>

<div data-role="page" id="mergerPageId">
			<div data-role="header" data-position="fixed" data-tap-toggle="false" id="top">
				<div class="head-left">
					<a href="/" data-ajax="false" 
						class="qx-icon" data-transition="slide" data-direction="reverse">返回</a>
				</div>
				<h1>
					合买大厅
				</h1>
			</div>
			<div data-role="popup" id="dialog" data-overlay-theme="a" data-position-to="window" data-history="false">
		      <div data-role="header" data-theme="a">
		          <h1>是否付款?</h1>
		      </div>
		      <div data-role="content" data-theme="d">
		          
		          <p id="p_pay"></p>
		          <div style="text-align:center">
		            <a href="#" data-role="button" data-inline="true" data-theme="c" id="lastQrBtnId" clickNum="0" >是</a>
		          <a href="#" data-role="button" data-inline="true" data-rel="back" data-theme="a">否</a>
		      </div>
		      </div>
		  </div>
			<div data-role="content" id="wrapper_no_bottom">
				<table width=100%>
	<tbody><tr bgcolor="gray">
		<td nowrap="nowrap">发起人</td>
		<td nowrap="nowrap">彩种 </td>
		<td nowrap="nowrap">总额</td>
		<td nowrap="nowrap">进度 </td>
		<td nowrap="nowrap">剩余</td>
		<td nowrap="nowrap">认购</td>
		<td nowrap="nowrap">详情</td>
	</tr>
			<c:forEach var="list" items="${pagination.list}" varStatus="varStatus">
				<c:choose>
					<c:when test="${varStatus.count%2==0}">
						<tr bgcolor="#f4fbff">
					</c:when>
					<c:otherwise>
						<tr bgcolor="#FFFFFF">
					</c:otherwise>
				</c:choose>
				<td>${list.virtualName}</td><!-- 发起人 -->
				<td>${list.licenseName}</td><!-- 彩种 -->
				<td>${list.betPrice}元</td><!-- 方案金额 -->
				<td>${list.showProgress}</td><!-- 进度 -->
				<td>${list.totalNum - list.buyNum} </td><!-- 剩余份数 -->
				<c:choose>
			      <c:when test="${state == 2}">
			         <td>已满员</td>
			      </c:when>
			      <c:when test="${state == 3}">
			         <td>已撤单</td>
			      </c:when>
			      <c:otherwise>
				    <td>
						<input type="hidden" class="text" value="${list.id}" name="orderId"/>
						<input type="hidden" class="text" value="${list.totalNum - list.buyNum}" name="restNum"/>
						<input type="hidden" class="text" value="${list.partTitile}" name="partTitile"/>
						<input type="hidden" class="text" value="${list.singlePrice}" name="price"/>
						<input type="hidden" class="text" value="${list.licenseName}" name="licenseName"/>
						<input type="hidden" class="text" value="${list.issue}" name="issue"/>
						<input data-role="none" size=4 type="text" id="mergerNum" class="text" value="" name="buyNum" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
						<input data-role="none" type="button" name="mergerjoin" value="购买" />
					</td><!-- 认购份 -->
			      </c:otherwise>
	    		</c:choose>
	    		<td><a href="/merger/mergerOrderDetails.jhtml?mergerOrderId=${list.id}">详情</a></td>
			</tr>
			</c:forEach>
			</tbody>
		</table>
			</div>
			<div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false" data-id="buy_foot">
		    <div class="clear"></div>
  </div>
</div>
<script type="text/javascript" src="/mobile/js/base.js"></script>
<script type="text/javascript">
 $(document).ready(function () {
	 $("input[name='mergerjoin']").click(function (){
			var orderId = $(this).closest("td").find("input[name=orderId]").val();
			var partTitile = $(this).closest("td").find("input[name=partTitile]").val();
			var licenseName = $(this).closest("td").find("input[name=licenseName]").val();
			var price = $(this).closest("td").find("input[name=price]").val();
			var issue = $(this).closest("td").find("input[name=issue]").val();//??
			var buyNum = $(this).closest("td").find("input[name=buyNum]").val();
			var buyPrice = price * buyNum;
			var message ='你本次购买'+buyNum+'份，需要消费￥'+ buyPrice +'元。';
			
			if ( buyNum != "" && parseInt(buyNum) != 0 ) {
				// 查询余额
				$.ajax({
				    type: "post",
				    url: "/common/getAccountUsable.json",
				    async: false,
				    dataType: "json",
				    error: function(xMLHttpRequest, textStatus, errorThrown){
					},
				    success: function (data){
						if ( data == '-1' ) {
							tigMessage_foundation("请先登录！");
							$.mobile.changePage("#loginPage", "slideup"); 
						} else {
							// 判断余额是否足够
							var balance = parseFloat(data);
							if ( buyPrice > balance ) {
								tigMessage_foundation("余额不足，请您先充值！");
							} else {
								$.ajax( {
									type : "POST",
									url : "/merger/join.jhtml",
									data: "orderId="+orderId+"&joinNum="+buyNum +"&joinPrice=" +buyPrice,
									async:false, //同步请求方式
									error : function(xMLHttpRequest, textStatus, errorThrown) {
										tigMessage_foundation("操作出错!");
										window.location.reload();
									},
									success : function(data) {
										tigMessage_foundation(data);
										window.location.reload();
									}
								}); 
							}
						}
				    }
				});
			} else {
				tigMessage_foundation("请先输入认购份数！");
			}
		});
 });
 </script>
 <jsp:include page="../mobile/include/login.jsp"></jsp:include>
</body>
</html>
