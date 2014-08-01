$(document).ready(function(){
	
	$('.inputbox').click(function(){
		$('body').css({'background':'red'});
		$('.inputbox').val("");

	});
	$('.subtitle').find('.add').on('click', function(){
		// console.log('clicked');
		$('body').css({'background':'green'});
		addItem();
	});
	$('.subtitle .add').on('keydown', '.inputbox', function(event){
		if(event.which==13){
			addItem();
		}
	});
	function addItem(){
		$('.itemlist').prepend('<li class="item">'+$('.inputbox').val()+'</li>');
		$('.content').css({'height':'+50px'});
		$('.inputbox').val("");
	}
});