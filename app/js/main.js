$(function () {

	page();

	menuBtn();

	sidebar();

	tabPanel();

	trust();
	
});



function menuBtn() {
	var $btn = $(".menu-btn");
	var $logo = $(".logo");
	var $sidebar = $(".sidebar");

	$btn.on("click", function () {
		$btn.toggleClass("menu-btn--isActive");

		$sidebar.toggleClass("sidebar--isMove");

		//$logo.toggleClass("logo--isTransparent");

		if ( !$logo.hasClass("logo--isTransparent") ) {
			$logo.addClass("logo--isTransparent");
		}

	});

}
function page() {
	$logo = $(".logo");
	$btn = $(".menu-btn");

	$about = $(".about");
	$services = $(".services");
	$trust = $(".trust");
	$sidebar = $(".sidebar");

	if ( $about.length ) {
		toggleScroll( $about);
	}

	if ( $services.length ) {
		toggleScroll($services);
	}

	if ( $trust.length ) {
		toggleScroll($trust);
	}


	function toggleScroll(item) {
		item.on("scroll", function() {
			console.log(item.scrollTop());
			if( item.scrollTop() > 0 ) {
				if (!$sidebar.hasClass("sidebar--isMove")) {
					$logo.addClass("logo--isTransparent");
				}
			} else {
				if (!$sidebar.hasClass("sidebar--isMove")) {
					$logo.removeClass("logo--isTransparent");
				}
			}
		});
	}

}
function sidebar() {
	$btn = $(".sidebar__btn");
	$form = $(".callback-form");

	$btn.on("click", function () {
		$form.toggleClass("callback-form--isActive");
	});
}
function tabPanel () {
	var $tabs = $(".tab-panel");
	var $menu = $(".tab-panel__menu");
	var $item = $(".tab-panel__item");

	$menu.on('click', 'li:not(.tab-panel__tab--active)', function() {
		$(this)
			.addClass('tab-panel__tab--active')
			.siblings().removeClass('tab-panel__tab--active')
			.closest($tabs).find($item).removeClass('tab-panel__item--active')
			.eq($(this).index()).addClass('tab-panel__item--active');
	});
}
function trust() {
	var $container = $(".thumbs__cars");
	var $thumbs = $(".trust__thumbs");
	var $thumb = $(".trust__thumbs-item");
	var $slide = $(".trust__slide");
	var $modals = $(".trust__modals");
	var $controls = $(".trust__controls");

	var $btn = $(".trust__btn");

	var $next = $(".trust__toggle--next");
	var $prev = $(".trust__toggle--prev");

	//activate modal slide
	$thumbs.on("click", "li", function() {
		$modals.addClass("trust__modals--isActive");
		setTimeout(function() {
			$controls.addClass("trust__controls--isActive");
		},200);
		$modals.find($slide.eq($(this).index())).addClass("trust__slide--isActive")
	});

	//close modal slide
	$btn.on("click", function() {
		$modals.addClass("trust__modals--isMove");
		$controls.removeClass("trust__controls--isActive");
		setTimeout(function() {
			$modals.removeClass("trust__modals--isMove");
			$modals.removeClass("trust__modals--isActive");
			$slide.removeClass("trust__slide--isActive");
		}, 200);
	});

	//slider
	$next.on("click", function() {
		var $current = $(".trust__slide--isActive");
		var $next = $current.next();
		var $slide = $(".trust__slide");

		if ($next.length === 0) {
			$next = $slide.first();
		}
		setTimeout(function () {
			$current.removeClass("trust__slide--isActive");
		}, 300);
		setTimeout(function () {
			$next.addClass("trust__slide--isActive");
		}, 300);
	});

	$prev.on("click", function() {
		var $current = $(".trust__slide--isActive");
		var $prev = $current.prev();
		var $slide = $(".trust__slide");

		if ($prev.length === 0) {
			$prev = $slide.last();
		}
		setTimeout(function () {
			$current.removeClass("trust__slide--isActive");
		}, 300);
		setTimeout(function () {
			$prev.addClass("trust__slide--isActive");
		}, 300);
	});


}

