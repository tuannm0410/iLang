$(function() {
  $('#receiver').tagsinput();

  $('.inputfile').change(function(e) {
    alert(e.target.value.split( '\\' ).pop());

    if( $(this).files && $(this).files.length > 1 ) {
      fileName = ( $(this).getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', e.files.length );
    } else {
      fileName = e.target.value.split( '\\' ).pop()
    }

    if(fileName)
      $('.attachment span').html(fileName);
    else
    $('.attachment span').html("Đính kèm file");
  });
});