const swiper = new Swiper(".swiper", {
  // Optional parameters

  direction: "horizontal",
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    520: {
        slidesPerView: 1,
        spaceBetweenSlides: 50
    },
    
},
calculateHeight:true,
onSlideChangeStart: function(){
  document.querySelector(".swiper li").removeClass('active')
  document.querySelector(".swiper li").eq(tabsSwiper.activeIndex).classList.add('active')  
},  
  autoHeight: true,


});

document.querySelector(Window).onresize(function(){
  var height = document.querySelector(window).height();
  var width  = document.querySelector(window).width();
  document.querySelector('.swiper, .swiper-slide').height(height);
  document.querySelector('.swiper, .swiper-slide').width(width);
  document.querySelector('.swiper-wrapper, .swiper-slide').height(height);
  document.querySelector('.swiper-wrapper, .swiper-slide').width(width);
  //Add reInit, because jQuery's resize event handler may occur earlier than Swiper's one
  swiper.reInit()
})
document.querySelector(Window).onresize();