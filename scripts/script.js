// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  
$('.slideshow').square1({
	animation: 'slide',
	transition_time: 2000,
	prev_next_nav: 'hover',
	dots_nav: 'hover',
	fill_mode: 'contain',
	auto_start: true,
	start_delay: 25,
	pause_on_hover: true,
	theme: 'light',
	prev_next_nav: 'inside',
	dots_nav: 'inside',
	caption: 'none',
});

// failed hamburger
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});












// End of Your Code . Don't delete that line below!!
});