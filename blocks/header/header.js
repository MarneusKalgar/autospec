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

			$window.on("scroll", function () {
				var scroll = $window.scrollTop();

				if (scroll > 0) {
					$header.addClass("header--isScrolled");
				} else {
					$header.removeClass("header--isScrolled");
				}
			});//end window
		}//end if width
	}//end if header
}