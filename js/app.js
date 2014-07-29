$(document).ready(function{
	var entry=$('.add').parent('.subtitle').find('.inputbox').val(this);
	$(this).parent('.content').find('.itemlist').prepend('<li>'+entry+'</li>')
})