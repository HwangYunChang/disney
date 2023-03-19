$(document).ready(function(){
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,  //초기값 설정 모바일값이 먼저!!
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,  
          spaceBetween: 20,
        },
        1500: {
          slidesPerView: 4,  
          spaceBetween: 20,
        },
      },
  });

  // btn
  $(".btn").click(function(){
    $(".menu").css("display","block")
})
$(".menu .close").click(function(){
    $(".menu").css("display","none")
})
})