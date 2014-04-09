$(document).ready( function() {
			$('#nav').on('click', 'a', function (e) {
				// var id = this.getId();
				e.preventDefault();

				var id = $(this).data('nav');
				var y = $('#' + id).offset();
				var z = y.top - 120;

				$(document).scrollTop(z);
			});
			$('#menu').on('click', function () {
				$('#nav').toggleClass('hidden');
			});


			$(window).trigger('resize');
		});



		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-48153768-1']);
		_gaq.push(['_trackPageview']);

		(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();