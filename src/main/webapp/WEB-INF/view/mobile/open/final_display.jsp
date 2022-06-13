<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>  
  <body>
    <jsp:include page="../include/htmlheader.jsp"></jsp:include>
    <script type="text/javascript">
    function goto(url) {
		window.location.href = url;
	}
    </script>
    <script type="text/javascript">
    var myScroll;
var pullDownOffset;
/**
 * 初始化iScroll控件
 */
function loaded() {
	myScroll = new iScroll(
			'wrapper_isroll',
			{
				scrollbarClass : 'myScrollbar', 
				useTransition : false,
				topOffset : pullDownOffset
			});

	setTimeout(function() {
		document.getElementById('wrapper_isroll').style.left = '0';
	}, 800);
}

// 初始化绑定iScroll控件
document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', loaded, false);
</script>    
    <!-- Index Page -->
    <div data-role="page" id="final">
        <!-- header -->  
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>期次详情</h1>
            <div class="head-left"><a onclick="goto('/wap/open/openListBylId.wap?licenseId=${key}')" style="cursor:pointer;" class="qx-icon" data-transition="slide" data-direction="reverse">返回</a> </div>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" id="wrapper">
            <div id="wrapper_isroll" style="top:1px;">
                <div id="scroller">
                    <!--
                    <div id="pulldown">
                    	<span class="pulldown-icon"></span>
                    	<span id="pulldown-label" class="pulldown-label"></span>
                    </div>
                    -->
                    <div class="iscroll_list">
                        <div class="center">
                            <div class="center-t"><span id="spName">${rmsg.body.licenseName}</span><span id="spInfo" class="data_c">第${rmsg.body.issue}期  ${rmsg.body.openWinTime}</span></div>
                            <div id="spNo" class="choose_no">
                            </div>
                        </div>
                        <div id="divDetail" class="all_b" style="margin:0px 0px 30px 0px">
                            <div class="ui-grid-b head_bg">
                                <div class="ui-block-a"><span>奖项</span></div>
                                <div class="ui-block-b"><span>中奖注数</span></div>
                                <div class="ui-block-c"><span>每注金额（元）</span></div>
                            </div>
                            <c:forEach var="list" items="${rmsg.body.datails}" varStatus="vs">
                            <div class="ui-grid-b">
                                <div class="ui-block-a"><span>${list.awards}</span></div>
                                <div class="ui-block-b"><span>${list.noteNumber}</span></div>
                                <div class="ui-block-c"><span>${list.noteMoney}</span></div>
                            </div>
                            </c:forEach>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /content -->
        </div>
        <!-- footer end -->
        <div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false">
            <div class="qd-button jz" onclick="goto('/lottery/index.jhtml?licenseId=${key}')"><a href="#" data-transition="slideup">投注${rmsg.body.licenseName}</a></div>
            <div class="clear"></div>
        </div>
        <!-- /footer -->
    </div>
  </body>
</html>
