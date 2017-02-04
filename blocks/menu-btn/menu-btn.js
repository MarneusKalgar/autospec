function menuBtn() {
	var $btn = $(".menu-btn");
	var $logo = $(".logo__img");
	var $sidebar = $(".sidebar");

	var $body = $('body');

	var $main = $(".main");
	var $tabs = $(".tab-panel__menu");
	var $services = $(".services");
	var $trust = $(".trust__cars");
	var $clients = $(".clients");
	var $contacts = $(".contacts");

	$btn.on("click", function() {

		$btn.toggleClass("menu-btn--isActive");

		$sidebar.toggleClass("sidebar--isMove");

		if ( !$body.hasClass("page--singleService") ) {
			$body.toggleClass("page--isOverlay");
		}

		if ($sidebar.hasClass("sidebar--isMove")) {
			$body.on('scroll touchmove mousewheel', function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
		} else {
			$('body').off('scroll touchmove mousewheel');
		}
		$logo.toggleClass("logo__img--isTransparent");

		//if ($main.length ) {
		//	$main.toggleClass("main--isOverlay");
		//}
		if ($tabs.length ) {
			$tabs.toggleClass("tab-panel__menu--isOverlay");
		}
		//if ($services.length ) {
		//	$services.toggleClass("services--isOverlay");
		//}
		if ($trust.length ) {
			$trust.toggleClass("trust__cars--isOverlay");
		}
		//if ($clients.length ) {
		//	$clients.toggleClass("clients--isOverlay");
		//}
		//if ($contacts.length ) {
		//	$contacts.toggleClass("contacts--isOverlay");
		//}
	});

	if ($sidebar.hasClass("sidebar--isComponent")) {
		$btn.off("click");
	}

	if ($btn.hasClass("menu-btn--fixed")) {
		var $list = $(".header__list");
		$btn.on("click", function() {
			$logo.removeClass("logo__img--isTransparent");
			$services.removeClass("services--isOverlay");
			$contacts.removeClass("contacts--isOverlay");
			$list.toggleClass("header__list--isVisible");
		});
	}

}