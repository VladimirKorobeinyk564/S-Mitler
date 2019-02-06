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
});
