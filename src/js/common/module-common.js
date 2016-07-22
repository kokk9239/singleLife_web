/**
 * Created by ko on 2016-07-13.
 */

var common_module = (function () {

    function moveMenu() {
        var position = $("#main_content").offset();
        $("html, body").animate({scrollTop: position.top-100},500);
    }
    return{
        moveMenu : moveMenu
    }
    
})();




