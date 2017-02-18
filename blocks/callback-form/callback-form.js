function callbackForm() {
	var $btn = $("#callBtn");
	var $form = $(".callback-form");
	var $wrapper = $(".page__form-wrap");
	var $close = $(".callback-form__close");

	var $tel = $("#callback-tel");

	if ($tel.length) {
		$tel.mask("+999 (99) 999 - 99 - 99");

		$form.validate({

			rules: {
				username: {
					required: true
				},
				usertel: {
					required: true
				}
			},

			messages: {
				username: {
					required: "Пожалуйста, введите имя"
				},
				usertel: "Пожалуйста, введите номер телефона"
			}

		});
	}



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

	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
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
	}


}