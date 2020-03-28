$(function(){
  $("#dob").datepicker({
    format: "dd/mm/yyyy",
    orientation: "bottom auto",
    autoclose: true
  });
});

function editAvatar() {
  $("#avatarInput").trigger("click");
}

function chooseAvatar(input) {
  document.getElementById('newAvatar').src = window.URL.createObjectURL(input.files[0]);
  $("#newAvatar").removeClass('d-none');
  $("#currentAvatar").addClass('d-none');
}

function removeImage() {
  $("#avatarInput").val('');
  $("#newAvatar").addClass('d-none');
  $("#currentAvatar").removeClass('d-none');
}