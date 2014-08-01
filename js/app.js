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
	$('.subtitle').on('keyup', '.inputbox', function(event){
		if(event.which==13){
			addItem();
		}
	});
	$('.itemlist').find('.item').on('click', function(){
		$('body').css({'background':'silver'});
		$('.item').toggleClass('highlight');
	});
	// $('.item').on('dblclick'), function(){}
	$('.subtitle').find('.remove').on('click',function(){
		$('body').css({'background':'yellow'});
		removeItem();
	});
	function addItem(){
		$('.itemlist').prepend('<li class="item">'+$('.inputbox').val()+'</li>');
		$('.inputbox').val("");
	}
	function removeItem(){
		if ('.highlight'){
			$(this).remove();
		}
	}
});