/**
 * Created by ko on 2016-07-12.
 */
$(document).ready(function () {

    // webtoon
    $("#honbap").on("click", function () {

        play_module.showWebtoon();

    });

    // youtube
    $("#youtube").on("click", function () {

        play_module.showYoutube();

    });
});
//youtube 모달 호출
$(document).on("click",".youtubediv",play_module.youtubeModal);
//모달 초기화
$(document).on("click",".modalclose",play_module.clearModal);
