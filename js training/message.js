$(document).ready(function () {
  $(document).on('submit', '#submitform', function () {
    $('#alert').text('註冊成功').show().fadeOut(1000);
  });
})