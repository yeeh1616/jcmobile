$(document).ready(function () {

	// 倒计时
	setInterval("clock()", 1000);
	
	// 开奖号码
	$("#newestBtnId").click(function(){
		$.mobile.changePage("#oepnPage", "slideup"); 
		var licenseId = $("#licenseId").val();
		$.ajax({
		    type: "post",
		    url: "http://101.200.213.247:9380/global/open/freq/"+licenseId+".js",
		    dataType: "jsonp",
			jsonp: "jsoncallback",
		    error: function(xMLHttpRequest, textStatus, errorThrown){
			},
		    success: function (data){
				
		    }
		});
	});
	$("#returnBtn2Id").click(function(){
		$.mobile.changePage("#betPanelId", "slideup"); 
	});
});

function callback(objs) {
	$("#openViewId").empty();
	for ( var i = 0; i < objs.length; i++ ) {
	$('<tr>'+
		    '<td style=" border: solid #000 1px;width:80px;">'+objs[i].issue+'</td>'+
		    '<td style=" border: solid #000 1px;">'+objs[i].code+'</td>'+
		  '</tr>').appendTo($("#openViewId"));
	}
}

/**
 * 时钟倒计
 * @return
 */
function clock() {
	var sec = parseInt($("#stopSId").html(),10);
	if ( sec > 0 ) {
		if ( sec <= 10 ) {
			$("#stopSId").html("0"+(sec-1));
		} else {
			$("#stopSId").html((sec-1));
		}
	} else {
		var min = parseInt($("#stopMId").html(),10);
		if ( min > 0 ) {
			if ( min <= 10 ) {
				$("#stopMId").html("0"+(min-1));
			} else {
				$("#stopMId").html((min-1));
			}
			$("#stopSId").html(59);
		} else {
			// 下一期
			var max = parseInt($("#maxIssueId").val(),10);
			var currentIssue = $("#currentIssueId").html();
			if ( parseInt(currentIssue.substring(6,8),10) == max ) {
				$("#stopMId").html("--");
				$("#stopSId").html("--");
			} else {
				var nextIssue = parseInt(currentIssue,10) + 1;
				$("#currentIssueId").html(nextIssue);
				$("#stopMId").html("09");
				$("#stopSId").html(59);
			}
		}
	}
}
