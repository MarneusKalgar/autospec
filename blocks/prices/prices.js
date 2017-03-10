function prices() {
	var $btnContainer = $(".prices__cars");
	var $carBtn = $(".prices__cars-btn");
	var $modals = $(".prices__modals");
	var $modalItem = $(".prices__modal");
	
	var $priceBtn = $(".prices__modal-btn");
	var $price = $(".prices__modal-price");
	var $close = $(".prices__close");
	var $container = $(".prices__modal");
	var $body = $("body");

	//var $pricesPos = $(".prices").position().top;
	var scroll;
	var $top = $body.offset().top;
	var $left = $body.offset().left;

	//console.log($pricesPos);

	$carBtn.on("click", function() {
			$(this).addClass("prices__cars-btn--isActive");
			$modals.find($(this).siblings().removeClass("prices__cars-btn--isActive"));
			$modals.find($modalItem.eq($(this).index())).siblings().removeClass("prices__modal--isActive").slideUp(400);
			$modals.find($modalItem.eq($(this).index())).toggleClass("prices__modal--isActive");
			$modals.find($modalItem.eq($(this).index())).slideToggle(400);
	});

	$priceBtn.on("click", function() {

		$(this).closest($container).find($price).addClass("prices__modal-price--isActive")
		  .css({top:$top, left: $left});
		console.log($price.offset());
		console.log($body.offset().top);

		//$price.addClass("prices__modal-price--isActive");
		setTimeout(function() {
			$body.addClass("page--isModal");
		}, 400);
		scroll = $(window).scrollTop();
	});

	$close.on("click", function() {
		$price.removeClass("prices__modal-price--isActive");
		$body.removeClass("page--isModal");
		setTimeout(function() {
			$(window).scrollTop(scroll);
		}, 100);

	})
}