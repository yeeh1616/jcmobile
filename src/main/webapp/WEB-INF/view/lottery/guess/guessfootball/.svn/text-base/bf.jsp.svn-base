<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<html>
<head>
<title>${domain.storeName }-${playName }</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="/mobile/css/jquery.mobile-1.4.5.min.css">
<link rel="stylesheet" type="text/css" href="/mobile/css/base.css">
<script src="/mobile/js/jquery.min.js"></script>
<script src="/mobile/js/jquery.mobile-1.4.5.min.js"></script>

</head>
<body>
<div data-role="page" id="betPanelId"> 

  <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
    <h1 ><a href="javascript:;" class="btn-slide active">${playName }</a></h1>
    <jsp:include page="./header.jsp"></jsp:include>
    <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}" class="qx-icon" data-ajax="false" data-transition="slide" data-direction="reverse" >返回</a> </div>
    <div class="head-right"><a href="#" class="sm-icon" data-transition="slide" data-direction="reverse" ></a></div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style=" padding:0;">
    <ul id="betUlList" class="buy_jing">
      
    </ul>
  </div>
  <!-- /content --> 
  <!--底部按钮-->
  <div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false">
  	<div id="divze" class="ze">
	<span>已选中<b id="schNumId">0</b>场比赛</span>
	</div>
    <div class="qk-button"><a href="#">清空</a></div>
    <div class="qd-button"><a href="#">选好了</a></div>
    <div class="clear"></div>
  </div>
  
  <!-- 弹出-->
  <div data-role="popup" id="sfc" data-position-to="window" data-overlay-theme="b" class="tc-common" data-history="false">
    <div class="tan_top"></div>
    <div style=" padding-bottom:10px;">
      <div class="cans">竞猜全场90分钟（含伤停补时）的比分</div>
      <table width="95%" border="0" cellpadding="0" cellspacing="0" class="table_0 bif">
        <tr>
          <td width="10%" rowspan="7" style="background: #5bbdfb; color:#FFF" >比分</td>
          <td width="18%" name="betN" bet="1"><a href="#"><div>1:0</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="2"><a href="#"><div>2:0</div><div class="t_bottom">7.65</div></a></td>
          <td width="18%" name="betN" bet="3"><a href="#"><div>2:1</div><div class="t_bottom">3.95</div></a></td>
          <td width="18%" name="betN" bet="4"><a href="#"><div>3:0</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="5"><a href="#"><div>3:1</div><div class="t_bottom">7.65</div></a></td>
        </tr>                                                                                             
        <tr>                                                                                              
          <td width="18%" name="betN" bet="6"><a href="#"><div>3:2</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="7"><a href="#"><div>4:0</div><div class="t_bottom">7.65</div></a></td>
          <td width="18%" name="betN" bet="8"><a href="#"><div>4:1</div><div class="t_bottom">3.95</div></a></td>
          <td width="18%" name="betN" bet="9"><a href="#"><div>4:2</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="10"><a href="#"><div>5:0</div><div class="t_bottom">7.65</div></a></td>
        </tr>                                                                                             
        <tr>                                                                                              
          <td width="18%" name="betN" bet="11"><a href="#"><div>5:1</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="12"><a href="#"><div>5:2</div><div class="t_bottom">7.65</div></a></td>
          <td colspan="3" name="betN" bet="0"><a href="#"><div>胜其他</div><div class="t_bottom">29.00</div></a></td>
        </tr>                                                                                             
        <tr>                                                                                              
          <td width="18%" name="betN" bet="14"><a href="#"><div>0:0</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="15"><a href="#"><div>1:1</div><div class="t_bottom">7.65</div></a></td>
          <td width="18%" name="betN" bet="16"><a href="#"><div>2:2</div><div class="t_bottom">3.95</div></a></td>
          <td width="18%" name="betN" bet="17"><a href="#"><div>3:3</div><div class="t_bottom">4.10</div></a></td>
          <td width="25%" name="betN" bet="13"><a href="#"><div>平其他</div><div class="t_bottom">7.65</div></a></td>
        </tr>                                                                                             
        <tr>                                                                                              
          <td width="18%" name="betN" bet="19"><a href="#"><div>0:1</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="20"><a href="#"><div>0:2</div><div class="t_bottom">7.65</div></a></td>
          <td width="18%" name="betN" bet="21"><a href="#"><div>1:2</div><div class="t_bottom">3.95</div></a></td>
          <td width="18%" name="betN" bet="22"><a href="#"><div>0:3</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="23"><a href="#"><div>1:3</div><div class="t_bottom">7.65</div></a></td>
        </tr>                                                                                             
         <tr>                                                                                             
          <td width="18%" name="betN" bet="24"><a href="#"><div>2:3</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="25"><a href="#"><div>0:4</div><div class="t_bottom">7.65</div></a></td>
          <td width="18%" name="betN" bet="26"><a href="#"><div>1:4</div><div class="t_bottom">3.95</div></a></td>
          <td width="18%" name="betN" bet="27"><a href="#"><div>2:4</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="28"><a href="#"><div>0:5</div><div class="t_bottom">7.65</div></a></td>
        </tr>                                                                                             
         <tr>                                                                                             
          <td width="18%" name="betN" bet="29"><a href="#"><div>1:5</div><div class="t_bottom">4.10</div></a></td>
          <td width="18%" name="betN" bet="30"><a href="#"><div>2:5</div><div class="t_bottom">7.65</div></a></td>
          <td colspan="3" name="betN" bet="18"><a href="#"><div>负其他</div><div class="t_bottom">600</div></a></td>
        </tr>
      </table>
    </div>
    <div class="clear"></div>
    <div data-theme="b"> <a href="#"  data-role="button" data-inline="true" data-rel="back" data-theme="a">取消</a> <a href="#" id="qrSelBtnId" data-role="button" data-inline="true" data-rel="back"  data-theme="c">确定</a> </div>
	<span id="ThisNo" style="display:none;"></span>
  </div>
  <!-- 弹出 end--> 
 
  <!-- 底部按钮 end --> 
</div>

<jsp:include page="./footer.jsp"></jsp:include>
</body>
</html>