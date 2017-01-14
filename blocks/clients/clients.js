function clients() {
	var $form = $("#clientsForm");

	$form.validate({
		rules: {
			usercompany: {
				required: true
			},
			usermessage: {
				required: true
			},
			username: {
				required: true
			},
			usermail: {
				required: true,
				email: true
			},
			userphone: {
				required: true
			}
		},
		messages: {
			usercompany: {
				required: "Пожалуйста, введите компанию"
			},
			username: {
				required: "Пожалуйста, введите ФИО"
			},
			usermail: {
				required: "Пожалуйста, введите адрес",
				email: "Адрес должен быть в формате example@email.com"
			},
			usermessage: {
				required: "Пожалуйста, введите данные"
			},
			userphone: {
				required: "Пожалуйста, введите номер"
			}
		}
	});

	$("#userphone").mask("+999 (99) 999 - 99 - 99");
}