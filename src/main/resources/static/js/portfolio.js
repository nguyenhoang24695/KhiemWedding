var PortFolio = {
    windowW: $(window).width(),
    options: {
        handlerUrl: "/misc-customer.htm"
    },
    init: function (o) {
        var me = this;
        if (o) {
            me.options = $.extend(me.options, o);
        }

        $('.popUp_portfolio.slide-staff').off('click').click(function () {
            event.stopPropagation();
            console.log('click');
            me.loadDataDetail($(this).data("id"));
        });
    },
    loadDataDetail: function (id) {
        var me = this;

        $.ajax({
            url: me.options.handlerUrl,
            data: {
                m: 'get-content',
                id: id,
            },
            dataType: "json",
            type: "POST",
            beforeSend: function () {

            },
            success: function (rs) {
                if (rs.Success) {
                    $('#imgAvatar').css('background-image', 'url(' + rs.Data.Avatar1Small + ')');
                    //Avatar1Small
                    $('#txtFullName').html(rs.Data.DataTypeContentName);
                    $('#txtJob').html(rs.Data.DataTypeContentString2);
                    $('#txtDetail').html(rs.Data.DataTypeContentBody);

                    if (me.windowW > 800) {
                        $.fancybox.open({
                            src: '#popUp-portfolio-1',
                            touch: false,
                            opts: {
                                afterShow: function (instance, current) {
                                    console.info('done!');
                                    $(".medium-insert-images-grid").justifiedGallery({
                                        randomize: false,
                                        margins: 5,
                                        rowHeight: 180,
                                        maxRowsCount: 3,
                                        cssAnimation: true,
                                        waitThumbnailsLoad: true,
                                    });
                                }
                            }
                        });
                    } else {
                        $.fancybox.open({
                            src: '#popUp-portfolio-1',
                            touch: false,
                            opts: {
                                afterShow: function (instance, current) {
                                    $('.fancybox-container').append("<button data-fancybox-close class='mob-popup-close-btn' title='Close'>" +
                                    "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                                    "<path d=\"M16.4444 1.55556C15.9999 1.11112 15.3333 1.11112 14.8888 1.55556L8.99995 7.44445L3.11106 1.55556C2.66661 1.11112 1.99995 1.11112 1.5555 1.55556C1.11106 2.00001 1.11106 2.66667 1.5555 3.11112L7.44439 9.00001L1.5555 14.8889C1.11106 15.3333 1.11106 16 1.5555 16.4445C1.77772 16.6667 1.99995 16.7778 2.33328 16.7778C2.66661 16.7778 2.88883 16.6667 3.11106 16.4445L8.99995 10.5556L14.8888 16.4445C15.1111 16.6667 15.4444 16.7778 15.6666 16.7778C15.8888 16.7778 16.2222 16.6667 16.4444 16.4445C16.8888 16 16.8888 15.3333 16.4444 14.8889L10.5555 9.00001L16.4444 3.11112C16.8888 2.66667 16.8888 2.00001 16.4444 1.55556Z\" fill=\"white\"/>\n" +
                                    "</svg>\n</button>");
                                }
                            }
                        });
                    }

                   

                    
                } else {
                    console.log(rs.Message);
                }
            }
        });
    },
    sample: function () {
        var me = this;


    },
}

