function whySlider() {

	var $slider = $(".why__slider");
	var $wrapper = $(".why__slider-wrap");
	var $list = $(".why__list")
	var $next = $(".why__control--next");
	var $prev = $(".why__control--prev");

	$next.on("click", function() {
		$slider.find($wrapper).animate({'left': '-' + 22 + 'em' }, 500, function() {
			$slider.find($list).find(".why__slide").eq(0).clone().appendTo($slider.find($wrapper).find($list));
			$slider.find($list).find(".why__slide").eq(0).remove();
			$slider.find($wrapper).css({'left': 0});
		});
	});

	$prev.on("click", function() {
		$slider.find($list).find(".why__slide").eq(-1).clone().prependTo($slider.find($wrapper).find($list));
		$slider.find($wrapper).css({'left': '-' + 22 + 'em' });
		$slider.find($list).find(".why__slide").eq(-1).remove();
		$slider.find($wrapper).animate({ 'left': 0 }, 500);
	});
}