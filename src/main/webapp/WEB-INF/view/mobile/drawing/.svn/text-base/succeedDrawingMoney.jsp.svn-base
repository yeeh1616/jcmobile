<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>账户提现成功</h1>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" style="padding: 0;
background-color: #FFFEEC;
border: 1px solid #ccc;
padding-bottom: 2.5em;">
            <div class="success_icon"><img src="/mobile/images/icons-png/duigou.png" width="30" height="30"></div>
            <div class="success_txt">
                <div>恭喜您成功申请一笔提现！</div>
                <div class="tz">点击查看
    				<input type="hidden" name="storeId" value="${storeId}"/>
                	<a style="cursor:pointer;" data-transition="slide" rel="external" onclick="goToCapitalManagement()">交易记录</a>,或<a style="cursor:pointer;" data-transition="slide" rel="external" onclick="returnToCenter()">返回个人中心</a></div>
            </div>
            <div class="clear"></div>
        </div>
        <!-- /content -->
    </div>
</body>
</html>
<script type="text/javascript">
	function goToCapitalManagement(){
		window.location.href = "/wap/qukuanjilu.wap";
	}
	function returnToCenter(){
	    var url = '';
		var storeId = $("input[name='storeId']").val();
		if(null != storeId){
			url = "/wap/mcenter.wap?storeId=" + storeId;
			window.location.href = url;
		}else{
			url = "/wap/login.wap";
			window.location.href = url;
		}
	}
</script>
