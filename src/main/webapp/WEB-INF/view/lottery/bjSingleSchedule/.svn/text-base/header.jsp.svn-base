<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<script type="text/javascript" src="/js/lottery/common/Hashtable.js"></script>
<script type="text/javascript" src="/js/lottery/common/CombAlgorithm.js"></script>
<script type="text/javascript" src="/js/lottery/common/DateUtils.js"></script>
<c:if test="${licenseId == 21}">
<script type="text/javascript" src="http://101.200.213.247:9380/global/schudle/21/bjdc.mobile.js?time=new Date().getTime()"></script>
<script type="text/javascript" src="http://www.cp020.com/js/lottery/bjSingleSchedule/SingleSchedule.js"></script>
</c:if>
<c:if test="${licenseId == 22}">
<script type="text/javascript" src="http://101.200.213.247:9380/global/schudle/22/sfgg.mobile.js?time=new Date().getTime()"></script>
<script type="text/javascript" src="http://www.cp020.com/js/lottery/bjSingleSchedule/SfPassSingleSchedule.js"></script>
</c:if>
<script type="text/javascript" src="/js/lottery/bjSingleSchedule/common.js"></script>
<script type="text/javascript" src="/js/lottery/bjSingleSchedule/${p }.js"></script>
<script type="text/javascript"> 
$(document).ready(function(){ 
$(".btn-slide").click(function(){ 
$("#panel").slideToggle("fast"); 
$(this).toggleClass("active"); return true; 
}); 

}); 
</script>
 <div style="display: none;" class="two_line" id="panel">
   <ul id="ul_title">
     <li id="li_title_1" <c:if test="${p == 'spf' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=21&p=spf">胜平负</a></li>
     <li id="li_title_2" <c:if test="${p == 'sfgg' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=22">胜负过关</a></li>
     <li id="li_title_3" <c:if test="${p == 'bf' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=21&p=bf">比分</a></li>
     <div class=" clear"></div>
     <li id="li_title_4" <c:if test="${p == 'zjq' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=21&p=zjq">总进球</a></li>
     <li id="li_title_5" <c:if test="${p == 'bqc' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=21&p=bqc">半全场</a></li>
     <li id="li_title_6" <c:if test="${p == 'sxds' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=21&p=sxds">上下单双</a></li>
     <div class=" clear"></div>
     
   </ul>
 </div>
    