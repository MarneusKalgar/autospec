function sidebar() {
	$btn = $(".sidebar__btn");
	$form = $(".callback-form");

	$btn.on("click", function () {
		$form.toggleClass("callback-form--isActive");
	});
}