<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<script type="text/javascript" src="/js/lottery/common/CombAlgorithm.js"></script>
<script type="text/javascript" src="/js/lottery/math/11x5/${p }.js"></script>
<script type="text/javascript" src="/js/lottery/math/11x5/common.js"></script>
<script type="text/javascript" src="/js/lottery/math/common.js"></script>
<script type="text/javascript"> 
$(document).ready(function(){ 
$(".btn-slide").click(function(){ 
$("#panel").slideToggle("fast"); 
$(this).toggleClass("active"); return true; 
}); 

}); 
</script>
    <h1><a href="javascript:;" class="btn-slide active">${licenseName }</a></h1>
    <div style="display: none;" id="panel" class="three_line">
      <ul id="ul_title">
        <li <c:if test="${freqPlayName == 'q1' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=q1pt">前一</a></li>
        <li <c:if test="${freqPlayName == 'x2' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x2r2pt">选二</a></li>
        <li <c:if test="${freqPlayName == 'x3' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=x3r3pt">选三</a></li>
        <div class=" clear"></div>
        <li <c:if test="${freqPlayName == 'r4' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=r4pt">任四</a></li>
        <li <c:if test="${freqPlayName == 'r5' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=r5pt">任五</a></li>
        <li <c:if test="${freqPlayName == 'r6' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=r6pt">任六</a></li>
        <div class=" clear"></div>
        <li <c:if test="${freqPlayName == 'r7' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=r7pt">任七</a></li>
        <li <c:if test="${freqPlayName == 'r8' }">class="xz"</c:if>><a data-ajax="false" href="/lottery/index.jhtml?licenseId=${licenseId }&p=r8pt">任八</a></li>
        <li><a data-ajax="false" href="#" id="newestBtnId">最新开奖</a></li>
        <div class=" clear"></div>
      </ul>
    </div>
    <input id="maxIssueId" type="hidden" value="${fp.totalDayPeriod }"/>
    <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}"  data-ajax="false" class="qx-icon">返回</a> </div>
    <div class="head-right"><a href="#" class="sm-icon" data-transition="slide" data-direction="reverse"></a> </div>
    