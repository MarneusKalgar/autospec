(function($) {

	var methods = {

		init : function(params) {
			var options = $.extend({
				speed: 400
			}, params);

			var panel = options.panel;
			var panelActive = panel.attr("class") + "--isActive";
			var control = options.control;
			var controlActive = control.attr("class") + "--isActive";
			var content = options.content;
			var contentActive = content.attr("class") + "--isActive";

			panel.removeClass(panelActive);
			control.removeClass(controlActive);
			content.removeClass(contentActive);

			panel.on("click", function () {

				if ( $(this).hasClass(panelActive) ) {
					$(this).removeClass(panelActive);
					$(this).find(control).removeClass(controlActive);
					$(this).next().slideUp(options.speed);
					$(this).siblings().find(control).removeClass(controlActive);
				} else {
					$(this).addClass(panelActive).siblings().removeClass(panelActive);
					$(this).find(control).addClass(controlActive);
					$(this).siblings().find(control).removeClass(controlActive);

					if ( $(window).width() > 1440 ) {
						$(this).next().slideDown(options.speed).css({
							"display": "-webkit-box",
							"display": "-webkit-flex",
							"display": "-ms-flexbox",
							"display": "flex",
							"-webkit-box-orient": "horizontal",
							"-webkit-box-direction": "normal",
							"-webkit-flex-direction": "row",
							"-ms-flex-direction": "row",
							"flex-direction": "row",
							"-webkit-flex-wrap": "wrap",
							"-ms-flex-wrap": "wrap",
							"flex-wrap": "wrap"
						})
						  .siblings().not(panel).slideUp(options.speed);
					} else {

					}
					$(this).next().slideDown(options.speed)
						.siblings().not(panel).slideUp(options.speed);
				}
			});
		}
	};

	$.fn.accordionModule = function(method) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error('Метод "' + method + '" в плагине не найден');
		}

	};
})(jQuery);