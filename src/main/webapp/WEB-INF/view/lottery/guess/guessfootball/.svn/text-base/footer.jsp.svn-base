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
  
  <div data-role="popup" id="dialogAgain" data-overlay-theme="a" data-position-to="window">
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
            <a href="#" data-role="button" data-inline="true" data-theme="c" id="lastQrBtnId" clickNum="0" >是</a>
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
  	<div class="ze_left" ><a id="bonusYhPage" data-transition="slide" data-rel="popup" href="#" data-role="button" >奖金优化</a></div>
    <div class="ze" id="betInfoId" betNum="0"><span>共0元</span><br/>
       </div>
    <div class="qd-button_fk"><a id="fukuanPop" data-transition="slide" data-rel="popup" href="#" >预约取票</a></div>
    <div class="clear"></div>
  </div>
  <!-- 底部按钮 end --> 
    <!-- 弹出-->
<div data-role="popup" id="chuanh" data-position-to="windows" data-overlay-theme="b" class="tc-common" data-history="false" >
    <div class="tan_top">投注方式</div>
    <div class="chuan_list">
            <div id="U_2_1" class="chuans" value="2c1"><a href="#">2串1</a> </div>
            <div id="U_3_1" class="chuans" value="3c1"><a href="#">3串1</a> </div>
            <div id="U_4_1" class="chuans" value="4c1"><a href="#">4串1</a> </div>
            <div id="U_5_1" class="chuans" value="5c1"><a href="#">5串1</a> </div>
            <div id="U_6_1" class="chuans" value="6c1"><a href="#">6串1</a> </div>
            <div id="U_7_1" class="chuans" value="7c1"><a href="#">7串1</a> </div>
            <div id="U_8_1" class="chuans" value="8c1"><a href="#">8串1</a> </div>
            <div class="clear"></div>
    </div>
      <div style=" text-align:left; color:#2167bc;margin-left: 13px;">更多玩法</div>
     <div class="chuan_list">
            <div id="D_3_3" class="chuans" value="3c3"><a href="#">3串3</a> </div>
            <div id="D_3_4" class="chuans" value="3c4"><a href="#">3串4</a> </div>
            <div id="D_4_4" class="chuans" value="4c4"><a href="#">4串4</a> </div>
            <div id="D_4_5" class="chuans" value="4c5"><a href="#">4串5</a> </div>
            <div id="D_4_6" class="chuans" value="4c6"><a href="#">4串6</a> </div>
            <div id="D_4_11" class="chuans" value="4c11"><a href="#">4串11</a> </div>
            <div id="D_5_5" class="chuans" value="5c5"><a href="#">5串5</a> </div>
            <div id="D_5_6" class="chuans" value="5c6"><a href="#">5串6</a> </div>
            <div id="D_5_10" class="chuans" value="5c10"><a href="#">5串10</a> </div>
            <div id="D_5_16" class="chuans" value="5c16"><a href="#">5串16</a> </div>
            <div id="D_5_20" class="chuans" value="5c20"><a href="#">5串20</a> </div>
            <div id="D_5_26" class="chuans" value="5c26"><a href="#">5串26</a> </div>
            <div id="D_6_6" class="chuans" value="6c6"><a href="#">6串6</a> </div>
            <div id="D_6_7" class="chuans" value="6c7"><a href="#">6串7</a> </div>
            <div id="D_6_15" class="chuans" value="6c15"><a href="#">6串15</a> </div>
            <div id="D_6_20" class="chuans" value="6c20"><a href="#">6串20</a> </div>
            <div id="D_6_22" class="chuans" value="6c22"><a href="#">6串22</a> </div>
            <div id="D_6_35" class="chuans" value="6c35"><a href="#">6串35</a> </div>
            <div id="D_6_42" class="chuans" value="6c42"><a href="#">6串42</a> </div>
            <div id="D_6_50" class="chuans" value="6c50"><a data-rel="popup" href="#">6串50</a> </div>                     
            <div id="D_6_57" class="chuans" value="6c57"><a href="#">6串57</a> </div>
            <div id="D_7_7" class="chuans" value="7c7"><a href="#">7串7</a> </div>
            <div id="D_7_8" class="chuans" value="7c8"><a href="#">7串8</a> </div>
            <div id="D_7_21" class="chuans" value="7c21"><a href="#">7串21</a> </div>
            <div id="D_7_35" class="chuans" value="7c35"><a href="#">7串35</a> </div>
            <div id="D_7_120" class="chuans" value="7c120"><a href="#">7串120</a> </div>
            <div id="D_8_8" class="chuans" value="8c8"><a href="#">8串8</a> </div>
            <div id="D_8_9" class="chuans gray" value="8c9"><a href="#">8串9</a> </div>
            <div id="D_8_28" class="chuans" value="8c28"><a href="#">8串28</a> </div>
            <div id="D_8_56" class="chuans" value="8c56"><a href="#">8串56</a> </div>
            <div id="D_8_70" class="chuans" value="8c70"><a href="#">8串70</a> </div>
            <div id="D_8_247" class="chuans" value="8c247"><a href="#">8串247</a> </div>
        <div class="clear"></div>
    </div>      
    <div class="clear"></div>
        <div data-theme="b"> <a href="#" data-role="button" data-inline="true" data-rel="back" data-theme="a" data-ajax="false">取消</a> <a href="#" id="qrCalBtnId" data-role="button" data-inline="true"  data-theme="c" data-rel="back" data-ajax="false">确定</a> </div>
  </div>
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
    <div class="qd-button"><a id="fukuanPop2" data-transition="slide" data-rel="popup" href="#" clickNum="0" >预约取票</a></div>
    <div class="clear"></div>
  </div>
</div>

<!-- 帮助文档 -->
<c:if test="${licenseId == 9}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >竞彩足球玩法说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#"  class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0"><br/>
<p><b style="color:red;">1、玩法说明</b></p>
<p><b>胜平负</b>：竞猜主队在全场90分钟（含伤停补时，不含加时赛和点球决战）的胜、平、负结果；</p>
<p><b>让球胜平负</b>：竞猜主队在全场90分钟（含伤停补时，不含加时赛和点球决战）加减让球数后的胜、平、负结果；</p>
<p><b>什么是让球？</b></p>
<p>“-”表示主队让客队，主队的净胜球大于让球数才算主胜；</p>
<p>“+”表示客队让主队，客队的净胜球大于让球数才算客胜。</p>
<p><b>比分</b>：竞猜比赛双方在全场90分钟（含伤停补时，不含加时赛和点球决战）的比分；</p>
<p><b>总进球</b>：竞猜比赛双方在全场90分钟（含伤停补时，不含加时赛和点球决战）的总进球数；</p>
<p><b>半全场</b>：竞猜主队在上半场和全场90分钟比赛（含伤停补时，不含加时赛和点球决战）的胜、平、负结果；</p>
<p><b style="color:red;"?>2、奖金怎么算</b></p>
<p>竞彩足球单关固定奖金以出票时的赔率为准；</p>
<p>奖金=出票赔率×2.00元×倍数；</p>
<p>竞彩足球过关玩法奖金以出票时的赔率为准；</p>
<p>奖金＝出票赔率连乘×2.00元×倍数；</p>
<p>具体计算方式举例：</p>
<p>选择2串1玩法，500倍；所选场次命中的出票赔率分别为1.77和3.77；</p>
<p>奖金=1.77×3.77×2×500=6670；</p>
<p>注：单注奖金采用四舍六入五成双考虑的原则进行取舍保留两位小数。</p>
<p><b style="color:red;">3、延期、中断、取消的比赛，如何算奖？</b></p>
<p><b>1）延期比赛如何处理：</b></p>
<p>推迟时间未超过36小时，则正常算奖；</p>
<p>推迟时间超过36小时或无法确定时间，则该场为无效场次，按比赛取消算奖；</p>
<p>取消赛事算奖：单关固定玩法返还投注金额，过关投注该场赔率值按1.0计算奖金；</p>
<p><b>2）中断比赛如何处理：</b></p>
<p>36小时内继续完成比赛则正常算奖；</p>
<p>36小时内未完成比赛则该场为无效场次，按比赛取消算奖；</p>
<p>取消赛事算奖：单关固定玩法返还投注金额，过关投注该场赔率值按1.0计算奖金。</p>
<br/> 
  </div>
  <!-- /content --> 
</div>
</c:if>
<c:if test="${licenseId == 10}">
<div data-role="page" id="helpPage">
  <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1 >竞彩篮球玩法说明</h1>
    <div class="head-left" id="returnBtnId"><a href="#" onclick="explainChangeUrl()" class="qx-icon" data-transition="slide" data-direction="reverse" >返回</a> </div>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" style="padding-top:0"><br/>
<b style="color:red;"> 1、玩法说明</b><br/>
<p><b>胜负玩法：</b>竞猜全场比赛（含加时赛）主队的胜负情况。</p>
<p><b>球队对阵：</b>客队VS主队，篮球惯例客队在前，主队在后。</p>
<p><b>投注选项：</b></p>
<p>“胜”：表示主队胜，即主胜；</p>
<p>“负”：表示主队负，即客胜。</p>
<p>投注举例：</p>
<p>休斯敦火箭vs洛杉矶湖人，结果火箭101：99湖人，那么就是主负，即客胜。</p>
<p><b>让分胜负玩法</b>：竞猜全场比赛（含加时赛）主队得分加减让分值后，主队的胜负情况。</p>
<p><b>什么是让分？</b></p>
<p>预设让分数为XX.50。</p>
<p>“-”表示主队让客队分值，主队减去让分值后大于客队分数才算主胜；</p>
<p>“+”表示客队让主队分值，主队加上让分值后大于客队分数才算主胜。</p>
<p>投注举例：</p>
<p>若休斯敦火箭VS洛杉矶湖人(+2.50)，</p>
<p>比赛结果火箭101：99湖人，那么就是主胜。</p>
<p>若休斯敦火箭VS洛杉矶湖人(-2.50)，       </p>
<p>比赛结果火箭99：101湖人，那么就是客胜。                                          </p>
<p><b>胜分差玩法：</b>竞猜全场比赛（含加时赛）对阵两队的得分差。                          </p>
<p>投注选项：1-5分、6-10分、11-15分、16-20分、21-25分、26+分；                      </p>
<p>具体可以通过投注时的客主位置，选择客队胜分还是主队胜分。                        </p>
<p>投注举例： </p>
<p>休斯敦火箭VS洛杉矶湖人，                                                          </p>
<p>如投注为“客1-5”则表示竞猜火箭客场胜分在5分以内（含5分），                        </p>
<p>如投注为“主1-5”则表示竞猜湖人主场胜分在5分以内（含5分）。                        </p
><p><b>大小分玩法：</b>竞猜全场比赛（含加时赛）比赛双方总得分与预设总分数的大小关系。     </p>
<p>每一场比赛设置2种选项：大分和小分。                                              </p>
<p>“大”：表示客队和主队得分总数大于预设总分数；                                     </p>
<p>“小”：表示客队和主队得分总数小于预设总分数。                                     </p>
<p>投注举例： </p>
<p>例如：火箭队和湖人队比赛的预设总分数为178.50分。                                 </p>
<p>“大”客队和主队得分总数大于178.50分；                                              </p>
<p>“小”客队和主队得分总数小于178.50分。                                              </p>
<p><b style="color:red;">2、奖金怎么算?</b></p>       
<p>竞彩篮球单关固定奖金以出票时的赔率为准；                                         </p>
<p>奖金=出票赔率×2.00元×倍数；                                                       </p>
<p>竞彩篮球过关玩法奖金以出票时的赔率为准；                                         </p>
<p>奖金＝出票赔率连乘×2.00元×倍数；                                                  </p>
<p>具体计算方式举例：                                                                </p>
<p>选择2串1玩法，500倍；所选场次命中的出票赔率分别为1.77和3.77；                    </p>
<p>奖金=1.77×3.77×2×500=6670；                                                        </p>
<p>注：单注奖金采用四舍六入五成双考虑的原则进行取舍保留两位小数。                  </p>
<p><b style="color:red;">3、延期、中断、取消的比赛，如何算奖？</b> </p>                    
<p><b>1）延期比赛如何处理?</b></p>
<p>推迟时间未超过36小时，则正常算奖；                                                </p>
<p>推迟时间超过36小时或无法确定时间，则该场为无效场次，按比赛取消算奖；            </p>
<p>取消赛事算奖：单关固定玩法返还投注金额，过关投注该场赔率值按1.0计算奖金；      </p>
<p><b>2）中断比赛如何处理：</b> </p>
<p>36小时内继续完成比赛则正常算奖；</p>
<p>36小时内未完成比赛则该场为无效场次，按比赛取消算奖； </p>
<p>取消赛事算奖：单关固定玩法返还投注金额，过关投注该场赔率值按1.0计算奖金。 </p>
  </div>
  <!-- /content --> 
</div>
</c:if>
<!-- 登录页 -->
<jsp:include page="../../../mobile/include/login.jsp"></jsp:include>
<script src="/mobile/js/base_ifeng.js"></script>
<!-- 表单 -->
<jsp:include page="../../lotteryForm.jsp"></jsp:include>