$(document).ready(function(){
	
	// $('.inputbox').click(function(){
	// 	$('body').css({'background':'red'});
	// 	$('.inputbox').val("");

	// });
	$('.instructions').hide();
	$('.subtitle').find('.inputbox').click(function(){
		$('.inputbox').val("");
	});
	//adding an item on click
	$('.subtitle').find('.add').on('click', function(){
		// console.log('clicked');
		addItem();
		$('.inputbox').val("");
	});

	//adding an item on enter
	$('.inputbox').keydown( function(event){
		var keyvalue=13;
		if(event.keyCode==keyvalue){
			event.preventDefault();
			addItem();
			$('.inputbox').val("");
		}
	});

//	highlight item on click and strikethrough text
	$("#itemList").on('click','.item',function(){
		// $(this).css({'background':'yellow'});
		$(this).toggleClass('highlight');
		// console.log("is this working?")
	});
	// $('.item').on('dblclick'), function(){}

	//removing an item on click
	$('.subtitle').find('.remove').on('click',function(){
		removeItem();
	});
	$('.instructpush').click(function(){
		toggleItem();
	});

});
	//function which checks if string is empty
	function isEmpty(value){
		return value.length===0;
	}
	//function which adds item
	function addItem(){
		var itemword=$('.inputbox').val();
		
		if(!isEmpty(itemword)){
		var stackitem='<li class="item new">'+itemword+'</li>';
		$('#itemList').prepend(stackitem);
		$('.new').hide();
		$('.new').slideDown("slow");
		};
		$('.item').removeClass("new");
		$('.inputbox').val("");
		$('.inputbox').focus();
	}
	//removes highlighted element
	function removeItem(){
		$('.highlight').slideUp("slow", function(){		$('.highlight').remove();});

	}
	//hides and shows item by adding and removing hide class
	function toggleItem(){
		$('.instructions').slideToggle('slow');

	}