function StickyTopToBottom(opt) {
    //console.log(opt);
    var boxW = $('#' + opt.StickyBoxId).parent().outerWidth();
    //console.log($('#' + opt.StickyBoxId).parent().width());
    $('#' + opt.StickyBoxId).css('width', boxW + 'px');
    $(window).scroll(function () {
        var currentOffset = $(window).scrollTop();
        var ruler = $('#' + opt.TopRulerId).offset().top; //xem cach voi top bao nhiu
        if (currentOffset > (ruler - opt.PaddingTop)) {
            $('#' + opt.StickyBoxId).addClass(opt.ClassFix);
            if (opt.ShowHide) $('#' + opt.StickyBoxId).fadeIn('fast');
            // check cham bottom thi dung lai
            var rulerBottom = $('#' + opt.BottomRulerId).offset().top;
            console.log('before rulerBottom = ' + rulerBottom);
            if($(window).width() <800 ) rulerBottom = rulerBottom - window.innerHeight;
            console.log('after rulerBottom = ' + rulerBottom);
            var sidebarOffsetTop = $('#' + opt.TopRulerId).offset().top;
            var holdOffset = rulerBottom - sidebarOffsetTop - $('#' + opt.StickyBoxId).outerHeight();
            if (currentOffset >= (rulerBottom - $('#' + opt.StickyBoxId).outerHeight() - opt.PaddingTop)) {
                $('#' + opt.StickyBoxId).removeClass(opt.ClassFix);
                $('#' + opt.StickyBoxId).addClass(opt.ClassFixBottom).css('width', boxW + 'px');
            } else {
                $('#' + opt.StickyBoxId).removeClass(opt.ClassFixBottom);
                $('#' + opt.StickyBoxId).addClass(opt.ClassFix);
            }
        } else {
            $('#' + opt.StickyBoxId).removeClass(opt.ClassFix);
            if (opt.ShowHide) $('#' + opt.StickyBoxId).fadeOut('fast');
        }



    });
};