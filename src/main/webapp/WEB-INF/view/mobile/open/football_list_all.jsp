<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>  
<body>
<!-- Index Page -->
<jsp:include page="../include/htmlheader.jsp"></jsp:include>
<link rel="stylesheet" href="../../../../mobile/css/mobiscroll.custom-2.5.0.min.css" type="text/css"></link>
<script type="text/javascript" src="/mobile/js/mobiscroll.custom-2.5.0.min.js"></script>
<input type="hidden" id="licenseId" value="9">
<input type="hidden" id="playId" value="${playId}">

<script src="../../../../mobile/js/openinfo/Refresh.js"></script>
<script type="text/javascript"> 
$(function () {
 // $("#myDate").mobiscroll(opt).date(opt);
 $("#myDate").mobiscroll(myDateOpt);
 $('#show').click(function () {
  $('#myDate').mobiscroll('show');
  return false;
 });
});
$(document).ready(function(){ 
  $(".btn-slide").click(function(){ 
  $(".two_line").slideToggle("fast"); 
  $(this).toggleClass("active");
  return true; 
 }); 
}); 
</script> 
<div data-role="page">
<!-- header -->
<div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
<h1><a href="javascript:;" class="btn-slide active">${playName}</a></h1>
<div style="display: none;" class="two_line" id="panel">
 <ul>
  <li <c:if test="${playId == 1}">class="xz"</c:if>><a rel="external" style="cursor: pointer;" href="/wap/open/openListBylId.wap?licenseId=9&playId=1">胜平负</a></li>
  <li <c:if test="${playId == 2}">class="xz"</c:if>><a rel="external" style="cursor: pointer;" href="/wap/open/openListBylId.wap?licenseId=9&playId=2">让球胜平负</a></li>
  <li <c:if test="${playId == 5}">class="xz"</c:if>><a rel="external" style="cursor: pointer;" href="/wap/open/openListBylId.wap?licenseId=9&playId=5">比分</a></li>
  <div class="clear"></div>
  <li <c:if test="${playId == 3}">class="xz"</c:if>><a rel="external" style="cursor: pointer;" href="/wap/open/openListBylId.wap?licenseId=9&playId=3">总进球</a></li>
  <li <c:if test="${playId == 4}">class="xz"</c:if>><a rel="external" style="cursor: pointer;" href="/wap/open/openListBylId.wap?licenseId=9&playId=4">半全场</a></li>
  <div class=" clear"></div>
 </ul>
</div>
<div class="head-left"><a onclick="toOpen();" style="cursor:pointer;" style="cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse">开奖信息</a> </div>
<div class="head-right"><a id="show" style="cursor:pointer;" class="data-icon" data-transition="slide" data-direction="reverse"></a></div>
</div>
<!-- /header -->
        
<!--content -->
<div data-role="content" id="wrapper">
<input name="myDate" id="myDate" type="text" style="display:none;">
<span id="spMyDate" style="display:none;"></span>
<div id="wrapper_isroll" style="top:1px;">
<div id="scroller">
<div id="pulldown" class="pulldown"><span class="pulldown-icon"></span><span id="pulldown-label" class="pulldown-label"></span></div>
<ul id="kaijiang_jczq" class="zulan">
<c:set var="playId" value="${playId}"></c:set>
<c:choose>
 <c:when test="${rmsg.body.lotteryDataList != null}">
 <c:forEach items="${rmsg.body.lotteryDataList}" var="lists" >
 <h1>${lists.date} ${lists.raceNum}场开奖比赛</h1>
 <c:forEach items="${lists.lotteryInfoList}" var="list">
 <c:set var="against" value="${list.againstList[0]}"></c:set>
 <li>
  <div class="part1"><div>${against.leagueName}</div><div><span>${against.number}</span><span>${against.betEndTime}</span></div></div>
  <div class="part2">${against.hostTeam}<c:if test="${playId == 2}">(${against.ggScore})</c:if></div>
  <c:choose>
  <c:when test="${playId == 1}"><div class="part3 <c:choose>
              <c:when test="${against.result == '胜'}">win</c:when>
              <c:when test="${against.result == '平'}">loss</c:when>
              <c:when test="${against.result == '负'}">draw</c:when>
              </c:choose>"><div>${against.result}</div><div>${against.allScore}</div></div></c:when>
  <c:when test="${playId == 2}"><div class="part3 <c:choose>
              <c:when test="${against.result == '胜'}">win</c:when>
              <c:when test="${against.result == '平'}">loss</c:when>
              <c:when test="${against.result == '负'}">draw</c:when>
              </c:choose>"><div>${against.rqResult}</div><div>${against.allScore}</div></div></c:when>
  <c:when test="${playId == 3}"><div class="part3 zong"><div>${against.totalGoals}</div><div>${against.allScore}</div></div></c:when>
  <c:when test="${playId == 4}"><div class="part3 zong"><div>${against.bqcResult}</div><div>(${against.halfScore})${against.allScore}</div></div></c:when>
  <c:when test="${playId == 5}"><div class="part3 zong"><div class="only_d">${against.allScore}</div></div></c:when>
  </c:choose>
  
  <div class="part4">${against.guestTeam}</div>
  <div class="clear"></div>
 </li>
 </c:forEach>
 </c:forEach>
 </c:when>
 <c:otherwise>
 啥也没有
 </c:otherwise>
</c:choose>
</ul>
</div>
</div>
</div>
<!-- /content -->
<!-- 底部-->
<c:set var="p" value=""></c:set>
<c:choose>
<c:when test="${playId == 1}"><c:set var="p" value="spf"></c:set></c:when>
<c:when test="${playId == 2}"><c:set var="p" value="rqspf"></c:set></c:when>
<c:when test="${playId == 3}"><c:set var="p" value="zjq"></c:set></c:when>
<c:when test="${playId == 4}"><c:set var="p" value="bqc"></c:set></c:when>
<c:when test="${playId == 5}"><c:set var="p" value="bf"></c:set></c:when>
</c:choose>
<div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false"><div class="qd-button jz"><a href="/lottery/index.jhtml?licenseId=9&p=${p}" data-ajax="false" data-transition="slideup">投注竞彩足球</a></div><div class="clear"></div></div>
<!-- 底部 end-->
</div>
</body>
</html>
<script type="text/javascript">
    function toOpen() {
		window.location.href="/wap/open/open.wap";
	}
</script>
