function callbackForm() {
	var $btn = $("#callBtn");
	var $form = $("#callForm");
	var $validateForm = $(".callback-form, .action-form");
	var $wrapper = $(".callus__form-wrap");
	var $close = $("#actionClose");

	var $tel = $("");

	if ($tel.length) {
		$(":input[type='tel']").mask("+999 (99) 999 - 99 - 99");
	}

	$validateForm.each(function () {
		$(this).validate({
			rules: {
				"callback-name": {
					required: true
				},
				"callback-tel": {
					required: true
				}
			},
			messages: {
				"callback-name": {
					required: "Пожалуйста, введите имя"
				},
				"callback-tel": "Пожалуйста, введите номер телефона",
				usermail: {
					required: "Пожалуйста, введите email",
					email: "Формат почты example@email.com"
				}
			}
		});
	});


	$btn.on("click", function () {
		if (!$wrapper.hasClass("callus__form-wrap--isActive")) {
			$wrapper.addClass("callus__form-wrap--isActive");
		}

		if (!$form.hasClass("action-form--isActive")) {
			$form.addClass("action-form--isActive");
		}

	});

	$close.on("click", function () {
		$wrapper.removeClass("callus__form-wrap--isActive");
		$form.removeClass("callback-form--isActive");
	});

	/*if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
	 console.log('Its Safari');
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
	 }*/
}