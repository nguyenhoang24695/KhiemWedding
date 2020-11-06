var QuickBook = {
    options: {
        proLocIsFreeName: 'Ceremony',
        proLocId: 0,
        proLocName: '',
        proLocPrice: 0,
        proComboId: 0,
        proComboName: '',
        proComboSapo: '',
        proComboPrice: 0,
        totalPrice: 0,
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
        // begin active popup
        me.initLocation();

        me.bookAction();
    },
    initLocation: function () {
        var me = this;
        //console.log('initLocation');
        $('input[name="radFree"]:radio').change(function () {
            let val = $(this).val();
            //console.log(val);
            me.options.proLocIsFreeName = $(this).data('name');
            if (val == 0) {
                $('#lst-ul-cere').removeClass('hid');
                $('#lst-ul-pre').addClass('hid');
            } else {
                $('#lst-ul-cere').addClass('hid');
                $('#lst-ul-pre').removeClass('hid');
            }
        });

        $('input[name="radLoc"]:radio').change(function () {
            me.options.proLocId = $(this).val();
            me.options.proLocPrice = $(this).data('price');
            me.options.proLocName = "Địa điểm chụp: " + $(this).data('name');
            $(this).parents('.dropdown_group').removeClass('active');
            $(this).parents('.dropdown_group').find('.dropdown_btn .text').html($(this).data('name'));
            me.calTotalPrice();
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
    },
    calTotalPrice: function(){
        var me = this;
        me.options.totalPrice = me.options.proLocPrice + me.options.proComboPrice;
        $('#totalPrice').html(addCommas(me.options.totalPrice*1000) + 'đ');
        //console.log(me.options);
    },
    bookAction: function(){
        var me = this;

        $('#btnQuickBook').off('click').click(function () {
            event.stopPropagation();
            
            if (!(me.options.proLocId > 0)) {
                Swal.fire({
                    title: "Bạn chưa chọn địa điểm muốn chụp!",
                    text: '',
                    type: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#DD6B55"
                });
                return false;
            }

            if (!($('#txtQuickBookDate').val().length > 0)) {
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

            me.options.datePicker = $('#txtQuickBookDate').val();

            console.log(me.options);

            // Bind data to popup
            $('#popup-loc').html(me.options.proLocName);
            $('#popup-isfree').html(me.options.proLocIsFreeName);
            $('#popup-datepick').html(me.options.datePicker);
            $('#popup-combo-sapo').html('<li>' + replaceAll(me.options.proComboSapo, '<br>', '</li><li>') + '</li>');
            $('#popup-total').html(addCommas(me.options.totalPrice * 1000) + 'đ');

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

