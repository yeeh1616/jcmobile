<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/usercenter/accountInfo.js"></script>
    <div data-role="page" id="order">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" id="top">
            <div class="head-left"><a onclick="gotoa('/wap/capitalManagement.wap')" style="cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse"></a></div>
            <h1>充值详情</h1>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" id="wrapper_no_bottom">
            <!--充值记录 -->
            <div class="order_plant2">
                <div class="order_title">充值记录:</div>
                <div class="order_plant2_nr">
                    <ul>
                        <li>
                            <div class="order_plant2_name">订单号：</div>
                            <div id="orderNo" class="order_plant2_txt">${msg.body.id}</div>
                        </li>
                        <li>
                            <div class="order_plant2_name">交易时间：</div>
                            <div id="orderTranseDate" class="order_plant2_txt"><span>${msg.body.createTime}</span></div>
                        </li>
                        <li>
                            <div class="order_plant2_name">到账时间：</div>
                            <div id="orderToDate" class="order_plant2_txt"><span>${msg.body.backTime}</span></div>
                        </li>
                        <li>
                            <div class="order_plant2_name">充值方式：</div>
                            <div id="orderType" class="order_plant2_txt">${msg.body.type}</div>
                        </li>
                        <li>
                            <div class="order_plant2_name">充值状态：</div>
                            <div id="orderState" class="order_plant2_txt">
                            <c:if test="${msg.body.state==1}">充值中</c:if>
                            <c:if test="${msg.body.state==2}">已到账</c:if>
                            <c:if test="${msg.body.state==3}">已失败</c:if>
                            </div>
                        </li>
                        <li>
                            <div class="order_plant2_name">充值金额：</div>
                            <div id="orderRechargeAmount" class="order_plant2_txt"><span>${msg.body.money}</span>元</div>
                        </li>

                        <!--<li>
                            <div class="order_plant2_name">备注：</div>
                            <div id="orderRemarks" class="order_plant2_txt">充值正常</div>
                        </li>-->
                        <div class="clear"></div>
                    </ul>
                </div>
            </div>
            <!--充值记录 -->
        </div>
        <!-- /content -->
    </div>
</body>
</html>
