 <%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html> 
<head>
<title>${domain.storeName}-11选5</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta content="telephone=no" name="format-detection"/>
<link rel="stylesheet" type="text/css" href="/mobile/css/jquery.mobile-1.4.5.min.css"/>
<link rel="stylesheet" type="text/css" href="/mobile/css/base.css"/>
<script src="/mobile/js/jquery.js"></script>
<script src="/mobile/js/jquery.mobile-1.4.5.min.js"></script>
</head>
  <body>

 <div data-role="page" id="betPanelId">
  
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <jsp:include page="./header.jsp"></jsp:include>
    <div data-role="navbar">
      <ul>
        <li>
        <a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=r4pt" <c:if test="${freqSubPlayName == 'pt' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">任选四</a>
        </li>
        <li>
        <a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=r4dt" <c:if test="${freqSubPlayName == 'dt' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">任四胆拖</a>
        </li>
        
      </ul>
    </div>
  </div>
  <!--content -->
  <div data-role="content" class="wrapper_navbar2">
    <div class="con_top">
      <div class="con_top_img"><a href="#"><img src="/mobile/images/yao.png"/></a></div>
	<div class="con_top_p2">
	第<b id="currentIssueId">${fp.currentIssue}</b>期
	<font id="stopMId" color=red>${stopTime[1] }</font>分<font id="stopSId" color=red>${stopTime[2] }</font>秒</div>
      <div class="clear"></div>
    </div>
    <div class="con_1">
      <div class="con_con">
        <div class="con_left">
          <div class="con_left_top"><span>遗漏</span></div>
        </div>
        <div class="con_right">
          <div class="list big_l" >
        <ul id="barayId">
            </ul>
          </div>
        </div>
        <div style="clear:both"></div>
      </div>

    </div>
  </div>
  <!-- /content --> 
  <!--底部按钮-->
  <div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false">
  <div id='divze' class="ze"><span>共0元</span><br /> 0注</div>
      <div class="qk-button" ><a href="#">清空</a></div>
      <div class="qd-button" id="qrBtnId"><a href="#">选好了</a></div>
    <div class="clear"></div>
  </div>
    <!-- 底部按钮 end -->
</div>

<jsp:include page="../football/footer.jsp"></jsp:include>
</body>
</html>