function sidebar() {
	var $btn = $(".sidebar__btn");
	var $form = $(".callback-form");

	$btn.on("click", function () {
		$form.toggleClass("callback-form--isActive");
	});
}