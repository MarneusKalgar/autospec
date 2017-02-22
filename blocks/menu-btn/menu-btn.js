function menuBtn() {
	var $btn = $(".menu-btn");
	//var $logo = $(".logo");
	var $header = $(".header");
	var $sidebar = $(".sidebar");

	var $body = $('body');

	var $main = $(".main");
	var $tabs = $(".tab-panel__menu");
	var $panel = $(".vacancies");
	var $services = $(".services");
	var $trust = $(".trust__cars");
	var $clients = $(".clients");
	var $clientsForm = $(".clients__form");
	var $clietsList = $(".clients__list");
	var $contacts = $(".contacts");

	if (!$main.length) {
		$btn.removeClass("menu-btn--isAnimated").css({"opacity": "1"});
	}

	window.addEventListener("resize", function() {
		if ( $header.hasClass("header--isOverlay") && window.outerWidth > 768 ) {
			console.log("works!");
			$header.removeClass("header--isOverlay");
			$sidebar.removeClass("sidebar--isMove");
			$btn.removeClass("menu-btn--isActive");
			if ($tabs.length ) {
				$tabs.removeClass("tab-panel__menu--isOverlay");
				$panel.removeClass("vacancies--isOverlay");
			}
			if ($trust.length ) {
				$trust.removeClass("trust__cars--isOverlay");
			}
		}
	}, false);

	$btn.on("click", function() {

		if ( $btn.hasClass("menu-btn--isActive") ) {
			$btn.removeClass("menu-btn--isActive");
		} else {
			$btn.addClass("menu-btn--isActive");
		}

		if ( $sidebar.hasClass("sidebar--isMove") ) {
			$sidebar.removeClass("sidebar--isMove");
		} else {
			$sidebar.addClass("sidebar--isMove");
		}

		//$btn.toggleClass("menu-btn--isActive");

		//$sidebar.toggleClass("sidebar--isMove");

		if ( !$body.hasClass("page--singleService") ) {
			//$body.toggleClass("page--isOverlay");
			if ( $header.hasClass("header--isOverlay") ) {
				$header.removeClass("header--isOverlay");
			} else {
				$header.addClass("header--isOverlay");
			}

		}

		//if ($sidebar.hasClass("sidebar--isMove")) {
		//	$body.on('scroll touchmove mousewheel', function(e) {
		//		e.preventDefault();
		//		e.stopPropagation();
		//		return false;
		//	});
		//	console.log("disable");
		//} else {
		//	$('body').off('scroll touchmove mousewheel');
		//	console.log("enable");
		//}

		//if ($main.length ) {
		//	$main.toggleClass("main--isOverlay");
		//}
		if ($tabs.length ) {
			if ( $tabs.hasClass("tab-panel__menu--isOverlay") ) {
				$tabs.removeClass("tab-panel__menu--isOverlay");
			} else {
				$tabs.addClass("tab-panel__menu--isOverlay");
			}

			if ( $panel.hasClass("vacancies--isOverlay") ) {
				$panel.removeClass("vacancies--isOverlay");
			} else {
				$panel.addClass("vacancies--isOverlay");
			}
		}
		//if ($services.length ) {
		//	$services.toggleClass("services--isOverlay");
		//}
		if ($trust.length ) {
			if ( $trust.hasClass("trust__cars--isOverlay") ) {
				$trust.removeClass("trust__cars--isOverlay");
			} else {
				$trust.addClass("trust__cars--isOverlay");
			}
		}
		if ($clients.length ) {
			$clientsForm.toggleClass("clients__form--isOverlay");
			$clietsList.toggleClass("clients__list--isOverlay");
		}
		if ($contacts.length ) {
			$contacts.toggleClass("contacts--isOverlay");
		}
	});

	if ($sidebar.hasClass("sidebar--isComponent")) {
		$btn.off("click");
	}

	if ($btn.hasClass("menu-btn--fixed")) {
		var $list = $(".header__list");
		$btn.on("click", function() {
			$services.removeClass("services--isOverlay");
			$contacts.removeClass("contacts--isOverlay");
			$list.toggleClass("header__list--isVisible");
		});
	}

}