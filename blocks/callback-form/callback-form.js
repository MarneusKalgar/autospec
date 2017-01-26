function callbackForm() {
	var $btn = $(".sidebar__btn");
	var $form = $(".callback-form");
	var $wrapper = $(".page__form-wrap");
	var $close = $(".callback-form__close");

	$btn.on("click", function () {
		if (!$wrapper.hasClass("page__form-wrap--isActive")) {
			$wrapper.addClass("page__form-wrap--isActive");
		}

		if (!$form.hasClass("callback-form--isActive")) {
			$form.addClass("callback-form--isActive");
		}

	});

	$close.on("click", function () {
		$wrapper.removeClass("page__form-wrap--isActive");
		$form.removeClass("callback-form--isActive");
	});

	$form.submit(function(e) {

		var ref = $(this).find("[required]");

		$(ref).each(function(){
			if ( $(this).val() == '' )
			{
				alert("Required field should not be blank.");

				$(this).focus();

				e.preventDefault();
				return false;
			}
		});  return true;
	});
}