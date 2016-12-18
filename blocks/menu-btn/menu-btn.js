function menuBtn() {
	var $btn = $(".menu-btn");
	var $logo = $(".logo");
	var $sidebar = $(".sidebar");
	var $main = $(".main");

	$btn.on("click", function() {
		$btn.toggleClass("menu-btn--isActive");

		$sidebar.toggleClass("sidebar--isMove");

		if ($main.length ) {
			if ( $logo.hasClass("logo--isAnimated") ) {
				$logo.removeClass("logo--isAnimated");
			}
			$logo.toggleClass("logo--isTransparent");
		}
	});

}