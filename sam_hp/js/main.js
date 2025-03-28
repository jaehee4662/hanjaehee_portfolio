// main_visual
const mv = new Swiper('.mv', {
     autoplay: {
          delay:5000,
          disableOnInteraction: false,
     },
     speed: 1500,
     loop: true,
     effect: "fade",
     fadeEffect: {
        crossFade: true
     },

     pagination: {
          el: ".swiper-pagination",
     },
});

const se = new Swiper('.se', {
     autoplay: {
          delay:5000,
          disableOnInteraction: false,
     },
     speed: 1000,

     slidesPerView: 1,
     spaceBetween: 30,
     breakpoints: {
          576: { 
               slidesPerView: 2,
               spaceBetween: 30,
          },
          768: { 
               slidesPerView: 3,
               spaceBetween: 30,
          },
          1024: { 
               slidesPerView: 4,
               spaceBetween: 30,
          },
          1400: { 
               slidesPerView: 5,
               spaceBetween: 30,
          },
      },
 
});

const de = new Swiper('.de', {
     autoplay: {
          delay:5000,
          disableOnInteraction: false,
     },
     speed: 1000,

     loop: true,

     slidesPerView: 2,
     spaceBetween: 30,

     breakpoints: {
          576: { 
               slidesPerView: 3,
               spaceBetween: 30,
          },
          768: { 
               slidesPerView: 4,
               spaceBetween: 30,
          },
          1024: { 
               slidesPerView: 5,
               spaceBetween: 30,
          },
          1400: { 
               slidesPerView: 6,
               spaceBetween: 30,
          },
     },
});

const ne_pic = new Swiper('.ne_pic', {
     autoplay: {
          delay:7000, // ms 2500 = 2.5s
          disableOnInteraction: false,
     },
     speed: 1200,

     pagination: {
          el: ".swiper-pagination",
     },
     loop: true,
});

const ne_txt = new Swiper('.ne_txt', {
     effect: "fade", // 페이드 효과
     fadeEffect: {
          crossFade: true,
     },
     loop: true,
});

ne_pic.controller.control = ne_txt;
ne_txt.controller.control = ne_pic;

$(".about ul li:nth-child(1)").addClass("active");
$(".about ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
});