$(document).ready(function() {
    $('input[type=file]').on('change', function() {
        var value = $(this).val();
        if (value != '') {
            $( this ).addClass('file-selected');
            $(".file-selected").parent(".upload__row__wrp").addClass('file-selected');
        } else {
           
        }
    });
});
