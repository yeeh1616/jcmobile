<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <body>
  	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
	<input type="hidden" value="${mw.accountType}" name="type"/>
	<input type="hidden" value="${mw.id}" name="mwid"/>
	<script type="text/javascript" src="/mobile/js/usercenter/changeCard.js"></script>
    <!-- Index Page -->
    <div data-role="page">
        <div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="top">
            <h1>修改取款方式</h1>
            <div class="head-left"><a href="/wap/bind.wap" style="cursor:pointer;"  class="qx-icon" data-transition="slide" data-direction="reverse"></a> </div>
        </div>
        <!-- /header -->
        <!--content -->
        <div data-role="content" id="wrapper_no_bottom">
            <div class="rz">
                <div class="fl">修改取款方式信息</div>
                <div class="clear"></div>
            </div>
            <div data-role="fieldcontain" style="padding-left:1em; padding-right:1em">
                <div>
                    <label for="fname">真实名称：</label>
                    <input type="text" disabled='disabled' value="${mb.certiName}"/>
                </div>
                <c:if test="${mw.accountType eq '1'}">
                <div>
                    <label for="fname">开户银行：</label>
                    <input type="text" name="accountName" id="card_hang" value="${mw.typeName}"/>
                </div>
                <div>
                    <label for="fname">支行名称：</label>
                    <input type="text" name="branchName" id="card_zhi" value="${mw.reserved1}"/>
                </div>
                </c:if>
                <div>
                    <label for="fname">请输入${mw.typeName2}号：</label>
                    <input type="text" name="accountCard" id="accountCard" placeholder="请认真填写${mw.typeName2}号"/>
                </div>
                <div>
                    <label for="fname">请再次输入${mw.typeName2}号：</label>
                    <input type="text" name="raccountCard" id="raccountCard" placeholder="请认真填写${mw.typeName2}号"/>
                </div>
            </div>

            <div class="zc-button" style="padding-left:1em; padding-right:1em">
                <button data-transition="slidedown" class=" ui-btn ui-shadow ui-corner-all" id="updTj">确认提交</button>
            </div>

        </div>
        <!-- /content -->
    </div>
</body>
</html>
