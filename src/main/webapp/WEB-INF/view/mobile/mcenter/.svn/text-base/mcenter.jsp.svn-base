<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.suny.com.cn/customer.tld" prefix="customertags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
    <div data-role="page" id="user">
      	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
  		<script type="text/javascript" src="/mobile/js/usercenter/mcenter.js"></script>
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>我的彩票</h1>
            <div class="head-left"><a onclick="gotoa('/')" class="qx-icon" data-transition="slide" data-direction="reverse">购彩大厅</a></div>
        </div>
        <!-- /header -->
        <!--content -->"
        <div data-role="content" class="ui-content" id="wrapper_no_bottom">
            <div class="user_top">
                <div class="head_img"><img src="/mobile/images/head.png" width="158" height="158" /></div>
                <div class="user_name"><span id="spName">${rmsg.body.userName}</span></div>
                <div class="surplus">账户余额：<a data-transition="slide" rel="external" href="/wap/capitalManagement.wap">
                <span id="spBalance">
                <fmt:formatNumber value="${rmsg.body.availableBalance}" pattern="#,###.##" minFractionDigits="2"></fmt:formatNumber>
                </span>元 &nbsp;></a></div>
            </div>
            <!--充值&提现 -->
            <div class="user_button">
                <!--<div class="part_button"><a data-transition="slide" onclick="alert('请联系店主为您的账户充值');">充  值</a></div>
            	  -->
                <div class="part_button"><a data-ajax="false" data-transition="slide" href="/wap/recharge/recharge.wap">充  值</a></div>
            	
                <div class="part_button"><a data-ajax="false" data-transition="slide" href="/wap/drawingMoney.wap">提  现</a></div>
            </div>
            <!--充值&提现 end-->
            <div class="common-icon">
                <ul data-role="listview" data-inset="true">
                    <li><a data-transition="slide" data-direction="reverse" rel="external" href="/wap/orderListsPage.wap"><img src="/mobile/images/icons-png/gc.png" class="ui-li-icon" />购彩记录</a></li>
                    <li><a data-transition="slide" href="#"><img src="/mobile/images/icons-png/hd.png" class="ui-li-icon" />活动中心</a></li>
                    <li><a data-transition="slide" data-ajax="false" href="/wap/safe.wap"><img src="/mobile/images/icons-png/aq.png" class="ui-li-icon" />安全中心</a></li>
                    <li><a data-transition="slide" data-ajax="false" href="/wap/bind.wap"><img src="/mobile/images/icons-png/wd.png" class="ui-li-icon" />取款方式</a></li>
                </ul>
                <ul data-role="listview" data-inset="true">
                    <li><a data-transition="slide" href="#"><img src="/mobile/images/icons-png/ts.png" class="ui-li-icon" />推送服务</a></li>
                    <li><a data-transition="slide" href="/wap/getStoreInfo.wap"><img src="/mobile/images/icons-png/gd.png" class="ui-li-icon" />店铺信息</a></li>
					<li><a data-transition="slide" href="#"><img src="/mobile/images/icons-png/gd.png" class="ui-li-icon" />更多选项</a></li>                    
                </ul>
                <div class="tc-button" style=" margin:1em">
                    <a data-transition="slide" data-rel="popup" data-role="button" href="#dialog">退出登录</a>
                </div>
                <div data-role="popup" id="dialog" data-overlay-theme="a" data-position-to="window" data-history="false">
                    <div data-role="header" data-theme="a">
                        <h1>是否退出登陆?</h1>
                    </div>
                    <div data-role="content" data-theme="d">

                        <p id="p_pay"></p><div style="text-align:center">
						   <a href="#" onclick="userLoginOut_foundation()" data-role="button" data-inline="true" data-theme="c">是</a>
                           <a href="#" data-role="button" data-inline="true" data-rel="back" data-theme="a">否</a>
                     </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /content -->
    </div>
<script type="text/javascript">
	function windowChangePage_foundation(url){
		window.location.href=url;
	}
</script>
</body>
</html>