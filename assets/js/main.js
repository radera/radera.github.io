/*
	Polymorph by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'center'
			});

		// Banners.
			$('#banner > article')
				.css('cursor', 'pointer')
				.on('click', 'a', function(event) {
					event.stopPropagation();
				})
				.on('click', function(event) {

					event.preventDefault();
					event.stopPropagation();

					var $a = $(this).find('a');

					if ($a.length > 0)
						window.location.href = $a.attr('href');

				})
				.each(function() {

					var $this = $(this),
						$img = $this.children('img'),
						x;

					// Assign image.
						$this.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set background position.
						if (x = $img.data('position'))
							$this.css('background-position', x);

					// Hide <img>.
						$img.hide();

				});
	});

})(jQuery);
