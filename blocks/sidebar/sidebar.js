function sidebar() {
	var $link = $(".sidebar__link");
	var $wrapper = $(".page__frame-wrap");
	var $close = $(".page__close");
	var video = document.getElementById("autoSpecVideo");

	var body = document.querySelector("body");
	var main = document.querySelector(".main");
	var tab = document.querySelector(".tab-panel__item--tour");
	var tabitem = document.querySelector(".tab-panel__tab");

	$link.on("click", function () {
		if (!$wrapper.hasClass("page__frame-wrap--isActive")) {
			$wrapper.addClass("page__frame-wrap--isActive");
		}
	});

	if ( body.contains(main) ) {
		video.addEventListener("timeupdate", function () {
			if (this.currentTime > 0) {
				video.classList.add("page__frame--isPlayed");
				$close.addClass("page__close--isPlayed");
			}
		});
	}
	
	$close.on("click", function () {
		$wrapper.removeClass("page__frame-wrap--isActive");
		video.pause();
	});
}