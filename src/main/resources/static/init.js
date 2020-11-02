var App = {
    windowW: $(window).width(),
    initHelpers: function ($helpers) {
        var me = this;
        $(document).ready(function () {
            me.initHelper('common');
            if ($helpers != undefined) {
                if ($helpers instanceof Array) {
                    for (var $index in $helpers) {
                        me.initHelper($helpers[$index]);
                    }
                } else {
                    me.initHelper($helpers);
                }
            } else {

            }
        });

    },
    initHelper: function ($helper) {
        var me = this;
        //console.log($helper);
        if ($helper.length > 0) {
            console.log('init <' + $helper + '> function window width = ' + me.windowW);
            App[$helper]();
        }

    },

    common: function () {
        var me = this;
        //$('.timeago').timeago();

        $(".nav_header").sticky({
            topSpacing: 0
        });
        $(".menu_toggle-mobile").on("click", function () {
            $('body').toggleClass("ka_menu_mobile--is-active");
        });

        if (me.windowW > 800) {
            //console.log($('#hidDisableLuxy').val());
            if ($('#hidDisableLuxy').val() != 1)
            {
                luxy.init({
                    wrapper: '#luxy',
                    wrapperSpeed: 0.08
                });
            }
            
        } else {

        }
    },

    exam: function () {
        var me = this;
        //$('.timeago').timeago();


        if (me.windowW > 800) {

        } else {

        }
    },

    faqs: function () {
        var me = this;
        //$('.timeago').timeago();

        $(".faqs-heading").each(function (i, v) {
            $(v).click(function () {
                if ($(v).parent().hasClass('active')) {
                    $(v).parent().removeClass('active');
                }

                else {
                    $(v).parent().addClass('active');
                }
                $(".faqs-heading").not($(v)).parent().removeClass('active');
            });
        });

        if (me.windowW > 800) {

        } else {

        }
    },
    newsList: function () {
        var me = this;
        //$('.timeago').timeago();


        if (me.windowW > 800) {

        } else {
            var swiperNL = new Swiper('.swiper-container.swiper-newsList', {
                slidesPerView: 'auto',
                spaceBetween: 0,

            });
        }
    },

    newsDetail: function () {
        var me = this;
        //$('.timeago').timeago();


        if (me.windowW > 800) {
            $(".medium-insert-images-grid").justifiedGallery({
                randomize: false,
                margins: 5,
                rowHeight: 200,
                cssAnimation: true,
                waitThumbnailsLoad: true,
            });

            $('.custom-fancy').fancybox();
        } else {

        }
    },


	popUp_portfolio: function () {
		var me = this;
		//$('.timeago').timeago();
		PortFolio.init();

		/*if (me.windowW > 800) {
			$(".popUp_portfolio").fancybox({
				touch: false,
				afterShow: function () {
					$("#gallery-staff").justifiedGallery({
						randomize: false,
						margins: 5,
						rowHeight: 180,
						maxRowsCount: 3,
						cssAnimation: true,
						waitThumbnailsLoad: true,
					});
				},
			});

		} else {
			$(".popUp_portfolio").fancybox({
				touch: false,
				afterShow: function () {
					$('.fancybox-container').append("<button data-fancybox-close class='mob-popup-close-btn' title='Close'>" +
						"<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
						"<path d=\"M16.4444 1.55556C15.9999 1.11112 15.3333 1.11112 14.8888 1.55556L8.99995 7.44445L3.11106 1.55556C2.66661 1.11112 1.99995 1.11112 1.5555 1.55556C1.11106 2.00001 1.11106 2.66667 1.5555 3.11112L7.44439 9.00001L1.5555 14.8889C1.11106 15.3333 1.11106 16 1.5555 16.4445C1.77772 16.6667 1.99995 16.7778 2.33328 16.7778C2.66661 16.7778 2.88883 16.6667 3.11106 16.4445L8.99995 10.5556L14.8888 16.4445C15.1111 16.6667 15.4444 16.7778 15.6666 16.7778C15.8888 16.7778 16.2222 16.6667 16.4444 16.4445C16.8888 16 16.8888 15.3333 16.4444 14.8889L10.5555 9.00001L16.4444 3.11112C16.8888 2.66667 16.8888 2.00001 16.4444 1.55556Z\" fill=\"white\"/>\n" +
						"</svg>\n</button>");
					$("#gallery-staff").justifiedGallery({
						randomize: false,
						margins: 5,
						rowHeight: 180,
						maxRowsCount: 3,
						cssAnimation: true,
						waitThumbnailsLoad: true,
					});
				},
			});
		}*/
	},

    popUP_booking: function () {
        var me = this;
        //$('.timeago').timeago();


        if (me.windowW > 800) {
            $(".fancy_booking").fancybox({
                touch: false,
            });
        } else {
            $(".fancy_booking").fancybox({
                touch: false,
                afterShow: function () {
                    $('.fancybox-container').append("<button data-fancybox-close class='mob-popup-close-btn' title='Close'>" +
                        "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                        "<path d=\"M16.4444 1.55556C15.9999 1.11112 15.3333 1.11112 14.8888 1.55556L8.99995 7.44445L3.11106 1.55556C2.66661 1.11112 1.99995 1.11112 1.5555 1.55556C1.11106 2.00001 1.11106 2.66667 1.5555 3.11112L7.44439 9.00001L1.5555 14.8889C1.11106 15.3333 1.11106 16 1.5555 16.4445C1.77772 16.6667 1.99995 16.7778 2.33328 16.7778C2.66661 16.7778 2.88883 16.6667 3.11106 16.4445L8.99995 10.5556L14.8888 16.4445C15.1111 16.6667 15.4444 16.7778 15.6666 16.7778C15.8888 16.7778 16.2222 16.6667 16.4444 16.4445C16.8888 16 16.8888 15.3333 16.4444 14.8889L10.5555 9.00001L16.4444 3.11112C16.8888 2.66667 16.8888 2.00001 16.4444 1.55556Z\" fill=\"white\"/>\n" +
                        "</svg>\n</button>");
                },
            });
        }
    },
    popUP_bookingsuccess: function () {
        var me = this;
        //$('.timeago').timeago();

        $(".fancy_booking-success").fancybox({
            touch: false,
        });
        if (me.windowW > 800) {

        } else {

        }
    },

    galleryDetail: function () {
        var me = this;
        //$('.timeago').timeago();


        if (me.windowW > 800) {
            var swiperGallery = new Swiper('.swiper-container.swiper-gallery', {
                slidesPerView: 'auto',
                spaceBetween: 8,
                centeredSlides: true,
                loop: true,
                mousewheel: {
                    releaseOnEdges: true,
                },
                navigation: {
                    nextEl: '.swiper-gallery .swiper-button-next',
                    prevEl: '.swiper-gallery .swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-galley_box .swiper-pagination.progress',
                    type: 'progressbar',
                },

            });
        } else {
            var swiperGallery = new Swiper('.swiper-container.swiper-recommend_galley', {
                slidesPerView: 'auto',
                spaceBetween: 0,
            });
        }
    },


    gallery: function () {
        var me = this;
        //$('.timeago').timeago();


        if (me.windowW > 800) {
            /*$("#kagallery").justifiedGallery({ // Da call trong gallery-grid.js
                randomize: false,
                margins: 5,
                rowHeight: 350,
                maxRowHeight: 350,
                maxRowsCount: 3,
                cssAnimation: true,
                waitThumbnailsLoad: true,
            });*/
        } else {
            var swiperFilter = new Swiper('.swiper-container.swiper-filter_gallery', {
                slidesPerView: 'auto',
                spaceBetween: 15,

            });
        }
    },


	home: function () {
		var me = this;
		//$('.timeago').timeago();
	    QuickBook.init();
		FilterLocation.init();
		// $('[data-toggle="datepicker"]').datepicker();
		new WOW().init();
		// init drop quick book
		$.each($('.dropdown_group'), function (i, v) {
			$(v).off('click').click(function () {
				event.stopPropagation();
				if ($(this).hasClass('active')) {
					//$(this).removeClass('active');
				} else {
					$('.dropdown_group').removeClass('active');
					$(this).addClass('active');
				}
			});
		});
		$("body").not($(".dropdown-content")).click(function () {
			$('.dropdown_group').removeClass('active');
			console.log('click outside');
		});

        // init filter location
        $.each($('.filter-group'), function (i, v) {
            $(v).off('click').click(function () {
                event.stopPropagation();
                if ($(this).hasClass('active')) {
                    //$(this).removeClass('active');
                } else {
                    $('.dropdown_group').removeClass('active');
                    $(this).addClass('active');
                }
            });
        });
        $("body").not($(".filter-content")).click(function () {
            $('.filter-group').removeClass('active');
            console.log('click outside');
        });

        if (me.windowW > 800) {
            var swiperCv = new Swiper('.swiper-container.swiper-cover_web', {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-cover_web .swiper-pagination',
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,

                },
                speed: 700,
            });
            var swiperSV = new Swiper('.swiper-container.swiper-services', {
                slidesPerView: 'auto',
                spaceBetween: 25,
                navigation: {
                    nextEl: '.swiper-box .swiper-button-next',
                    prevEl: '.swiper-box .swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-box .swiper-pagination',
                },
            });
            var swiperBlog = new Swiper('.swiper-container.swiper-blog', {
                slidesPerView: 'auto',
                spaceBetween: 25,
                navigation: {
                    nextEl: '.swiper-boxBlog .swiper-button-next',
                    prevEl: '.swiper-boxBlog .swiper-button-prev',
                },

            });

            var swiperTEst = new Swiper('.swiper-container.swiper-testimonials', {
                slidesPerView: 'auto',
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-testimonials .swiper-pagination',
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,

                },
                navigation: {
                    nextEl: '.swiper-Testt .swiper-button-next',
                    prevEl: '.swiper-Testt .swiper-button-prev',
                },
            });
            var swiperPartner = new Swiper('.swiper-container.swiper-partner', {
                spaceBetween: 45,
                centeredSlides: true,
                slidesPerView: 'auto',
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                freeMode: true,
            });
        } else {
            $('.money_count').insertBefore('.quick_booking .btn-group');
            var swiperPack = new Swiper('.swiper-container.swiper-location', {
                slidesPerView: 'auto',
                slidesPerColumn: 2,
                spaceBetween: 0,
            });
            $('.ka_design-pack .view-all').insertAfter('.swiper-location');

            var swiperCv = new Swiper('.swiper-container.swiper-cover_mob', {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-cover_mob .swiper-pagination',
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,

                },
                speed: 700,
            });

            var swiperSV = new Swiper('.swiper-container.swiper-services', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-box .swiper-pagination',
                },
            });
            var swiperBlog = new Swiper('.swiper-container.swiper-blog', {
                slidesPerView: 'auto',
                spaceBetween: 0,


            });
            var swiperTEst = new Swiper('.swiper-container.swiper-testimonials', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 1000,
                },
                pagination: {
                    el: '.swiper-testimonials .swiper-pagination',
                },

            });
            var swiperPartner = new Swiper('.swiper-container.swiper-partner', {
                spaceBetween: 20,
                centeredSlides: true,
                slidesPerView: 'auto',
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                freeMode: true,
            });
        }
    },

    popuploca: function () {
        var me = this;
        //$('.timeago').timeago();


        if (me.windowW > 800) {
            $(".medium-insert-images-grid").justifiedGallery({
                randomize: false,
                margins: 5,
                rowHeight: 220,
                maxRowsCount: 3,
                cssAnimation: true,
                waitThumbnailsLoad: true,
            });
            $('.custom-fancy').fancybox();
            StickyTopToBottom({
                PaddingTop: 0,
                PaddingBottom: 0,
                TopRulerId: 'ruler-fix-ads-top',
                BottomRulerId: 'ruler-fix-ads-bottom',
                StickyBoxId: 'sidebar-sticky-menu',
                ClassFix: 'fix-banner',
                ClassFixBottom: 'fix-banner-sticked',
                ShowHide: false,
            });

        } else {
            var swiperSv = new Swiper('.swiper-container.swiper-services', {
                slidesPerView: 'auto',
                spaceBetween: 16,
            });
            var swiperRCM = new Swiper('.swiper-container.swiper-recommend', {
                slidesPerView: 'auto',
                slidesPerColumn: 2,
                spaceBetween: 16,
            });
        }
    },

    staff: function () {
        var me = this;
        //$('.timeago').timeago();


        if (me.windowW > 800) {
            var swiperStaff = new Swiper('.swiper-container.swiper-portfolio', {
                slidesPerView: 4,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 2000,
                },
                speed: 600,
                disableOnInteraction: true,
                // centeredSlides: true,
                navigation: {
                    nextEl: '.swiper-button_box .swiper-button-next',
                    prevEl: '.swiper-button_box .swiper-button-prev',
                },
            });
        } else {
            var swiperStaff = new Swiper('.swiper-container.swiper-portfolio', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 1000,
                },
                speed: 600,
                disableOnInteraction: true,
                // centeredSlides: true,
                navigation: {
                    nextEl: '.swiper-button_box .swiper-button-next',
                    prevEl: '.swiper-button_box .swiper-button-prev',
                },
            });
        }

	},
};
