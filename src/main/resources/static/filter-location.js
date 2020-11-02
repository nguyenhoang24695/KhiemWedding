var FilterLocation = {
    options: {
        proIsFree: 1, // Ceremony:0 ; Pre-Wedding:1
        top: 8,
        handlerUrl: "/handler-product.htm"
    },
    init: function (o) {
        var me = this;
        if (o) {
            me.options = $.extend(me.options, o);
        }
        // Check hidValue Page Size o trang list, neu co thi lay page size o trang list
        if ($('#hidPageSize').val() > 0) {
            me.options.top = $('#hidPageSize').val();
            $('.heading-location').find('.view-all').remove();
        }
        // begin filter block list location
        me.initFilterLocation();
        me.loadData();
    },
    initFilterLocation: function(){
        var me = this;

        $.each($('.home-filter-location'), function (i, v) {
            $(v).off('click').click(function () {
                event.stopPropagation();
                let isFree = $(v).data('isfree');
                let txt = $(v).html();
                $(v).parents('.filter-group').removeClass('active');
                $(v).parents('.filter-group').find('.filter-btn .txt').html(txt);
                me.options.proIsFree = isFree;
                me.loadData();
            });
        });
    },
    loadData: function () {
        var me = this;

        $.ajax({
            url: me.options.handlerUrl,
            data: { 
                m: 'get-location', 
                pageIndex: 1, 
                pageSize: me.options.top, 
                proFree: me.options.proIsFree
            },
            dataType: "json",
            type: "POST",
            beforeSend: function () {

            },
            success: function (rs) {
                if (rs.Success) {
                    if (rs.Total > 0) {
                        $('#home-list-location').html(rs.Data);
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

