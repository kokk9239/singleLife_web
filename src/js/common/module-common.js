/**
 * Created by ko on 2016-07-13.
 */

var common_module = (function () {

    function moveYoutubeMenu() {
        var position = $(".blog_area").offset();
        $("html, body").animate({scrollTop: position.top-100},500);
    }

    function moveWebtoonMenu() {
        var position = $("#webtoon_content").offset();
        $("html, body").animate({scrollTop: position.top-100},500);
    }
    function moveCvsMenu() {
        var position = $("#cvs_content").offset();
        $("html, body").animate({scrollTop: position.top-100},500);
    }
    function moveProdMenu() {
        var position = $("#prodInfo_content").offset();
        $("html, body").animate({scrollTop: position.top-100},500);
    }
    return{
        moveYoutubeMenu : moveYoutubeMenu,
        moveCvsMenu : moveCvsMenu,
        moveWebtoonMenu : moveWebtoonMenu,
        moveProdMenu : moveProdMenu
    }

})();




