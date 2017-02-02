function tabs () {
	var $tabs = $(".tabs");
	var $menu = $(".tabs__menu");
	var $item = $(".tabs__item");

	//tabs
	$menu.on('click', 'li:not(.tabs__tab--active)', function() {
		var self = this;
		setTimeout(function() {
			$(self)
				.addClass('tabs__tab--active')
				.siblings().removeClass('tabs__tab--active')
				.closest($tabs).find($item).removeClass('tabs__item--active')
				.eq($(self).index()).addClass('tabs__item--active');
			//}, 100);
			//setTimeout(function() {
				//$(self)
				//	.closest($tabs).find($item).removeClass('tabs__item--animate')
				//	.eq($(self).index()).addClass('tabs__item--animate');
		}, 300);
	});

	var $service = $(".tabs__service");

	$service.on("click", function () {
		$(this).toggleClass("tabs__service--isSelected");
	});

	//lazy load images
	//$(window).on('resize', function () {
	//	var $images = $(".tabs img[src]");
	//	var width = $(window).width();
//
	//	if ( width <= 479) {
	//		$images.each(function (index) {
	//			$(this).attr("data-src", $(this).attr("src"));
	//			$(this).removeAttr("src");
	//		});
	//	} else {
	//		$images.each(function (index) {
	//			$(this).attr("src", $(this).attr("data-src"));
	//			$(this).removeAttr("data-src");
	//		});
	//	}
//
	//});

	//function isElementInViewport (el) {
	//	var rect = el.getBoundingClientRect();
	//	return (
	//		rect.top >= -1000 &&
	//		rect.left >= 0 &&
	//		rect.bottom <= $(window).height() + 1000 &&
	//		rect.right <= $(window).width()
	//	);
	//}

}