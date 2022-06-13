<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.suny.com.cn/customer.tld" prefix="customertags"%>
<input type="hidden" id="aheadTimeId" value="${aheadtime }"/>
<input type="hidden" id="pageNameId" value="${p }"/>
<input type="hidden" id="ndateValId" value="${ndate }"/>
<!-- 投注表单 -->
<form id="lotteryBuyFormId" action="/lottery/bet.jhtml" method="post" data-ajax="false">
	<!-- 彩种 -->
	<input type="hidden" id="licenseId" name="licenseId" value="${licenseId }"/>
	<!-- 玩法 -->
	<input type="hidden" name="playType" value="${p }"/>
	<!-- 过关方式 -->
	<input type="hidden" name="passType" value=""/>
	<!-- 单式/复式 -->
	<input type="hidden" name="singleFlag" value=""/>
	<!-- 投注号码 -->
	<input type="hidden" name="betCode" value=""/>
	<!-- 注数 -->
	<input type="hidden" name="betNum" value=""/>
	<!-- 倍数 -->
	<input type="hidden" name="multiple" value=""/>
	<!-- 投注金额 -->
	<input type="hidden" name="betPrice" value=""/>
	<!-- 状态 -->
	<input type="hidden" name="betState" value=""/>
	<!-- 期号 -->
	<input type="hidden" name="issue" value="${game.issue }"/>
	<!-- 投注来源 -->
	<input type="hidden" name="betFrom" value="${sessionScope.mfrom}"/>
	<!-- 投注方式 -->
	<input type="hidden" name="betType" value="1"/>
	<!-- 大乐透追加 -->
	<input type="hidden" name="zjFlag" value=""/>
	<!-- 竞彩赔率 -->
	<input type="hidden" name="orderOdds" value=""/>
	<input type="hidden" name="schInfo" value=""/>
	<!-- 足彩暂存号码 -->
	<input type="hidden" name="reserved5" value=""/>
	<!-- 存放竞彩之外的其他彩种当前期的截止时间 -->
	<input type="hidden" name="reserved8" value="${issueStopTime }"/>
	<!-- 竞彩理论奖金 -->
	<input type="hidden" name="theoryBonus" value="0"/>
</form>
<!-- 追号表单 -->
<form id="chasingBuyFormId" action="/chasing/chase2mobile.jhtml" method="post" data-ajax="false">
	<input type="hidden" id="licenseId" name="licenseId" value="${licenseId }"/>
	<input type="hidden" id="chsPlayerId" name="playType" value="${p }"/>
	<input type="hidden" name="singleFlag" value=""/>
	<input type="hidden" name="betCode" value=""/>
	<input type="hidden" name="betNum" value=""/>
	<input type="hidden" name="multiple" value=""/>
	<input type="hidden" name="betPrice" value=""/>
	<input type="hidden" name="chasingState" value="1"/>
	<input type="hidden" name="zjFlag" value="0"/>
	<input type="hidden" name="issueMult" value=""/>
	<input type="hidden" name="stopBonus" value=""/>
	<input type="hidden" name="winStop" value="0"/>
	<input type="hidden" name="reserved1" value="0"/>
	<input type="hidden" name="betFrom" value="${sessionScope.mfrom}"/>
</form>
<!-- 合买表单 -->
<form id="mergerBuyFormId" action="/merger/merge.jhtml" method="post" data-ajax="false">
	<input type="hidden" name="licenseId" value="${licenseId}"/>
	<input type="hidden" name="playType" value="${p }"/>
	<input type="hidden" name="passType" value=""/>
	<input type="hidden" name="singleFlag" value=""/>
	<input type="hidden" name="betCode" value=""/>
	<input type="hidden" name="betNum" value=""/>
	<input type="hidden" name="multiple" value=""/>
	<input type="hidden" name="betPrice" value=""/>
	<input type="hidden" name="betState" value=""/>
	<input type="hidden" name="issue" value='${game.issue }'/>
	<input type="hidden" name="betFrom" value="${sessionScope.mfrom}"/>
	<input type="hidden" name="betType" value="3"/>
	<input type="hidden" name="zjFlag" value=""/>
	<input type="hidden" name="orderOdds" value=""/>
	
	<!-- 竞彩理论奖金 -->
	<input type="hidden" name="theoryBonus" value="0"/>
	
	<!-- 合买设置的信息begin -->
	<!--合买标题-->
	<input type="hidden" name="partTitile" value=""/>
	<!--方案描述-->
	<input type="hidden" name="partDetail" value=""/>
	<!--总份数-->
	<input type="hidden" name="totalNum" value=""/>
	<!--发起人购买份数-->
	<input type="hidden" name="launchNum" value=""/>
	<!--保密级别-->
	<input type="hidden" name="showLevel" value=""/>
	<!--佣金（提成比例）-->
	<input type="hidden" name="brokerage" value=""/>
	<!--保底份数-->
	<input type="hidden" name="insNum" value=""/>
	<!--合买设置的信息end-->
	
	<!-- 足彩暂存号码 -->
	<input type="hidden" name="reserved5" value=""/>
	<!-- 存放竞彩之外的其他彩种当前期的截止时间 -->
	<input type="hidden" name="reserved8" value="${issueStopTime }"/>
	
</form>
<!-- 合买页 -->
<div data-role="page" id="mergerPageId">
			<div data-role="header" data-position="fixed" data-tap-toggle="false" id="top">
				<div class="head-left">
					<a href="javascript:void 0" data-ajax="false" id="mergerRtnId"
						class="qx-icon" data-transition="slide" data-direction="reverse">返回</a>
				</div>
				<h1>
					发起合买
				</h1>
			</div>
			<div data-role="content" id="wrapper_no_bottom">
				<div style="background:#fff;" >
				<br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;方案金额:</span><span style="color: red" id="mergerTotalM">160元</span></div>				
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;份数：</span><span style="color: blue" id="mergerTotalF">160份</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;佣金：</span><span>
					<select id="brokerageId" data-role="none" > 
			          	  <option value="0.00">无</option>
			              <option value="0.01">1%</option>
			              <option value="0.02">2%</option>
			              <option value="0.03">3%</option>
			              <option value="0.04">4%</option>
			              <option value="0.05">5%</option>
			              <option value="0.06">6%</option>
			              <option value="0.07">7%</option>
			              <option value="0.08">8%</option>
			              <option value="0.09">9%</option>
			              <option value="0.10">10%</option>
			        </select>
					</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;认购份数:</span><span style="color: blue"><input type="text" data-role="none" id="offerBuyId"/></span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;保底份数:</span><span style="color: blue"><input type="text" data-role="none" id="baoDiId"/></span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;保密类型：</span><span style="color: blue">
					<select id="baoMiId" data-role="none" > 
			          	  <option value="1">公开</option>
			              <option value="4">截止后公开</option>
			              <option value="2">跟单者公开</option>
			              <option value="3">永久保密</option>
			        </select>
					</span></div>
					<br/><br/>
					<div style="display:inline;"><span>&nbsp;&nbsp;&nbsp;方案描述:</span><span style="color: blue"><textarea data-role="none" id="partDetailId">大奖就在眼前不要错过哦！</textarea></span></div>
					<br/><br/>
				</div>
			</div>
			<div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false" data-id="buy_foot">
			<div class="ze" id="betInfoId4"><span>共0元</span><br/>
       		</div>
		    <div class="qd-button"><a id="mergerSndBtnId" data-transition="slide" data-rel="popup" href="#" clickNum="0" >发起合买</a></div>
		    <div class="clear"></div>
  </div>
  <script type="text/javascript">
  	$(document).ready(function () {
  	// 进入发起合买
  		$("#mergerSetBtnId").click(function(){
  			if ( $("#licenseId").val() == "9" || $("#licenseId").val() == "10" || $("#licenseId").val() == "21" || $("#licenseId").val() == "22") {
	  			if ( $("#betInfoId").attr("betNum") != "0" ) {
	  				var mult = parseInt($("#inputValue").val(),10);
	  				var betNum = parseInt($("#betInfoId").attr("betNum"),10);
	  				var betm = mult*betNum*2;
	  				$("#mergerTotalM").html(betm+"元");
	  				$("#mergerTotalF").html(betm+"份");
	  				// 合买默认购买份数 1%
	  				var lbuy = parseInt(betm/100,10);
	  				if ( betm%100 != 0 ) {
	  					lbuy++;
	  				}
	  				$("#offerBuyId").val(lbuy);
	  				$("#betInfoId4").html("<span>您需要支付"+lbuy+"元</span>");
	  			} else {
	  				$(this).prop("href","#");
	  				tigMessage_foundation("请选择过关方式！");
	  				return false;
	  			}
  			} else {
  	  			if ( $("#ul_list").children().length > 0 ) {
	  				var mult = parseInt($("#multipleId").val(),10);
	  				var betNum = 0;
	  				$("#ul_list").children().each(function(index){
	  					betNum += parseInt($(this).attr("betNum"));
	  				});
	  				var base = 2;
	  				if($("#mov1").prop("checked") == true) {
	  					base = 3;
	  				}
	  				var betm = betNum*mult*base;
	  				$("#mergerTotalM").html(betm+"元");
	  				$("#mergerTotalF").html(betm+"份");
	  				var lbuy = parseInt(betm/100,10);
	  				if ( betm%100 != 0 ) {
	  					lbuy++;
	  				}
	  				$("#offerBuyId").val(lbuy);
	  				$("#betInfoId4").html("<span>您需要支付"+lbuy+"元</span>");
  	  			} else {
  	  				tigMessage_foundation("请先选择投注号码！");
  	  				return false;
  	  			}
  			}
  			$("#baoDiId").val("");
  			$.mobile.changePage("#mergerPageId", "slideup"); 
  		});
  		$("#offerBuyId").keyup(function(){
  			var buy = 0;
  			if ( $(this).val() != '' ) {
  				$(this).val($(this).val().replace(/\D/g,''));
  				buy = parseInt($(this).val(),10);
  			}
  			var baodi = 0;
  			if ( $("#baoDiId").val() != '' ) {
  				baodi = parseInt($("#baoDiId").val(),10);
  			}
  			if ( $("#licenseId").val() == "9" || $("#licenseId").val() == "10" || $("#licenseId").val() == "21" || $("#licenseId").val() == "22") {
	  			var mult = parseInt($("#inputValue").val(),10);
	  			var betNum = parseInt($("#betInfoId").attr("betNum"),10);
	  			var betm = mult*betNum*2;
	  			if ( (baodi+buy) > betm ) {
	  				buy = 1;
	  				$("#offerBuyId").val(buy);
	  				$("#offerBuyId").blur();
	  				tigMessage_foundation("份数大于订单总份数！");
	  			}
	  			$("#betInfoId4").html("<span>您需要支付"+(baodi+buy)+"元</span>");
  			} else {
  				var mult = parseInt($("#multipleId").val(),10);
  				var betNum = 0;
  				$("#ul_list").children().each(function(index){
  					betNum += parseInt($(this).attr("betNum"));
  				});
  				var base = 2;
  				if($("#mov1").prop("checked") == true) {
  					base = 3;
  				}
  				var betm = betNum*mult*base;
  				if ( (baodi+buy) > betm ) {
	  				buy = 1;
	  				$("#offerBuyId").val(buy);
	  				$("#offerBuyId").blur();
	  				tigMessage_foundation("份数大于订单总份数！");
	  			}
	  			$("#betInfoId4").html("<span>您需要支付"+(baodi+buy)+"元</span>");
  			}
  		});
  		$("#baoDiId").keyup(function(){
  			var buy = 0;
  			if ( $(this).val() != '' ) {
  				$(this).val($(this).val().replace(/\D/g,''));
  				buy = parseInt($(this).val(),10);
  			}
  			var baodi = 0;
  			if ( $("#offerBuyId").val() != '' ) {
  				baodi = parseInt($("#offerBuyId").val(),10);
  			}
  			if ( $("#licenseId").val() == "9" || $("#licenseId").val() == "10" || $("#licenseId").val() == "21" || $("#licenseId").val() == "22") {
	  			var mult = parseInt($("#inputValue").val(),10);
	  			var betNum = parseInt($("#betInfoId").attr("betNum"),10);
	  			var betm = mult*betNum*2;
	  			if ( (baodi+buy) > betm ) {
	  				buy = 1;
	  				$("#baoDiId").val(buy);
	  				$("#baoDiId").blur();
	  				tigMessage_foundation("份数大于订单总份数！");
	  			}
	  			$("#betInfoId4").html("<span>您需要支付"+(baodi+buy)+"元</span>");
  			} else {
  				var mult = parseInt($("#multipleId").val(),10);
  				var betNum = 0;
  				$("#ul_list").children().each(function(index){
  					betNum += parseInt($(this).attr("betNum"));
  				});
  				var base = 2;
  				if($("#mov1").prop("checked") == true) {
  					base = 3;
  				}
  				var betm = betNum*mult*base;
  				if ( (baodi+buy) > betm ) {
	  				buy = 1;
	  				$("#baoDiId").val(buy);
	  				$("#baoDiId").blur();
	  				tigMessage_foundation("份数大于订单总份数！");
	  			}
	  			$("#betInfoId4").html("<span>您需要支付"+(baodi+buy)+"元</span>");
  			}
  		});
  		// 合买提交
  		$("#mergerSndBtnId").click(function(){
  			var baodi = 0;
  			if ( $("#baoDiId").val() != '' ) {
  				baodi = parseInt($("#baoDiId").val(),10);
  			}
  			var buy = 0;
  			if ( $("#offerBuyId").val() != '' ) {
  				buy = parseInt($("#offerBuyId").val(),10);
  			}
  			// 发起人需要支付的金额
  			var payMoney = buy + baodi;
  			$.ajax({
  			    type: "post",
  			    url: "/common/getAccountUsable.json",
  			    async: false,
  			    dataType: "json",
  			    error: function(xMLHttpRequest, textStatus, errorThrown){
  				},
  			    success: function (data){
  					if ( data == '-1' ) {
  						$.mobile.changePage("#loginPage", "slideup"); 
  					} else {
  						var balance = parseFloat(data);
  						if ( payMoney > balance ) {
  							tigMessage_foundation("余额不足，请您先充值！");
  							return false;
  						} else {
  							// 提交表单
  							var form = $("#mergerBuyFormId");
  							var betCode = "";
  							
  							if ( $("#licenseId").val() == "9" || $("#licenseId").val() == "10" || $("#licenseId").val() == "21" || $("#licenseId").val() == "22") {
  								var betCode = getBetCode();
  								var odds = "";//下单赔率 20140420001:3@2.10,1@1.11:1|20140420002:3@2.10:2
  								var stopTimes = "";// 对阵的比赛截止时间
  								var passString = $("#betTypeBtn").attr("passType");
  								// 如果全是自由过关，优化成组合过关 modified at 2015/03/26
  								if ( $("#licenseId").val() == "9" || $("#licenseId").val() == "10") {
  									passString =  guess.optimizePassType(betCode.split("|").length, passString, betCode);
  								}
  								if ( $("#pageNameId").val() == "hhdg" ) { 
  									// 单关
  									passString = "1c1";
  								}
  								
  								var multiple = $("#inputValue").val();
  								$(form).find("input[name=multiple]").val(multiple);
  								$(form).find("input[name=betNum]").val($("#betInfoId").attr("betNum"));
  								
  								if ( $("#licenseId").val() == "22" ) {
  									$(form).find("input[name=playType]").val("1");
  								} else {
  									$(form).find("input[name=playType]").val(guess.playId);
  								}
  								var betNum = parseInt($("#betInfoId").attr("betNum"),10);
  								var betm = parseInt(multiple,10)*betNum*2;
  								$(form).find("input[name=betPrice]").val(betm);
  								//总份数
  								$(form).find("input[name=totalNum]").val(betm);
  								$(form).find("input[name=theoryBonus]").val(guess.calcBonus(betCode,passString,parseInt(multiple)));
  								
  								$(form).find("input[name=passType]").val(passString);
  								
  							} else {
  								var betNum = 0;
  								$("#ul_list").children().each(function(index){
  									betCode += $(this).attr("code") + ";";
  									betNum += parseInt($(this).attr("betNum"));
  								});
  								betCode = betCode.substring(0, betCode.length - 1);
  								$(form).find("input[name=betNum]").val(betNum);
  								var multiple = $("#multipleId").val();
  								$(form).find("input[name=multiple]").val(multiple);
  								$(form).find("input[name=betPrice]").val(betNum*2);
  								//总份数
  								$(form).find("input[name=totalNum]").val(betNum*2*parseInt(multiple,10));
  							}
  							
  							$(form).find("input[name=singleFlag]").val("0");
  							$(form).find("input[name=betCode]").val(betCode);
  							$(form).find("input[name=betState]").val("1");
  							$(form).find("input[name=betType]").val("1");
  							var base = "0";
  							if ( $("#zjBoxId").attr("checked") ) {
  								base = "1";
  							}
  							$(form).find("input[name=zjFlag]").val(base);
  							
  							//合买内容
  							if ( $("#partDetailId").val() == "" ) {
  								$("#partDetailId").val("大奖就在眼前，不要错过哦!");
  							}
  							$(form).find("input[name=partTitile]").val("合买");
  							//方案描述
  							$(form).find("input[name=partDetail]").val($("#partDetailId").val());
  							
  							//发起人购买份数
  							$(form).find("input[name=launchNum]").val($("#offerBuyId").val());
  							//保密级别
  							$(form).find("input[name=showLevel]").val($("#baoMiId").val());
  							//佣金
  							$(form).find("input[name=brokerage]").val($("#brokerageId").val());
  							//保底份数
  							var baodi = 0;
  							if ( $("#baoDiId").val() != '' ) {
  								baodi = parseInt($("#baoDiId").val(),10);
  							}
  							$(form).find("input[name=insNum]").val(baodi);
  							
  							$(form).submit();
  						}
  						
  					}
  			    }
  			});
  		});
  		// 合买返回确认页
  		$("#mergerRtnId").click(function(){
  			$.mobile.changePage("#out_tickets", "slideup"); 
  		});
  	});
  	</script>
</div>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?7694d4f55cfc352fafe7698519fe5e73";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>