<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</head> 
<body>
<script type="text/javascript">
    function goto(url) {
		window.location.href = url;
	}
</script>
<jsp:include page="../include/htmlheader.jsp"></jsp:include>

<input type="hidden" value="${licenseId}" id="licenseId"/>

<script src="../../../../mobile/js/openinfo/Refresh.js"></script>

<div data-role="page" id="openlist">

<!--header-->
<div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
 <h1>${licenseName}</h1>
 <div class="head-left"><a onclick="goto('/wap/open/open.wap');" style="cursor: pointer;" class="qx-icon" data-transition="slide" data-direction="reverse">开奖信息</a></div>
</div>
<!--/header -->
			
<!--content -->
<div data-role="content" id="wrapper">
 <div id="wrapper_isroll" style="top: 1px;">
  <div id="scroller">
   <div id="pulldown"><span class="pulldown-icon" id="pulldown-icon"></span><span id="pulldown-label" class="pulldown-label"></span></div>
   <ul id="kaijiang" data-role="listview">		
   <c:forEach var="list" items="${rmsg.body.lotteryDataList}" varStatus="vs">
    <li>
    <c:choose>
    <c:when test="${list.licenseId > 100}">
        <a href="#" rel="external" data-transition="slide"/>
    </c:when>
    <c:otherwise>
        <a href="/wap/open/openListBylIdIssue.wap?licenseId=${list.licenseId}&issue=${list.issue}" rel="external" data-transition="slide"/>
    </c:otherwise>
    </c:choose>

    
    <div class="center">
    <div class="center-t open_list_lf">第${list.issue}期</div>
    <div class="center-r">${list.openWinTime}</div>
    <div class="clear"></div>
    <c:choose>
   		<c:when test="${list.licenseId eq '5' or list.licenseId eq '6' or list.licenseId eq '7' or list.licenseId eq '8'}">
    		<div class="choose_sf <c:if test="${vs.count > 1}">no-bg</c:if>">
    	</c:when>
    	<c:otherwise>
    		<div class="choose_no <c:if test="${vs.count > 1}">no-bg</c:if>">
    	</c:otherwise>
    </c:choose>
    <ul>
    <c:choose>
    	<c:when test="${list.licenseId eq '1' or list.licenseId eq '2' or list.licenseId eq '3' or list.licenseId eq '12' or list.licenseId eq '101' or list.licenseId eq '103'}">
    		<c:forEach var="win" items="${list.winNumberArray}" varStatus="vswin">
    			<li>${win}</li>
    		</c:forEach>
    	</c:when>
    	<c:when test="${list.licenseId eq '4'}">
    		<c:forEach var="win" items="${list.winNumberArray}" varStatus="vswin">
    			<li <c:if test="${vswin.count > fn:length(list.winNumberArray)-2}">class="blue"</c:if>>${win}</li>
    		</c:forEach>
    	</c:when>
    	<c:when test="${list.licenseId eq '5' or list.licenseId eq '6' or list.licenseId eq '7' or list.licenseId eq '8'}">
    		<c:forEach var="win" items="${list.winNumberArray}" varStatus="vswin">
    			<li>${win}</li>
    		</c:forEach>
    	</c:when>
    	<c:otherwise>
    	<c:forEach var="win" items="${list.winNumberArray}" varStatus="vswin">
    		<li <c:if test="${vswin.count > fn:length(list.winNumberArray)-1}">class="blue"</c:if>>${win}</li>
    	</c:forEach>
    </c:otherwise>
    </c:choose>
    <div class="clear"></div>
    </ul>
    </div>
    </a>
    </li>
   </c:forEach>
   </ul>
   <div id="pullup"><span class="pullup-icon" id="pullup-icon"></span><span id="pullup-label" class="pullup-label"></span></div>
  </div>
 </div>
 <div class="clear"><span id="spPage_recharge" style="display: none;"></span></div>
</div>
<!-- /content -->

		<!-- 底部-->
		<div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false">
			<c:if test="${licenseId != 101 and licenseId != 103}">
			<div class="qd-button jz" onclick="goto('/lottery/index.jhtml?licenseId=${licenseId}')">
				<a href="#" data-transition="slideup">投注${licenseName}</a>
			</div>
			</c:if>
			<div class="clear"></div>
		</div>
		<!-- 底部 end-->
	</body>
</html>
