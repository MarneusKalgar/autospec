function sidebar() {
	var $link = $(".sidebar__link");
	var $wrapper = $(".page__frame-wrap");
	var $close = $(".page__close");

	$link.on("click", function () {
		if (!$wrapper.hasClass("page__frame-wrap--isActive")) {
			$wrapper.addClass("page__frame-wrap--isActive");
		}
	});

	$close.on("click", function () {
		$wrapper.removeClass("page__frame-wrap--isActive");
	});
}