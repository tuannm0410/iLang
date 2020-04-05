$(function () {
    $("#DatePurchase, #DateWarranty").datepicker({
        format: "dd/mm/yyyy",
        orientation: "bottom auto",
        autoclose: true
    });
    $('#checkAll').on('change', function () {
        var checkAll = $(this);
        if (checkAll.is(':checked')) {
            $('.block-list-device td input[type="checkbox"]').prop('checked', true);
        } else {
            $('.block-list-device td input[type="checkbox"]').prop('checked', false);
        }
    });
    $('.block-list-device td input[type="checkbox"]').on('change', function () {
        var lengthInput = $('.block-list-device td input[type="checkbox"]').length;
        if ($('.block-list-device td input[type="checkbox"]:checked').length == lengthInput) {
            $('#checkAll').prop('checked', true);
        } else {
            $('#checkAll').prop('checked', false);
        }
    });
});