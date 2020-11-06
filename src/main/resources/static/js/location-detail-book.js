var LocationDetailBook = {
    options: {
        proLocIsFreeName: 'Ceremony',
        proLocId: 0,
        proLocName: '',
        proLocPrice: 0,
        proComboId: 0,
        proComboName: '',
        proComboSapo: '',
        proComboPrice: 0,
        proSingleId: 0,
        proSingleName: '',
        proSingleSapo: '',
        proSinglePrice: 0,
        totalPrice: 0,
        originPrice: 0,
        couponId: 0,
        couponCode: '',
        couponPrice: 0,
        datePicker: '',
        handlerUrl: "/handler-customer.htm",
        billName: '',
        billPhone: '',
        billMail: '',
        m: 'quick-book',
    },
    init: function (o) {
        var me = this;
        if (o) {
            me.options = $.extend(me.options, o);
        }

       
        me.calTotalPrice();
        me.initCoupon();
        me.initCombo();
        me.bookAction();
    },
    initCoupon: function () {
        var me = this;
        $('#btnCheckCoupon').off('click').click(function () {
            event.stopPropagation();
            if (!chkTextBox('txtCoupon', 'Bạn phải nhập mã giảm giá!!!', '')) return false;
            
            $.ajax({
                url: me.options.handlerUrl,
                data: {
                    m: 'check-coupon',
                    coupon: $('#txtCoupon').val()
                },
                dataType: "json",
                type: "POST",
                beforeSend: function () {
                },
                success: function (rs) {
                    $('#coupon-box').find('.status').html(rs.Message);
                    if (rs.Success) {
                        $('#coupon-box').removeClass('wrong').addClass('correct');
                        me.options.couponPrice = rs.Data.Price;
                        me.options.couponId = rs.Data.Id;
                        me.options.couponCode = rs.Data.CouponCode;
                        me.calTotalPrice();
                    } else {
                        console.log(rs.Message);
                        $('#coupon-box').removeClass('correct').addClass('wrong');
                    }
                }
            });
        });
    },
    initCombo: function () {
        var me = this;
        //console.log('initLocation');
        // init drop combo
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
        
        $('input[name="radCombo"]:radio').change(function () {
            me.options.proComboId = $(this).val();
            me.options.proComboPrice = $(this).data('price');
            me.options.proComboName = $(this).data('name');
            me.options.proComboSapo = $('#radComboSapo-' + me.options.proComboId).html();
            $(this).parents('.dropdown_group').removeClass('active');
            $(this).parents('.dropdown_group').find('.dropdown_btn .text').html($(this).data('name'));
            me.calTotalPrice();
        });

        $('input[name="radSingle"]:radio').change(function () {
            me.options.proSingleId = $(this).val();
            me.options.proSinglePrice = $(this).data('price');
            me.options.proSingleName = $(this).data('name');
            me.options.proSingleSapo = $('#radSingleSapo-' + me.options.proComboId).html();
            $(this).parents('.dropdown_group').removeClass('active');
            $(this).parents('.dropdown_group').find('.dropdown_btn .text').html($(this).data('name'));
            me.calTotalPrice();
        });
    },
    calTotalPrice: function(){
        var me = this;
        me.options.originPrice = me.options.proLocPrice + me.options.proComboPrice + me.options.proSinglePrice;
        me.options.totalPrice = me.options.originPrice - me.options.couponPrice;
        if (me.options.couponPrice > 0)
            $('#originTotalPrice').html(addCommas(me.options.originPrice * 1000) + 'đ').removeClass('hid');
        $('#totalPrice').html(addCommas(me.options.totalPrice * 1000) + 'đ');

        //if ($('#txtDateBook').val().length > 0) {
        //    me.bookAction();
        //}

        //console.log(me.options);
    },
    bookAction: function(){
        var me = this;

        $('#btnLocationBook').removeClass('disabled').off('click').click(function () {
            event.stopPropagation();
            
            if (!($('#txtDateBook').val().length > 0)) {
                Swal.fire({
                    title: "Bạn chưa chọn ngày muốn chụp!",
                    text: '',
                    type: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#DD6B55"
                });
                return false;
            }

            //if (!(me.options.proComboId > 0)) {
            //    Swal.fire({
            //        title: "Bạn chưa chọn Gói combo chụp ảnh!",
            //        text: '',
            //        type: 'error',
            //        confirmButtonText: 'Ok',
            //        confirmButtonColor: "#DD6B55"
            //    });
            //    return false;
            //}

            me.options.datePicker = $('#txtDateBook').val();

            console.log(me.options);
            //return false;
            // Bind data to popup
            $('#popup-loc').html(me.options.proLocName);
            $('#popup-isfree').html(me.options.proLocIsFreeName);
            $('#popup-datepick').html(me.options.datePicker);
            $('#popup-combo-sapo').html('<li>' + replaceAll(me.options.proComboSapo, '<br>', '</li><li>') + '</li>');
            $('#popup-total').html(addCommas(me.options.totalPrice * 1000) + 'đ');

            // Xu ly chon Single Product neu co
            if (me.options.proSingleId > 0) {
                $('#popup-singleproduct').html(me.options.proSingleName);
                $('#popup-choi-singleproduct').removeClass('hid');
            }

            $.fancybox.open({
                src: '#popUp-booking_register',
                opts: {
                    afterShow: function (instance, current) {
                        console.info('done!');
                    }
                }
            });
        });

        $('#btnSubmit').off('click').click(function () {
            event.stopPropagation();

            if (!chkTextBox('txtFullname', 'Bạn phải nhập tên!!!', '')) return false;
            if (!chkTextBoxNumber('txtPhone', 'Số điện thoại bạn nhập không hợp lệ...')) return false;
            //if (!chkTextBoxEmail('txtEmail', 'Email bạn nhập không hợp lệ...')) return false;

            $('#popup-fullname').html($('#txtFullname').val());

            

            me.options.billName = $('#txtFullname').val();
            me.options.billPhone = $('#txtPhone').val();
            me.options.billMail = $('#txtEmail').val();

            //console.log(me.options); return false;

            $.ajax({
                url: me.options.handlerUrl,
                data: me.options,
                dataType: "json",
                type: "POST",
                beforeSend: function () {
                    $.fancybox.getInstance().close();
                },
                success: function (rs) {
                    if (rs.Success) {
                        $.fancybox.open({
                            src: '#popUp-booking_success',
                            opts: {
                                afterShow: function (instance, current) {
                                    console.info('done!');
                                }
                            }
                        });

                        // reset param
                        $('#txtFullname').val('');
                        $('#txtPhone').val('');
                        $('#txtEmail').val('');
                        me.options.billName = '';
                        me.options.billPhone = '';
                        me.options.billMail = '';
                    } else {
                        console.log(rs.Message);
                    }
                }
            });
        });
    },
    sample: function () {
        var me = this;


    },
}

