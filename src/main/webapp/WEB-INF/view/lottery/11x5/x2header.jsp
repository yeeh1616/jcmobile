<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<div data-role="navbar">
  <ul>
    <li><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x2r2pt" <c:if test="${freqSubPlayName == 'r2pt' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">任选二</a></li>
    <li><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x2r2dt" <c:if test="${freqSubPlayName == 'r2dt' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">任二胆拖</a></li>
    <li><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x2q2zhx" <c:if test="${freqSubPlayName == 'q2zhx' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">前二直选</a></li>
    <li><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x2q2zxpt" <c:if test="${freqSubPlayName == 'q2zxpt' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">前二组选</a></li>
  </ul>
</div>