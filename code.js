function hamburgerToggle() {
  $('.menu').on('click', function() {
    $(this).toggleClass('change')
    $('.dropdown-content').toggleClass('showMenu')
  })
}
function init() {
  hamburgerToggle();
}
$(init)