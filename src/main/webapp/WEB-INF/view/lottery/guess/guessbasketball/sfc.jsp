<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<html>
<head>
<meta http-equiv="Access-Control-Allow-Origin" content="*" />
<title>${domain.storeName }-${playName }</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="/mobile/css/jquery.mobile-1.4.5.min.css">
<link rel="stylesheet" type="text/css" href="/mobile/css/base.css">
<script src="/mobile/js/jquery.min.js"></script>
<script src="/mobile/js/jquery.mobile-1.4.5.min.js"></script>

</head>
<body>
<!--------------过关投注--------------------->
<div data-role="page" id="betPanelId"> 

  <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
    <h1 ><a href="javascript:;" class="btn-slide active">${playName }</a></h1>
    <jsp:include page="./header.jsp"></jsp:include>
    <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}" data-ajax="false" class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
    <div class="head-right"><a href="#" class="sm-icon" data-transition="slide" data-direction="reverse" ></a></div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div id="wrapper" class="ui-content" data-role="content" role="main">
    
    <ul id="betUlList" class="buy_jing">
      
    </ul>
  </div>
  <!-- /content --> 
  <!-- 弹出-->
  <div data-role="popup" id="sfc" data-position-to="window" data-overlay-theme="b" class="tc-common" data-history="false">
            <div class="tan_top"></div>
            <div style=" padding-bottom:10px;">
                <div class="cans"></div>

                <table width="95%" border="0" cellpadding="0" cellspacing="0" class="table_0">
                    <tr style="height: 30px!important;line-height: 30px!important;">
                        <td colspan="3" style=" height:25px;background-color: #5bbdfb; color:#FFF">客胜</td>

                    </tr>
                    <tr>
                        <td name="betN" bet="0" betName="客胜1-5" width="33%"><a href="#"><div id="div_Content_0">1-5</div><span id="div_choose_0">3.95</span></a></td>
                        <td name="betN" bet="1" betName="客胜6-10" width="33%"><a href="#"><div id="div_Content_1">6-10</div><span id="div_choose_1">4.10</span></a></td>
                        <td name="betN" bet="2" betName="客胜11-15" width="34%"><a href="#"><div id="div_Content_2">11-15</div><span id="div_choose_2">7.65</span></a></td>
                    </tr>
                    <tr>
                        <td name="betN" bet="3" betName="客胜16-20"><a href="#"><div id="div_Content_3">16-20</div><span id="div_choose_3">14.50</span></a></td>
                        <td name="betN" bet="4" betName="客胜21-25"><a href="#"><div id="div_Content_4">21-25</div><span id="div_choose_4">25.00</span></a></td>
                        <td name="betN" bet="5" betName="客胜26+"><a href="#"><div id="div_Content_5">26+</div><span id="div_choose_5">35.00</span></a></td>
                    </tr>
                </table>
                <table width="95%" border="0" cellpadding="0" cellspacing="0" class="table_0" style=" margin-top:20px;">
                    <tr style="height: 30px!important;line-height: 30px!important;">
                        <td colspan="3" style=" height:25px;background-color: #7fda33; color:#FFF">主胜</td>
                    </tr>
                    <tr>
                        <td name="betN" bet="6" betName="主胜1-5" width="33%"><a href="#"><div id="div_Content_6">1-5</div><span id="div_choose_6">2.95</span></a></td>
                        <td name="betN" bet="7" betName="主胜6-10" width="33%"><a href="#"><div id="div_Content_7">6-10</div><span id="div_choose_7">3.10</span></a></td>
                        <td name="betN" bet="8" betName="主胜11-15" width="34%"><a href="#"><div id="div_Content_8">11-15</div><span id="div_choose_8">6.65</span></a></td>
                    </tr>
                    <tr>
                        <td name="betN" bet="9" betName="主胜16-20"><a href="#"><div id="div_Content_9">16-20</div><span id="div_choose_9">14.50</span></a></td>
                        <td name="betN" bet="10" betName="主胜21-25"><a href="#"><div id="div_Content_10">21-25</div><span id="div_choose_10">25.00</span></a></td>
                        <td name="betN" bet="11" betName="主胜26+"><a href="#"><div id="div_Content_11">26+</div><span id="div_choose_11">35.00</span></a></td>
                    </tr>
                </table>

            </div>
            <div class="clear"></div>
            <div data-theme="b"> <a href="#" data-role="button" data-inline="true" data-rel="back" data-theme="a">取消</a> <a href="#" id="qrSelBtnId" data-role="button" data-inline="true" data-rel="back" data-theme="c">确定</a> </div>
            <span id="ThisNo" style="display:none;"></span>
        </div>
        <!-- 弹出 end-->
  <!--底部按钮-->
  <div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false">
  	<div id="divze" class="ze">
	<span>已选中<b id="schNumId">0</b>场比赛</span>
	</div>
    <div class="qk-button"><a href="#">清空</a></div>
    <div class="qd-button"><a href="#">选好了</a></div>
    <div class="clear"></div>
  </div>
  <!-- 底部按钮 end --> 
</div>

<jsp:include page="../guessfootball/footer.jsp"></jsp:include>
</body>
</html>