$(function() {
	$('#my-menu').mmenu({
  		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black',],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты S&Mitler" />'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var API = $("#my-menu").data("mmenu");
	var $menuBtn = $("header .hamburger");
	 
	API.bind( "open:finish", function() {
		$menuBtn.addClass('is-active');		
	});

	API.bind( "close:finish", function() {
		$menuBtn.removeClass('is-active');		
	});

	$('.carousel-services').on('initialized.owl.carousel',function() {
		setTimeout(function() {
			carouselService()
		}, 100);
	});

	$('.carousel-services-content').equalHeights();

	$('.carousel-services').owlCarousel({
		loop:true,
		nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
	function carouselService() {
		$('.carousel-services-item').each(function(){
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
		$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	})

	function onResize() {
		$('.carousel-services-content').equalHeights();
	};onResize();
	window.onresize = function() {onResize()};
});