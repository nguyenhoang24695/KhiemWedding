function shareClick(hr) {
    var wleft = screen.width / 2 - 700 / 2;
    var wtop = screen.height / 2 - 450 / 2;

    var link = hr != null ? hr : document.location.href;

    var w = window.open("https://www.facebook.com/sharer.php?u=" + link, "chia sẻ",
            'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=700, height=485, top=' + wtop + ', left=' + wleft
        );
    w.focus();
    return false;
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}