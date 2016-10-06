$(document).ready(function(){

	$('#one').on('click',function(){
		// $(this).text("You Just Clicked Me!");
		$(this).html("<b>You Just Clicked Me!</b>");
	});

	$('#two').on('click',function(){
		$('#four').slideToggle();
	});

	$('#three').on('click',function(){
		$(this).hide();
	});

	$('#four').on('click',function(){
		$('.f').slideToggle();
	});

	$('#f1').on('click',function(){
		$(this).fadeOut(600);
		$(this).fadeIn(500);
	});

	$('#f2').on('click',function(){
		$(this).fadeTo(1000,0.5);
	});
});