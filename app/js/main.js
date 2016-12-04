$(function () {

	//page();

	menuBtn();

	sidebar();
	
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