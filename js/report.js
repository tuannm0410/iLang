$(function () {
    $('.modal-upload .inputfile').change(function (e) {
        if ($(this).files && $(this).files.length > 1) {
            fileName = ($(this).getAttribute('data-multiple-caption') || '').replace('{count}', e.files.length);
        } else {
            fileName = e.target.value.split('\\').pop()
        }

        if (fileName)
            $('.file-attachment-current').html(fileName);
        else
            $('.file-attachment-current').html("Đính kèm file");
    });
});