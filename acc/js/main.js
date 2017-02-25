function bundles(){var e=$(".bundles__table"),s=e.clone().insertBefore(e).addClass("fixed-column");s.find("th:not(:first-child),td:not(:first-child)").remove(),s.find("tr").each(function(s,a){$(this).height(e.find("tr:eq("+s+")").height())})}function callbackForm(){var e=$("#callBtn"),s=$(".callback-form"),a=$(".page__form-wrap"),t=$(".callback-form__close"),i=$("#callback-tel");i.length&&(i.mask("+999 (99) 999 - 99 - 99"),s.validate({rules:{username:{required:!0},usertel:{required:!0}},messages:{username:{required:"Пожалуйста, введите имя"},usertel:"Пожалуйста, введите номер телефона"}})),e.on("click",function(){a.hasClass("page__form-wrap--isActive")||a.addClass("page__form-wrap--isActive"),s.hasClass("callback-form--isActive")||s.addClass("callback-form--isActive")}),t.on("click",function(){a.removeClass("page__form-wrap--isActive"),s.removeClass("callback-form--isActive")}),navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1&&(console.log("Its Safari"),s.submit(function(e){var s=$(this).find("[required]");return $(s).each(function(){if(""==$(this).val())return alert("Required field should not be blank."),$(this).focus(),e.preventDefault(),!1}),!0}))}function clients(){var e=$("#clientsForm");e.validate({rules:{usercompany:{required:!0},usermessage:{required:!0},username:{required:!0},usermail:{required:!0,email:!0},userphone:{required:!0}},messages:{usercompany:{required:"Пожалуйста, введите компанию"},username:{required:"Пожалуйста, введите ФИО"},usermail:{required:"Пожалуйста, введите адрес",email:"Адрес должен быть в формате example@email.com"},usermessage:{required:"Пожалуйста, введите данные"},userphone:{required:"Пожалуйста, введите номер"}}}),$("#userphone").mask("+999 (99) 999 - 99 - 99")}function component(){var e=$(".component__form");e.validate({rules:{username:{required:!0},usertel:{required:!0},usernum:"required",usertext:"required"},messages:{username:{required:"Пожалуйста, введите имя"},usertel:"Пожалуйста, введите номер телефона",usernum:"Пожалуйста, введите VIN код",usertext:"Пожалуйста, введите сообщение"}}),$("#usertel").mask("+999 (99) 999 - 99 - 99")}function contacts(){var e={lat:50.47154,lng:30.500401},s=new google.maps.Map(document.getElementById("map"),{zoom:16,center:e,disableDefaultUI:!0}),a="img/contacts/marker.svg";new google.maps.Marker({position:e,map:s,icon:a})}function header(){if($(".header--singleService").length){var e=$("#to_bundles"),s=$(".header__list"),a=$(".menu-btn");if(e.on("click",function(e){e.preventDefault();var t=$(this).attr("data-link"),i=$(t).offset().top;$("html, body").animate({scrollTop:i},500),a.removeClass("menu-btn--isActive"),s.removeClass("header__list--isVisible")}),$(window).width()>1100){var t=$(window),i=$(".header--singleService");t.on("scroll",function(){var e=t.scrollTop();e>0?i.addClass("header--isScrolled"):i.removeClass("header--isScrolled")})}}}function hero(){var e=$(".hero__link");e.on("click",function(e){e.preventDefault();var s=$(this).attr("data-link"),a=$(s).offset().top;$("html, body").animate({scrollTop:a},500)})}function mainNav(){var e=$(".main-nav__link--active");e.on("click",function(e){e.preventDefault()})}function menuBtn(){var e=$(".menu-btn"),s=$(".header"),a=$(".sidebar"),t=$("body"),i=$(".main"),r=$(".tab-panel__menu"),n=$(".vacancies"),l=$(".services"),o=$(".trust__cars"),c=$(".clients"),d=$(".clients__form"),u=$(".clients__list"),v=$(".contacts");if(i.length||e.removeClass("menu-btn--isAnimated").css({opacity:"1"}),window.addEventListener("resize",function(){s.hasClass("header--isOverlay")&&window.outerWidth>768&&(console.log("works!"),s.removeClass("header--isOverlay"),a.removeClass("sidebar--isMove"),e.removeClass("menu-btn--isActive"),r.length&&(r.removeClass("tab-panel__menu--isOverlay"),n.removeClass("vacancies--isOverlay")),o.length&&o.removeClass("trust__cars--isOverlay"))},!1),e.on("click",function(){e.hasClass("menu-btn--isActive")?e.removeClass("menu-btn--isActive"):e.addClass("menu-btn--isActive"),a.hasClass("sidebar--isMove")?a.removeClass("sidebar--isMove"):a.addClass("sidebar--isMove"),t.hasClass("page--singleService")||(s.hasClass("header--isOverlay")?s.removeClass("header--isOverlay"):s.addClass("header--isOverlay")),r.length&&(r.hasClass("tab-panel__menu--isOverlay")?r.removeClass("tab-panel__menu--isOverlay"):r.addClass("tab-panel__menu--isOverlay"),n.hasClass("vacancies--isOverlay")?n.removeClass("vacancies--isOverlay"):n.addClass("vacancies--isOverlay")),o.length&&(o.hasClass("trust__cars--isOverlay")?o.removeClass("trust__cars--isOverlay"):o.addClass("trust__cars--isOverlay")),c.length&&(d.toggleClass("clients__form--isOverlay"),u.toggleClass("clients__list--isOverlay")),v.length&&v.toggleClass("contacts--isOverlay")}),a.hasClass("sidebar--isComponent")&&e.off("click"),e.hasClass("menu-btn--fixed")){var m=$(".header__list");e.on("click",function(){l.removeClass("services--isOverlay"),v.removeClass("contacts--isOverlay"),m.toggleClass("header__list--isVisible")})}}function orderForm(){var e=$(".order-form");e.each(function(){$(this).validate({rules:{username:{required:!0},usermail:{required:!0,email:!0},usertel:{required:!0},carbrand:"required",carmodel:"required",caryear:"required"},messages:{username:{required:"Пожалуйста, введите имя"},usermail:{required:"Пожалуйста, введите адрес",email:"Формат адреса example@email.com"},usertel:"Пожалуйста, введите номер телефона",carbrand:"Пожалуйста, введите марку автомобиля",carmodel:"Пожалуйста, введите модель автомобиля",caryear:"Пожалуйста, введите год выпуска"}})}),$(":input[type='tel']").mask("+999 (99) 999 - 99 - 99")}function page(){function e(e){e.on("scroll",function(){e.scrollTop()>0?a.hasClass("sidebar--isMove")||s.addClass("logo--isFaded"):a.hasClass("sidebar--isMove")||s.removeClass("logo--isFaded")})}var s=$(".logo"),a=$(".sidebar"),t=$(".about"),i=$(".services"),r=$(".trust"),n=$(".clients"),l=$(".contacts"),o=$(".vacancies");t.length&&e(t),i.length&&e(i),r.length&&e(r),n.length&&e(n),l.length&&e(l),o.length&&e(o)}function scrollToTop(){var e=$(".scroll-to-top");e.on("click",function(e){e.preventDefault();var s=$(this).attr("href"),a=$(s).offset().top;$("html, body").animate({scrollTop:a},500)})}function sidebar(){var e=$(".sidebar__link"),s=$(".page__frame-wrap"),a=$(".page__close");e.on("click",function(){s.hasClass("page__frame-wrap--isActive")||s.addClass("page__frame-wrap--isActive")}),a.on("click",function(){s.removeClass("page__frame-wrap--isActive")})}function tabs(){var e=$(".tabs"),s=$(".tabs__menu"),a=$(".tabs__item");s.on("click","li:not(.tabs__tab--active)",function(){var s=this;setTimeout(function(){$(s).addClass("tabs__tab--active").siblings().removeClass("tabs__tab--active").closest(e).find(a).removeClass("tabs__item--active").eq($(s).index()).addClass("tabs__item--active")},300)});var t=$(".tabs__service");t.on("click",function(){$(this).toggleClass("tabs__service--isSelected")})}function tabPanel(){var e=$(".tab-panel"),s=$(".tab-panel__menu"),a=$(".tab-panel__item");s.on("click","li:not(.tab-panel__tab--active)",function(){var s=this;$(s).addClass("tab-panel__tab--active").siblings().removeClass("tab-panel__tab--active").closest(e).find(a).removeClass("tab-panel__item--active").eq($(s).index()).addClass("tab-panel__item--active"),setTimeout(function(){$(s).closest(e).find(a).removeClass("tab-panel__item--animate").eq($(s).index()).addClass("tab-panel__item--animate")},100)})}function trust(){var e=($(".thumbs__cars"),$(".trust__thumbs")),s=($(".trust__thumbs-item"),$(".trust__slide")),a=$(".trust__modals"),t=$(".trust__controls"),i=$(".trust__btn"),r=$(".trust__toggle--next"),n=$(".trust__toggle--prev");e.on("click","li",function(){a.addClass("trust__modals--isActive"),setTimeout(function(){t.addClass("trust__controls--isActive"),i.addClass("trust__btn--isActive")},200),a.find(s.eq($(this).index())).addClass("trust__slide--isActive")}),i.on("click",function(){a.addClass("trust__modals--isMove"),t.removeClass("trust__controls--isActive"),i.removeClass("trust__btn--isActive"),setTimeout(function(){a.removeClass("trust__modals--isMove"),a.removeClass("trust__modals--isActive"),s.removeClass("trust__slide--isActive")},200)}),r.on("click",function(){var e=$(".trust__slide--isActive"),s=e.next(),a=$(".trust__slide");0===s.length&&(s=a.first()),setTimeout(function(){e.removeClass("trust__slide--isActive")},300),setTimeout(function(){s.addClass("trust__slide--isActive")},300)}),n.on("click",function(){var e=$(".trust__slide--isActive"),s=e.prev(),a=$(".trust__slide");0===s.length&&(s=a.last()),setTimeout(function(){e.removeClass("trust__slide--isActive")},300),setTimeout(function(){s.addClass("trust__slide--isActive")},300)})}function whySlider(){var e,s=$(".why__slider"),a=$(".why__slider-wrap"),t=$(".why__list"),i=$(".why__control--next"),r=$(".why__control--prev");$(".why__slide");e=$(window).width()>=500?22:18.5,console.log(e),i.on("click",function(){s.find(a).animate({left:"-"+e+"em"},500,function(){s.find(t).find(".why__slide").eq(0).clone().appendTo(s.find(a).find(t)),s.find(t).find(".why__slide").eq(0).remove(),s.find(a).css({left:0})})}),r.on("click",function(){s.find(t).find(".why__slide").eq(-1).clone().prependTo(s.find(a).find(t)),s.find(a).css({left:"-"+e+"em"}),s.find(t).find(".why__slide").eq(-1).remove(),s.find(a).animate({left:0},500)})}$(function(){page(),menuBtn(),mainNav(),sidebar(),callbackForm(),tabPanel(),trust(),clients(),header(),hero(),tabs(),orderForm(),whySlider(),scrollToTop(),component()}),function(e){var s={init:function(s){var a=e.extend({speed:400},s),t=a.panel,i=t.attr("class")+"--isActive",r=a.control,n=r.attr("class")+"--isActive",l=a.content,o=l.attr("class")+"--isActive";t.removeClass(i),r.removeClass(n),l.removeClass(o),t.on("click",function(){e(this).hasClass(i)?(e(this).removeClass(i),e(this).find(r).removeClass(n),e(this).next().slideUp(a.speed),e(this).siblings().find(r).removeClass(n)):(e(this).addClass(i).siblings().removeClass(i),e(this).find(r).addClass(n),e(this).siblings().find(r).removeClass(n),e(this).next().slideDown(a.speed).siblings().not(t).slideUp(a.speed))})}};e.fn.accordionModule=function(a){return s[a]?s[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void e.error('Метод "'+a+'" в плагине не найден'):s.init.apply(this,arguments)}}(jQuery);