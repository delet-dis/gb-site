$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView:4,
    spaceBetween:25,
    loop: true,
    breakpoints:{
      992:{
        slidesPerView:4,
      },
      768:{
        slidesPerView: 2,
      },
      320:{
        slidesPerView:1,
        slidesOffsetAfter:50,
      },
    },
    navigation:{
      nextEl:".button-next",
    },
  })
});