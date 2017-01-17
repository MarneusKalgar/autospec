function hero() {
	$link = $(".hero__link");

	$link.on("click", function(e) {
		e.preventDefault();
		var id = $(this).attr("href");
		var offset = $(id).offset().top;
		$("html, body").animate({"scrollTop": offset}, 500);
	});
}