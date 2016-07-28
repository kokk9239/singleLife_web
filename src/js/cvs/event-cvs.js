/**
 * Created by ko on 2016-07-15.
 */
$(document).ready(function () {

    var cvsName = "";

    var pageNo = 1;

    //편의점
    $(".work_area").css("display", "none");

    $("#cvs").on("click", function () {

        $("#honbap_content").html("");
        $("#travel_content").html("");
        $("#youtube_content").html("");
        $("#recipe_content").html("");

        $("#parcelArea").css("display","none");
        $("#resultArea").html("");

        // work_area 편의점 보이게
        $(".work_area").css("display", "block");
        // main_content 혼밥, 1인분레시피,여행
        /*$("#main_content").html("");*/

        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        $("#gsoneplus").click();
        map_module.showMap("GS25");
    });

    $("#gsTab").on("click",function(){
        common_module.moveCvsMenu();
        cvsName = $(this).attr("value");
        map_module.showMap(cvsName);
        $("#gsoneplus").click();
    });
    $("#cuTab").on("click", function () {
        common_module.moveCvsMenu();
        cvsName = $(this).attr("value");
        map_module.showMap(cvsName);
        $("#cuoneplus").click();
    });
    $("#sevenTab").on("click", function () {
        common_module.moveCvsMenu();
        cvsName = $(this).attr("value");
        map_module.showMap(cvsName);
        $("#sevenoneplus").click();
    });


    $("#gsoneplus").on("click", function () {
        pageNo = 1;
        $("#gsportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        cvs_module.showGSPlus1(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                cvs_module.showGSPlus1(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });

    $("#gstwoplus").on("click", function () {
        pageNo = 1;
        $("#gsportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        cvs_module.showGSPlus2(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                cvs_module.showGSPlus2(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });
    $("#gsgift").on("click", function () {
        pageNo = 1;
        $("#gsportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        cvs_module.showGSGift(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                cvs_module.showGSGift(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });
    $("#cuoneplus").on("click", function () {
        pageNo = 1;
        $("#cuportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        cvs_module.showCUPlus1(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                cvs_module.showCUPlus1(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });
    $("#cutwoplus").on("click", function () {
        pageNo = 1;
        $("#cuportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        cvs_module.showCUPlus2(pageNo);
        $(window).unbind('scroll');
        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                cvs_module.showCUPlus2(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });
    $("#cugift").on("click", function () {
        pageNo = 1;
        $("#cuportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        cvs_module.showCUGift(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                cvs_module.showCUGift(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });
    $("#sevenoneplus").on("click", function () {
        pageNo = 1;
        $("#sevenportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        cvs_module.showSEVENPlus1(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                cvs_module.showSEVENPlus1(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });
    $("#seventwoplus").on("click", function () {
        pageNo = 1;
        $("#sevenportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        cvs_module.showSEVENPlus2(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                cvs_module.showSEVENPlus2(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });
    });
    $("#sevengift").on("click", function () {
        pageNo = 1;
        $("#sevenportfoliolist").html("");
        /*$(".work_area").css("display", "block");*/
        $("#main_content").html("");
        $("#portfolioArea").css("display", "none");
        common_module.moveCvsMenu();
        cvs_module.showSEVENGift(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                cvs_module.showSEVENGift(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });
});

$(document).on("mouseenter", "#giftPortfolio", function () {
    $(this).find('.rabel').stop().animate({bottom: 0}, 200, 'easeOutQuad');
     /*$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');*/
    $(this).find("#giftprod").attr('style', 'display:block; height:200px; width:200px');
    $(this).find('#prod').attr('style', 'display:none;height:200px; width:200px');
    $(this).find('#prodName').attr('style','visibility:hidden;height:40px; width:100%');
    /*$(this).find('#prodName').attr('style','display:none;');*/
});

$(document).on("mouseleave", "#giftPortfolio", function () {
    $(this).find('.rabel').stop().animate({bottom: -40}, 200, 'easeInQuad');
     /*$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');*/
    $(this).find("#giftprod").attr('style', 'display:none;height:200px; width:200px');
    $(this).find('#prod').attr('style', 'display:block;height:200px; width:200px');
    $(this).find('#prodName').attr('style','visibility:visible;height:40px; width:100%');
    /*$(this).find('#prodName').attr('style','display:block;');*/
});
