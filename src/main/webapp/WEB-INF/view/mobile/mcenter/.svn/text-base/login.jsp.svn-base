<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
    <!-- Index Page -->
    <div id="open" data-role="page">
    <jsp:include page="../include/htmlheader.jsp"></jsp:include>
    <script type="text/javascript" src="/mobile/js/usercenter/login.js"></script>
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>${domain.storeName }</h1>
            <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}" data-ajax="false" class="qx-icon" data-transition="slide">返回</a></div>
            <div class="head-right"><a onclick="gotoa('/wap/registerPage.do')" data-transition="slideup">注册</a></div>
        </div>
        <!-- /header -->
        <!--content -->
        <div role="main" class="ui-content jqm-content">
            <div class="login-logo">
                <img src="/mobile/images/fenghuang_logo.png" />
            </div>
            <div class="dlk">
                <form method="post" id="loginForm">
                <input type="hidden" name="storeId" id="storeId" value="${domain.storeId}" />
                    <div data-role="fieldcontain">
                        <div class="login-inputup">
                            <input type="text" name="userName" id="userName" value="" placeholder="用户名/手机号" />
                        </div>
                        <div class="login-inputdown">
                            <input type="password" name="password" id="password" value="" placeholder="请输入密码" />
                        </div>
                    </div>
                    <div class="tc-button">
                        <div class=" ui-btn ui-shadow ui-corner-all" id="loginsubmit">用户登录</div>
                    </div>
                </form>

                <div class="ui-grid-a zc">
                    <div class="ui-block-a"><a onclick="gotoa('/wap/accountPasswordPage.do')" style="cursor:pointer;">忘记密码？</a></div>
                    <div class="ui-block-b" style=""><a onclick="gotoa('/wap/registerPage.do')" style="cursor:pointer;" data-transition="slideup">10秒快速注册</a></div>
                </div>
            </div>
        </div>
        <!-- /content -->
    </div>
  </body>
</html>
