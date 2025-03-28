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