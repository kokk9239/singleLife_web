/**
 * Created by ko on 2016-07-13.
 */

var common_module = (function () {

    function moveYoutubeMenu() {
        var position = $(".blog_area").offset();
        $("html, body").animate({scrollTop: position.top-100},500);
    }

    function moveWebtoonMenu() {
        var position = $("#category_top").offset();
        $("html, body").animate({scrollTop: position.top-100},500);
    }
    function moveCvsMenu() {
        var position = $(".work_section").offset();
        $("html, body").animate({scrollTop: position.top-100},500);
    }
    return{
        moveYoutubeMenu : moveYoutubeMenu,
        moveCvsMenu : moveCvsMenu,
        moveWebtoonMenu : moveWebtoonMenu
    }

})();




