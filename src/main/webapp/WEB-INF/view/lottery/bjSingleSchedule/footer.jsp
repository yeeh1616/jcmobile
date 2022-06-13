<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!-- Index Page -->
<div data-role="page" id="out_tickets">

  <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
    <h1>确认订单</h1>
    <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}" class="qx-icon" data-transition="slide" data-ajax="false" data-direction="reverse" data-rel="popup">购彩大厅</a> </div>
  	<div class="head-right"><a href="javascript:void 0" id="mergerSetBtnId" data-transition="slide" data-ajax="false" data-direction="reverse" data-rel="popup">发起合买</a> </div>
  </div>
  
  <div data-role="popup" id="dialogAgain" data-overlay-theme="a" data-position-to="window" >
      <div data-role="header" data-theme="a">
          <!--  <h1>是否返回?</h1> -->
      </div>
      <div data-role="content" data-theme="d">
          
          <p id="p_return">返回将清空所有已选的号码</p>
          <div style="text-align:center">
            <a href="#" data-ajax="false" data-role="button" data-inline="true" data-theme="c">是</a>
          <a href="#" data-role="button" data-inline="true" data-rel="back" data-theme="a">否</a>
        </div>
      </div>
  </div>
  
  <div data-role="popup" id="dialog" data-overlay-theme="a" data-position-to="window" data-history="false">
      <div data-role="header" data-theme="a">
          <h1>是否确认?</h1>
      </div>
      <div data-role="content" data-theme="d">
          
          <p id="p_pay"></p>
          <div style="text-align:center">
            <a href="#" data-role="button" data-inline="true" data-theme="c" id="lastQrBtnId">是</a>
          <a href="#" data-role="button" data-inline="true" data-rel="back" data-theme="a">否</a>
      </div>
      </div>
  </div>
  
  <!-- /header --> 
  <!--content -->
  <div data-role="content" id="wrapper_out_ticket">
    <div class=" cp_button">
      <ul>
        <li style="margin-left: 3.2em;"><a href="#betPanelId" class="zx" >+添加赛事</a></li>
        <li><a href="#betPanelId" class="qk" id="qkBtnId">清空列表</a></li>
        <div class="clear"></div>
      </ul>
    </div>
    <div class="cp_bg">
      <div class="cpj"><img src="/mobile/images/chup_top.png" ></div>
      <div class="cp_list">
        <ul id="ul_list">
          
        </ul>
      </div>
      <div class="cpd"><img src="/mobile/images/chup_bottom.png" >
      <div id="betTypeWaring" style="text-align:center; color:#998e71; font-size:14px;">请选择投注方式！</div>
      </div>
    </div>
  </div>
  <!-- /content --> 
  <!--底部按钮-->
  <div class="bottom_bei">
  <div class="chuans"><a id="betTypeBtn" passType="" data-transition="slideup" data-rel="popup" href="#chuanh" > 请选择投注方式<span class="red">（必选）</span></a> </div>
    <div class="bottom_bei_right">
      <div class="lx_buy">投</div>
      <input type="text" placeholder="" value="1" id="inputValue">
      <div class="fl">倍</div>
      <div class="clear"></div>
    </div>
  </div>
  <div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false" data-id="buy_foot">
    <div class="ze" id="betInfoId" betNum="0"><span>共0元</span><br/>
       </div>
    <div class="qd-button_fk"><a id="fukuanPop" data-transition="slide" data-rel="popup" href="#" >预约取票</a></div>
    <div class="clear"></div>
  </div>
  <!-- 底部按钮 end --> 
    <!-- 弹出-->
    <c:if test="${licenseId == 21}">
	<jsp:include page="./bjdcpass.jsp"></jsp:include>
	</c:if>
	<c:if test="${licenseId == 22}">
	<jsp:include page="./sfggpass.jsp"></jsp:include>
	</c:if>
    <!-- 弹出 end -->
</div>

	
<!-- 奖金优化页面 -->
<div data-role="page" id="bonusPage" data-theme="d">

    <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
        <h1>奖金优化</h1>
        <div class="head-left"><a id="rtQrPageId" href="javascript:void 0" style="cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse">返回</a> </div>
    </div>
  
    <div data-role="content">
    	<table data-mode="reflow"  class="ui-responsive table-stroke">
	       <tr>
	         <td>计划投入：</td>
	         <td><input type="text" size=4 id="planBuy" value="" placeholder="" data-role="none" />元</td>
	       </tr>
	    </table>
	    <table data-mode="reflow"  class="ui-responsive table-stroke">
	       <tr>
	         <td><input id="averYhBtn" type="button" value="平均优化" data-role="none" ></td>
	         <td><input id="brYhBtn" type="button" value="博热优化" data-role="none"></td>
	         <td><input id="blYhBtn"  type="button" value="博冷优化" data-role="none"></td>
	       </tr>
	    </table>
	  <table id="table-column-toggle" data-mode="reflow"  class="ui-responsive table-stroke">
	     <thead>
	       <tr>
	         <th >过关</th>
	         <th>单注组合</th>
	         <th >注数</th>
	         <th >预测奖金</th>
	       </tr>
	     </thead>
	     <tbody id="singleAreaId">
	      </tbody>
       </table>
	</div>
        
    <div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false" data-id="buy_foot">
    <div class="ze" id="betInfoId2" betNum="0"><span>共0元</span><br/>
       </div>
    <div class="qd-button"><a id="fukuanPop2" data-transition="slide" data-rel="popup" href="#">预约取票</a></div>
    <div class="clear"></div>
  </div>
</div>
<c:if test="${licenseId == 21}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >足彩单场玩法说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#" class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
<p><b style="color:red;">1、玩法说明</b></p>
<p><b>让球胜平负：</b>竞猜主队在全场90分钟（含伤停补时，不含加时赛和点球决战）加减让球数后的胜、平、负结果；</p>
<p><b>什么是让球？</b></p>
<p>“-”表示主队让客队，主队的净胜球大于让球数才算主胜；</p>
<p>“+”表示客队让主队，客队的净胜球大于让球数才算客胜。</p>
<p><b>比分：</b>竞猜比赛双方在全场90分钟（含伤停补时，不含加时赛和点球决战）的比分；</p>
<p><b>总进球：</b>竞猜比赛双方在全场90分钟（含伤停补时，不含加时赛和点球决战）的总进球数；</p>
<p><b>半全场：</b>竞猜主队在上半场和全场90分钟比赛（含伤停补时，不含加时赛和点球决战）的胜、平、负结果；</p>
<p><b>上下单双：</b>竞猜主客队在全场90分钟（含伤停补时，不含加时赛和点球决战）的进球上下盘及单双结果。</p>
<p>上单：上盘+单数，上盘指主队与客队总进球数结果大于或等于3，单数指主队与客队总进球数为奇数。</p>
<p>上双：上盘+双数，上盘指主队与客队总进球数结果大于或等于3，双数指主队与客队总进球数为偶数。</p>
<p>下单：下盘+单数，下盘指主队与客队总进球数结果小于3，单数指主队与客队总进球数为奇数。</p>
<p>下双：下盘+双数，下盘指主队与客队总进球数结果小于3，双数指主队与客队总进球数为偶数。</p>
<p><b style="color:red;">2、奖金怎么算</b></p>
<p>足球单场以官方公布的最终开奖SP值为准；</p>
<p>奖金=所选场次的开奖sp值连乘*倍数*2*65%；</p>
<p>注：页面上显示的SP值是2位小数，官方实际算奖则是6位小数。</p>
<p><b style="color:red;">3、何时开奖</b></p>
<p>所有足球单场的比赛会在官方开出开奖SP值后的一个小时内完成派奖。</p>
<p><b style="color:red;">4、延期、中断、取消的比赛，如何算奖？</b></p>
<p><b>1）延期比赛如何处理：</b></p>
<p>推迟时间未超过12小时，则正常算奖；</p>
<p>推迟时间超过12小时或无法确定时间，则该场为无效场次，按比赛取消算奖；</p>
<p>取消赛事算奖：开奖SP值按1.0计算奖金。</p>
<p><b>2）中断比赛如何处理：</b></p>
<p>12小时内继续完成比赛则正常算奖；</p>
<p>12小时内未完成比赛则该场为无效场次，按比赛取消算奖；</p>
<p>取消赛事算奖：开奖SP值按1.0计算奖金。</p>
<br/>
  </div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 22}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >胜负过关玩法说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#" class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
<p><b style="color:red;">1、玩法介绍</b></p>
<p><b>单场胜负过关</b>游戏以国家体育总局体育彩票管理中心选定的运动项目的比赛为竞猜对象，包括足球、篮球、网球、橄榄球、排球、羽毛球、乒乓球、沙滩排球、冰球、曲棍球、手球、水球比赛。所竞猜的比赛根据赛事特点确定比赛结果：</p>
<p>（一）网球、排球、羽毛球、乒乓球、沙滩排球比赛为全场比赛结果；</p>
<p>（二）足球、手球、曲棍球、水球、冰球比赛为全场常规时间（含伤停补时，不含加时赛及点球）的比赛结果；</p>
<p>（三）篮球、橄榄球比赛为全场（含加时赛）的比赛结果。</p>
<p>选定的比赛场次根据实际情况，由国家体育总局体育彩票管理中心采用让球(分、局、盘)方式确定胜负关系。具体让球(分、局、盘)球队(选手)及让球(分、局、盘)数量与竞猜赛程一同公布。</p>
<p><b style="color:red;">2、奖金分配</b></p>
<p>单场胜负过关游戏设一个奖级，为浮动奖：单注奖金=2元×所选场次的单场SP值连乘×65%。</p>
<p>例如：选择1、2、5、6场比赛竞猜，按4串1方式进行过关投注，如四场比赛全部竞猜正确，则中奖奖金=2元×SP1×SP2×SP5×SP6×65%。</p>
<p>再如：选择1、2、5、6场比赛竞猜，按4串5方式进行过关投注，如第1，2，5场竞猜正确，第6场竞猜错误，则只有1注过三关的投注中奖，中奖奖金=2元×SP1×SP2×SP5×0.65。</p>
<p><b style="color:red;">3、开奖</b></p>
<p>单场胜负过关游戏在竞猜比赛结束后，根据实际比赛结果进行开奖。实际比赛结果以赛事主办方及其他相关机构正式公布结果为准，其后对比赛结果的各类更改不影响原确认的开奖结果。
<p>在单场胜负过关游戏销售过程中，如遇以下情形发生，则特别规定如下：</p>
<p>（一）在某场比赛场次开始销售前，如其比赛时间提前或推迟或取消比赛，则相应更改该比赛场次的开始、截止销售时间或取消该比赛场次竞猜；</p>
<p>（二）在某场比赛场次开始销售后，如其比赛时间提前，则相应提前该比赛场次的截止销售时间；</p>
<p>（三）在某场比赛场次开始销售后，如其比赛时间提前，且比赛开始时仍在进行销售，则认定该比赛场次对于在比赛开始时刻前发生的投注为有效场次，所涉及投注可正常参与兑奖；认定该比赛场次对于在比赛开始时刻后发生的投注则为无效场次；</p>
<p>（四）在某场比赛场次开始销售后，如其比赛时间推迟且未超过原定开奖时间12小时，则相应推迟该比赛场次的截止销售时间；如其比赛时间推迟且超过原定开奖时间12小时或无法获知具体推迟时间或取消比赛，则认定该比赛场次为无效场次；</p>
<p>（五）如某场比赛场次在比赛进行中因故中断，且在原定开奖时间12小时内继续完成了比赛，则认定该比赛场次为有效场次，所涉及投注可正常参与兑奖；如在原定开奖时间12小时内未继续完成比赛或无法获知具体补赛时间或取消补赛，则认定该比赛场次为无效场次；</p>
<p>（六）在某场比赛场次开始销售后，如参赛双方中有一方与原定参赛队伍不同，则认定该比赛场次为无效场次；</p>
<p>（七）如投注中的所有比赛场次均为无效场次，则该投注按退票处理；如投注中部分场次为无效场次，则无效场次的所有选项均视为中奖，SP值按1计算。</p>
<br/>
  </div>
  <!-- /content --> 
</div>
</c:if>
<!-- 登录页 -->
<jsp:include page="../../mobile/include/login.jsp"></jsp:include>
<script src="/mobile/js/base_ifeng.js"></script>
<!-- 表单 -->
<jsp:include page="../lotteryForm.jsp"></jsp:include>