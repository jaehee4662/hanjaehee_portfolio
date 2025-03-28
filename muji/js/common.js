$(".depth2, .depth_bg").hide();

$(".gnb > li").mouseenter(function () {
    // 네비게이션 항목의 인덱스를 가져옵니다.
    let index = $(this).index();

    // 4번째(인덱스 3)와 5번째(인덱스 4) 요소는 배경을 제외
    if (index !== 3 && index !== 4) {
        $("#header").addClass("active");
        $(".depth_bg").stop().slideDown();
    }

    $(this).children(".depth2").stop().fadeIn();
});

$(".gnb > li").mouseleave(function () {
    let index = $(this).index();

    if (index !== 3 && index !== 4) {
        $("#header").removeClass("active");
        $(".depth_bg").stop().slideUp(900);
    }

    $(this).children(".depth2").stop().fadeOut();
});
