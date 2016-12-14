function page() {
	var $logo = $(".logo");
	var $btn = $(".menu-btn");
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