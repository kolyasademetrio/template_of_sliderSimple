$(document).ready(function(){

	/*--------------------------------- функция для карусели -------------------------*/

		function sliderSimple (viewport, list, item, prev, next, speed) {
			var $viewport = $('.' + viewport),
				$list = $('.' + list),
				$item = $('.' + item),
				$prev = $('.' + prev),
				$next = $('.' + next),
				viewportWidth = $viewport.outerWidth(true),
				speed = speed || 500,
				timerId;

			$item.width(viewportWidth);
			$list.css({'left' : -viewportWidth}).prepend($item.last());

			$(window).resize(function(){

				var $viewport = $('.' + viewport),
					$list = $('.' + list),
					$item = $('.' + item),
					$prev = $('.' + prev),
					$next = $('.' + next),
					viewportWidth = $viewport.outerWidth(true),
					speed = speed || 500;

				$item.width(viewportWidth);
				$list.css({'left' : -viewportWidth}).prepend($item.last());

			});

			function nextSlide() {
				$list.animate({'margin-left' : -viewportWidth}, speed, function(){
					$item.first().appendTo($list);
					$list.css({'margin-left' : 0});
				});
			}

			function prevSlide() {
				$list.animate({'margin-left' : viewportWidth}, speed, function(){
					$item.last().prependTo($list);
					$list.css({'margin-left' : 0});
				});
			}

			timerId = setInterval(function() {
				nextSlide();
			}, 2000);

			$prev.click(function(){
				clearInterval(timerId);
				prevSlide();
			});

			$next.click(function(){
				clearInterval(timerId);
				nextSlide();
			});

		}

		/* вызов функции для карусели carouselSimple */
		sliderSimple('sliderSimple__viewport', 'sliderSimple__list', 'sliderSimple__item', 'sliderSimple__prev', 'sliderSimple__next');

	/*--------------------------------- функция для карусели End -------------------------*/

});