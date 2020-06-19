$(document).ready(function () {
  const mMenuButton = $('.m-menu-button');
  const mMenu = $('.m-menu');
  mMenuButton.on('click',function(){
    $(this).toggleClass('open');
    mMenu.toggleClass('active')
    $('body').toggleClass("no-scroll")
  }) 
});
