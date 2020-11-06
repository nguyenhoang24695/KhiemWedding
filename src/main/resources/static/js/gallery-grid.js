var GalleryGrid = {
    windowW: $(window).width(),
    options: {
        zoneId: 0,
    },
    init: function (o) {
        var me = this;
        if (o) {
            me.options = $.extend(me.options, o);
        }
        me.formatGallery();
    },
    formatGallery: function (id) {
        var me = this;

        $('#zone-' + me.options.zoneId).addClass('active').attr('href', 'javascript:;').css('cursor', 'default');

        $("#kagallery").imagesStatus({
            allImgFinished: function (container) {
                //console.log("all images loaded");
                //console.log(this.status.loaded + " images loaded, " + this.status.failed + " images failed!");
                $("#kagallery").justifiedGallery({
                    randomize: false,
                    margins: 5,
                    rowHeight: 350,
                    maxRowHeight: 350,
                    //maxRowsCount: 3,
                    cssAnimation: true,
                    imagesAnimationDuration: 500,
                    waitThumbnailsLoad: true,
                    refreshTime: 1000,
                    lastRow: 'center',
                }).on('jg.complete', function () {
                    //console.log('complete');
                    $(this).css('opacity', 1);
                });
            }
        });
    },
    
}

