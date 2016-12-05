$(function () {

	//page();

	menuBtn();

	sidebar();

	tabPanel();
	
});



function menuBtn() {
	var $btn = $(".menu-btn");
	var $logo = $(".logo");
	var $header = $(".header");
	var $nav = $(".main-nav");
	var $sidebar = $(".sidebar");
	var delay = 600;

	$btn.on("click", function () {
		$btn.toggleClass("menu-btn--isActive");
		$logo.toggleClass("logo--isTransparent");
		$sidebar.toggleClass("sidebar--isMove");

		/*if ( $nav.hasClass("main-nav--isOpen") ) {
			$nav.addClass("main-nav--isClose");
			$nav.removeClass("main-nav--isOpen");
			setTimeout(function() {
				$nav.removeClass("main-nav--isClose");
			}, delay)
		} else {
			$nav.addClass("main-nav--isOpen");
			$nav.removeClass("main-nav--isClose");
		}*/

	});

}
function sidebar() {
	$btn = $(".sidebar__btn");
	$form = $(".callback-form");

	$btn.on("click", function () {
		$form.toggleClass("callback-form--isActive");
	});
}
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