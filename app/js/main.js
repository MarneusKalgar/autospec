$(function () {
	
	page();

	menuBtn();

	mainNav();

	sidebar();

	callbackForm();

	tabPanel();

	trust();

	clients();

	header();
	
	hero();

	//bundles();

	tabs();
	
	orderForm();

	whySlider();

	scrollToTop();
	
});



function bundles() {
	var $table = $(".bundles__table");
	var $fixedColumn = $table.clone().insertBefore($table).addClass("fixed-column");

	$fixedColumn.find("th:not(:first-child),td:not(:first-child)").remove();

	$fixedColumn.find("tr").each(function(i, elem) {
		$(this).height($table.find("tr:eq(" + i + ")").height());
	});
}
function callbackForm() {
	//var $input = $("#callback-tel");

	$("#callback-tel").mask("+999 (99) 999 - 99 - 99");
}
function clients() {
	var $form = $("#clientsForm");

	$form.validate({
		rules: {
			usercompany: {
				required: true
			},
			usermessage: {
				required: true
			},
			username: {
				required: true
			},
			usermail: {
				required: true,
				email: true
			},
			userphone: {
				required: true
			}
		},
		messages: {
			usercompany: {
				required: "Пожалуйста, введите компанию"
			},
			username: {
				required: "Пожалуйста, введите ФИО"
			},
			usermail: {
				required: "Пожалуйста, введите адрес",
				email: "Адрес должен быть в формате example@email.com"
			},
			usermessage: {
				required: "Пожалуйста, введите данные"
			},
			userphone: {
				required: "Пожалуйста, введите номер"
			}
		}
	});

	$("#userphone").mask("+999 (99) 999 - 99 - 99");
}
function contacts() {
	var place = { lat: 50.457992, lng: 30.605138 }

	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 17,
		center: place,
		disableDefaultUI: true,
		styles:[
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#bdbdbd"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dadada"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
					}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c9c9c9"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			}
		]
	});

	var icon = 'img/contacts/marker.svg';

	var marker = new google.maps.Marker({
		position: place,
		map: map,
		icon: icon
	});
}
function header() {

	if ($(".header--singleService").length) {
		var $btn = $("#to_bundles");

		$btn.on("click", function() {
			var id = $(this).attr("href");
			var offset = $(id).offset().top;
			$("html, body").animate({"scrollTop": offset}, 500);
		});
	}

}
function hero() {
	$link = $(".hero__link");

	$link.on("click", function() {
		var id = $(this).attr("href");
		var offset = $(id).offset().top;
		$("html, body").animate({"scrollTop": offset}, 500);
	});
}
function mainNav() {
	var $link = $(".main-nav__link--active");

	$link.on("click", function(e) {
		e.preventDefault();
	});
}
function menuBtn() {
	var $btn = $(".menu-btn");
	var $logo = $(".logo__img");
	var $sidebar = $(".sidebar");

	var $main = $(".main");
	var $about = $(".about");
	var $services = $(".services");
	var $trust = $(".trust");
	var $clients = $(".clients");
	var $contacts = $(".contacts");

	$btn.on("click", function() {
		$btn.toggleClass("menu-btn--isActive");

		$sidebar.toggleClass("sidebar--isMove");
		$logo.toggleClass("logo__img--isTransparent");

		if ($main.length ) {
			$main.toggleClass("main--isOverlay");
		}
		if ($about.length ) {
			$about.toggleClass("about--isOverlay");
		}
		if ($services.length ) {
			$services.toggleClass("services--isOverlay");
		}
		if ($trust.length ) {
			$trust.toggleClass("trust--isOverlay");
		}
		if ($clients.length ) {
			$clients.toggleClass("clients--isOverlay");
		}
		if ($contacts.length ) {
			$contacts.toggleClass("contacts--isOverlay");
		}
	});

}
function orderForm() {
	var $form = $("#orderForm");

	$form.validate({

		rules: {
			username: {
				required: true
			},
			usermail: {
				required: true,
				email: true
			},
			usertel: {
				required: true
			},
			carbrand: "required",
			carmodel: "required",
			caryear: "required"
		},

		messages: {
			username: {
				required: "Пожалуйста, введитеимя"
			},
			usermail: {
				required: "Пожалуйста, введите адрес",
				email: "Формат адреса example@email.com"
			},
			usertel: "Пожалуйста, введите номер телефона",
			carbrand: "Пожалуйста, введите марку автомобиля",
			carmodel: "Пожалуйста, введите модель автомобиля",
			caryear: "Пожалуйста, введите год выпуска"
		}

	});

	$("#usertel").mask("+999 (99) 999 - 99 - 99");
}
function page() {
	var $logo = $(".logo");
	var $sidebar = $(".sidebar");
	
	var $about = $(".about");
	var $services = $(".services");
	var $trust = $(".trust");
	var $clients = $(".clients");
	var $contacts = $(".contacts");


	if ( $about.length ) {
		toggleScroll( $about);
	}

	if ( $services.length ) {
		toggleScroll($services);
	}

	if ( $trust.length ) {
		toggleScroll($trust);
	}

	if ( $clients.length ) {
		toggleScroll($clients);
	}

	if ( $contacts.length ) {
		toggleScroll($contacts);
	}


	function toggleScroll(item) {
		item.on("scroll", function() {
			console.log(item.scrollTop());
			if( item.scrollTop() > 0 ) {
				if (!$sidebar.hasClass("sidebar--isMove")) {
					$logo.addClass("logo--isFaded");
				}
			} else {
				if (!$sidebar.hasClass("sidebar--isMove")) {
					$logo.removeClass("logo--isFaded");
				}
			}
		});
	}
	
}
/*******************************************/
/* 							scroll to top
/********************************************/
function scrollToTop() {

	var $scrollBtn = $('.scroll-to-top');

	$scrollBtn.on("click", function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var offset = $(id).offset().top;
		$('html, body').animate({'scrollTop': offset}, 500)
	});

}
	
function sidebar() {
	var $btn = $(".sidebar__btn");
	var $form = $(".callback-form");

	$btn.on("click", function () {
		$form.toggleClass("callback-form--isActive");
	});
}
function tabPanel () {
	var $tabs = $(".tab-panel");
	var $menu = $(".tab-panel__menu");
	var $item = $(".tab-panel__item");

	$menu.on('click', 'li:not(.tab-panel__tab--active)', function() {
		var self = this;
		//setTimeout(function() {
			$(self)
				.addClass('tab-panel__tab--active')
				.siblings().removeClass('tab-panel__tab--active')
				.closest($tabs).find($item).removeClass('tab-panel__item--active')
				.eq($(self).index()).addClass('tab-panel__item--active');
		//}, 100);
		setTimeout(function() {
			$(self)
				.closest($tabs).find($item).removeClass('tab-panel__item--animate')
				.eq($(self).index()).addClass('tab-panel__item--animate');
		}, 100);
	});
}
function tabs () {
	var $tabs = $(".tabs");
	var $menu = $(".tabs__menu");
	var $item = $(".tabs__item");

	//tabs
	$menu.on('click', 'li:not(.tabs__tab--active)', function() {
		var self = this;
		setTimeout(function() {
			$(self)
				.addClass('tabs__tab--active')
				.siblings().removeClass('tabs__tab--active')
				.closest($tabs).find($item).removeClass('tabs__item--active')
				.eq($(self).index()).addClass('tabs__item--active');
			//}, 100);
			//setTimeout(function() {
				//$(self)
				//	.closest($tabs).find($item).removeClass('tabs__item--animate')
				//	.eq($(self).index()).addClass('tabs__item--animate');
		}, 300);
	});

	var $service = $(".tabs__service");

	$service.on("click", function () {
		$(this).toggleClass("tabs__service--isSelected");
	});

	//lazy load images
	/*
	if ($(window).width() > 479) {
		$(window).on('DOMContentLoaded load resize scroll', function () {
			var images = $(".tabs img[data-src]");
			// load images that have entered the viewport
			$(images).each(function (index) {
				if (isElementInViewport(this)) {
					$(this).attr("src", $(this).attr("data-src"));
					$(this).removeAttr("data-src");
				}
			});
			// if all the images are loaded, stop calling the handler
			if (images.length == 0) {
				$(window).off('DOMContentLoaded load resize scroll')
			}
		});
	}

	function isElementInViewport (el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= -1000 &&
			rect.left >= 0 &&
			rect.bottom <= $(window).height() + 1000 &&
			rect.right <= $(window).width()
		);
	}*/

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
			$btn.addClass("trust__btn--isActive");
		},200);
		$modals.find($slide.eq($(this).index())).addClass("trust__slide--isActive")
	});

	//close modal slide
	$btn.on("click", function() {
		$modals.addClass("trust__modals--isMove");
		$controls.removeClass("trust__controls--isActive");
		$btn.removeClass("trust__btn--isActive");
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


function whySlider() {

	var $slider = $(".why__slider");
	var $wrapper = $(".why__slider-wrap");
	var $list = $(".why__list")
	var $next = $(".why__control--next");
	var $prev = $(".why__control--prev");
	var $slide = $(".why__slide");

	var slideWidth;

	if ($(window).width() >= 500) {
		slideWidth = 22;
	} else {
		slideWidth = 18.5;
	}

	console.log(slideWidth);

	$next.on("click", function() {
		$slider.find($wrapper).animate({'left': '-' + slideWidth + 'em' }, 500, function() {
			$slider.find($list).find(".why__slide").eq(0).clone().appendTo($slider.find($wrapper).find($list));
			$slider.find($list).find(".why__slide").eq(0).remove();
			$slider.find($wrapper).css({'left': 0});
		});
	});

	$prev.on("click", function() {
		$slider.find($list).find(".why__slide").eq(-1).clone().prependTo($slider.find($wrapper).find($list));
		$slider.find($wrapper).css({'left': '-' + slideWidth + 'em' });
		$slider.find($list).find(".why__slide").eq(-1).remove();
		$slider.find($wrapper).animate({ 'left': 0 }, 500);
	});
}