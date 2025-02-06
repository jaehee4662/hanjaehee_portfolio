const mv = new Swiper('.mv', {
     autoplay: {
          delay:5000,
          disableOnInteraction: false,
     },
     speed: 1000,

     pagination: {
          el: ".swiper-pagination",
     },

     loop: true
});

const se = new Swiper('.se', {
     autoplay: {
          delay:5000,
          disableOnInteraction: false,
     },
     speed: 1000,

     scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
     },
     direction: 'horizontal', // 가로 스크롤

     loop: true
});

$(".about ul li:nth-child(1)").addClass("active");
$(".about ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
});