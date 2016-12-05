function tabPanel () {
	var $tabs = $(".tab-panel");
	var $menu = $(".tab-panel__menu");
	var $item = $(".tab-panel__item");

	$menu.on('click', 'li:not(.tab-panel__tab--active)', function() {
		$(this)
			.addClass('tab-panel__tab--active')
			.siblings().removeClass('tab-panel__tab--active')
			.closest($tabs).find($item).removeClass('tab-panel__item--active')
			.eq($(this).index()).addClass('tab-panel__item--active');
	});
}