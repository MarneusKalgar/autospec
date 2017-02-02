function bundles(){var e=$(".bundles__table"),s=e.clone().insertBefore(e).addClass("fixed-column");s.find("th:not(:first-child),td:not(:first-child)").remove(),s.find("tr").each(function(s,t){$(this).height(e.find("tr:eq("+s+")").height())})}function callbackForm(){var e=$(".sidebar__btn"),s=$(".callback-form"),t=$(".page__form-wrap"),i=$(".callback-form__close"),a=$("#callback-tel");a.length&&(a.mask("+999 (99) 999 - 99 - 99"),s.validate({rules:{username:{required:!0},usertel:{required:!0}},messages:{username:{required:"Пожалуйста, введите имя"},usertel:"Пожалуйста, введите номер телефона"}})),e.on("click",function(){t.hasClass("page__form-wrap--isActive")||t.addClass("page__form-wrap--isActive"),s.hasClass("callback-form--isActive")||s.addClass("callback-form--isActive")}),i.on("click",function(){t.removeClass("page__form-wrap--isActive"),s.removeClass("callback-form--isActive")}),navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1&&(console.log("Its Safari"),s.submit(function(e){var s=$(this).find("[required]");return $(s).each(function(){if(""==$(this).val())return alert("Required field should not be blank."),$(this).focus(),e.preventDefault(),!1}),!0}))}function clients(){var e=$("#clientsForm");e.validate({rules:{usercompany:{required:!0},usermessage:{required:!0},username:{required:!0},usermail:{required:!0,email:!0},userphone:{required:!0}},messages:{usercompany:{required:"Пожалуйста, введите компанию"},username:{required:"Пожалуйста, введите ФИО"},usermail:{required:"Пожалуйста, введите адрес",email:"Адрес должен быть в формате example@email.com"},usermessage:{required:"Пожалуйста, введите данные"},userphone:{required:"Пожалуйста, введите номер"}}}),$("#userphone").mask("+999 (99) 999 - 99 - 99")}function component(){var e=$(".component__form");e.validate({rules:{username:{required:!0},usertel:{required:!0},usernum:"required",usertext:"required"},messages:{username:{required:"Пожалуйста, введите имя"},usertel:"Пожалуйста, введите номер телефона",usernum:"Пожалуйста, введите VIN код",usertext:"Пожалуйста, введите сообщение"}}),$("#usertel").mask("+999 (99) 999 - 99 - 99")}function header(){if($(".header--singleService").length){var e=$("#to_bundles"),s=$(".header__list"),t=$(".menu-btn");if(e.on("click",function(e){e.preventDefault();var i=$(this).attr("data-link"),a=$(i).offset().top;$("html, body").animate({scrollTop:a},500),t.removeClass("menu-btn--isActive"),s.removeClass("header__list--isVisible")}),$(window).width()>1100){var i=$(window),a=$(".header--singleService");i.on("scroll",function(){var e=i.scrollTop();e>0?a.addClass("header--isScrolled"):a.removeClass("header--isScrolled")})}}}function hero(){var e=$(".hero__link");e.on("click",function(e){e.preventDefault();var s=$(this).attr("data-link"),t=$(s).offset().top;$("html, body").animate({scrollTop:t},500)})}function mainNav(){var e=$(".main-nav__link--active");e.on("click",function(e){e.preventDefault()})}function menuBtn(){var e=$(".menu-btn"),s=$(".logo__img"),t=$(".sidebar"),i=($(".main"),$(".tab-panel__menu")),a=$(".services"),r=$(".trust__cars"),n=($(".clients"),$(".contacts"));if(e.on("click",function(){e.toggleClass("menu-btn--isActive"),t.toggleClass("sidebar--isMove"),t.hasClass("sidebar--isMove")?$("body").on("scroll touchmove mousewheel",function(e){return e.preventDefault(),e.stopPropagation(),!1}):$("body").off("scroll touchmove mousewheel"),s.toggleClass("logo__img--isTransparent"),i.length&&i.toggleClass("tab-panel__menu--isOverlay"),r.length&&r.toggleClass("trust__cars--isOverlay")}),t.hasClass("sidebar--isComponent")&&e.off("click"),e.hasClass("menu-btn--fixed")){var l=$(".header__list");e.on("click",function(){s.removeClass("logo__img--isTransparent"),a.removeClass("services--isOverlay"),n.removeClass("contacts--isOverlay"),l.toggleClass("header__list--isVisible")})}}function orderForm(){var e=$("#orderForm");e.validate({rules:{username:{required:!0},usermail:{required:!0,email:!0},usertel:{required:!0},carbrand:"required",carmodel:"required",caryear:"required"},messages:{username:{required:"Пожалуйста, введите имя"},usermail:{required:"Пожалуйста, введите адрес",email:"Формат адреса example@email.com"},usertel:"Пожалуйста, введите номер телефона",carbrand:"Пожалуйста, введите марку автомобиля",carmodel:"Пожалуйста, введите модель автомобиля",caryear:"Пожалуйста, введите год выпуска"}}),$("#usertel").mask("+999 (99) 999 - 99 - 99")}function page(){function e(e){e.on("scroll",function(){console.log(e.scrollTop()),e.scrollTop()>0?t.hasClass("sidebar--isMove")||s.addClass("logo--isFaded"):t.hasClass("sidebar--isMove")||s.removeClass("logo--isFaded")})}var s=$(".logo"),t=$(".sidebar"),i=$(".about"),a=$(".services"),r=$(".trust"),n=$(".clients"),l=$(".contacts");i.length&&e(i),a.length&&e(a),r.length&&e(r),n.length&&e(n),l.length&&e(l)}function sidebar(){var e=$(".sidebar");e.hasClass("sidebar--isMove")}function tabPanel(){var e=$(".tab-panel"),s=$(".tab-panel__menu"),t=$(".tab-panel__item");s.on("click","li:not(.tab-panel__tab--active)",function(){var s=this;$(s).addClass("tab-panel__tab--active").siblings().removeClass("tab-panel__tab--active").closest(e).find(t).removeClass("tab-panel__item--active").eq($(s).index()).addClass("tab-panel__item--active"),setTimeout(function(){$(s).closest(e).find(t).removeClass("tab-panel__item--animate").eq($(s).index()).addClass("tab-panel__item--animate")},100)})}function tabs(){var e=$(".tabs"),s=$(".tabs__menu"),t=$(".tabs__item");s.on("click","li:not(.tabs__tab--active)",function(){var s=this;setTimeout(function(){$(s).addClass("tabs__tab--active").siblings().removeClass("tabs__tab--active").closest(e).find(t).removeClass("tabs__item--active").eq($(s).index()).addClass("tabs__item--active")},300)});var i=$(".tabs__service");i.on("click",function(){$(this).toggleClass("tabs__service--isSelected")})}function trust(){var e=($(".thumbs__cars"),$(".trust__thumbs")),s=($(".trust__thumbs-item"),$(".trust__slide")),t=$(".trust__modals"),i=$(".trust__controls"),a=$(".trust__btn"),r=$(".trust__toggle--next"),n=$(".trust__toggle--prev");e.on("click","li",function(){t.addClass("trust__modals--isActive"),setTimeout(function(){i.addClass("trust__controls--isActive"),a.addClass("trust__btn--isActive")},200),t.find(s.eq($(this).index())).addClass("trust__slide--isActive")}),a.on("click",function(){t.addClass("trust__modals--isMove"),i.removeClass("trust__controls--isActive"),a.removeClass("trust__btn--isActive"),setTimeout(function(){t.removeClass("trust__modals--isMove"),t.removeClass("trust__modals--isActive"),s.removeClass("trust__slide--isActive")},200)}),r.on("click",function(){var e=$(".trust__slide--isActive"),s=e.next(),t=$(".trust__slide");0===s.length&&(s=t.first()),setTimeout(function(){e.removeClass("trust__slide--isActive")},300),setTimeout(function(){s.addClass("trust__slide--isActive")},300)}),n.on("click",function(){var e=$(".trust__slide--isActive"),s=e.prev(),t=$(".trust__slide");0===s.length&&(s=t.last()),setTimeout(function(){e.removeClass("trust__slide--isActive")},300),setTimeout(function(){s.addClass("trust__slide--isActive")},300)})}function whySlider(){var e,s=$(".why__slider"),t=$(".why__slider-wrap"),i=$(".why__list"),a=$(".why__control--next"),r=$(".why__control--prev");$(".why__slide");e=$(window).width()>=500?22:18.5,console.log(e),a.on("click",function(){s.find(t).animate({left:"-"+e+"em"},500,function(){s.find(i).find(".why__slide").eq(0).clone().appendTo(s.find(t).find(i)),s.find(i).find(".why__slide").eq(0).remove(),s.find(t).css({left:0})})}),r.on("click",function(){s.find(i).find(".why__slide").eq(-1).clone().prependTo(s.find(t).find(i)),s.find(t).css({left:"-"+e+"em"}),s.find(i).find(".why__slide").eq(-1).remove(),s.find(t).animate({left:0},500)})}function scrollToTop(){var e=$(".scroll-to-top");e.on("click",function(e){e.preventDefault();var s=$(this).attr("href"),t=$(s).offset().top;$("html, body").animate({scrollTop:t},500)})}function contacts(){var e={lat:50.4709009,lng:30.4996281},s=new google.maps.Map(document.getElementById("map"),{zoom:17,center:e,disableDefaultUI:!0}),t="img/contacts/marker.svg";new google.maps.Marker({position:e,map:s,icon:t})}$(function(){page(),menuBtn(),mainNav(),callbackForm(),tabPanel(),trust(),clients(),header(),hero(),tabs(),orderForm(),whySlider(),scrollToTop(),component()});