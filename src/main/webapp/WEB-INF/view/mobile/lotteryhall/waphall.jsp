<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<jsp:include page="../include/htmlheader.jsp"></jsp:include>
</head>
<body>
<!-- Index Page -->
<div data-role="page" id="index">
  <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top" >
    <h1 id="title_total">${domain.storeName}</h1>
        <div class="head-left"><a href="#a_main_left_panel" class="home-icon"  data-position="left" >菜单</a></div>
    <div class="head-right"><a href="/gotopc.do" class="zx-icon" data-transition="slide" data-direction="reverse" data-ajax="false">进入PC版</a></div>
  </div>
  <!-- header --> 
  <div role="main" class="ui-content" id="wrapper_home">
    <!--图片滚动-->
  <div class="slide_container" style=" margin-top:42px;">
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><a href="#" data-transition="slide"  rel="external"><img src="/mobile/images/banner/banner-1.jpg" width="100%" /></a></div>
        <div class="swiper-slide"><a href="#" data-transition="slide"  rel="external"><img src="/mobile/images/banner/banner-2.jpg" width="100%" /></a></div>
        <div class="swiper-slide"><a href="#" data-transition="slide"  rel="external"><img src="/mobile/images/banner/banner-3.jpg" width="100%" /></a></div>
      </div>
      </div>
    <div class="pagination"></div>   
  </div>
  <!--图片滚动end-->
<div class="clear"></div>
<div class="gg_w"><marquee style="padding-left:1em; padding-right:1em" class="soroll" scrollamount="3" behavior="scroll" id="index_dzgg"></marquee></div>
  <div style=" padding-bottom:1em">
    <ul data-role="listview" style="margin-top:0em" id="licenseAreaId">
    </ul></div> 
</div>
  <div data-role="panel" id="a_main_left_panel" data-display="push" data-position="left">
  <div class="login-logo_h">
    <img src="/mobile/images/logo.png" /> 
    </div>
    <ul class="panel_left">
      <li><a class="foot-icon1" href="/?mfrom=${mfrom }&storeId=${domain.storeId}" rel="external">购彩大厅</a></li>
      <li><a class="foot-icon2" href="/merger/index.jhtml" data-ajax="false" rel="external" id="gotoMergerHallPage">合买大厅</a></li>
      <li><a class="foot-icon3" href="/wap/open/open.wap" data-ajax="false" data-transition="silde" rel="external ">开奖信息</a></li>
      <li><a class="foot-icon3" href="/livedscore/index.jhtml" data-transition="silde" rel="external ">即时比分</a></li>
      <li onclick="indexChangePage()"><a class="foot-icon4" href="#" onclick="gotoa('/wap/mcenter.wap')" data-transition="silde" rel="external">用户中心</a></li>
    </ul>
    <div class="ver" id="version_display">凤凰微彩  版权所有 ver 2.0</div>
  </div>
  <!-- footer --> 
</div>
<jsp:include page="./comm.jsp"></jsp:include>
</body>
</html>