var NewsList = {
    options: {
        pIndex: 0,
        pSize: 0,
        zoneId: 0,
        exceptListId: '',
        handlerUrl: "/handler-customer.htm",
        m: 'get-list-news',
    },
    init: function (o) {
        var me = this;
        if (o) {
            me.options = $.extend(me.options, o);
        }
        me.loadData();

        $('#load-more').off('click').click(function () {
            event.stopPropagation();
            me.loadData();
        });
    },
    loadData: function () {
        var me = this;
        
        me.options.pIndex++;

        $.ajax({
            url: me.options.handlerUrl,
            data: me.options,
            dataType: "json",
            type: "POST",
            beforeSend: function () {

            },
            success: function (rs) {
                if (rs.Success) {
                    if (rs.Total > 0) {
                        $('#list-news').append(rs.Data);
                    } else {
                        $('#load-more').css('display', 'none');
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

