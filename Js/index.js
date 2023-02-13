let formKey = "";
let serial = '';
/* here starts the serial toggler function */
let serialsList = $('#serialsList').val();
let list = serialsList.split(';');
let x = 0;
setInterval(function() {
    $('#serial').attr('placeholder', list[x]);
    x++;
    if (x == list.length) {
        x = 0;
    }
}, 2000);
/* here ends the serial toggler function */
// let submitBtn = $('#formSubmit');
let spinner = $('#loading_ico');
// let alert = $('#formAlert');
let inputSerial = $('#serial');