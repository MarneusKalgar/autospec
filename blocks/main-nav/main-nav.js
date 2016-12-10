function mainNav() {
	$link = $(".main-nav__link--active");
	console.log($link);

	$link.on("click", function(e) {
		e.preventDefault();
	});
}