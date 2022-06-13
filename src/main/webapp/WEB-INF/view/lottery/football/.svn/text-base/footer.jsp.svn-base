<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!-- 确认页面 -->
<div data-role="page" id="out_tickets">
    <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
    <h1>确认订单</h1>
    <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}" data-ajax="false" data-transition="slide" data-rel="popup" href="#dialogAgain" class="qx-icon">购彩大厅</a> </div>
  	<c:if test="${licenseId < 100}">
  	<div class="head-right"><a href="javascript:void 0" id="mergerSetBtnId" data-transition="slide" data-ajax="false" data-direction="reverse" data-rel="popup">发起合买</a> </div>
  	</c:if>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" id="wrapper_out_ticket">
  
  <div class="cp_button">
  <ul>
      <li><a href="#" class="zx">+自选号码</a></li>
      <li><a href="#" class="jx">+机选号码</a></li>
      <li><a href="#" class="qk">清空列表</a></li>
     <div class="clear"></div>
     </ul>
   </div>
  
    <div class="cp_bg">
      <div class="cpj"><img src="/mobile/images/chup_top.png" ></div>
      <div class="cp_list">
          <ul id="ul_list"></ul>
      </div>
      <div class="cpd"><img src="/mobile/images/chup_bottom.png" ></div>
    </div>
  </div>
    <div data-role="popup" id="dialog" data-overlay-theme="a" data-position-to="window" data-history="false">
        <div data-role="header" data-theme="a">
            <h1>是否确认?</h1>
        </div>
        <div data-role="content" data-theme="d">
            <p id="p_pay"></p>
			  <div style="text-align:center">
             <a href="#" data-role="button" data-inline="true" data-theme="c" id="lastQrBtnId" clickNum="0">是</a>
			 <a href="#" data-role="button" data-inline="true" data-rel="back" data-theme="a">否</a>
			</div>
        </div>
    </div>
    <div data-role="popup" id="dialogAgain" data-overlay-theme="a" data-position-to="window">
        <div data-role="header" data-theme="a">
            <!--  <h1>是否返回?</h1> -->
        </div>
        <div data-role="content" data-theme="d">

            <p id="p_return">是否离开此页？</p> 
			<div style="text-align:center">
          
            <a href="#" data-ajax="false" onclick="windowChangePage('../../index.html')" data-role="button" data-inline="true" data-theme="c">是</a>  <a href="#" data-role="button" data-inline="true" data-rel="back" data-theme="a">否</a>
			</div>
        </div>
    </div>
  <!-- /content --> 
  <!--底部按钮-->
  <div class="bottom_bei">
  		<c:if test="${licenseId < 5 || licenseId == 11 || licenseId == 12 || licenseId == 13 || licenseId > 100}">
	    <div class="bottom_bei_left" style="margin-left: 2%;margin-right: 3%;width: 29%;">
	    	<div class="lx_buy">买</div>
	        <input id='buyIssueNumId' type="text" placeholder="" value="1">期
	    </div>
	    </c:if>
	    <div class="bottom_bei_left" style="float: left;margin-left: 5%;margin-right: 2%;width: 30%;">
	       <div class="lx_buy">投</div>
	       <input id='multipleId' type="text" placeholder="" value="1">倍
	    </div>
	    <c:if test="${licenseId == 4}">
	    <div class="bottom_bei_left" style="float: right;margin-left: 2%;margin-right: 2%;width: 75px;">
	       <input type="checkbox" name="mov1" id="mov1" data-cacheval="false" style="float: left;position: initial;margin: 14px 8px 0 0;">
	                     追加
	    </div>
	    </c:if>
	    <c:if test="${licenseId > 100}">
	    <div class="bottom_bei_left" style="float: right;margin-left: 2%;margin-right: 2%;width: 75px;">
	       <input type="checkbox" id="stopBonusId" data-cacheval="false" style="float: left;position: initial;margin: 14px 8px 0 0;">
	                     中停
	    </div>
	    </c:if>
	    <div class="clear"></div>
  </div>
   
   <input style="display:none;" id="buy_num" type="text" value="1">
      
  <div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false" data-id="buy_foot">
      <div class="ze" id="divze2">
          <span>共0元</span>
			<br>
			0注1倍 
      </div>
    <div class="qd-button_fk"><a id="fukuanPop" data-transition="slide" data-rel="popup" href="#">预约取票</a></div>
    <div class="clear"></div>
  </div>
  <!-- 底部按钮 end --> 
</div>
<!-- 帮助 -->
<c:if test="${licenseId == 4}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >大乐透说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#" class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
  <p>开奖时间：每周一、三、六开奖</p>
  <p>玩法规则：<font color="#FF0000">5个红球</font>+<font color="#0000FF">2个蓝球</font>=1注（2元），追加投注：1元（最多可中1600万元）</p>
  <p>奖项设置：</p>
<table style="text-align:center; border-collapse: collapse;border:none; line-height:30px;">
  <tr>
    <td style=" border: solid #000 1px; width:60px;"><b>奖级</b></td>
    <td style=" border: solid #000 1px; width:170px;"><b>中奖条件</b></td>
    <td style=" border: solid #000 1px; width:120px;"><b>中奖说明</b></td>
    <td style=" border: solid #000 1px; width:80px;"><b>奖金</b></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">一等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●</font><font color="#0066CC">●●</font></td>
    <td style=" border: solid #000 1px;">中5红+2蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">浮动</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">二等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●</font><font color="#0066CC">●</font></td>
    <td style=" border: solid #000 1px;">中5红+1蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">浮动</font></td>
  </tr> 
  <tr>
    <td style=" border: solid #000 1px;width:60px;">三等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●</font><br/>
                                         <font color="#990000">●●●●</font><font color="#0066CC">●●</font></td>
    <td style=" border: solid #000 1px;">中5红<br/>中4红+2蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">浮动</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">四等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●</font><font color="#0066CC">●</font><br/>
                                         <font color="#990000">●●●</font><font color="#0066CC">●●</font></td>
    <td style=" border: solid #000 1px;">中4红+1蓝<br/>中3红+2蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">200元</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">五等奖</td>
    <td style=" border: solid #000 1px;">
    <font color="#990000">●●●●</font><br/>
    <font color="#990000">●●●</font><font color="#0066CC">●</font><br/>
    <font color="#990000">●●</font><font color="#0066CC">●●</font><br/></td>
    <td style=" border: solid #000 1px;">中4红<br/>中3红+1蓝<br/>中2红+2蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">10元</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">六等奖</td>
    <td style=" border: solid #000 1px;">
    <font color="#990000">●●●</font><br/>
    <font color="#990000">●</font><font color="#0066CC">●●</font><br/>
    <font color="#990000">●●</font><font color="#0066CC">●</font><br/>
    <font color="#0066CC">●●</font></td>
    <td style=" border: solid #000 1px;">中3红<br/>中1红+2蓝<br/>中2红+1蓝<br/>中2蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">5元</font></td>
  </tr>
</table>
<br/>
说明：奖金自动返还至本站帐户中，永无弃奖。</p>
<p><b style="color:red;"> 什么是胆拖？</b></p>
<p>在胆拖投注中，我们把号码分成胆码和拖码两部分，胆码就是您认为出现的机会非常大的号码，它在所投注的每一注彩票里都固定出现；拖码即补充的其他可能会出的不同号码。由拖码与胆码共同组成一注完整的投注号码。</p>
<p><b style="color:red;"> 如何选胆？</b><br/>
<p>先在胆拖投注页面选好为胆的号码<br/>
<p>①一个号码点第一次，为普通选号，即拖码；<br/>
<p>②同一号码点第二次，设为胆码了，显示“号码+胆”；<br/>
<p>③同一号码点第三次，则取消选择。<br/>
<p><span style="color:red;">举例说明：</span><br/>
<p>假设您认为前区01,02,03必出，30,31,32,33可能会出；后区选择09,12<br/>
<p>那么则将01,02作为胆码，它们在每注彩票中都固定出现，<br/>
<p>将30,31,32,33作为拖码；<br/>
<p>表示为(01,02)30,31,32,33|09,12<br/>
<p>这样胆码和拖码组合出来就是以下几注号码：<br/>
<p>01,02,30,31,32|09,12<br/>
<p>01,02,30,31,33|09,12<br/>
<p>01,02,30,32,33|09,12<br/>
<p>01,02,31,32,33|09,12<br/>
  </div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 1}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >排列三说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#" class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
<br/>
 <b style="color:red;">开奖时间：</b>每天开奖</p>
<p><b span style="color:red;">玩法规则：</b>每期开出一个三位数作为中奖号码，百、十、个位每位号码为0-9。</p>
<p><b span style="color:red;">奖项设置：</b></p>
<table style="text-align:center; border-collapse: collapse;border: none;">
<tr>
　<td style=" border: solid #000 1px;width:60px;""><b>玩法</b></td>
　<td style=" border: solid #000 1px;width:200px;"><b>中奖条件</b></td>
　<td  style=" border: solid #000 1px;width:170px;"><b>奖金</b></td>
　</tr>
<tr>
  <td style=" border: solid #000 1px;width:80px;">直选</td>
  <td style=" border: solid #000 1px;">定位中全部3码</td><td style=" border: solid #000 1px;"><font color="#FF0000">1040元</font></td>
</tr>
<tr>
  <td style=" border: solid #000 1px;width:80px;">组选三</td>
  <td style=" border: solid #000 1px;">不定位中3码（2位相同）</td>
  <td style=" border: solid #000 1px;"><font color="#FF0000">346元</font></td>
</tr>
<tr>
  <td style=" border: solid #000 1px;width:80px;">组选六</td>
  <td style=" border: solid #000 1px;">不定位中3码（各不相同）</td>
  <td style=" border: solid #000 1px;"><font color="#FF0000">173元</font></td>
</tr>
</table><br/>
说明：奖金自动返还至本站帐户中,永无弃奖.
<br/>
<p><b span style="color:red;">1.名词解释</b></P>
<p>①直选:将投注号码以唯一的排列方式进行投注.</P>
<p>②组选:将投注号码的所有排列方式作为一注投注号码进行投注.示例:123,排列方式有123.132.213.231.312.321,共计6种.</P>
<p>③组选3:在组选中,如果一注组选号码的3个数字有两个数字相同，则有3种不同的排列方式，因而有3个中奖机会,这种组选投注方式简称组选3.示例：112，排列方式有112.121.211.</P>
<p>④组选6:在组选中,如果一注组选号码的3个数字各不相同,则有6种不同的排列方式,因而有6个中奖机会,这种组选投注方式简称组选	6.示例:123,排列方式有123.132.213.231.312.321,共计6种.</P>
<p>⑤和值:指号码相加之和,如123和值为6.</P>
<p><b span style="color:red;">2.投注方式</b></P>
<p>①直选:对百.十.个位(0-9)各选1个或以上号码投注.</P>
<p>②组选3复式:从0-9中选择2个或以上号码进行投注.</P>
<p>③组选3和值:用所选和值(1-26)所对应的所有组三号投注.</P>
<p>④组选6复式:从0-9中选择3个或以上号码进行投注.</P>
<p>⑤组选6和值:用所选和值(3-24)所对应的所有组六号投注.</P>
<p><b span style="color:red;">3.中奖条件</b></P>
<p>①直选:单注选号与开奖号按位一致.示例:选号为543,开奖号为543.</P>
<p>②组选3复式:开奖号为组三号且包含在选号中.示例:组三复式12,共2注(112、122),如开奖号为112.121.211.122.212.221皆为中奖.</P>
<p>③组选3和值:所选和值与开奖号码和值一致,且开奖号为组三号.</P>
<p>④组选6复式:开奖号为组六号且包含在选号中.示例:组六复式123，共1注，如开奖号为123.132.213.231.312.321皆为中奖.</P>
<p>⑤组选6和值:所选和值与开奖号码和值一致,且开奖号为组六号.</P>

</div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 2}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >排列五说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#" class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
  <h1 style="font-size:18px; border-bottom:1px dashed #666; padding-bottom:10px;">排列五玩法：</h1>
<b>开奖时间</b>：每天开奖<br/>
<br/>
<b>玩法规则</b>：每期开出五位（万 千 百 十 个）中奖号码，每位选号0-9，最高奖金10万。
<br/>
<br/>
<b>奖项设置</b>：<br/><br/>
<table style="text-align:center; border-collapse: collapse;          border: none;   "><tr><td style=" border: solid #000 1px;width:60px;">
<b>玩法</b></td><td style=" border: solid #000 1px;   width:200px;">	<b>中奖条件</b></td><td  style=" border: solid #000 1px;  width:170px;  ">	<b>奖金</b></td></tr>
<tr>
  <td style=" border: solid #000 1px;width:80px;   ">直选</td>
  <td style=" border: solid #000 1px;   ">按位猜中全部五位开奖号码</td><td style=" border: solid #000 1px;"><font color="#FF0000">100000</font>元</td></tr>

</table><br/><br/>
  </div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 3}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >七星彩说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#" class="qx-icon"  >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
  <h1 style="font-size:18px; border-bottom:1px dashed #666; padding-bottom:10px;">七星彩玩法：</h1>
 <p><span style="color:red;">开奖时间：</span>每周二、五、日开奖</p>
<p><span style="color:red;">玩法规则：</span>每期开出一个7位数作为中奖号码，第一至第七位每位号码为0-9。</p>
<p><span style="color:red;">奖项设置：</span></p>
<table style="text-align:center; border-collapse: collapse;          border: none;   "><tr><td style=" border: solid #000 1px;   ">
<b>等级</b></td><td style=" border: solid #000 1px;   width:320px;">	<b>中奖条件</b></td><td  style=" border: solid #000 1px;  width:210px;  ">	<b>奖金</b></td></tr>
<tr>
    <td style=" border: solid #000 1px;width:80px;   ">一等奖</td>
    <td style=" border: solid #000 1px;   ">定位中全部7码</td><td style=" border: solid #000 1px;"><p style="color:red;">最高500万元</td></tr>
    <td style=" border: solid #000 1px;width:80px;   ">二等奖</td>
    <td style=" border: solid #000 1px;   ">定位中连续6码</td><td style=" border: solid #000 1px;"><p style="color:red;">10%奖池</td></tr>
    <td style=" border: solid #000 1px;width:80px;   ">三等奖</td>
    <td style=" border: solid #000 1px;   ">定位中连续5码</td><td style=" border: solid #000 1px;"><p style="color:red;">1800元</td></tr>
    <td style=" border: solid #000 1px;width:80px;   ">四等奖</td>
    <td style=" border: solid #000 1px;   ">定位中连续4码</td><td style=" border: solid #000 1px;"><p style="color:red;">300元</td></tr>
    <td style=" border: solid #000 1px;width:80px;   ">五等奖</td>
    <td style=" border: solid #000 1px;   ">定位中连续3码</td><td style=" border: solid #000 1px;"><p style="color:red;">20元</td></tr>
    <td style=" border: solid #000 1px;width:80px;   ">六等奖</td>
    <td style=" border: solid #000 1px;   ">定位中连续2码</td><td style=" border: solid #000 1px;"><p style="color:red;">5元</td></tr>
</table><br/>
说明：奖金自动返还至本站帐户中，永无弃奖。
<br/>
  </div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 5}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >胜负彩玩法说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0"><br/><br/>
<b>开奖时间</b>：不定时开奖 赛前10分钟截止<br/><br/>
<b>玩法规则</b>：竞猜全部14场比赛的胜（3）平（1）负（0）结果<br/><br/>
<b>奖项设置</b>：<br/><br/>
<table style="text-align:center; border-collapse: collapse;          border: none;   "><tr><td style=" border: solid #000 1px;   ">
<b>奖级</b></td><td style=" border: solid #000 1px;   width:180px;">	<b>中奖条件</b></td><td  style=" border: solid #000 1px;  width:350px;  ">	<b>奖金</b></td></tr>
<tr><td style=" border: solid #000 1px;width:80px;   ">一等奖</td><td style=" border: solid #000 1px;   ">	猜中全部14场结果</td><td style=" border: solid #000 1px;   ">	奖金总额的70%与奖池奖金之和除以中奖注数</td></tr>
<tr><td style=" border: solid #000 1px;   ">二等奖</td><td style=" border: solid #000 1px;   ">	猜中其中13场结果</td><td style=" border: solid #000 1px;   ">	奖金总额的30%除以中奖注数</td></tr>
</table><br/>
说明：竞猜赛果为每场比赛在全场90分钟（含伤情补时）比赛的胜平负结果   </div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 6}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >任选九场玩法说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0"><br/><br/>
<b>开奖时间</b>：不定时开奖 赛前10分钟截止<br/><br/>
<b>玩法规则</b>：竞猜任意9场比赛的胜（3）平（1）负（0）结果
<br/><br/>
<b>奖项设置</b>：<br/><br/>
<table style="text-align:center; border-collapse: collapse;          border: none;   "><tr><td style=" border: solid #000 1px;   ">
<b>奖级</b></td><td style=" border: solid #000 1px;   width:180px;">	<b>中奖条件</b></td><td  style=" border: solid #000 1px;  width:350px;  ">	<b>奖金</b></td></tr>
<tr><td style=" border: solid #000 1px;width:80px;   ">一等奖</td><td style=" border: solid #000 1px;   ">	猜中选定的9场结果</td><td style=" border: solid #000 1px;   ">	奖金总额的100%与奖池奖金之和除以中奖注数</td></tr>

</table><br/>
说明：竞猜赛果为每场比赛在全场90分钟（含伤情补时）比赛的胜平负结果</div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 7}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >六场半全场玩法说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0"><br/><br/>
<b>开奖时间</b>：不定时开奖<br/><br/>
<b>玩法规则</b>：竞猜6场比赛上半场和下半场（各45分钟含伤停补时）的胜平负（3,1,0）结果，单注最高奖金500万。
<br/><br/>
<b>奖项设置</b>：<br/><br/>
<table style="text-align:center; border-collapse: collapse;          border: none;   "><tr><td style=" border: solid #000 1px;   ">
<b>奖级</b></td><td style=" border: solid #000 1px;   width:320px;">	<b>中奖条件</b></td><td  style=" border: solid #000 1px;  width:210px;  ">	<b>奖金</b></td></tr>
<tr><td style=" border: solid #000 1px;width:80px;   ">一等奖</td><td style=" border: solid #000 1px;   ">猜中全部6场比赛上半场和下半场结果</td><td style=" border: solid #000 1px;   ">	总奖金100%</td></tr>

</table><br/><br/>
</div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 8}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >四场进球玩法说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0"><br/><br/>
<b>开奖时间</b>：不定时开奖<br/><br/>
<b>玩法规则</b>：竞猜4场比赛主队和客队90分钟内（含伤停补时）的进球数，单注最高奖金500万。
<br/><br/>
<b>奖项设置</b>：<br/><br/>
<table style="text-align:center; border-collapse: collapse;          border: none;   "><tr><td style=" border: solid #000 1px;   ">
<b>奖级</b></td><td style=" border: solid #000 1px;   width:320px;">	<b>中奖条件</b></td><td  style=" border: solid #000 1px;  width:210px;  ">	<b>奖金</b></td></tr>
<tr><td style=" border: solid #000 1px;width:80px;   ">一等奖</td><td style=" border: solid #000 1px;   ">猜中全部4场比赛主客队进球数</td><td style=" border: solid #000 1px;   ">	总奖金100%</td></tr>

</table><br/><br/>
</div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 11}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >双色球说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
  <p>开奖时间：每周二、四、日开奖</p>
  <p>玩法规则：<font color="#FF0000">6个红球</font>+<font color="#0000FF">1个蓝球</font>=1注（2元）</p>
  <p>奖项设置：</p>
<table style="text-align:center; border-collapse: collapse;border:none; line-height:30px;">
  <tr>
    <td style=" border: solid #000 1px; width:60px;"><b>奖级</b></td>
    <td style=" border: solid #000 1px; width:170px;"><b>中奖条件</b></td>
    <td style=" border: solid #000 1px; width:120px;"><b>中奖说明</b></td>
    <td style=" border: solid #000 1px; width:80px;"><b>奖金</b></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">一等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●●</font><font color="#0066CC">●</font></td>
    <td style=" border: solid #000 1px;">中6红+1蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">浮动</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">二等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●●</font></td>
    <td style=" border: solid #000 1px;">中6红</td>
    <td style=" border: solid #000 1px;"><font color="#990000">浮动</font></td>
  </tr> 
  <tr>
    <td style=" border: solid #000 1px;width:60px;">三等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●</font><font color="#0066CC">●</font></td>
    <td style=" border: solid #000 1px;">中5红+1蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">3000元</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">四等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●</font><br/>
                                         <font color="#990000">●●●●</font><font color="#0066CC">●</font></td>
    <td style=" border: solid #000 1px;">中5红<br/>中4红+1蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">200元</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">五等奖</td>
    <td style=" border: solid #000 1px;">
    <font color="#990000">●●●●</font><br/>
    <font color="#990000">●●●</font><font color="#0066CC">●</font></td>
    <td style=" border: solid #000 1px;">中4红<br/>中3红+1蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">10元</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">六等奖</td>
    <td style=" border: solid #000 1px;">
    <font color="#990000">●●</font><font color="#0066CC">●</font><br/>
    <font color="#990000">●</font><font color="#0066CC">●</font><br/>
    <font color="#0066CC">●</font></td>
    <td style=" border: solid #000 1px;">中2红+1蓝<br/>中1红+1蓝<br/>中1蓝</td>
    <td style=" border: solid #000 1px;"><font color="#990000">5元</font></td>
  </tr>
</table>
<br/>
说明：奖金自动返还至本站帐户中，永无弃奖。</p>
<p><b style="color:red;"> 什么是胆拖？</b></p>
<p>在胆拖投注中，我们把号码分成胆码和拖码两部分，胆码就是您认为出现的机会非常大的号码，它在所投注的每一注彩票里都固定出现；拖码即补充的其他可能会出的不同号码。由拖码与胆码共同组成一注完整的投注号码。</p>
<p><b style="color:red;"> 如何选胆？</b><br/>
<p>先在胆拖投注页面选好为胆的号码<br/>
<p>①一个号码点第一次，为普通选号，即拖码；<br/>
<p>②同一号码点第二次，设为胆码了，显示“号码+胆”；<br/>
<p>③同一号码点第三次，则取消选择。<br/>
<p><span style="color:red;">举例说明：</span><br/>
<p>假设您认为红球01,02,03,04,05必出，红球30,31,32可能会出；蓝球选择12；<br/>
<p>那么则将01,02,03,04,05作为胆码，它们在每注彩票中都固定出现，<br/>
<p>将30,31,32作为拖码；<br/>
<p>表示为(01,02,03,04,05)30,31,32|12<br/>
<p>这样胆码和拖码组合出来就是以下几注号码：<br/>
<p>01,02,03,04,05,30|12<br/>
<p>01,02,03,04,05,31|12<br/>
<p>01,02,03,04,05,32|12<br/>
  </div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 12}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >福彩3D玩法说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
<br/>
<b style="color:red;">开奖时间：</b>每天开奖</p>
<p><b span style="color:red;">玩法规则：</b>每期开出一个三位数作为中奖号码，百、十、个位每位号码为0-9。</p>
<p><b span style="color:red;">奖项设置：</b></p>
<table style="text-align:center; border-collapse: collapse;border: none;">
<tr>
　<td style=" border: solid #000 1px;width:60px;""><b>玩法</b></td>
　<td style=" border: solid #000 1px;width:200px;"><b>中奖条件</b></td>
　<td  style=" border: solid #000 1px;width:170px;"><b>奖金</b></td>
　</tr>
<tr>
  <td style=" border: solid #000 1px;width:80px;">直选</td>
  <td style=" border: solid #000 1px;">定位中全部3码</td><td style=" border: solid #000 1px;"><font color="#FF0000">1040元</font></td>
</tr>
<tr>
  <td style=" border: solid #000 1px;width:80px;">组选三</td>
  <td style=" border: solid #000 1px;">不定位中3码（2位相同）</td>
  <td style=" border: solid #000 1px;"><font color="#FF0000">346元</font></td>
</tr>
<tr>
  <td style=" border: solid #000 1px;width:80px;">组选六</td>
  <td style=" border: solid #000 1px;">不定位中3码（各不相同）</td>
  <td style=" border: solid #000 1px;"><font color="#FF0000">173元</font></td>
</tr>
</table><br/>
说明：奖金自动返还至本站帐户中,永无弃奖.
<br/>
<p><b span style="color:red;">1.名词解释</b></P>
<p>①直选:将投注号码以唯一的排列方式进行投注.</P>
<p>②组选:将投注号码的所有排列方式作为一注投注号码进行投注.示例:123,排列方式有123.132.213.231.312.321,共计6种.</P>
<p>③组选3:在组选中,如果一注组选号码的3个数字有两个数字相同，则有3种不同的排列方式，因而有3个中奖机会,这种组选投注方式简称组选3.示例：112，排列方式有112.121.211.</P>
<p>④组选6:在组选中,如果一注组选号码的3个数字各不相同,则有6种不同的排列方式,因而有6个中奖机会,这种组选投注方式简称组选	6.示例:123,排列方式有123.132.213.231.312.321,共计6种.</P>
<p>⑤和值:指号码相加之和,如123和值为6.</P>
<p><b span style="color:red;">2.投注方式</b></P>
<p>①直选:对百.十.个位(0-9)各选1个或以上号码投注.</P>
<p>②组选3复式:从0-9中选择2个或以上号码进行投注.</P>
<p>③组选3和值:用所选和值(1-26)所对应的所有组三号投注.</P>
<p>④组选6复式:从0-9中选择3个或以上号码进行投注.</P>
<p>⑤组选6和值:用所选和值(3-24)所对应的所有组六号投注.</P>
<p><b span style="color:red;">3.中奖条件</b></P>
<p>①直选:单注选号与开奖号按位一致.示例:选号为543,开奖号为543.</P>
<p>②组选3复式:开奖号为组三号且包含在选号中.示例:组三复式12,共2注(112、122),如开奖号为112.121.211.122.212.221皆为中奖.</P>
<p>③组选3和值:所选和值与开奖号码和值一致,且开奖号为组三号.</P>
<p>④组选6复式:开奖号为组六号且包含在选号中.示例:组六复式123，共1注，如开奖号为123.132.213.231.312.321皆为中奖.</P>
<p>⑤组选6和值:所选和值与开奖号码和值一致,且开奖号为组六号.</P>

</div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 13}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >七乐彩说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
  <p>开奖时间：每周一、三、五开奖</p>
  <p>玩法规则：30个号选7个=1注（2元），每期开出<font color="#990000">7个基本号码</font>和<font color="#0066CC">1个特别号码</font>。</p>
  <p>奖项设置：</p>
<table style="text-align:center; border-collapse: collapse;border:none; line-height:30px;">
  <tr>
    <td style=" border: solid #000 1px; width:60px;"><b>奖级</b></td>
    <td style=" border: solid #000 1px; width:170px;"><b>中奖条件</b></td>
    <td style=" border: solid #000 1px; width:120px;"><b>中奖说明</b></td>
    <td style=" border: solid #000 1px; width:80px;"><b>奖金</b></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">一等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●●●</font></td>
    <td style=" border: solid #000 1px;">中7基</td>
    <td style=" border: solid #000 1px;"><font color="#990000">浮动</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">二等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●●</font><font color="#0066CC">●</font></td>
    <td style=" border: solid #000 1px;">中6基+1特</td>
    <td style=" border: solid #000 1px;"><font color="#990000">浮动</font></td>
  </tr> 
  <tr>
    <td style=" border: solid #000 1px;width:60px;">三等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●●</font></td>
    <td style=" border: solid #000 1px;">中6基</td>
    <td style=" border: solid #000 1px;"><font color="#990000">浮动</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">四等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●</font><font color="#0066CC">●</font></td>
    <td style=" border: solid #000 1px;">中5基+1特</td>
    <td style=" border: solid #000 1px;"><font color="#990000">200元</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">五等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●●</font></td>
    <td style=" border: solid #000 1px;">中5基</td>
    <td style=" border: solid #000 1px;"><font color="#990000">50元</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">六等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●</font><font color="#0066CC">●</font></td>
    <td style=" border: solid #000 1px;">中4基+1特</td>
    <td style=" border: solid #000 1px;"><font color="#990000">10元</font></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:60px;">七等奖</td>
    <td style=" border: solid #000 1px;"><font color="#990000">●●●●</font></td>
    <td style=" border: solid #000 1px;">中4基</td>
    <td style=" border: solid #000 1px;"><font color="#990000">5元</font></td>
  </tr>
</table>
<p>特别号码<font color="#0066CC">●</font>说明</p>
<p>摇奖时先摇出7个号码作为基本号码，再摇出1个号码作为特别号码。特别号码仅做二、四、六等级使用，只要跟您买的7个号中的任意1个号相符，就算中特别号。</p>
<p><b style="color:red;"> 什么是胆拖？</b></p>
<p>在胆拖投注中，我们把号码分成胆码和拖码两部分，胆码就是您认为出现的机会非常大的号码，它在所投注的每一注彩票里都固定出现；拖码即补充的其他可能会出的不同号码。由拖码与胆码共同组成一注完整的投注号码。</p>
<p><b style="color:red;"> 如何选胆？</b><br/>
<p>先在胆拖投注页面选好为胆的号码<br/>
<p>①一个号码点第一次，为普通选号，即拖码；<br/>
<p>②同一号码点第二次，设为胆码了，显示“号码+胆”；<br/>
<p>③同一号码点第三次，则取消选择。<br/>
<br/>
  </div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId > 100}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >11选5说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
  <p>开奖时间：10分钟开奖，每天${fp.totalDayPeriod }期</p>
  <p>玩法规则：每期从01-11开出5个号码作为中奖号码</p>
  <p>奖项设置：</p>
<table style="text-align:center; border-collapse: collapse;border:none; line-height:30px;">
  <tr>
    <td style=" border: solid #000 1px; width:80px;"><b>玩法</b></td>
    <td style=" border: solid #000 1px; width:290px;"><b>中奖条件</b></td>
    <td style=" border: solid #000 1px; width:60px;"><b>奖金</b></td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:80px;">任选二</td>
    <td style=" border: solid #000 1px;">选2个号，猜中开奖的任意2号</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">6</font>元</td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:80px;">任选三</td>
    <td style=" border: solid #000 1px;">选3个号，猜中开奖的任意3号</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">19</font>元</td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:80px;">任选四</td>
    <td style=" border: solid #000 1px;">选4个号，猜中开奖的任意4号</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">78</font>元</td>
  </tr>
   <tr>
    <td style=" border: solid #000 1px;width:80px;">任选五</td>
    <td style=" border: solid #000 1px;">选5个号，猜中开奖的全部5号</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">540</font>元</td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:80px;">任选六</td>
    <td style=" border: solid #000 1px;">选6个号，猜中开奖的全部5号</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">90</font>元</td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:80px;">任选七</td>
    <td style=" border: solid #000 1px;">选7个号，猜中开奖的全部5号</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">26</font>元</td>
  </tr>    
  <tr>
    <td style=" border: solid #000 1px;width:80px;">任选八</td>
    <td style=" border: solid #000 1px;">选8个号，猜中开奖的全部5号</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">9</font>元</td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:80px;">前一</td>
    <td style=" border: solid #000 1px;">选1个号，猜中开奖的第1个号</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">13</font>元</td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:80px;">前二直选</td>
    <td style=" border: solid #000 1px;">选2个号与开奖的前2个号相同且顺序一致</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">130</font>元</td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:80px;">前二组选</td>
    <td style=" border: solid #000 1px;">选2个号与开奖的前2个号相同</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">65</font>元</td>
  </tr>     
  <tr>
    <td style=" border: solid #000 1px;width:80px;">前三直选</td>
    <td style=" border: solid #000 1px;">选3个号与开奖的前3个号相同且顺序一致</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">1170</font>元</td>
  </tr>
  <tr>
    <td style=" border: solid #000 1px;width:80px;">前三组选</td>
    <td style=" border: solid #000 1px;">选3个号与开奖的前3个号相同</td>
    <td style=" border: solid #000 1px;"><font color="#ff0000">195</font>元</td>
  </tr>       
</table>
<br/>
说明：奖金自动返还至本站帐户中，永无弃奖。</p>

  </div>
  <!-- /content --> 
</div>
<div data-role="page" id="oepnPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >${licenseName }</h1>
    <div class="head-left" id="returnBtn2Id"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0">
  <br/>
<table style="text-align:center; border-collapse: collapse;border:none; line-height:30px;">
<thead>
  <tr>
    <td style=" border: solid #000 1px; width:80px;"><b>期号</b></td>
    <td style=" border: solid #000 1px; width:290px;"><b>开奖号码</b></td>
  </tr>
  </thead>
  <tbody id="openViewId">
  </tbody>
</table>

  </div>
  <!-- /content --> 
</div>
</c:if>
<!-- 登录页 -->
<jsp:include page="../../mobile/include/login.jsp"></jsp:include>
<script src="/mobile/js/base_ifeng.js"></script>
<!-- 表单 -->
<jsp:include page="../lotteryForm.jsp"></jsp:include>