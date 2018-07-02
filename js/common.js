$(window).on('load', function () {
	var preloader = $('#p_prldr');
	var svg_anm   = preloader.find('.svg_anm');
	svg_anm.fadeOut();
	preloader.delay(500).fadeOut('slow');
});


$(document).ready(function() {
	var owl = $(".owl-carousel");
	var nav = $('.nav-menu');
	owl.owlCarousel({
		items: 1,
		dots: true,
		autoplaySpeed: 1000,
		autoplay: true,
		loop: true
	});

	owl.on('changed.owl.carousel', function(event) {
		$('.owl-item .slide1-slide__descript').removeClass('fadeIn');
		$('.owl-item').eq(event.item.index).find('.slide1-slide__descript').addClass('fadeIn');
	});

	nav.on('click', function(){
		var scroll = $(this).attr('href');
		if($(scroll).lenght != 0){
			$('html,body').animate({scrollTop: $(scroll).offset().top},500);
		}
		return false;
	});

	new WOW().init();

});

