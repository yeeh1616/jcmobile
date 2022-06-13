<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<script type="text/javascript" src="/js/lottery/common/Hashtable.js"></script>
<script type="text/javascript" src="/js/lottery/common/CombAlgorithm.js"></script>
<script type="text/javascript" src="/js/lottery/common/DateUtils.js"></script>
<script type="text/javascript" src="/js/lottery/guess/guessfootball/common.js"></script>
<script type="text/javascript" src="http://101.200.213.247:9380/global/schudle/10/schedules.js?time=new Date().getTime()"></script>
<script type="text/javascript" src="/js/lottery/guess/GuessBasketballSchedule.js"></script>
<script type="text/javascript" src="/js/lottery/guess/output-Guess.js"></script>
<script type="text/javascript" src="/js/lottery/guess/guessbasketball/${p }.js"></script>
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
     <li id="li_title_1" <c:if test="${p == 'sf' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=10&p=sf">胜负</a></li>
     <li id="li_title_2" <c:if test="${p == 'rfsf' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=10&p=rfsf">让分胜负</a></li>
     <li id="li_title_3" <c:if test="${p == 'sfc' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=10&p=sfc">胜分差</a></li>
     <div class=" clear"></div>
     <li id="li_title_4" <c:if test="${p == 'dxf' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=10&p=dxf">大小分</a></li>
     <li id="li_title_5" <c:if test="${p == 'hhgg' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=10&p=hhgg">混合过关</a></li>
     <li id="li_title_6" <c:if test="${p == 'hhdg' || p == 'hhsfdg' }">class="xz"</c:if>><a data-transition="none" rel="external" href="/lottery/index.jhtml?licenseId=10&p=hhsfdg">单关投注</a></li>
     <div class=" clear"></div>
   </ul>
 </div>
    