function sidebar() {
	var $link = $(".sidebar__link");
	var $wrapper = $(".page__frame-wrap");
	var $close = $(".page__close");
	var video = document.getElementById("autoSpecVideo");
	var $page = $(".page");

	if ( !$page.hasClass("page--singleService") ) {
		$link.on("click", function () {
			if (!$wrapper.hasClass("page__frame-wrap--isActive")) {
				$wrapper.addClass("page__frame-wrap--isActive");
			}
		});

		video.addEventListener("timeupdate", function () {
			if (this.currentTime > 0) {
				video.classList.add("page__frame--isPlayed");
				$close.addClass("page__close--isPlayed");
			}
		});

		$close.on("click", function () {
			$wrapper.removeClass("page__frame-wrap--isActive");
			video.pause();
		});
	}

}