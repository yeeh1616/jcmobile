$(function(){
	function randomCmdNum_foundation() {
	    var mydatet = new Date();
	    var s = mydatet.getFullYear().toString() + parseInt(mydatet.getMonth() + 1).toString() + mydatet.getDate().toString() + mydatet.getHours().toString() + mydatet.getMinutes().toString() + mydatet.getSeconds().toString() + getRandom_foundation(10000).toString();
	    return s;
	}
	function getRandom_foundation(n) {
	    return Math.floor(Math.random() * n);
	}
	function getToken_foundation() {
	    var storage = window.localStorage;
	    var token = storage.getItem("token");
	    if (token != null) {
	        return token;
	    } else {
	        return "";
	    }
	}
	function tigMessage_foundation(m) {
	    var info = m;
	    $.mobile.loading("show", {
	        text: m,
	        textVisible: true,
	        theme: "a",
	        textonly: true,
	        html: ""
	    });
	    setTimeout(function() {
	        $.mobile.loading("hide");
	    },
	    2000);
	}
	
	//安全中心
	$('#safe').click(function(){
		$.mobile.changePage("/wap/safe.wap");
	});
	
	//充值
	$('#recharge').click(function(){
		$.mobile.changePage("/wap/recharge/recharge.wap");
	});
	
});
function userLoginOut_foundation() {
    $.ajax({
        url: "/wap/userLoginOutFoundation.wap",
        success: function(data) {
			gotoa("/wap/mcenter.wap")
        }
    })
}