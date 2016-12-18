function clients() {
	var $form = $("#clientsForm");
	console.log("form!");

	$form.validate({
		rules: {
			username: {
				required: true,
				minlength: 4
			},
			usermail: {
				required: true,
				email: true
			},
			usermessage: "required"
		},
		messages: {
			username: {
				required: "Пожалуйста, введите свое имя",
				minlength: "Длина вашего имени должна быть не менее 4 символов"
			},
			usermail: {
				required: "Пожалуйста, введите свой адрес",
				email: "Адрес должен быть в формате example@email.com"
			},
			usermessage: "Пожалуйста, введите сообщение"
		}
	});
}