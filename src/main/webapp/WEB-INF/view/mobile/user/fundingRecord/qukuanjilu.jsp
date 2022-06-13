<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../../include/htmlheader.jsp"></jsp:include>
  	<script type="text/javascript" src="/mobile/js/usercenter/accountInfo.js"></script>
  	<script type="text/javascript">
		var myScroll,
			pullDownEl, pullDownOffset,
			pullUpEl, pullUpOffset,
			generatedCount = 0;
		var boolType=0;
		var boolTypeDown=0;
		/**
		 * 下拉刷新 （自定义实现此方法）
		 * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
		 */
		function pullDownAction () {
		
			setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
				//userPurchaseRecord(1,10,false);
				if(boolTypeDown==0){
				$("#list-all").offsetHeight =20;
				pulldownAction_draw_ma();
			
			boolType=1;
			
			}
				myScroll.refresh();		//数据加载完成后，调用界面更新方法   Remember to refresh when contents are loaded (ie: on ajax completion)
			}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
			
			setTimeout(function () {
		boolType=0;
			}, 5000);
			
		}
		
		/**
		 * 滚动翻页 （自定义实现此方法）
		 * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
		 */
		function pullUpAction () {
			setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
				//addMorePurchaseRecord();
			if(boolType==0){
			$("#list-all").offsetHeight =20;
				//addMorePurchaseRecord();
				pullupAction_draw_ma();
				boolTypeDown=1;
			}
				myScroll.refresh();		// 数据加载完成后，调用界面更新方法 Remember to refresh when contents are loaded (ie: on ajax completion)
			}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
			
			setTimeout(function () {
			
		boolTypeDown=0;
			}, 5000);
		}
		
		/**
		 * 初始化iScroll控件
		 */
		function loaded() {
			pullDownEl = document.getElementById('pulldown');
			pullDownOffset = pullDownEl.offsetHeight;
			pullUpEl = document.getElementById('pullup');	
			pullUpOffset = pullUpEl.offsetHeight;
			
			pullDownEl.querySelector('#pulldown-label').innerHTML = '下拉刷新...';
			pullUpEl.querySelector('#pullup-label').innerHTML = '上拉加载更多...';
			
			myScroll = new iScroll('wrapper_isroll', {
			   
				scrollbarClass: 'myScrollbar', /* 重要样式 */
				useTransition: false, /* 此属性不知用意，本人从true改为false */
				topOffset: pullDownOffset,
				onRefresh: function () {
					if (pullDownEl.className.match('loading')) {
						pullDownEl.className = '';
						pullDownEl.querySelector('#pulldown-label').innerHTML = '下拉刷新...';
					} else if (pullUpEl.className.match('loading')) {
						pullUpEl.className = '';
						pullUpEl.querySelector('#pullup-label').innerHTML = '上拉加载更多...';
					}
					//alert("onRefresh");
				},
				onScrollMove: function () {
		
					if (this.y > 5 && !pullDownEl.className.match('flip')) {
					//	alert(this.y+" one");
						pullDownEl.className = 'flip';
						pullDownEl.querySelector('#pulldown-label').innerHTML = '松手开始更新...';
						this.minScrollY = 0;	//alert('下拉方法');
						//alert(pullUpOffset+" one");
					} else if (this.y < 5 && pullDownEl.className.match('flip')) {
					//	alert(this.y+" tow");
						pullDownEl.className = '';
						pullDownEl.querySelector('#pulldown-label').innerHTML = '下拉刷新...';
						this.minScrollY = -pullDownOffset;
					//	alert(pullDownOffset+" tow");
					} else if (this.y < (this.maxScrollY - 55) && !pullUpEl.className.match('flip')) {
					//	alert(this.y+" three");
						pullUpEl.className = 'flip';
						pullUpEl.querySelector('#pullup-label').innerHTML = '松手开始更新...';
					//	alert(this.maxScrollY+" three" );				
						this.maxScrollY = this.maxScrollY;				
						//alert('上拉方法');
					} else if (this.y > (this.maxScrollY + 55) && pullUpEl.className.match('flip')) {
					//	alert(this.y+" four");
						pullUpEl.className = '';
						pullUpEl.querySelector('#pullup-label').innerHTML = '上拉加载更多...';
						//alert(pullUpOffset+" four");
						this.maxScrollY = pullUpOffset;
							
					}
				
					//alert("onScrollMove");
				},
				onScrollEnd: function () {
					if (pullDownEl.className.match('flip')) {
						pullDownEl.className = 'loading';
						pullDownEl.querySelector('#pulldown-label').innerHTML = '加载中...';				
						pullDownAction();	// Execute custom function (ajax call?)
					} else if (pullUpEl.className.match('flip')) {
						pullUpEl.className = 'loading';
						pullUpEl.querySelector('#pullup-label').innerHTML = '加载中...';				
						pullUpAction();	// Execute custom function (ajax call?)
					}
					//alert("onScrollEnd");
				}
			});
			
			setTimeout(function () { document.getElementById('wrapper_isroll').style.left = '0'; }, 800);
		}
		
		//初始化绑定iScroll控件 
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		document.addEventListener('DOMContentLoaded', loaded, false);
    </script>
    <!-- 取款记录 -------------------------------------------------------------------->
    <div data-role="page" id="part2" class="order_lists">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" id="top">
            <div class="head-left"><a onclick="gotoa('/wap/mcenter.wap')" style=" cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse">用户中心</a></div>
            <h1>交易记录</h1>
            <div data-role="navbar">
                <ul>
                    <li><a onclick="goToCapitalManagement()" data-transition="none">充值记录</a></li>
                    <li><a onclick="goToQukuanjilu()" class="ui-btn-active ui-state-persist" data-transition="none">取款记录</a></li>
                    <li><a onclick="goToZhanghumingxi()"  data-transition="none">账户明细</a></li>
                    <li><a onclick="goToQiankuandan()" data-transition="none">欠款单</a></li>
                </ul>
            </div>
        </div>
        <!-- /header
        <!--content -->
        <div data-role="content" style="padding:0">
            <div id="wrapper_isroll">
                <div id="scroller">
                    <div id="pulldown">
                    <span class="pulldown-icon"></span>
                    <span id="pulldown-label"></span>
                    </div>
                    <ul id="ulDrawHistory" data-role="listview" data-inset="true" class="funds">
                        <!--取款记录-->
                        <!--取款记录 end -->
                    </ul>
                    <div id="pullup">
                    <span class="pullup-icon"></span>
                    <span id="pullup-label"></span>
                    </div>
                    <div style="height:30px;"></div>
                </div>
                <div class="clear"><span id="spPage_draw" style="display:none;"></span></div>
            </div>
        </div>
        <!-- /content -->
    </div>

</body>
</html>
<script type="text/javascript">
    getAccountInfo_init_ma("2");
</script>
