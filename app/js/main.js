$(function () {

	page();

	menuBtn();

	mainNav();

	sidebar();

	tabPanel();

	trust();
	
});



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

	var icon = 'img/contacts/marker.png';

	var marker = new google.maps.Marker({
		position: place,
		map: map,
		icon: icon
	});
}
function mainNav() {
	$link = $(".main-nav__link--active");
	console.log($link);

	$link.on("click", function(e) {
		e.preventDefault();
	});
}
function menuBtn() {
	var $btn = $(".menu-btn");
	var $logo = $(".logo");
	var $sidebar = $(".sidebar");

	$btn.on("click", function () {
		$btn.toggleClass("menu-btn--isActive");

		$sidebar.toggleClass("sidebar--isMove");

		if ( !$logo.hasClass("logo--isTransparent") ) {
			$logo.addClass("logo--isTransparent");
		}

	});

}
function page() {
	$logo = $(".logo");
	$btn = $(".menu-btn");
	$sidebar = $(".sidebar");

	$about = $(".about");
	$services = $(".services");
	$trust = $(".trust");
	$clients = $(".clients");
	$contacts = $(".contacts");


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

