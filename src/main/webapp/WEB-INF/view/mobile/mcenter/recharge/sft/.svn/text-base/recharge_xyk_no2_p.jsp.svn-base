<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<jsp:include page="../../../include/htmlheader.jsp"></jsp:include>
</head>
<body>
<!-- Index Page -->
<div data-role="page" id="card">
<script type="text/javascript" src="/mobile/js/usercenter/recharge/sft/recharge.js"></script>
  <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
    <h1>信用卡充值</h1>
    <div class="head-left"><a href="/wap/recharge/rechargeNo1.wap?type=CR" data-transition="slide" class="qx-icon" data-direction="reverse"></a> </div>
  </div>
  <!-- /header -->
  <div class="rz" style="background-color: #2486DA; color: #fff;">当前选择：${sessionScope.bankName}&nbsp;充值金额：${sessionScope.money}元</div>
  <!--content -->
  <div data-role="content" style="padding-top:0;">
    <div data-role="fieldcontain">
      <div class="clear"></div>
       <div class="zhcz">
     	<select id="cardNumber">
     	<c:forEach items="${AgreementInfoList}" var="ai">
     	 <option value="${ai.agreementNo}">${ai.bankCardNoMark}</option>
     	</c:forEach>
     	</select>
       </div>
       <div class="zhcz">
    	 <input type="text" name="userName" placeholder="输入持卡人姓名"/>
       </div>
       <div class="zhcz">
    	 <input type="text" name="IdCard" placeholder="输入身份证号码"/>
       </div>
       	 卡片有效期:
     <div class="zcxz">
     <div class="fl" style="width:38%; display:inline-block">
      <!--<input type="text" name="moonth" placeholder=""/>-->
      <select id="tail_moonth">
      	<option selected="selected">选择</option>
      	<option value="01">01</option>
      	<option value="02">02</option>
      	<option value="03">03</option>
      	<option value="04">04</option>
      	<option value="05">05</option>
      	<option value="06">06</option>
      	<option value="07">07</option>
      	<option value="08">08</option>
      	<option value="09">09</option>
      	<option value="10">10</option>
      	<option value="11">11</option>
      	<option value="12">12</option>
      </select>
     </div>
     <div class="yxq">月/</div>
     <div class="fl" style="width:38%; display:inline-block">
      <!--<input type="text" name="year" placeholder=""/>-->
      <select id="tail_year">
      	<option selected="selected">选择</option>
      	<option value="15">15</option>
      	<option value="16">16</option>
      	<option value="17">17</option>
      	<option value="18">18</option>
      	<option value="19">19</option>
      	<option value="20">20</option>
      	<option value="21">21</option>
      	<option value="22">22</option>
      	<option value="23">23</option>
      	<option value="24">24</option>
      	<option value="25">25</option>
      	<option value="26">26</option>
      	<option value="27">27</option>
      	<option value="28">28</option>
      	<option value="29">29</option>
		<option value="30">30</option>      	
      </select>
     </div>
        <div class="yxq">年</div>
        <div class="clear"></div>
     </div>
     <div class="yzm">
     	<input type="text" name="password" placeholder="卡片后三位"/>
     </div>
     <div class="hsw"><img src="/mobile/images/hsw.png" width="228" height="70"/></div>
        <div class="clear"></div>
       <div class="yzm">
        <input  type="text" name="phone" placeholder="输入手机号"/>
       </div>
      <div class="yzm_button"><a onclick="getCode('CR','p');" id="a_vfcode">获取验证码</a></div>
      <div class="clear"></div>
      <input type="text" name="code" placeholder="输入验证码"/>
    </div>
    <div class="zc-button">
      <button onclick="submitCode();" data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all">确 定</button>
    </div>
    <div class="zc-button">
    	<button onclick="window.location.href='/wap/recharge/switchBankCard.wap?type=CR'" class=" ui-btn ui-shadow ui-corner-all">选择其他银行卡</button>
  	</div>
  </div>
  <!-- /content --> 
</div>
</body>
</html>