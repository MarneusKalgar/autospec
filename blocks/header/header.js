function header() {

	if ($(".header--singleService").length) {
		var $btn = $("#to_bundles");

		$btn.on("click", function(e) {
			e.preventDefault();
			var id = $(this).attr("href");
			var offset = $(id).offset().top;
			$("html, body").animate({"scrollTop": offset}, 500);
		});
	}

}