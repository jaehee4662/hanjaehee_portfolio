$("#fullpage").fullpage({
     navigation: true,
     navigationPosition: 'right',
     navigationTooltips: ['INTRO', 'WEB DESIGN', 'GRAPHIC DESIGN', 'VIDEO EDIT', 'ABOUT ME', 'EPILOGUE'],
     showActiveTooltip: true,
     loopBottom: true,
	loopTop: true,
     responsiveWidth: 1400,
});

AOS.init({
     duration: 1500,
});

const gr = new Swiper('.gr', {
     autoplay: {
          delay:3000,
          disableOnInteraction: false,
     },
     speed: 2000,

     scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
     },

     loop: true,
     slidesPerView: 1,
     spaceBetween: 30,

     breakpoints: {
          768: { 
               slidesPerView: 2,
               spaceBetween: 30,
          },
          1200: { 
               slidesPerView: 3,
               spaceBetween: 30,
          },
     }
});