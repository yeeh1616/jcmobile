<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<body id="index">
		<jsp:include page="../include/htmlheader.jsp"></jsp:include>
		<script type="text/javascript" src="/mobile/js/usercenter/purchaseCenter.js"></script>
	<script type="text/javascript">
	var myScroll, pullDownEl, pullDownOffset, pullUpEl, pullUpOffset, generatedCount = 0;
	var boolType = 0;
	/**
	 * 下拉刷新 （自定义实现此方法）
	 */
	function pullDownAction() {
		setTimeout(function() {
					RefreshMoreMergerJoinLists();
					boolType = 1;
					myScroll.refresh(); //数据加载完成后，调用界面更新方法   Remember to refresh when contents are loaded (ie: on ajax completion)
				}, 1000); // <-- Simulate network congestion, remove setTimeout from production!

		setTimeout(function() {
			boolType = 0;
		}, 5000);
	}

	/**
	 * 滚动翻页 （自定义实现此方法）
	 */
	function pullUpAction() {
		setTimeout(function() {
					//	addMorePurchaseRecord();
					if (boolType == 0) {
						addMoreMergerJoinLists();
					}
					myScroll.refresh(); // 数据加载完成后，调用界面更新方法 Remember to refresh when contents are loaded (ie: on ajax completion)
				}, 1000); // <-- Simulate network congestion, remove setTimeout from production!
	}

	/**
	 * 初始化iScroll控件
	 */
	function loaded() {
		pullDownEl = document.getElementById('pulldown');
		pullDownOffset = pullDownEl.offsetHeight;
		pullUpEl = document.getElementById('pullup');
		pullUpOffset = pullUpEl.offsetHeight;

		pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
		pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';

		myScroll = new iScroll(
				'wrapper_isroll',
				{
					scrollbarClass : 'myScrollbar', /* 重要样式 */
					useTransition : false, /* 此属性不知用意，本人从true改为false */
					topOffset : pullDownOffset,
					onRefresh : function() {
						if (pullDownEl.className.match('loading')) {
							pullDownEl.className = '';
							pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
						} else if (pullUpEl.className.match('loading')) {
							pullUpEl.className = '';
							pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
						}
						//alert("onRefresh");
					},
					onScrollMove : function() {

						if (this.y > 5 && !pullDownEl.className.match('flip')) {
							pullDownEl.className = 'flip';
							pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
							this.minScrollY = 0; //alert('下拉方法');
						} else if (this.y < 5
								&& pullDownEl.className.match('flip')) {
							pullDownEl.className = '';
							pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
							this.minScrollY = -pullDownOffset;

						} else if (this.y < (this.maxScrollY - 55)
								&& !pullUpEl.className.match('flip')) {
							pullUpEl.className = 'flip';
							pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
							this.maxScrollY = this.maxScrollY;
							//alert('上拉方法');
						} else if (this.y > (this.maxScrollY + 55)
								&& pullUpEl.className.match('flip')) {
							pullUpEl.className = '';
							pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
							this.maxScrollY = pullUpOffset;

						}
						//alert("onScrollMove");
					},
					onScrollEnd : function() {
						if (pullDownEl.className.match('flip')) {
							pullDownEl.className = 'loading';
							pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
							pullDownAction(); // Execute custom function (ajax call?)
						} else if (pullUpEl.className.match('flip')) {
							pullUpEl.className = 'loading';
							pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
							pullUpAction(); // Execute custom function (ajax call?)
						}
						//alert("onScrollEnd");
					}
				});

		setTimeout(function() {
			document.getElementById('wrapper_isroll').style.left = '0';
		}, 800);
	}

	//初始化绑定iScroll控件 
	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);
	document.addEventListener('DOMContentLoaded', loaded, false);
</script>
		<!-- 最近中奖 -->
		<div data-role="page" id="part2" class="order_lists">
			<div data-role="header" data-position="fixed" data-tap-toggle="false"
				id="top">
				<div class="head-left">
					<a onclick="gotoa('/wap/mcenter.wap')" data-ajax="false" class="qx-icon"
						data-transition="slide" data-direction="reverse">用户中心</a>
				</div>
				<h1>
					购彩记录
				</h1>
				<div data-role="navbar">
					<ul>
						<li><a href="/wap/orderListsPage.wap" data-transition="none" data-ajax="false">全部投注</a></li>
		        		<li><a href="/wap/orderListsBingoPage.wap" data-transition="none"  data-ajax="false">最近中奖</a></li>
		        		<li><a href="/wap/orderListsChasePage.wap" data-transition="none" data-ajax="false">追号记录</a></li>
						<li><a href="#" class="ui-btn-active ui-state-persist">合买记录</a></li>
					</ul>
				</div>
			</div>
			<!-- /header -->
			<!--content -->
			<div id="wrapper_isroll" data-role="content">
				<div id="scroller">
					<div id="pulldown">
						<span class="pullDownIcon"></span>
						<span class="pullDownLabel"></span>
					</div>
					<ul id="list-join"  style="padding:1em; padding-top:0em">
					</ul>
					<!--未开奖状态 -->
					<div id="pullup">
						<span class="pullUpIcon"></span><span class="pullUpLabel"></span>
					</div>
				</div>
			</div>
			<div class="clear"></div>
			<!-- /content -->
		</div>
<input type="hidden" id="pageNumber"/>
<script>
$(document).ready(function() {
	mergerJoinLists(1, 10, false);
});
</script>

	</body>
</html>