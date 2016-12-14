function mainNav() {
	var $link = $(".main-nav__link--active");

	$link.on("click", function(e) {
		e.preventDefault();
	});
}