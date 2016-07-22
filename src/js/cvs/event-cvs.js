/**
 * Created by ko on 2016-07-15.
 */
$(document).ready(function () {

    var pageNo = 1;

    //편의점
    $(".work_area").css("display", "none");

    $("#cvs").on("click", function () {
        $(".work_area").css("display", "block");
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveMenu();
        $("#gsoneplus").click();
    });
// 추가하고 있엉


    $("#gsoneplus").on("click", function(){
        pageNo = 1;
        $("#gsportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveMenu();
        cvs_module.showGSPlus1(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function(){
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo +=1;
                cvs_module.showGSPlus1(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });

    $("#gstwoplus").on("click", function(){
        pageNo = 1;
        $("#gsportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveMenu();
        cvs_module.showGSPlus2(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function(){
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo +=1;
                cvs_module.showGSPlus2(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });
});

$(document).on("mouseenter",".portfolio-wrapper",function () {
    $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
    $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
});
$(document).on("mouseleave",".portfolio-wrapper",function () {
    $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
    $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
});
