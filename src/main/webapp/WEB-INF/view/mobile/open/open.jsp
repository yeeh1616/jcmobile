<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</head> 
  <body>
	<jsp:include page="../include/htmlheader.jsp"></jsp:include>
    <!-- Index Page -->
    <div  data-role="page" id="open">
    <div data-role="header" data-position="fixed"  data-tap-toggle="false" data-id="top" >
    <h1>开奖信息</h1>
    <div class="head-left"><a href="/?mfrom=${mfrom }&storeId=${domain.storeId}"  data-ajax="false" class="qx-icon">购彩大厅</a> </div>
     <script type="text/javascript" src="http://101.200.213.247:9380/global/open/index.js"></script>
  <script type="text/javascript">
    $(function(){
        var html = '';
        for ( var i = 0; i < jcHomeOpen.length; i++ ) {
        	if ( jcHomeOpen[i].licenseId == '9' ) {
	            html += '<li class="ui-first-child">'+
	            '<a href="/wap/open/openListBylId.wap?licenseId=9" data-transition="slide" rel="external" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
				'<div class="center">'+
	        		 '<div class="center-t"><span id="openview9">竞彩足球</span><span class="data_c" id="openinfo9">'+jcHomeOpen[i].date+'</span></div>'+
	                 '<div class="football_bg"><div class="team_l" id="openview9_team1">'+jcHomeOpen[i].host+'</div> <div class="team_fen" id="openview9_teamfen">('+jcHomeOpen[i].halfScore+')'+jcHomeOpen[i].allScore+'</div><div class="team_r" id="openview9_team2">'+jcHomeOpen[i].guest+'</div></div>'+
				'</div>'+
				'</a>'+
				'</li>';
        	} else if ( jcHomeOpen[i].licenseId == '10' ) {
	            html += '<li class="ui-last-child">'+
                '<a href="/wap/open/openListBylId.wap?licenseId=10" data-transition="slide" rel="external" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
    			'<div class="center">'+
            	'<div class="center-t"><span id="openview10">竞彩篮球</span><span class="data_c" id="openinfo10">'+jcHomeOpen[i].date+'</span></div>'+
                '<div class="basketball_bg"><div class="team_l" id="openview10_team1">'+jcHomeOpen[i].guest+'</div> <div class="team_fen" id="openview10_teamfen">'+jcHomeOpen[i].allScore+'</div><div class="team_r" id="openview10_team2">'+jcHomeOpen[i].host+'</div></div>'+
    			'</div>'+
    			'</a>'+
    			'</li>';
        	}
        }
    	for ( var i = 0; i < homeOpen.length; i++ ) {
    		var opens = homeOpen[i].result.split("-");
    		if ( homeOpen[i].license == '5' || homeOpen[i].license == '7' || homeOpen[i].license == '8'  ) {
				html += ' <li>'+
                    '<a rel="external" class="ui-btn ui-btn-icon-right ui-icon-carat-r"  data-transition="slide" href="/wap/open/openListBylId.wap?licenseId='+homeOpen[i].license+'">'+
    				'<div class="center"><div class="center-t"><span id="openview'+homeOpen[i].license+'">'+homeOpen[i].game_name+'</span>'+
    				'<span id="openinfo'+homeOpen[i].license+'" class="data_c">第'+homeOpen[i].event+'期'+homeOpen[i].openPayTime+'</span></div>'+
                    '<div id="openview'+homeOpen[i].license+'_winNo" class="choose_sf">'+
                    '<ul>';
                    for ( var j = 0; j < opens.length; j++ ) {
  					  html += '<li>'+opens[j]+'</li>';
  				  }
                  html +=  '<div class="clear"></div>'+
                     '</ul>'+
                    '</div></div>'+
         			'</a>'+
         			'</li>';
    		}
    		if ( homeOpen[i].license == '4'  ) {
				html += ' <li>'+
                    '<a rel="external" class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide" href="/wap/open/openListBylId.wap?licenseId='+homeOpen[i].license+'">'+
    				'<div class="center"><div class="center-t"><span id="openview'+homeOpen[i].license+'">'+homeOpen[i].game_name+'</span>'+
    				'<span id="openinfo'+homeOpen[i].license+'" class="data_c">第'+homeOpen[i].event+'期'+homeOpen[i].openPayTime+'</span></div>'+
                    '<div id="openview'+homeOpen[i].license+'_winNo" class="choose_no">'+
                    '<ul>';
                    for ( var j = 0; j < 5; j++ ) {
  					  html += '<li>'+opens[j]+'</li>';
  				 	 }
                    for ( var j = 5; j < 7; j++ ) {
    					  html += '<li class="blue">'+opens[j]+'</li>';
    				  }
                  html +=  '<div class="clear"></div>'+
                     '</ul>'+ 
                    '</div></div>'+
         			'</a>'+
         			'</li>';
    		}
    		if ( homeOpen[i].license == '11'  ) {
				html += ' <li>'+
                    '<a rel="external" class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide" href="/wap/open/openListBylId.wap?licenseId='+homeOpen[i].license+'">'+
    				'<div class="center"><div class="center-t"><span id="openview'+homeOpen[i].license+'">'+homeOpen[i].game_name+'</span>'+
    				'<span id="openinfo'+homeOpen[i].license+'" class="data_c">第'+homeOpen[i].event+'期'+homeOpen[i].openPayTime+'</span></div>'+
                    '<div id="openview'+homeOpen[i].license+'_winNo" class="choose_no">'+
                    '<ul>';
                    for ( var j = 0; j < 6; j++ ) {
  					  html += '<li>'+opens[j]+'</li>';
  				 	 }
                    for ( var j = 6; j < 7; j++ ) {
    					  html += '<li class="blue">'+opens[j]+'</li>';
    				  }
                  html +=  '<div class="clear"></div>'+
                     '</ul>'+ 
                    '</div></div>'+
         			'</a>'+
         			'</li>';
    		}
    		if ( homeOpen[i].license == '13'  ) {
				html += ' <li>'+
                    '<a rel="external" class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide" href="/wap/open/openListBylId.wap?licenseId='+homeOpen[i].license+'">'+
    				'<div class="center"><div class="center-t"><span id="openview'+homeOpen[i].license+'">'+homeOpen[i].game_name+'</span>'+
    				'<span id="openinfo'+homeOpen[i].license+'" class="data_c">第'+homeOpen[i].event+'期'+homeOpen[i].openPayTime+'</span></div>'+
                    '<div id="openview'+homeOpen[i].license+'_winNo" class="choose_no">'+
                    '<ul>';
                    for ( var j = 0; j < 7; j++ ) {
  					  html += '<li>'+opens[j]+'</li>';
  				 	 }
                    for ( var j = 7; j < 8; j++ ) {
    					  html += '<li class="blue">'+opens[j]+'</li>';
    				  }
                  html +=  '<div class="clear"></div>'+
                     '</ul>'+ 
                    '</div></div>'+
         			'</a>'+
         			'</li>';
    		}
    		if ( homeOpen[i].license == '1' || homeOpen[i].license == '2' || homeOpen[i].license == '3' || homeOpen[i].license == '12') {
				html += ' <li>'+
                    '<a rel="external" class="ui-btn ui-btn-icon-right ui-icon-carat-r" data-transition="slide" href="/wap/open/openListBylId.wap?licenseId='+homeOpen[i].license+'">'+
    				'<div class="center"><div class="center-t"><span id="openview'+homeOpen[i].license+'">'+homeOpen[i].game_name+'</span>'+
    				'<span id="openinfo'+homeOpen[i].license+'" class="data_c">第'+homeOpen[i].event+'期'+homeOpen[i].openPayTime+'</span></div>'+
                    '<div id="openview'+homeOpen[i].license+'_winNo" class="choose_no">'+
                    '<ul>';
                    for ( var j = 0; j < opens.length; j++ ) {
  					  html += '<li>'+opens[j]+'</li>';
  				 	 }
                  html +=  '<div class="clear"></div>'+
                     '</ul>'+ 
                    '</div></div>'+
         			'</a>'+
         			'</li>';
    		}
    	}
    	$(html).appendTo($("#openViewId"));
    });
</script>
  </div>
  <!-- /header --> 
  <!--content -->
  <div data-role="content" id="wrapper">
    <ul data-role="listview" id="openViewId">
    </ul>
  </div>
  <!-- /content --> 
   <div data-role="footer" class="footer" data-position="fixed" data-tap-toggle="false"><h1>凤凰微彩  Copyright (c) 2014</h1></div>
 </div>
  </body>
</html>
