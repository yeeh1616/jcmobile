<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<div data-role="navbar">
  <ul>
    <li><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x3r3pt" <c:if test="${freqSubPlayName == 'r3pt' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">任选三</a></li>
    <li><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x3r3dt" <c:if test="${freqSubPlayName == 'r3dt' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">任三胆拖</a></li>
    <li><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x3q3zhx" <c:if test="${freqSubPlayName == 'q3zhx' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">前三直选</a></li>
    <li><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x3q3zxpt" <c:if test="${freqSubPlayName == 'q3zxpt' }">class="ui-btn-active ui-state-persist"</c:if> data-transition="none">前三组选</a></li>
  </ul>
</div>