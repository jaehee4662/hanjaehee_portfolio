$("#fullpage").fullpage({
     // 1024px 부터 일반적인 스크롤로 처리
     responsiveWidth: 1024,

     //options here
     navigation: true, //false, 기본값
	navigationPosition: 'left', //right, 기본값
	navigationTooltips: ['RIDI BOOKS', 'BUSINESS', 'RIDI STORY', 'NEWS ROOM', 'JOIN US'],
     showActiveTooltip: true, //영역단어 노출 설정 flase, 기본값
     loopBottom: true,
	loopTop: true,
     dragAndMove: true,

     afterLoad: function(origin, destination, direction, trigger){
		if (destination == 1) { 
               $("#header, #fp-nav").removeClass("active");
          } else {
               $("#header, #fp-nav").addClass("active");
          }
           // footer 영역에 도달했을 때 header를 사라지게
          if (destination == 6) {
               $("#header, #fp-nav").fadeOut();
          } else {
               $("#header, #fp-nav").fadeIn()
          }
	},
});

$(".mgnb_wrap").hide();

$(".ham").click(function(){
     $(".mgnb_wrap").fadeIn();
});
 
$(".btn_close").click(function(){
     $(".mgnb_wrap").fadeOut();
});



const st = new Swiper('.st', {
     autoplay: {
          delay:3000,
          disableOnInteraction: false,
     },
     speed: 1000,

     scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
     },

     loop: true,
     slidesPerView: 2,
     spaceBetween: 30,

     breakpoints: {
          768: { 
               slidesPerView: 3,
               spaceBetween: 30,
          },
          1024: { 
               slidesPerView: 4,
               spaceBetween: 30,
          },
     }
});