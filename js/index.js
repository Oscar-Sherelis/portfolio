// Hamburger
$('document').ready(function () {
  var trigger = $('#hamburger'),
      isClosed = true;

  trigger.click(function () {
    burgerTime();
  });

  function burgerTime() {
    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
      document.querySelector('nav').style.display = 'none';
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
      document.querySelector('nav').style.display = 'block';
    }
  }

});