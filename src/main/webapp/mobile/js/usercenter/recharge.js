$(function(){
	$('#alipaySubmit').bind('click',function(){
		var m = $('#rmoney').val();
		if ( '' == m) {
			alert('充值金额不能为空!');
			return;
		}else if(isNaN(m)){
			alert('充值金额必须为正整数!');
			return;
		}else if( m<=0 ){
			alert('充值金额必须为正整数!');
			return;
		}else{
			var a = $('#alipayform').serialize();
			$.mobile.changePage('/wap/recharge/alipayadd.wap?money='+m);
		}
	});
});