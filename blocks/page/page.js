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