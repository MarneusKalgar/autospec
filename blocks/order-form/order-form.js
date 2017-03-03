function orderForm() {
	var $form = $(".order-form");

	$form.each(function () {
		$(this).validate({

			rules: {
				username: {
					required: true
				},
				usermail: {
					required: true,
					email: true
				},
				usertel: {
					required: true
				},
				carbrand: "required",
				carmodel: "required",
				caryear: "required",
				vincode: "required"
			},

			messages: {
				username: {
					required: "Пожалуйста, введите имя"
				},
				usermail: {
					required: "Пожалуйста, введите адрес",
					email: "Формат адреса example@email.com"
				},
				usertel: "Пожалуйста, введите номер телефона",
				carbrand: "Пожалуйста, введите марку автомобиля",
				carmodel: "Пожалуйста, введите модель автомобиля",
				caryear: "Пожалуйста, введите год выпуска",
				vincode: "Пожалуйста, введите VIN код"
			}

		});
	});

	$(":input[type='tel']").mask("+999 (99) 999 - 99 - 99");
}