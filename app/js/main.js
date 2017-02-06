$(function () {
	
	page();

	menuBtn();

	mainNav();

	//sidebar();

	callbackForm();

	tabPanel();

	trust();

	clients();

	header();
	
	hero();

	tabs();
	
	orderForm();

	whySlider();

	scrollToTop();

	component();
	
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
	var $btn = $(".sidebar__btn");
	var $form = $(".callback-form");
	var $wrapper = $(".page__form-wrap");
	var $close = $(".callback-form__close");

	var $tel = $("#callback-tel");

	if ($tel.length) {
		$tel.mask("+999 (99) 999 - 99 - 99");

		$form.validate({

			rules: {
				username: {
					required: true
				},
				usertel: {
					required: true
				}
			},

			messages: {
				username: {
					required: "Пожалуйста, введите имя"
				},
				usertel: "Пожалуйста, введите номер телефона"
			}

		});
	}



	$btn.on("click", function () {
		if (!$wrapper.hasClass("page__form-wrap--isActive")) {
			$wrapper.addClass("page__form-wrap--isActive");
		}

		if (!$form.hasClass("callback-form--isActive")) {
			$form.addClass("callback-form--isActive");
		}

	});

	$close.on("click", function () {
		$wrapper.removeClass("page__form-wrap--isActive");
		$form.removeClass("callback-form--isActive");
	});

	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		console.log('Its Safari');
		$form.submit(function(e) {

			var ref = $(this).find("[required]");

			$(ref).each(function(){
				if ( $(this).val() == '' )
				{
					alert("Required field should not be blank.");

					$(this).focus();

					e.preventDefault();
					return false;
				}
			});  return true;
		});
	}


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
function component() {
	var $form = $(".component__form");

	$form.validate({

		rules: {
			username: {
				required: true
			},
			usertel: {
				required: true
			},
			usernum: "required",
			usertext: "required"
		},

		messages: {
			username: {
				required: "Пожалуйста, введите имя"
			},
			usertel: "Пожалуйста, введите номер телефона",
			usernum: "Пожалуйста, введите VIN код",
			usertext: "Пожалуйста, введите сообщение"
		}

	});

	$("#usertel").mask("+999 (99) 999 - 99 - 99");
}
function contacts() {
	var place = { lat: 50.4709009, lng: 30.4996281 }

	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 17,
		center: place,
		disableDefaultUI: true,
	});

	var icon = 'img/contacts/marker.svg';

	var marker = new google.maps.Marker({
		position: place,
		map: map,
		icon: icon
	});

	/*styles:[
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
	]*/
}
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
function hero() {
	var $link = $(".hero__link");

	$link.on("click", function(e) {
		e.preventDefault();
		var id = $(this).attr("data-link");
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
function menuBtn() {
	var $btn = $(".menu-btn");
	var $logo = $(".logo__img");
	var $sidebar = $(".sidebar");

	var $body = $('body');

	var $main = $(".main");
	var $tabs = $(".tab-panel__menu");
	var $services = $(".services");
	var $trust = $(".trust__cars");
	var $clients = $(".clients");
	var $contacts = $(".contacts");

	$btn.on("click", function() {

		$btn.toggleClass("menu-btn--isActive");

		$sidebar.toggleClass("sidebar--isMove");

		if ( !$body.hasClass("page--singleService") ) {
			$body.toggleClass("page--isOverlay");
		}

		if ($sidebar.hasClass("sidebar--isMove")) {
			$body.on('scroll touchmove mousewheel', function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
		} else {
			$('body').off('scroll touchmove mousewheel');
		}
		$logo.toggleClass("logo__img--isTransparent");

		//if ($main.length ) {
		//	$main.toggleClass("main--isOverlay");
		//}
		if ($tabs.length ) {
			$tabs.toggleClass("tab-panel__menu--isOverlay");
		}
		//if ($services.length ) {
		//	$services.toggleClass("services--isOverlay");
		//}
		if ($trust.length ) {
			$trust.toggleClass("trust__cars--isOverlay");
		}
		//if ($clients.length ) {
		//	$clients.toggleClass("clients--isOverlay");
		//}
		//if ($contacts.length ) {
		//	$contacts.toggleClass("contacts--isOverlay");
		//}
	});

	if ($sidebar.hasClass("sidebar--isComponent")) {
		$btn.off("click");
	}

	if ($btn.hasClass("menu-btn--fixed")) {
		var $list = $(".header__list");
		$btn.on("click", function() {
			$logo.removeClass("logo__img--isTransparent");
			$services.removeClass("services--isOverlay");
			$contacts.removeClass("contacts--isOverlay");
			$list.toggleClass("header__list--isVisible");
		});
	}

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
				required: "Пожалуйста, введите имя"
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
	var $sidebar = $(".sidebar");

	if ( $sidebar.hasClass("sidebar--isMove") ) {
		//$('body').on('scroll touchmove mousewheel', function(e){
		//	e.preventDefault();
		//	e.stopPropagation();
		//	return false;
		//})
		
		//$('body').css({"width": "100vw", "height": "100vh", "overflow": "hidden"});
	}
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
	//$(window).on('resize', function () {
	//	var $images = $(".tabs img[src]");
	//	var width = $(window).width();
//
	//	if ( width <= 479) {
	//		$images.each(function (index) {
	//			$(this).attr("data-src", $(this).attr("src"));
	//			$(this).removeAttr("src");
	//		});
	//	} else {
	//		$images.each(function (index) {
	//			$(this).attr("src", $(this).attr("data-src"));
	//			$(this).removeAttr("data-src");
	//		});
	//	}
//
	//});

	//function isElementInViewport (el) {
	//	var rect = el.getBoundingClientRect();
	//	return (
	//		rect.top >= -1000 &&
	//		rect.left >= 0 &&
	//		rect.bottom <= $(window).height() + 1000 &&
	//		rect.right <= $(window).width()
	//	);
	//}

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