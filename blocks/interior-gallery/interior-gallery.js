function gallery() {
	var $tour = $("#tour");
	var $frame = $("#frame");

	$tour.on("click", function () {
		$frame.css("pointer-events", "auto");
	});

	$tour.on("mouseleave", function () {
		$frame.css("pointer-events", "none");
	});
}