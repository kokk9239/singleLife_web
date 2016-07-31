/**
 * Created by ko on 2016-07-12.
 */

// $("#allBtn").click();
// $("#monBtn").click();
$(document).ready(function () {
    var pageNo = 1;

    // webtoon

    $("#portfolioArea").css("display", "none");


    $("#watchWebtoon").on("click", function () {

        $("#travel_content").html("");
        $("#youtube_content").html("");
        $("#recipe_content").html("");
        $("#honbap_content").html("");
        $("#game_content").html("");

        $("#parcelArea").css("display","none");
        $("#resultArea").html("");
        $("#prodInfo_content").css("display", "none");
        $(window).unbind('scroll');
        $("#portfolioArea").css("display", "block");
        $("#cvs_content").css("display", "none");
        common_module.moveWebtoonMenu();
        play_module.showWebtoon();
    });

    // youtube
    $("#youtube").on("click", function () {

        $("#travel_content").html("");
        $("#honbap_content").html("");
        $("#recipe_content").html("");
        $("#prodInfo_content").html("");
        $("#game_content").html("");

        pageNo=1;
        $("#cvs_content").css("display", "none");
        $("#parcelArea").css("display","none");

        common_module.moveYoutubeMenu();
        play_module.youtubeTitle();
        play_module.showYoutube(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function(){
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo +=1;
                play_module.showYoutube(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });
        $("#portfolioArea").css("display", "none");
    });
});

//youtube 모달 호출
$(document).on("click",".youtubediv",play_module.youtubeModal);
//모달 초기화
$(document).on("click",".modalclose",play_module.clearModal);

$(document).on("mouseenter",".portfolio-wrapper",function () {
    $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
    $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
});
$(document).on("mouseleave",".portfolio-wrapper",function () {
    $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
    $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
});
