function menuBtn() {
	var $btn = $(".menu-btn");
	var $logo = $(".logo__img");
	var $sidebar = $(".sidebar");

	var $main = $(".main");
	var $about = $(".about");
	var $services = $(".services");
	var $trust = $(".trust");
	var $clients = $(".clients");
	var $contacts = $(".contacts");

	$btn.on("click", function() {
		$btn.toggleClass("menu-btn--isActive");

		$sidebar.toggleClass("sidebar--isMove");

		$logo.toggleClass("logo__img--isTransparent");

		if ($main.length ) {
			$main.toggleClass("main--isOverlay");
		}
		if ($about.length ) {
			$about.toggleClass("about--isOverlay");
		}
		if ($services.length ) {
			$services.toggleClass("services--isOverlay");
		}
		if ($trust.length ) {
			$trust.toggleClass("trust--isOverlay");
		}
		if ($clients.length ) {
			$clients.toggleClass("clients--isOverlay");
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
			$logo.removeClass("logo__img--isTransparent");
			$services.removeClass("services--isOverlay");
			$contacts.removeClass("contacts--isOverlay");
			$list.toggleClass("header__list--isVisible");
		});
	}

}