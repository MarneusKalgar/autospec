function component() {
	var $form = $(".component__form");

	$form.validate({

		rules: {
			username: {
				required: true
			},
			usertel: {
				required: true
			},
			usernum: "required",
			usertext: "required"
		},

		messages: {
			username: {
				required: "Пожалуйста, введите имя"
			},
			usertel: "Пожалуйста, введите номер телефона",
			usernum: "Пожалуйста, введите VIN код",
			usertext: "Пожалуйста, введите сообщение"
		}

	});

	$("#usertel").mask("+999 (99) 999 - 99 - 99");
}