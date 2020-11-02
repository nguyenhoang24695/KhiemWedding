$(function () {
    /*$(document).ajaxSuccess(function (event, request, options) {
        //console.log('ajaxSuccess');
        if (options.dataType == 'json') {
            var data = JSON.parse(request.responseText);
            if (data.Success == false) {
                Swal.fire({
                    title: data.Message,
                    text: '',
                    text: '',
                    type: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#DD6B55"
                });
            }
        }
    });
    $(document).ajaxError(function (event, request, options) {
        console.log('ajaxError');
        var data = JSON.parse(request.responseText);
        if (!(data.Success)) {
            Swal.fire({
                title: data.Message,
                text: '',
                type: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: "#DD6B55"
            });
        }
    });*/
});


function isNumeric(input) {
    return (input - 0) == input && input.length > 0;
}

// kiem tra 1 value co ton tai trong chuoi ngan cach boi dau phay
function checkStringExist(str, val) {
    var data = str.split(",");
    for (i = 0; i < data.length; i++) {
        if (val == data[i]) return true;
    }
    return false;
}

function formatTextJs(input) {
    return input.replace(/\'/g, '').replace(/\"/g, '');
}
function validSuccess(ele, mess, isButtonNotify) {
    var pos = "bottom left";
    if (isButtonNotify == 1) pos = "bottom center";
    //console.log(pos);
    //$('#' + ele).notify(
    //  mess,
    //  {
    //      position: pos,
    //      className: 'success',
    //  }
    //);
}
function alertInvalidForm(ele, mess, isButtonNotify) {
    var pos = "bottom left";
    if (isButtonNotify == 1) pos = "bottom center";
    //console.log(pos);
    //$('#' + ele).notify(
    //  mess,
    //  {
    //      position: pos,
    //      className: 'error',
    //  }
    //);

    Swal.fire({
        title: mess,
        text: '',
        type: 'warning',
        confirmButtonText: 'Ok',
        confirmButtonColor: "#DD6B55",
        onClose: () => {
            setTimeout(function () {
                //$('#' + strId).focus();
            }, 500);
        }
    });
}

function chkTextBox(strId, mess, customClass) {
    if ($('#' + strId).val().trim() == '') {
        alertInvalidForm(strId, mess);
        return false;
    }
    validSuccess(strId);
    return true;
}

function chkTextBoxNumber(strId, mess) {
    if (!isNumeric($('#' + strId).val().replace(/\,/g, '').replace(/\./g, ''))) {
        alertInvalidForm(strId, mess);
        return false;
    }
    validSuccess(strId);
    return true;
}

function chkTextBoxEmail(strId, mess) {
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test($('#' + strId).val())) {
        alertInvalidForm(strId, mess);
        return false;
    }
    validSuccess(strId);
    return true;
}

function chkDropdownBox(strId, mess) {
    if ($('#' + strId).val() < 0) {
        alertInvalidForm(strId, mess);
        return false;
    }
    validSuccess(strId);
    return true;
}
function chkDropdownBox_GreaterThan0(strId, mess) {
    if ($('#' + strId).val() <= 0) {
        alertInvalidForm(strId, mess);
        return false;
    }
    validSuccess(strId);
    return true;
}
function chkTwoTextBox(strId1, strId2, mess) {
    if ($('#' + strId1).val().trim() != $('#' + strId2).val().trim()) {
        alertInvalidForm(strId2, mess);
        return false;
    } else {
        validSuccess(strId2);
        return true;
    }
}