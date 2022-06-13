 <%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html> 
<head>
<title>七星彩</title>
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
    <h1>七星彩</h1>
    <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}"  data-ajax="false" class="qx-icon">返回</a> </div>
      <div class="head-right" onclick="ChangePage('explain.html')"><a href="#" class="sm-icon" data-transition="slide" data-direction="reverse"></a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0" id="wrapper">
    <div class="con_top">
      <div class="con_top_img"><a href="#"><img src="/mobile/images/yao.png" ></a></div>
      <div class="con_top_p2">每位至少选1个号</div>
      <div class="clear"></div>
    </div>
      <div class="con_1" id="barayId">
      </div>
  </div>
  <!-- /content --> 
  <!--底部按钮-->
  <div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false">
  <div id='divze' class="ze"><span>共0元</span><br /> 0注</div>
      <div class="qk-button" ><a href="#">清空</a></div>
      <div class="qd-button" id="qrBtnId"><a href="#">确定</a></div>
    <div class="clear"></div>
  </div>
    <!-- 底部按钮 end -->
    <script type="text/javascript" src="http://101.200.213.247:9380/global/open/${licenseId }/omit.js?time=new Date().getTime()"></script>
	<script type="text/javascript" src="/js/lottery/math/${p }.js"></script>
	<script type="text/javascript" src="/js/lottery/math/common.js"></script>
</div>

<jsp:include page="../football/footer.jsp"></jsp:include>
</body>
</html>