function tabPanel () {
	var $tabs = $(".tab-panel");
	var $menu = $(".tab-panel__menu");
	var $item = $(".tab-panel__item");

	var $itemActive = $(".tab-panel__item--tour");
	var $frame = $("#frame");

	$menu.on('click', 'li:not(.tab-panel__tab--active)', function() {
		var self = this;
		//setTimeout(function() {
			$(self)
				.addClass('tab-panel__tab--active')
				.siblings().removeClass('tab-panel__tab--active')
				.closest($tabs).find($item).removeClass('tab-panel__item--active')
				.eq($(self).index()).addClass('tab-panel__item--active');
		//}, 100);
		setTimeout(function() {
			$(self)
				.closest($tabs).find($item).removeClass('tab-panel__item--animate')
				.eq($(self).index()).addClass('tab-panel__item--animate');
		}, 100);
	});
	
	$itemActive.on("click", function () {
			$frame.css("pointer-events", "auto");
		});
	$itemActive.on("mouseleave", function () {
			$frame.css("pointer-events", "none");
		});
}