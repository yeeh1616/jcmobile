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
    
    <ul id="betUlList" class="buy_jing hunh">
      
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
  <!-- 底部按钮 end --> 
</div>

<!-- 弹出-->
  <div data-role="page" id="hun_zhan" v="">
        <div data-role="header" data-position="fixed" data-tap-toggle="false">
            <h1 id="h_race"></h1>
            <div class="head-left"><a onclick="BtnSure_Hun_Cancle()" class="qx-icon" data-transition="slide" data-rel="back" data-direction="reverse">取消</a> </div>
        </div>
        <div data-role="content" id="wrapper_no_bottom" style="padding-bottom:10px;">
            <!--让分-->
            <div class="cans" id="div_rq" style=" margin-top:15px"></div>
            <table id="table_sf" width="95%" border="0" cellpadding="0" cellspacing="0" class="table_0">
                <tbody>
                    <tr>
                        <td width="10%" rowspan="1" style="background-color: #5bbdfb; color:#FFF; line-height:normal">胜<br/>负</td>
                        <td width="45%"><a href="#" name="betN" bet="1-0" v="客胜" class="ui-link">客胜<span id="span_1_1"></span></a></td>
                        <td width="45%"><a href="#" name="betN" bet="1-3" v="主胜" class="ui-link">主胜<span id="span_1_0">7.65</span></a></td>
                    </tr>
                </tbody>
            </table>
            <div class="cans"></div>
            <table id="table_rq" width="95%" border="0" cellpadding="0" cellspacing="0" class="table_0">
                <tbody>
                    <tr>
                        <td width="10%" rowspan="1" style="background-color: #7fda33; color:#FFF; line-height:normal" id="rfvid">让<br/>分</td>
                        <td width="45%"><a href="#" name="betN" bet="2-0" v="让分客胜" class="ui-link">客胜<span id="span_2_1">3.95</span></a></td>
                        <td width="45%"><a href="#" name="betN" bet="2-3" v="让分主胜" class="ui-link">主胜<span id="span_2_0">7.65</span></a></td>
                    </tr>
                </tbody>
            </table>


            <div class="cans" id="div_sfc" style=" margin-top:15px">胜分差</div>
            <!--比分------------------------------------------------------------>
            <!--<div class="cans" id="div_rq"></div>-->

            <table id="table_bf" width="95%" border="0" cellpadding="0" cellspacing="0" class="table_0">
                <tr>
                    <td rowspan="2" width="10%" style="background-color: #5bbdfb; color:#FFF; line-height:normal">客<br />胜</td>
                    <td width="30%"><a name="betN" bet="3-0" href="#" class="ui-link" v="客胜1-5">1-5<span id="span_3_0">3.95</span></a></td>
                    <td width="30%"><a name="betN" bet="3-1" href="#" class="ui-link" v="客胜6-10">6-10<span id="span_3_1">3.95</span></a></td>
                    <td width="30%"><a name="betN" bet="3-2" href="#" class="ui-link" v="客胜11-15">11-15<span id="span_3_2">3.95</span></a></td>
                </tr>
                <tr>
                    <td width="30%"><a name="betN" bet="3-3" href="#" class="ui-link" v="客胜16-20">16-20<span id="span_3_3">3.95</span></a></td>
                    <td width="30%"><a name="betN" bet="3-4" href="#" class="ui-link" v="客胜21-25">21-25<span id="span_3_4">3.95</span></a></td>
                    <td width="30%"><a name="betN" bet="3-5" href="#" class="ui-link" v="客胜26+">26+<span id="span_3_5">3.95</span></a></td>
                </tr>
                <tr>
                    <td rowspan="2" width="10%" style="background-color: #7fda33; color: #FFF; line-height: normal">主<br />胜</td>
                    <td width="30%"><a name="betN" bet="3-6" href="#" class="ui-link" v="主胜1-5">1-5<span id="span_3_6">3.95</span></a></td>
                    <td width="30%"><a name="betN" bet="3-7" href="#" class="ui-link" v="主胜6-10">6-10<span id="span_3_7">3.95</span></a></td>
                    <td width="30%"><a name="betN" bet="3-8" href="#" class="ui-link" v="主胜11-15">11-15<span id="span_3_8">3.95</span></a></td>
                </tr>
                <tr>
                    <td width="30%"><a name="betN" bet="3-9" href="#" class="ui-link" v="主胜16-20">16-20<span id="span_3_9">3.95</span></a></td>
                    <td width="30%"><a name="betN" bet="3-10" href="#" class="ui-link" v="主胜21-25">21-25<span id="span_3_10">3.95</span></a></td>
                    <td width="30%"><a name="betN" bet="3-11" href="#" class="ui-link" v="主胜26+">26+<span id="span_3_11">3.95</span></a></td>
                </tr>

            </table>

            <div class="cans" id="div_yszf"></div>
            <table id="table_bq" width="95%" border="0" cellpadding="0" cellspacing="0" class="table_0">
                <tbody>
                    <tr>
                        <td width="10%" rowspan="1" style="background-color: #5bbdfb; color:#FFF; line-height:normal" id="zfvid">大<br />小<br />分</td>
                        <td width="45%"><a name="betN" bet="4-0" v="大分" href="#" class="ui-link">大分<span id="span_4_0">3.95</span></a></td>
                        <td width="45%"><a name="betN" bet="4-1" v="小分"  href="#" class="ui-link">小分<span id="span_4_1">7.65</span></a></td>
                    </tr>
                </tbody>
            </table>

            <div class="f_hun_button">
                <div data-theme="b">  <a href="#betPanelId" data-role="button" data-inline="true" data-rel="back" data-theme="a">取消</a> <a href="#betPanelId" id="qrSelBtnId" data-role="button" data-rel="back" data-inline="true" data-theme="c">确定</a> </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
        <!-- 弹出 end-->
        
<jsp:include page="../guessfootball/footer.jsp"></jsp:include>
</body>
</html>