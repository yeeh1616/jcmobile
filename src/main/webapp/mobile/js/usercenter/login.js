$(function(){
	 $("#userName").val($.cookie("username"));
     $("#password").val($.cookie("password"));
	//登陆
	$('#loginsubmit').click(function(){
		var sid = $('#storeId').val();
		if ( sid == '' ) {
			sid = getCookie("storeId");
			sid = parseInt(sid,10);
		}
		var name = $('#userName').val();
		var pas = $('#password').val();
		if ( '' == pas || '' == name ) {
			alert('用户名或密码不能为空!');
			return;
		}
		var formData = $('#loginForm').serialize();
		//$("#loginForm").submit();
		$.ajax( {
			type : "post",
			url : "/wap/loginhandler.do",
			//dataType : "html",
			data:formData,
			success : function(data) {
			if(data=='succ'){
				Save();
				if ( $("#licenseId").length > 0 ) {
					//$("#betInfoId").attr("betnum", "0");
					//$("#betInfoId").html("<span>共0元</span><br>0注1倍 ");
					$.mobile.changePage("#out_tickets", "slideup"); 
				} else {
					$.mobile.changePage("/wap/mcenter.wap",
				            { storeId: sid });	
				}
			}else{//用户名不存在
				alert('用户名或密码错误!');
			}},
			error : function() {
				alert("网络出错,请稍后重试!");
			}});
	});
	
	/*if ( $("#userName").val() != '' && $("#password").val() != '' ) {
		$('#loginsubmit').click();
	}*/
});

function Save() {
    var str_username = $("#userName").val();
    var str_password = $("#password").val();
    $.cookie("username", str_username, { expires: 70 });
    $.cookie("password", str_password, { expires: 70 });
}

function getCookie(cookie_name)  {  
	var allcookies = document.cookie;  
	var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度  
	if (cookie_pos != -1)  {  
		cookie_pos += cookie_name.length + 1;   
		var cookie_end = allcookies.indexOf(";", cookie_pos);  
		if (cookie_end == -1)  {  
			cookie_end = allcookies.length;  
		}  
		var value = unescape(allcookies.substring(cookie_pos, cookie_end));   
	}  
	return value;  
} 