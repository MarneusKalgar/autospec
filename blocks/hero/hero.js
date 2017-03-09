function hero() {
	var $link = $(".hero__link");
	var $btn = $(".hero__btn");

	$link.on("click", function(e) {
		e.preventDefault();
		var id = $(this).attr("data-link");
		var offset = $(id).offset().top;
		$("html, body").animate({"scrollTop": offset}, 500);
	});

	$btn.on("click", function(e) {
		e.preventDefault();
		var id = $(this).attr("data-link");
		var offset = $(id).offset().top;
		$("html, body").animate({"scrollTop": offset}, 500);
	});
}