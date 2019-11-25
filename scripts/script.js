// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  
$(".slider").slick({

  // normal options...
  infinite: false,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});

// On swipe event
$('.your-element').on('swipe', function(event, slick, direction){
  console.log(direction);
  // left
});

// On edge hit
$('.your-element').on('edge', function(event, slick, direction){
  console.log('edge was hit')
});

// On before slide change
$('.your-element').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);
});

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