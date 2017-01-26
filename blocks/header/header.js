function header() {

	if ($(".header--singleService").length) {
		var $link = $("#to_bundles");
		var $list = $(".header__list");
		var $btn = $(".menu-btn");

		$link.on("click", function (e) {
			e.preventDefault();
			var id = $(this).attr("data-link");
			var offset = $(id).offset().top;
			$("html, body").animate({"scrollTop": offset}, 500);
			
			$btn.removeClass("menu-btn--isActive");
			$list.removeClass("header__list--isVisible");
		});

		if ($(window).width() > 1100) {
			var $window = $(window);
			var $header = $(".header--singleService");
			var $tel = $(".header__link");

			$window.on("scroll", function () {
				var scroll = $window.scrollTop();

				if (scroll > 0) {
					$header.addClass("header--isScrolled");
					//$tel.addClass("header__link--isHidden");
				} else {
					$header.removeClass("header--isScrolled");
					//$tel.removeClass("header__link--isHidden");
				}
			});//end window
		}//end if width
	}//end if header
}