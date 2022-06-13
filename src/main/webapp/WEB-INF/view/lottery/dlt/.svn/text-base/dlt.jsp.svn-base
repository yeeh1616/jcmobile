 <%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html> 
<head>
<title>${domain.storeName}-大乐透</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta content="telephone=no" name="format-detection"/>
<link rel="stylesheet" type="text/css" href="/mobile/css/jquery.mobile-1.4.5.min.css"/>
<link rel="stylesheet" type="text/css" href="/mobile/css/base.css"/>
<script src="/mobile/js/jquery.min.js"></script>
<script src="/mobile/js/jquery.mobile-1.4.5.min.js"></script>
</head>
  <body>
  <script type="text/javascript"> 
$(document).ready(function(){ 
$(".btn-slide").click(function(){ 
$("#panel").slideToggle("fast"); 
$(this).toggleClass("active"); return true; 
}); 
}); 
</script>
 <div data-role="page" id="betPanelId">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1><a href="javascript:;" class="btn-slide active">大乐透</a></h1>
    <div style="display: none;" id="panel">
      <ul>
        <li <c:if test="${p == 'dlt' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=4">普通投注</a></li>
        <li <c:if test="${p == 'dltdt' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=4&p=dltdt">胆拖投注</a></li>
        <div class=" clear"></div>
      </ul>
    </div>
    <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}"  data-ajax="false" class="qx-icon">返回</a> </div>
      <div class="head-right"><a href="#" class="sm-icon" data-transition="slide" data-direction="reverse"></a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" id="wrapper">

    <div class="con_top">
      <div class="con_top_img"><a href="#"><img src="/mobile/images/yao.png"></a></div>
      <div class="con_top_p2">
    截止：${fn:substring(game.stopTime,0,16)}<br/>
      至少选择5个红球,2个蓝球
      </div>
      <div class="clear"></div>
    </div>
    <!--红球区域 -->
    <div class="con_right w_all">
      <div class="list big_l" >
        <ul id="beforeAreaId">
        </ul>
      </div>
    </div>
    <!--红球区域 end-->
    <div class="clear"></div>
    <!--蓝球区域 -->
    <div class="con_right w_all" style="border-top: 1px solid #E5E5E5;">
      <div class="list_lan big_l" >
        <ul id="afterAreaId">
        </ul>
      </div>
    </div>
    <!--蓝球区域 end-->
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
    <script type="text/javascript" src="/js/lottery/common/CombAlgorithm.js"></script>
    <script type="text/javascript" src="http://101.200.213.247:9380/global/open/${licenseId }/omit.js?time=new Date().getTime()"></script>
	<script type="text/javascript" src="/js/lottery/math/${p }.js"></script>
	<script type="text/javascript" src="/js/lottery/math/common.js"></script>
</div>

<jsp:include page="../football/footer.jsp"></jsp:include>
</body>
</html>