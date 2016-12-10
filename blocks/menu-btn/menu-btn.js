function menuBtn() {
	var $btn = $(".menu-btn");
	var $logo = $(".logo");
	var $sidebar = $(".sidebar");

	$btn.on("click", function () {
		$btn.toggleClass("menu-btn--isActive");

		$sidebar.toggleClass("sidebar--isMove");

		if ( !$logo.hasClass("logo--isTransparent") ) {
			$logo.addClass("logo--isTransparent");
		}

	});

}