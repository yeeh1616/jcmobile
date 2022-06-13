function wap_changePage(url,param){
	//param.storeId = param.storeId.replace('@GolbStoreId',$('#GolbStoreId').val());
	//$.mobile.changePage(url,{ type: "post",data: param},"pop", false, false);
	var form = $('<form></form>');
	form.attr('action',url);
	form.attr('method','post');
	
	$.each(param,function(key,value){
		form.append($("<input type='hidden' name='"+key+"' value='"+value+"' />"));
	});

	form.appendTo("body");
	 form.submit();
}