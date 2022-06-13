$(document).ready(function () {
	pullData();
	setInterval("pullData()", 5000);
});

function pullData() {
	$.ajax({
		type: "GET",
		url: "http://101.200.213.247:9380/global/livescore/guess/guessfootball.js",
		dataType: "jsonp",
		jsonp: "jsoncallback",
		success: function (result) {

		},
		error: function (result, status) {
		//处理错误
		}
	});
}

function callback(data) {
	html = "";
	for (var i = 0; i < data.length; i++ ) {
		var state = data[i].state;
		if ( state.indexOf('完') == -1 && state.indexOf('未')==-1 ) {
			state += "<image src='/images/in.gif'>";
		}
		html += '<div class="sf_list">'+
        '<div class="zhu_team">主</div>'+
        '<div class="ke_team">客</div>'+
        '<div class="team_shengfu" id="tsf_1">'+data[i].hostTeam+'<span>'+state+'</span>'+data[i].guestTeam+'</div>'+
        '<div class="spf ui-controlgroup ui-controlgroup-horizontal ui-corner-all" data-type="horizontal" data-role="controlgroup">'+
          '<div class="ui-controlgroup-controls">'+  
        	  '<a>'+data[i].score+'</a>'+
        '</div></div>'+
        '</div>';
	}
	$("#wrapper").empty();
	$(html).appendTo($("#wrapper"));
}
