<%@ page language="java" pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="/mobile/css/idangerous.swiper.css"/>
<link rel="stylesheet" type="text/css" href="/mobile/css/jquery.mobile-1.4.5.min.css"/>
<link rel="stylesheet" type="text/css" href="/mobile/css/base.css"/>
<script type="text/javascript" src="/mobile/js/jquery.min.js"></script>
<script type="text/javascript" src="/mobile/js/jquery.mobile-1.4.5.min.js"></script>
</head>
  <body>
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>温馨提示</h1>
            <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}"  class="qx-icon" data-transition="slide" data-ajax="false">购彩大厅</a></div>
            <div class="head-right"><a data-transition="slideup"></a></div>
        </div>
        <div data-role="content" class="content">
	      <p>提示信息：
	      
	      <c:if test="${errorMsg == '[店铺已打烊,不能购彩]'}">
                  <script type="text/javascript" src="http://wangdian.cp020.com/www/data/store/STOREID_${domain.storeId }/INFO_CATEGORY/CLOSING_BULLETIN/closeing_bulletin.js"></script>
                  <script type="text/javascript">
					    document.write(CLOSING_BULLETIN[0].content);
					</script>
          </c:if>
          <c:if test="${errorMsg != '[店铺已打烊,不能购彩]'}">
          ${errorMsg }
          </c:if>
	      </p>
	   </div>
	   <div data-role="footer"><h1>${domain.storeName }Copyright (c) 2014  凤凰微彩  </h1></div>
    </div>
  </body>
</html>
