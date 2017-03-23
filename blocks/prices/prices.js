function prices() {
	var $btnContainer = $(".prices__cars");
	var $carBtn = $(".prices__cars-btn");
	var $modals = $(".prices__modals");
	var $modalItem = $(".prices__modal");
	var $priceBtn = $(".prices__modal-btn");

	var $modalContainer = $(".enrol-modal");
	var $enrolWrap = $(".enrol-modal__wrap");
	var $enrolModal = $(".enrol-modal__item");
	var $close = $(".enrol-modal__close");

	var $body = $("body");

	//var $pricesPos = $(".prices").position().top;
	var scroll;
	var $top = $body.offset().top;
	var $left = $body.offset().left;

	console.log($enrolModal);

	$carBtn.on("click", function() {
		$(this).addClass("prices__cars-btn--isActive");
		$modals.find($(this).siblings().removeClass("prices__cars-btn--isActive"));
		$modals.find($modalItem.eq($(this).index())).siblings().removeClass("prices__modal--isActive").slideUp(400);
		$modals.find($modalItem.eq($(this).index())).toggleClass("prices__modal--isActive");
		$modals.find($modalItem.eq($(this).index())).slideToggle(400);
	});

	$priceBtn.on("click", function() {
		//var self = $(this);
		var index = $(this).attr("data-index") - 1;
		console.log(index);

		$(this).closest($body).find($modalContainer).find($enrolWrap).find($enrolModal.eq(index)).addClass("enrol-modal__item--isActive");


		//$price.addClass("prices__modal-price--isActive");
		setTimeout(function() {
			$body.addClass("page--isModal");
		}, 400);
		scroll = $(window).scrollTop();
	});

	$close.on("click", function() {
		$enrolModal.removeClass("enrol-modal__item--isActive");
		$body.removeClass("page--isModal");
		setTimeout(function() {
			$(window).scrollTop(scroll);
		}, 100);

	})
}