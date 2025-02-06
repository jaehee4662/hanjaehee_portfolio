//header
$(".depth2, .depth_bg, .search_bg, .mgnb_wrap").hide();

$(".gnb > li").mouseenter(function () {
    $("#header").addClass("active");
    $(".depth_bg").stop().slideDown();
    $(this).children(".depth2").stop().fadeIn();
});

$(".gnb > li").mouseleave(function () {
    $("#header").removeClass("active");
    $(".depth_bg").stop().slideUp(900);
    $(this).children(".depth2").stop().fadeOut();
});


//search
$(".btn_search").click(function(){
    $(".search_bg").slideDown(550);
});

$(".btn_close").click(function(){
    $(".search_bg").slideUp(550);
});


/* mgnb */
$(".btn_menu").click(function(){
    $(".mgnb_wrap").fadeIn();
});

$(".mgnb_close").click(function(){
    $(".mgnb_wrap").fadeOut();
});

$(".mgnb > li").click(function(){
    $(this).find(".mdepth2").stop().slideToggle();
    $(this).siblings().find(".mdepth2").stop().slideUp();
});