// 會員登入
$(function () {
    $('#login-show').click(function () {
      $('#login-modal').fadeIn();
    });

    $('.close-modal').click(function () {
      $('#login-modal').fadeOut();
    });
});