$(function () {
  function menuToggle() {
    const icon = this.children[0];
    if ($('#dropDownMenu').hasClass('hidden')) {
      $(icon).removeClass('bi-list').addClass('bi-x-lg');
      $('#dropDownMenu').removeClass('hidden').addClass('grid grid-cols-2');
    } else {
      $(icon).removeClass('bi-x-lg').addClass('bi-list');
      $('#dropDownMenu').removeClass('grid grid-cols-2').addClass('hidden');
    }
  }

  $('#dropDownBtn').on('click', menuToggle);
});
