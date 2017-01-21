$(function(){

	function worksTemplate(){
		var Mustache = require('mustache');
		$.getJSON('js/data.json', function(data){
			var template = $('#works').html();
			var html = Mustache.to_html(template, data);;
			$('#works-list').html(html);
		});//GetJSON
	}

	function scrollAnimate(){
		$(document).on("click", 'a[href^="#"]', function(e) {

			if ($('.navbar-toggler-icon').hasClass('open-toggler')) {
				$('.collapse').collapse('hide');
			}

		  var id = $(this).attr("href");

		  if($(id).length > 0) {
		    e.preventDefault();

		    $('html, body').stop().animate({
		      scrollTop: $(id).offset().top
		    }, 800, function(){
		      // Add hash (#) to URL when done scrolling (default click behavior)
		      window.location.hash = id;
		    });
		  }

		});
	}

	function collapseController(){
		$('#navbar').on('show.bs.collapse', function () {
			showCollapse();
		});
		$('#navbar').on('hide.bs.collapse', function () {
			hideCollapse();
		});
	}

	function hideCollapse(){
		$('.navbar-inverse').css('opacity', '0.6');
		$('body').css('overflow-y', 'auto');
		$('.navbar-toggler-icon').removeClass('open-toggler');
	}

	function showCollapse(){
		$('.navbar-inverse').css('opacity', '1');
		$('body').css('overflow-y', 'hidden');
		$('.navbar-toggler-icon').addClass('open-toggler');
	}



	function init(){
		worksTemplate();
		scrollAnimate();
		collapseController();
	}

	init();
});